from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import os

app = FastAPI(title="AI Event Management - AI Service")

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434/api/generate")

class DescriptionRequest(BaseModel):
    title: str
    tags: list[str] = []

@app.get("/")
async def root():
    return {"message": "AI Service is up and running!"}

@app.post("/generate-description")
async def generate_description(req: DescriptionRequest):
    prompt = f"Generate a professional and exciting event description for a college event titled '{req.title}'. Keep it under 150 words. Tags: {', '.join(req.tags)}"
    
    try:
        response = requests.post(OLLAMA_URL, json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        }, timeout=30)
        
        if response.status_code == 200:
            return {"description": response.json().get("response")}
        else:
            return {"description": f"Failed to generate description via Ollama. Status: {response.status_code}. Using fallback: Join us for this amazing {req.title} event!"}
            
    except Exception as e:
        return {"description": f"Ollama not available. Fallback: An exciting workshop on {req.title} for all students."}

@app.post("/predict-attendance")
async def predict_attendance(event_data: dict):
    # This will be replaced with a real ML model later
    return {"predicted_count": 150, "confidence": 0.85}

@app.post("/recommendations")
async def get_recommendations(user_data: dict):
    # This will be replaced with a real recommendation algorithm later
    return {"recommended_event_ids": []}
