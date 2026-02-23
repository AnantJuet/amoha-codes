from pydantic import BaseModel


class ProgressCreate(BaseModel):
    question_id: int
    difficulty: str
    category: str


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
