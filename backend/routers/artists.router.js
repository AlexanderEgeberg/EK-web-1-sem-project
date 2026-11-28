import { Router } from "express";
import * as artistsController from "../controllers/artists.controller.js";

export const artistsRouter = Router();

artistsRouter.get("/", artistsController.getAll);
artistsRouter.get("/:id", artistsController.getById);
