# MuseVision Backend

This is the FastAPI backend for the MuseVision music score reader application.

## Setup and Installation

1. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

Start the development server:
```
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Documentation

- Interactive API documentation (Swagger UI): `http://localhost:8000/docs`
- Alternative API documentation (ReDoc): `http://localhost:8000/redoc`
- OpenAPI schema: `http://localhost:8000/openapi.json`

## Project Structure

- `app/`: Main application package
  - `api/`: API routers and endpoints
  - `core/`: Core application logic and configuration
  - `schemas/`: Pydantic schemas for data validation
- `main.py`: Entry point for running the application 