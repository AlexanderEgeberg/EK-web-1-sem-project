import * as stagesRepository from "../repositories/stages.repository.js";

export const getAll = async (req, res) => {
  res.json(await stagesRepository.getAll());
};

export const getById = async (req, res) => {
  const stage = await stagesRepository.getById(req.params.name);

  if (!stage) {
    throw new Error(404);
  }

  res.json(stage);
};
