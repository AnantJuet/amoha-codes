# from sqlalchemy.orm import Session
# import models

# def get_user_by_email(db: Session, email: str):
#     return db.query(models.User).filter(models.User.email == email).first()

# def create_user(db: Session, user):
#     db_user = models.User(
#         first_name=user.first_name,
#         last_name=user.last_name,
#         email=user.email,
#         password=user.password
#     )
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


from sqlalchemy.orm import Session
from passlib.context import CryptContext
import models, schemas

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = pwd_context.hash(user.password)
    db_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        password=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user



######## user tracking

# from sqlalchemy.orm import Session
# import models

# def get_progress_by_user(db: Session, user_id: int):
#     return db.query(models.UserProgress).filter(models.UserProgress.user_id == user_id, models.UserProgress.solved == True).all()

# def mark_question_solved(db: Session, user_id: int, question_id: int):
#     rec = db.query(models.UserProgress).filter(
#         models.UserProgress.user_id == user_id,
#         models.UserProgress.question_id == question_id
#     ).first()
#     if rec:
#         rec.solved = True
#     else:
#         rec = models.UserProgress(user_id=user_id, question_id=question_id, solved=True)
#         db.add(rec)
#     db.commit()
#     db.refresh(rec)
#     return rec

# def get_questions(db: Session):
#     return db.query(models.Question).all()

######## user tracking

# def get_progress_by_user(db: Session, user_id: int):
#     return db.query(models.UserProgress).filter(
#         models.UserProgress.user_id == user_id,
#         models.UserProgress.status == "done"
#     ).all()


# def mark_question_solved(db: Session, user_id: int, question_id: int):
#     rec = db.query(models.UserProgress).filter(
#         models.UserProgress.user_id == user_id,
#         models.UserProgress.question_id == question_id
#     ).first()

#     if rec:
#         # toggle status
#         rec.status = "done" if rec.status != "done" else "unsolved"
#     else:
#         rec = models.UserProgress(
#             user_id=user_id,
#             question_id=question_id,
#             status="done"   # <-- correct field
#         )
#         db.add(rec)

#     db.commit()
#     db.refresh(rec)
#     return rec


# def get_questions(db: Session):
#     return db.query(models.Question).all()


# ######## user tracking