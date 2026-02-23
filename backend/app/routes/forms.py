import os
import shutil
from fastapi import APIRouter, Depends, File, Form, UploadFile
from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.models.contact import Contact
from app.models.career import Career
from app.schemas.contact import ContactCreate

router = APIRouter()


@router.post("/contact")
def create_contact(data: ContactCreate, db: Session = Depends(get_db)):
    new_message = Contact(
        name=data.name,
        email=data.email,
        message=data.message
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return {"success": True, "message": "Contact message saved successfully!"}


@router.post("/career/submit")
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
    new_entry = Career(
        full_name=full_name,
        email=email,
        stream=stream,
        resume=file_path or ""
    )

    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)

    return {"success": True, "message": "Career form submitted successfully!"}
