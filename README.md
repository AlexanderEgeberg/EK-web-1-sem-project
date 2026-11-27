# Fullstack eksamensprojekt
Krav: [project.md](PROJECT.md)

TBD

## Get started
### Database
Åbn pgAdmin og opret en database og navngiv den f.eks `festival`
Lav en kopi af filen [.env.example](/backend/.env.example) og navngiv den .env
Åbn din .env fil og udfyld `<DB_VARIABLER>`  i `DATABASE_URL`

### Backend
Fra projekt mappe:
`cd backend`
`npm install`
`npm run db:reset` loader [festival.sql](/database/festival.sql)
Nu er backend + database sat op

`npm run dev` starter serveren med connection til database

### Frontend
TBD



