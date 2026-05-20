---
title: Arize Phoenix
description: Phoenix is an open-source AI observability platform designed for experimentation, evaluation, and troubleshooting.
---


```yaml
services:
  phoenix:
    image: 'arizephoenix/phoenix:latest'
    depends_on:
      db:
        condition: service_healthy
    ports:
      - '4317:4317'
      - '6006:6006'
      - '9090:9090'
    environment:
      - 'PHOENIX_SQL_DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@db:5432/${DB_NAME}'
      - PHOENIX_ENABLE_AUTH=True
      - 'PHOENIX_SECRET=${PHOENIX_JWT_SECRET}'
      - 'PHOENIX_DEFAULT_ADMIN_INITIAL_PASSWORD=${PHOENIX_ADMIN_PASSWORD}'
  db:
    image: 'postgres:16-alpine'
    restart: always
    environment:
      - 'POSTGRES_USER=${DB_USER}'
      - 'POSTGRES_PASSWORD=${DB_PASSWORD}'
      - 'POSTGRES_DB=${DB_NAME}'
    volumes:
      - 'database_data:/var/lib/postgresql/data'
    healthcheck:
      test:
        - CMD-SHELL
        - 'pg_isready -U ${DB_USER} -d ${DB_NAME}'
      interval: 5s
      timeout: 5s
      retries: 5
volumes:
  database_data:
    driver: local
```
