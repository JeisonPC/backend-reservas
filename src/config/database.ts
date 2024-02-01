import { DataSource } from "typeorm";
import { Reservation } from "../entity/Reservation";
import { Event } from "../entity/Event";


export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Reservation, Event],
  migrations: [],
  subscribers: [],
})
