# Fullstack eksamensprojekt

Krav: [project.md](PROJECT.md)

## Get started

### Database

1. Åbn pgAdmin og opret en database og navngiv den f.eks `festival`.
2. Lav en kopi af filen [.env.example](/backend/.env.example) og navngiv den .env
3. Åbn din .env fil og udfyld `<DB_VARIABLER>` i `DATABASE_URL`

### Backend

Fra projekt mappe:
```sh
cd backend
npm install
npm run db:reset   # loader database/festival.sql
```
Nu er backend + database sat op.

`npm run dev` starter serveren med connection til database.

### Frontend

TBD
