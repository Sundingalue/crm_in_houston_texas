from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "CRM In Houston Texas funcionando ✅"}

