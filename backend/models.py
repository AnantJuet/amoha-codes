# # # from sqlalchemy import Column, Integer, String
# # # from database import Base


# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     first_name = Column(String)
#     last_name = Column(String)
#     email = Column(String, unique=True, index=True)
#     hashed_password = Column(String)
#     auth_provider = Column(String, default="local")


# # ## user tracking


# # from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
# # from sqlalchemy.sql import func
# # from database import Base


# # ### user tracking

# # # from sqlalchemy import Boolean, Column, Integer, String
# # # from database import Base

# # class User(Base):
# #     __tablename__ = "users"

# #     id = Column(Integer, primary_key=True, index=True)
# #     first_name = Column(String(50))
# #     last_name = Column(String(50))
# #     email = Column(String(100), unique=True, index=True)
# #     password = Column(String(255))

# # class Contact(Base):
# #     __tablename__ = "contact"

# #     id = Column(Integer, primary_key=True, index=True)
# #     name = Column(String(100))
# #     email = Column(String(100))
# #     message = Column(String(500))


# # ## user tracking


# # from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
# # from sqlalchemy.sql import func
# # from .database import Base

# # # class User(Base):
# # #     __tablename__ = "users"
# # #     id = Column(Integer, primary_key=True, index=True)
# # #     email = Column(String(200), unique=True, index=True)
# # #     first_name = Column(String(100), nullable=True)
# # #     last_name = Column(String(100), nullable=True)
# # #     # password hash etc.

# # class Question(Base):
# #     __tablename__ = "questions"
# #     id = Column(Integer, primary_key=True, index=True)
# #     title = Column(String(255))
# #     description = Column(String(2000), nullable=True)
# #     difficulty = Column(String(50), nullable=True)

# # class UserProgress(Base):
# #     __tablename__ = "user_progress"
# #     id = Column(Integer, primary_key=True, index=True)
# #     user_id = Column(Integer, ForeignKey("users.id"), index=True)
# #     question_id = Column(Integer, index=True)
# #     solved = Column(Boolean, default=False)
# #     solved_at = Column(DateTime, server_default=func.now())


# # ## user tracking----------

# # from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
# # from sqlalchemy.sql import func
# # from database import Base


# # # USER TABLE
# # class User(Base):
# #     __tablename__ = "users"

# #     id = Column(Integer, primary_key=True, index=True)
# #     first_name = Column(String(50))
# #     last_name = Column(String(50))
# #     email = Column(String(100), unique=True, index=True)
# #     password = Column(String(255))


# # # CONTACT TABLE
# # class Contact(Base):
# #     __tablename__ = "contact"

# #     id = Column(Integer, primary_key=True, index=True)
# #     name = Column(String(100))
# #     email = Column(String(100))
# #     message = Column(String(500))


# # # QUESTIONS TABLE


# # # class Question(Base):
# # #     __tablename__ = "questions"

# # #     id = Column(Integer, primary_key=True, index=True)
# # #     title = Column(String(255))
# # #     description = Column(String(2000), nullable=True)
# # #     difficulty = Column(String(50), nullable=True)
# # #     category = Column(String(100))   # ✅ NEW FIELD


# # class Question(Base):
# #     __tablename__ = "questions"

# #     id = Column(Integer, primary_key=True, index=True)
# #     title = Column(String(255))
# #     description = Column(String(2000), nullable=True)
# #     difficulty = Column(String(50), nullable=True)   # Easy/Medium/Hard
# #     section = Column(String(255), nullable=True)     # e.g. "Blind75", "Service-Based Sheet"


# # # USER PROGRESS TABLE
# # class UserProgress(Base):
# #     __tablename__ = "user_progress"

# #     id = Column(Integer, primary_key=True, index=True)
# #     user_id = Column(Integer, ForeignKey("users.id"), index=True)
# #     question_id = Column(Integer, index=True)
# #     section = Column(String(255))   # ✅ NEW
# #     solved = Column(Boolean, default=False)
# #     solved_at = Column(DateTime, server_default=func.now())

# # # CAREER PAGE MODEL
# # class Career(Base):
# #     __tablename__ = "career"

# #     id = Column(Integer, primary_key=True, index=True)
# #     full_name = Column(String(255))
# #     email = Column(String(255))
# #     stream = Column(String(255))
# #     resume = Column(String(255))   # resume file path


# # # models.py
# # from sqlalchemy import Column, Integer, String, Boolean, DateTime
# # import datetime

# # class Consent(Base):
# #     __tablename__ = "consents"

# #     id = Column(Integer, primary_key=True, index=True)
# #     user_id = Column(Integer, nullable=True)  # user logged in? then store id
# #     accepted = Column(Boolean, default=False)
# #     created_at = Column(DateTime, default=datetime.datetime.utcnow)


