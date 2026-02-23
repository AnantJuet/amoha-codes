from sqlalchemy import Column, Integer, String
from app.database import Base


class Contact(Base):
    __tablename__ = "contact"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    message = Column(String(500))
