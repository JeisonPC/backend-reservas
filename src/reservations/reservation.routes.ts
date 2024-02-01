// src/routes/reservation.routes.ts
import { Router } from 'express';
import { ReservationController } from './reservation.controller';
import { ReservationRepository } from './reservation.repository';

const router = Router();

const controller = new ReservationController(new ReservationRepository());

router.post('/reservations', controller.create.bind(controller));
router.get('/reservations', controller.getAll.bind(controller));
router.get('/reservations/:reservationId', controller.getById.bind(controller));
router.put('/reservations/:reservationId', controller.update.bind(controller));
router.delete('/reservations/:reservationId', controller.remove.bind(controller));

export default router;
