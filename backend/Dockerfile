# Use the Python 3.9 image
FROM python:3.9

# Setup work folder
WORKDIR /app
ADD requirements.txt /app/

# Change work folder
#RUN mkdir /app
#WORKDIR /app

# Install Python dependency
RUN pip install virtualenv
RUN virtualenv venv
#RUN source venv/bin/activate
RUN . venv/bin/activate
RUN pip install django-debug-toolbar==3.2.2
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --upgrade pip
RUN pip install mysqlclient
RUN pip install django-cors-headers
RUN pip install djangorestframework
RUN pip python3-mysqlclient
RUN pip install MySQL-python
#RUN pip install default-mysql-client
RUN pip3 install markdown2
#RUN pip install django-sslserver
#RUN apt-get update && apt-get install -y nginx

# Copy to backend folder
COPY . /app/
#COPY ./encyclopedia0/static /app/django_project/static
COPY ./encyclopedia/static/* /app/django_project/static/
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
#COPY nginx/ssl/fullchain.pem /etc/nginx/ssl/fullchain.pem
#COPY nginx/ssl/privkey.pem /etc/nginx/ssl/privkey.pem

# Run application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD python manage.py runsslserver 0.0.0.0:8000

