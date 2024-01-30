import { DataSource } from "typeorm";
import { User } from "../entity/User";
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
  entities: [User, Event],
  migrations: [],
  subscribers: [],
})
