# Rytmi API for Codento Management System

## Background

## Installation

## Usage

## Development

### Database

Use the Postgres Docker image:

```
docker run -d --name rytmi-dev-db -p 5432:5432 -e POSTGRES_DB=rytmi -e POSTGRES_PASSWORD=rytmi -e POSTGRES_USER=rytmi postgres:10.1
```

### Environment variables

Create a .env file in the project root directory. Example for the aforementioned dev database:

```
DB_HOST=localhost
DB_USER=rytmi
DB_PASSWORD=rytmi
DB_NAME=rytmi
```

### Doc generation

API documentation is generated from YAML file at doc/openapi-spec.yaml. This is first converted into JSON, for example with yaml2json tool found at https://github.com/bronze1man/yaml2json .

After conversion, documentation is easily generated with Spectacle.

```
npm run create-html-doc
```
