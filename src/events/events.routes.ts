import { Router } from "express";
import { EventController } from "./event.controller";
import { EventRepository } from "./event.repository";

const router = Router();

const controller = new EventController(new EventRepository());

router.post("/events", controller.create.bind(controller));
router.get("/events", controller.getAll.bind(controller));
router.get("/events/:eventId", controller.getById.bind(controller));
router.put("/events/:eventId", controller.update.bind(controller));
router.delete("/events/:eventId", controller.remove.bind(controller));

export default router;
