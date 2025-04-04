from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.api import api_router

def create_app() -> FastAPI:
    app = FastAPI(
        title="MuseVision API",
        description="API for the MuseVision music score reader",
        version="0.1.0",
    )

    # Add CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  # Frontend URL
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include API router
    app.include_router(api_router, prefix="/api")

    @app.get("/", tags=["root"])
    async def root():
        return {
            "message": "Welcome to MuseVision API",
            "version": "0.1.0",
            "docs_url": "/docs",
        }

    @app.get("/healthcheck", tags=["health"])
    async def healthcheck():
        return {"status": "ok"}

    return app

app = create_app() 