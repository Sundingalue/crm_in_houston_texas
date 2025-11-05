FROM frappe/bench:latest

# Copia los archivos necesarios
COPY . /home/frappe/frappe-bench

WORKDIR /home/frappe/frappe-bench

# Instala dependencias
RUN bench setup requirements

# Expone el puerto
EXPOSE 8000

# Comando para iniciar el servidor
CMD ["bench", "start"]
