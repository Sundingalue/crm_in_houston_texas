from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "CRM In Houston Texas está funcionando 🚀"}
