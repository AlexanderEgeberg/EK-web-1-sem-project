# Eksamensprojekt – krav


## Teknologi
- Frontend: ReactJS
- Backend: Node.js + Express 
- Database: PostgreSQL

## Applikation minimumskrav

### Database
- Min. 4 større tabeller (ekskl. junction-tabeller)
- one-to-many, many-to-one og many-to-many relationer
- Testdata: >50 realistiske rækker pr. type (hvor det giver mening) – ingen "kunde1, kunde2"

### Backend (Express)
- Forretningsregler håndhævet i backend (fx max 8 lejede film ad gangen)
- Skal kunne håndterer flere frontends samtidig
- Ingen login/roller – kun én side (admin ELLER bruger)
- Ingen baggrundsservices – kun handling når frontend beder om det
- Ikke Hogwarts Course Management System

### Frontend
- 2 frontend instanser skal kunne snakke parallelt med backenden

## Mappestruktur
- `api-test/` – Bruno tests
- `backend/` – nodejs + express
- `database/` – .sql filer
- `docs/` – dokumentation
- `frontend/` – react frontenden

## Dokumentation
**Oversigt**
- Liste over alle gruppemedlemmer – med fulde navn og github brugernavn
- Projektets navn – og en meget kort beskrivelse af projekttypen (fx bookingsystem)
- Screenshot af den kørende frontend.
- Lidt længere beskrivelse af projektets formål og anvendelse – fx typiske brugsscenarier

**Frontend**
- Beskrivelse af hvordan man kan få en lokal udgave af frontenden til at udvikle på – connecte den til backenden, og få den op at køre.
- Oversigt over komponenter – komponenthierarki.
- Wireframes over alle sider / komponenter.

**Backend**
- Beskrivelse af hvordan man kan få en lokal udgave af backenden til at udvikle på – connecte
den til databasen, og få den op at køre.
- Herunder, beskrivelse af hvad .env filen skal indeholde
- Overordnet arkitekturbeskrivelse, mappe-struktur, navngivning, ressource-oversigt
- Pseudokode eller lignende for service-funktioner – ikke standard CRUD-operationer, men
dem der er særlige i applikationen her.
- API-beskrivelse – oversigt over alle endpoints med method og route

**Database**
- Beskrivelse af hvordan man kan få en lokal udgave af databasen til at udvikle på.
- Komplet E/R-diagram (med angivelse af keys, datatyper og størrelser på alle felter i alle
tabeller)