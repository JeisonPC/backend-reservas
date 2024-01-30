import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import database from "../config/database";
import { Event } from "../entity/Event";

export class EventRepository implements DatabaseRepository<Event> {
  async create(data: Partial<Event>, query?: Query): Promise<Event> {
    const repository = database.getRepository(Event);

    const event = repository.create(data);

    await repository.save(event);

    return event;
  }
  async getAll(query?: Query): Promise<Event[]> {
    const repository = database.getRepository(Event);

    return repository.find();
  }
  async getById(id: Id, query?: Query): Promise<Event> {
    const repository = database.getRepository(Event);

    const event = await repository.findOneBy({ id: id as any });

    if (!event) {
      throw new NotFound("el evento no existe");
    }

    return event;
  }

  async update(id: Id, data: Event, query?: Query): Promise<Event> {
    const repository = database.getRepository(Event);

    await repository.update(id, data);

    return this.getById(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Event> {
    const repository = database.getRepository(Event);

    const event = await this.getById(id, query);

    await repository.delete(id)

    return event;
  }
}
