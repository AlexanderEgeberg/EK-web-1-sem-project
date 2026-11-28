import * as stagesRepository from "../repositories/stages.repository.js";
import { HttpError } from "../util/error.js";

export const getAll = async (req, res) => {
  res.json(await stagesRepository.findAll());
};

export const getById = async (req, res) => {
  const stage = await stagesRepository.findById(req.params.id);

  if (!stage) {
    throw new HttpError(
      404,
      "STAGE_NOT_FOUND",
      "Could not find stage with id: " + req.params.id,
    );
  }

  res.json(stage);
};
