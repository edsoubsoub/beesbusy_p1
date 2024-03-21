FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY ./backend/requirements.txt /app/

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

COPY ./backend /app/