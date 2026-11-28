import { Router } from "express";
import * as guestsController from "../controllers/guests.controller.js";

export const guestsRouter = Router();

guestsRouter.get("/", guestsController.getAll);
guestsRouter.get("/:id", guestsController.getById);
guestsRouter.post("/", guestsController.createGuest);
guestsRouter.put("/:id", guestsController.updateGuest);
guestsRouter.delete("/:id", guestsController.deleteGuest);
