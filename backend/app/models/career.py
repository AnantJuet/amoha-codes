from sqlalchemy import Column, Integer, String
from app.database import Base


class Career(Base):
    __tablename__ = "career"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255))
    email = Column(String(255))
    stream = Column(String(255))
    resume = Column(String(255))
