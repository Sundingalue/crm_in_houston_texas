from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"mensaje": "🚀 CRM In Houston Texas funcionando correctamente"}
