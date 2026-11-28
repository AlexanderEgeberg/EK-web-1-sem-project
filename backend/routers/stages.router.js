import { Router } from "express";
import * as stagesController from "../controllers/stages.controller.js";

export const stagesRouter = Router();

stagesRouter.get("/", stagesController.getAll);
stagesRouter.get("/:id", stagesController.getById);
