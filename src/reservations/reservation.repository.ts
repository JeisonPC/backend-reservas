// src/repositories/reservation.repository.ts
import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import database from "../config/database";
import { Reservation } from "../entity/Reservation";

export class ReservationRepository implements DatabaseRepository<Reservation> {
  async create(
    data: Partial<Reservation>,
    query?: Query
  ): Promise<Reservation> {
    const repository = database.getRepository(Reservation);

    const reservation = repository.create(data);

    await repository.save(reservation);

    return reservation;
  }

  async getAll(query?: Query): Promise<Reservation[]> {
    const repository = database.getRepository(Reservation);

    return repository.find();
  }

  async getById(id: Id, query?: Query): Promise<Reservation> {
    const repository = database.getRepository(Reservation);

    if (typeof id === "object") {
      // Si id es un objeto, asumimos que es una instancia de FindOneOptions<Reservation>
      const reservation = await repository.findOneBy({ id: id as any });
      if (!reservation) {
        throw new NotFound("La reserva no existe");
      }
      return reservation;
    } else {
      // Si id es un string o number, lo tratamos como el ID directo
      const reservation = await repository.findOneBy({ id: id as any });
      if (!reservation) {
        throw new NotFound("La reserva no existe");
      }
      return reservation;
    }
  }

  async update(id: Id, data: Reservation, query?: Query): Promise<Reservation> {
    const repository = database.getRepository(Reservation);

    await repository.update(id, data);

    return this.getById(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Reservation> {
    const repository = database.getRepository(Reservation);

    const reservation = await this.getById(id, query);

    await repository.delete(id);

    return reservation;
  }
}
