from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.core.security import get_current_user
from app.models.user import User
from app.models.progress import UserQuestionProgress
from app.schemas.progress import QuestionProgressSchema

router = APIRouter()


@router.post("/question/check")
def check_uncheck_question(
    data: QuestionProgressSchema,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing = db.query(UserQuestionProgress).filter(
        UserQuestionProgress.user_id == current_user.id,
        UserQuestionProgress.question_id == data.question_id,
        UserQuestionProgress.sheet_name == data.sheet_name
    ).first()

    # UNTICK -> DELETE
    if data.checked is False:
        if existing:
            db.delete(existing)
            db.commit()
        return {"message": "Unchecked successfully"}

    # TICK -> INSERT
    if not existing:
        progress = UserQuestionProgress(
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


@router.get("/question/status")
def get_checked_questions(
    sheet: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    rows = db.query(UserQuestionProgress.question_id).filter(
        UserQuestionProgress.user_id == current_user.id,
        UserQuestionProgress.sheet_name == sheet
    ).all()

    return [r.question_id for r in rows]


@router.get("/profile/progress")
def profile_progress(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Define all sheets with their total questions and difficulty breakdown
    # Format: {sheet_name: {"total": X, "easy": Y, "medium": Z, "hard": W}}
    sheets_config = {
        "ProductBasedDSA": {"total": 425, "easy": 93, "medium": 162, "hard": 170},
        "Blind75": {"total": 75, "easy": 20, "medium": 48, "hard": 7},
        "ServiceBasedDSA Sheet": {"total": 240, "easy": 100, "medium": 120, "hard": 20},
        "ServiceBasedPatternDSA Sheet": {"total": 80, "easy": 30, "medium": 35, "hard": 15},
        "All in one DSA Sheet": {"total": 747, "easy": 200, "medium": 350, "hard": 197},
        "Algorithm": {"total": 166, "easy": 50, "medium": 80, "hard": 36},
        "ProgrammingLang": {"total": 24, "easy": 24, "medium": 0, "hard": 0},
        "BasicStandardProblemSolving": {"total": 115, "easy": 75, "medium": 35, "hard": 5},
        "CompetitiveProgramming": {"total": 372, "easy": 93, "medium": 155, "hard": 124},
    }

    # Get solved counts per sheet
    solved_data = db.query(
        UserQuestionProgress.sheet_name,
        func.count().label("solved")
    ).filter(
        UserQuestionProgress.user_id == current_user.id
    ).group_by(UserQuestionProgress.sheet_name).all()

    # Create a dict for easy lookup
    solved_dict = {row.sheet_name: row.solved for row in solved_data}

    # Get difficulty breakdown per sheet
    difficulty_data = db.query(
        UserQuestionProgress.sheet_name,
        UserQuestionProgress.difficulty,
        func.count().label("count")
    ).filter(
        UserQuestionProgress.user_id == current_user.id
    ).group_by(
        UserQuestionProgress.sheet_name,
        UserQuestionProgress.difficulty
    ).all()

    # Create nested dict for difficulty lookup
    difficulty_dict = {}
    for row in difficulty_data:
        if row.sheet_name not in difficulty_dict:
            difficulty_dict[row.sheet_name] = {}
        difficulty_dict[row.sheet_name][row.difficulty] = row.count

    # Build response with all sheets
    sections = []
    for sheet_name, config in sheets_config.items():
        total = config["total"]
        solved = solved_dict.get(sheet_name, 0)
        sheet_difficulty = difficulty_dict.get(sheet_name, {})

        section = {
            "title": sheet_name,
            "done": f"{solved}/{total}",
            "solved": solved,
            "total": total,
            "percent": round((solved / total) * 100) if total > 0 else 0,
        }

        # Add difficulty breakdown if available
        if config.get("easy", 0) > 0 or config.get("medium", 0) > 0 or config.get("hard", 0) > 0:
            easy_solved = sheet_difficulty.get("Easy", 0)
            medium_solved = sheet_difficulty.get("Medium", 0)
            hard_solved = sheet_difficulty.get("Hard", 0)
            section["easy"] = f"{easy_solved}/{config.get('easy', 0)}"
            section["medium"] = f"{medium_solved}/{config.get('medium', 0)}"
            section["hard"] = f"{hard_solved}/{config.get('hard', 0)}"
            section["easy_total"] = config.get("easy", 0)
            section["medium_total"] = config.get("medium", 0)
            section["hard_total"] = config.get("hard", 0)
            section["easy_solved"] = easy_solved
            section["medium_solved"] = medium_solved
            section["hard_solved"] = hard_solved

        sections.append(section)

    return {"sections": sections}
