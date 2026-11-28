import * as stagesRepository from "../repositories/stages.repository.js";
import HTTPError from "../util/HTTPError.js";

export const getAll = async (req, res) => {
  res.json(await stagesRepository.getAll());
};

export const getById = async (req, res) => {
  const stage = await stagesRepository.getById(req.params.id);

  if (!stage)
    throw new HTTPError(
      404,
      "STAGE_NOT_FOUND",
      "Could not find stage with id: " + req.params.id,
    );

  res.json(stage);
};
