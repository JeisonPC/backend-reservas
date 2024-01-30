import "reflect-metadata";
import express from "express";
import database from "./config/database";
import EventRoutes from "./events/events.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error)

app.use("/api/v1/", EventRoutes);

app.listen(3000, () => {
  console.log("App en el puertoo:3000");
});
