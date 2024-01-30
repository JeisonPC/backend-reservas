import { Request, Response, NextFunction } from "express";

import { DatabaseRepository } from "../declarations";
import { Event } from "../entity/Event";

export class EventController {
  constructor(private repository: DatabaseRepository<Event>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;

      const event = await this.repository.create(body);

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const events = await this.repository.getAll();
      res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  }

  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      const event = await this.repository.getById(eventId);

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      const body = req.body;
      const event = await this.repository.update(eventId, body);

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  async remove(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      const event = await this.repository.remove(eventId);

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }
}
