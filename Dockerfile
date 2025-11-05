# Usa una imagen base oficial de Python
FROM python:3.11-slim

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Establece el directorio de trabajo
WORKDIR /app

# Copia todo el contenido al contenedor
COPY . .

# Instala dependencias de Python si existe requirements.txt
RUN if [ -f requirements.txt ]; then pip install -r requirements.txt; fi

# Expone el puerto que usará el servidor
EXPOSE 8000

# Comando de inicio (puedes cambiar esto según el framework que uses)
CMD ["python", "-m", "http.server", "8000"]