# # class Progress(Base):
# #     __tablename__ = "progress"

# #     id = Column(Integer, primary_key=True, index=True)
# #     user_id = Column(Integer, ForeignKey("users.id"))
# #     course_id = Column(Integer)
# #     completed = Column(Boolean, default=False)
# #     percentage = Column(Integer, default=0)

# from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
# from sqlalchemy.sql import func
# from database import Base
# import datetime


# # ==========================
# # USER TABLE
# # ==========================
# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     first_name = Column(String(50))
#     last_name = Column(String(50))
#     email = Column(String(100), unique=True, index=True)
#     password = Column(String(255))


# # ==========================
# # CONTACT FORM
# # ==========================
# class Contact(Base):
#     __tablename__ = "contact"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String(100))
#     email = Column(String(100))
#     message = Column(String(500))


# # ==========================
# # QUESTIONS TABLE
# # ==========================
# class Question(Base):
#     __tablename__ = "questions"

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String(255))
#     description = Column(String(2000), nullable=True)
#     difficulty = Column(String(50), nullable=True)
#     section = Column(String(255), nullable=True)     # Blind75 / Service-Based etc.


# # ==========================
# # USER PROGRESS
# # ==========================
# # class UserProgress(Base):
# #     __tablename__ = "user_progress"

# #     id = Column(Integer, primary_key=True, index=True)
# #     user_id = Column(Integer, ForeignKey("users.id"), index=True)
# #     question_id = Column(Integer, index=True)
# #     section = Column(String(255))
# #     solved = Column(Boolean, default=False)
# #     solved_at = Column(DateTime, server_default=func.now())


# # ==========================
# # CAREER FORM
# # ==========================
# class Career(Base):
#     __tablename__ = "career"

#     id = Column(Integer, primary_key=True, index=True)
#     full_name = Column(String(255))
#     email = Column(String(255))
#     stream = Column(String(255))
#     resume = Column(String(255))   # file path


# # ==========================
# # COOKIE CONSENT
# # ==========================
# class Consent(Base):
#     __tablename__ = "consents"

#     id = Column(Integer, primary_key=True, index=True)
#     user_id = Column(Integer, nullable=True)
#     accepted = Column(Boolean, default=False)
#     created_at = Column(DateTime, default=datetime.datetime.utcnow)


# # ==========================
# # NEW PROGRESS MODEL (Fix)
# # ==========================
# class Progress(Base):
#     __tablename__ = "progress"

#     id = Column(Integer, primary_key=True, index=True)
#     user_id = Column(Integer, ForeignKey("users.id"))
#     course_id = Column(Integer)
#     completed = Column(Boolean, default=False)
#     percentage = Column(Integer, default=0)

# #### NEW PROGRESS

# class Sheet(Base):
#     __tablename__ = "sheets"
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String(255))
#     total_questions = Column(Integer)


# class SheetQuestion(Base):
#     __tablename__ = "sheet_questions"
#     id = Column(Integer, primary_key=True, index=True)
#     sheet_id = Column(Integer, ForeignKey("sheets.id"))
#     question_name = Column(String(255))


# class UserProgress(Base):
#     __tablename__ = "user_progress"
#     id = Column(Integer, primary_key=True)
#     user_id = Column(Integer, ForeignKey("users.id"))
#     sheet_id = Column(Integer, ForeignKey("sheets.id"))
#     question_id = Column(Integer, ForeignKey("sheet_questions.id"))
#     status = Column(String(20), default="done")


#### NEW PROGRESS


from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.sql import func
from database import Base
import datetime
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from datetime import datetime, timezone


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100))
    last_name = Column(String(100))
    email = Column(String(150), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    auth_provider = Column(String(50), default="local")

# ==========================
# CONTACT FORM
# ==========================
class Contact(Base):
    __tablename__ = "contact"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    message = Column(String(500))



# ==========================
# CAREER FORM
# ==========================
class Career(Base):
    __tablename__ = "career"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255))
    email = Column(String(255))
    stream = Column(String(255))
    resume = Column(String(255))




class UserQuestionProgress(Base):
    __tablename__ = "user_question_progress"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    question_id = Column(String(50), nullable=False)
    title = Column(String(255))
    category = Column(String(100))
    difficulty = Column(String(50))
    company = Column(String(100))

    sheet_name = Column(String(100), nullable=False)

    created_at = Column(
        DateTime,
        default=lambda: datetime.now(timezone.utc)
    )

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "question_id",
            "sheet_name",
            name="uniq_user_question"
        ),
    )




