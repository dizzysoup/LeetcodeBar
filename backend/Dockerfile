FROM python:3.12

COPY ./backend/docker-entrypoint.sh /usr/local/bin/

WORKDIR /web
COPY . .
RUN pip install --upgrade pip
RUN pip install -r ./backend/requirements.txt

CMD python manage.py runserver 0.0.0.0:8000