# 🐤Galapagos

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

Inspect and optimize roadmaps with evolution principles.

## Features

- 📦 Import your roadmap and visualize it
- ⏳ Coming Soon...

## Local installation

### Prerequisites

🐳 Docker is running

You can run the project on your local machine following these steps:

```shell
git clone ...
cd project
npm install
supabase start
```

Write the supabase environment variables in a .env file in `apps/web/` and write the corresponding value given after
running the last command:

```shell
VITE_SUPABASE_URL=<API URL>
VITE_SUPABASE_ANON_KEY=<anon key>
```

Run the front app:

```shell
npm run dev
```

Galapagos is now running on localhost:3000, have fun!

## Local development

### Migrations

Migrations are generated from declarative schemas using diff
analysis ([Supabase doc](https://supabase.com/docs/guides/local-development/declarative-database-schemas)).

1. Create (or modify) a schema in `supabase/schemas/<table>.sql`
2. Generate the migration file using a relevant name (in snake case):

```shell
supabase db diff -f <migration_file_name>
```

3. Apply the migration using the binary (using the binary ensures the database types are updated):

```shell
supabase migration up
```
