import * as stagesRepository from "../repositories/stages.repository.js";

export const getAll = async (req, res) => {
  res.json(await stagesRepository.findAll());
};

export const getById = async (req, res) => {
  const stage = await stagesRepository.findById(req.params.name);

  if (!stage) {
    throw new Error(404);
  }

  res.json(stage);
};
