FROM python:3.9-slim

# 只装基础依赖，mysqlclient 都不需要了
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt \
    && pip install django-cors-headers djangorestframework djoser markdown2

COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
