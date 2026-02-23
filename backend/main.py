# main.py
import os
from datetime import datetime, timedelta
from pydantic import BaseModel

from fastapi import FastAPI, Depends, HTTPException, Request, Response, status
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func
from starlette.middleware.sessions import SessionMiddleware
from sqlalchemy.orm import Session
from authlib.integrations.starlette_client import OAuth
import traceback

import database
import models
import schemas
from utils import hash_password, verify_password

from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from sqlalchemy.orm import Session
from datetime import timedelta
from auth import create_access_token

from models import User, UserQuestionProgress
from schemas import ProgressCreate
from datetime import timedelta
from auth import SECRET_KEY, ALGORITHM


ACCESS_TOKEN_EXPIRE_MINUTES = 60

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# -----------------------
# DB / App setup
# -----------------------
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# Session middleware (used by authlib OAuth)
app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("SESSION_SECRET", "super-secret-session-key"),
    same_site="lax",
)

# CORS - allow credentials so cookie is sent from browser
# Get allowed origins from environment variable or use defaults
FRONTEND_URL = os.getenv("FRONTEND_URL", "")
allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
]

# Add production frontend URL if configured
if FRONTEND_URL:
    allowed_origins.append(FRONTEND_URL)
    # Also add without trailing slash and with https
    if FRONTEND_URL.endswith("/"):
        allowed_origins.append(FRONTEND_URL.rstrip("/"))
    if FRONTEND_URL.startswith("http://"):
        allowed_origins.append(FRONTEND_URL.replace("http://", "https://"))

# Add any additional origins from CORS_ORIGINS env var (comma-separated)
extra_origins = os.getenv("CORS_ORIGINS", "")
if extra_origins:
    allowed_origins.extend([origin.strip() for origin in extra_origins.split(",")])

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# OAuth config
oauth = OAuth()

google = oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID", ""),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET", ""),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
    redirect_uri=os.getenv("GOOGLE_REDIRECT_URI", "http://localhost:8000/auth/google/callback"),
)

facebook = oauth.register(
    name="facebook",
    client_id=os.getenv("FACEBOOK_CLIENT_ID", ""),
    client_secret=os.getenv("FACEBOOK_CLIENT_SECRET", ""),
    access_token_url="https://graph.facebook.com/oauth/access_token",
    authorize_url="https://www.facebook.com/dialog/oauth",
    api_base_url="https://graph.facebook.com/",
    client_kwargs={"scope": "email"},
    redirect_uri=os.getenv("FACEBOOK_REDIRECT_URI", "http://localhost:8000/auth/facebook"),
)


# Dependency to get DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_user(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")

        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")

    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.email == email).first()

    if user is None:
        raise HTTPException(status_code=401, detail="User not found")

    return user


@app.get("/")
def read_root():
    return {"message": "FastAPI is working"}


# ================= REGISTER =================
@app.post("/register")
def register(user: schemas.RegisterSchema, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        hashed_password=hash_password(user.password),
        auth_provider="local"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # Create access token for automatic login after registration
    access_token = create_access_token(data={"sub": new_user.email})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": new_user.id,
            "email": new_user.email,
            "first_name": new_user.first_name,
            "last_name": new_user.last_name
        }
    }


def authenticate_user(db: Session, email: str, password: str):
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        return None

    if not verify_password(password, user.hashed_password):
        return None

    return user


@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": user.email})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name
        }
    }


@app.get("/me")
def get_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "first_name": current_user.first_name,
        "last_name": current_user.last_name
    }


@app.post("/contact")
def create_contact(data: schemas.ContactCreate, db: Session = Depends(get_db)):
    new_message = models.Contact(
        name=data.name,
        email=data.email,
        message=data.message
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return {"success": True, "message": "Contact message saved successfully!"}


# ================= QUESTION PROGRESS =================
@app.post("/question/check")
def check_uncheck_question(
    data: schemas.QuestionProgressSchema,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    existing = db.query(models.UserQuestionProgress).filter(
        models.UserQuestionProgress.user_id == current_user.id,
        models.UserQuestionProgress.question_id == data.question_id,
        models.UserQuestionProgress.sheet_name == data.sheet_name
    ).first()

    # UNTICK -> DELETE
    if data.checked is False:
        if existing:
            db.delete(existing)
            db.commit()
        return {"message": "Unchecked successfully"}

    # TICK -> INSERT
    if not existing:
        progress = models.UserQuestionProgress(
            user_id=current_user.id,
            question_id=data.question_id,
            title=data.title,
            category=data.category,
            difficulty=data.difficulty,
            company=data.company,
            sheet_name=data.sheet_name
        )
        db.add(progress)
        db.commit()

    return {"message": "Checked successfully"}


@app.get("/question/status")
def get_checked_questions(
    sheet: str,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    rows = db.query(models.UserQuestionProgress.question_id).filter(
        models.UserQuestionProgress.user_id == current_user.id,
        models.UserQuestionProgress.sheet_name == sheet
    ).all()

    return [r.question_id for r in rows]


@app.get("/profile/progress")
def profile_progress(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    # Define all sheets with their total questions
    sheets_config = {
        "DSA Sheet": 425,
        "Blind75": 75,
        "ServiceBasedDSA Sheet": 240,
        "ServiceBasedPatternDSA Sheet": 80,
        "All in one DSA Sheet": 747,
        "Algorithm": 166,
    }

    # Get solved counts per sheet
    solved_data = db.query(
        models.UserQuestionProgress.sheet_name,
        func.count().label("solved")
    ).filter(
        models.UserQuestionProgress.user_id == current_user.id
    ).group_by(models.UserQuestionProgress.sheet_name).all()

    # Create a dict for easy lookup
    solved_dict = {row.sheet_name: row.solved for row in solved_data}

    # Build response with all sheets
    sections = []
    for sheet_name, total in sheets_config.items():
        solved = solved_dict.get(sheet_name, 0)
        sections.append({
            "title": sheet_name,
            "done": f"{solved}/{total}",
            "solved": solved,
            "total": total
        })

    return {"sections": sections}


# ================= CAREER FORM =================
from fastapi import File, UploadFile, Form
import shutil

@app.post("/career/submit")
async def submit_career_form(
    full_name: str = Form(...),
    email: str = Form(...),
    stream: str = Form(...),
    resume: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    # Save Resume to Folder if provided
    file_path = None
    if resume:
        uploads_folder = "uploads/resumes"
        os.makedirs(uploads_folder, exist_ok=True)
        file_path = f"{uploads_folder}/{resume.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(resume.file, buffer)

    # Save Data to Database
    new_entry = models.Career(
        full_name=full_name,
        email=email,
        stream=stream,
        resume=file_path or ""
    )

    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)

    return {"success": True, "message": "Career form submitted successfully!"}
