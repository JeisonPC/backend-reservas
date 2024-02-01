// src/controllers/reservation.controller.ts
import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations";
import { Reservation } from "../entity/Reservation";

export class ReservationController {
  constructor(private repository: DatabaseRepository<Reservation>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;

      const reservation = await this.repository.create(body);

      res.status(200).json(reservation);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const reservations = await this.repository.getAll();
      res.status(200).json(reservations);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { reservationId } = req.params;

      const reservation = await this.repository.getById(reservationId);

      res.status(200).json(reservation);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { reservationId } = req.params;

      const body = req.body;
      const reservation = await this.repository.update(reservationId, body);

      res.status(200).json(reservation);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { reservationId } = req.params;

      const reservation = await this.repository.remove(reservationId);

      res.status(200).json(reservation);
    } catch (error) {
      next(error);
    }
  }
}
