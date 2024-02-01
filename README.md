# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command
# backend-reservas


## Tecnologías Utilizadas

- Node.js
- Express
- TypeORM
- PostgreSQL (o tu base de datos preferida)

# Endpoints API
POST /api/v1/events: Crea un nuevo evento.

GET /api/v1/events: Obtiene la lista de todos los eventos.

GET /api/v1/events/:eventId: Obtiene los detalles de un evento específico.

PUT /api/v1/events/:eventId: Actualiza la información de un evento.

DELETE /api/v1/events/:eventId: Elimina un evento.

POST /api/v1/reservations: Crea una nueva reserva.

GET /api/v1/reservations: Obtiene la lista de todas las reservas.

GET /api/v1/reservations/:reservationId: Obtiene los detalles de una reserva específica.

PUT /api/v1/reservations/:reservationId: Actualiza la información de una reserva.

DELETE /api/v1/reservations/:reservationId: Elimina una reserva.
