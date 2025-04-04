from fastapi import APIRouter, HTTPException, status
from typing import List

from app.schemas.score import Score, ScoreCreate

router = APIRouter()

# This is just a placeholder that will return dummy data
# In future weeks we'll connect this to a database
@router.get("/", response_model=List[Score])
async def get_scores():
    """
    Retrieve all scores (placeholder).
    """
    return []

@router.get("/{score_id}", response_model=Score)
async def get_score(score_id: str):
    """
    Retrieve a specific score by ID (placeholder).
    """
    # This is a placeholder for future implementation
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Score with ID {score_id} not found"
    )

@router.post("/", response_model=Score, status_code=status.HTTP_201_CREATED)
async def create_score(score: ScoreCreate):
    """
    Create a new score (placeholder).
    """
    # This is a placeholder for future implementation
    return {
        "id": "temp-id",
        "title": score.title,
        "composer": score.composer,
        "description": score.description,
        "created_at": "2023-01-01T00:00:00",
        "updated_at": "2023-01-01T00:00:00"
    } 