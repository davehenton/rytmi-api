# Rytmi API for Codento Management System

## Background

## Installation

## Usage

## Development

### Development database

Use the Postgres Docker image:

```
docker run -d --name rytmi-dev-db -p 5432:5432 -e POSTGRES_DB=rytmi -e POSTGRES_PASSWORD=rytmi -e POSTGRES_USER=rytmi postgres:10.1
```

### Setting environment variables

Create a `.env` file in the project root directory. Example using the aforementioned dev database:

```
DB_HOST=localhost
DB_USER=rytmi
DB_PASSWORD=rytmi
DB_NAME=rytmi
```

### Setting up the database / migrating to the latest version

For migrations you must have Knex installed globally:

```
npm install knex -g
```

Migrate to latest version:

```
knex migrate:latest
```

### Making changes to the database

Create a new migration script:

```
knex migrate:make migration_name_here
```

This will create a new script under the `migrations` folder. Make your changes to the tables in the `up` function. The `down` function is used for rollbacks, it should undo the `up` function.

### Doc generation

API documentation is generated from YAML file at doc/openapi-spec.yaml. This is first converted into JSON, for example with yaml2json tool found at https://github.com/bronze1man/yaml2json .

After conversion, documentation is easily generated with Spectacle.

```
npm run create-html-doc
```
