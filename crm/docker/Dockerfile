# Dockerfile

FROM frappe/bench:latest

# Establece directorio de trabajo
WORKDIR /home/frappe

# Crea el entorno de trabajo
RUN bench init frappe-bench --frappe-branch version-14 \
    && cd frappe-bench \
    && bench new-site crm.local --mariadb-root-password admin --admin-password Admin123! --no-mariadb-socket \
    && bench get-app erpnext --branch version-14 \
    && bench --site crm.local install-app erpnext

# Expone el puerto para producción
EXPOSE 8000

# Comando de arranque (puedes cambiar a "bench start" si quieres modo desarrollo)
CMD ["bench", "start"]
