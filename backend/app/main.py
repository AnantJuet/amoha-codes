from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from app.config import settings
from app.database import engine
from app.models import Base
from app.routes import auth, users, questions, forms

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Amoha API")

# Session middleware (used by authlib OAuth)
app.add_middleware(
    SessionMiddleware,
    secret_key=settings.SESSION_SECRET,
    same_site="lax",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, tags=["auth"])
app.include_router(users.router, tags=["users"])
app.include_router(questions.router, tags=["questions"])
app.include_router(forms.router, tags=["forms"])


@app.get("/")
def health_check():
    return {"status": "ok", "message": "Amoha API is running"}
