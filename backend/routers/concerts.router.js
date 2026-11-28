import { Router } from "express";
import * as concertsController from "../controllers/concerts.controller.js";

export const concertsRouter = Router();

concertsRouter.get("/", concertsController.getAll);
concertsRouter.get("/:id", concertsController.getById);
