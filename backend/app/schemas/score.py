from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ScoreBase(BaseModel):
    title: str
    composer: Optional[str] = None
    description: Optional[str] = None

class ScoreCreate(ScoreBase):
    content: str  # MusicXML content

class ScoreInDB(ScoreBase):
    id: str
    content: str
    created_at: datetime
    updated_at: datetime

class Score(ScoreBase):
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 