export type Query = Record<string, any>;

export type Id = string | number;

export interface DatabaseRepository<T> {
  create(data: Partial<T>, query?: Query):Promise<T>;
  getAll(query?: Query): Promise<T[]>;
  getById(id: Id, query?: Query): Promise<T>;
  update(id: Id, data: T, query?: Query): Promise<T>;
  remove(id: Id, query?: Query): Promise<T>;
}
