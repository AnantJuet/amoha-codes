# from pydantic import BaseModel, EmailStr
# from typing import Optional


# class UserCreate(BaseModel):
#  email: EmailStr
#  password: str
#  first_name: Optional[str] = None
#  last_name: Optional[str] = None


# class UserOut(BaseModel):
#  id: int
#  email: EmailStr
#  first_name: Optional[str]
#  last_name: Optional[str]
#  auth_provider: str


# class Config:
#  orm_mode = True


# class Token(BaseModel):
#  access_token: str
#  token_type: str


# class TokenData(BaseModel):
#  email: Optional[str] = None



from pydantic import BaseModel, EmailStr


class ProgressCreate(BaseModel):
    question_id: int
    difficulty: str
    category: str


class RegisterSchema(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str

class LoginSchema(BaseModel):
    email: EmailStr
    password: str


class ContactCreate(BaseModel):
    name: str
    email: str
    message: str


class QuestionProgressSchema(BaseModel):
    question_id: str
    title: str | None = None
    category: str | None = None
    difficulty: str | None = None
    company: str | None = None
    sheet_name: str
    checked: bool

    class Config:
        from_attributes = True

# class QuestionCheckRequest(BaseModel):
#     question_id: int


# class QuestionCheckRequest(BaseModel):
#     question_id: int
#     sheet_name: str = "programming-lang"






