from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, UniqueConstraint
from datetime import datetime, timezone
from app.database import Base


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
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "question_id",
            "sheet_name",
            name="uniq_user_question"
        ),
    )
