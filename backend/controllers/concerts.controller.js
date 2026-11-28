import * as concertsRepository from "../repositories/concerts.repository.js";
import HTTPError from "../util/HTTPError.js";

export async function getAll(req, res) {
  const allconcerts = await concertsRepository.getAll();
  res.json(allconcerts);
}

export async function getById(req, res) {
  const concert = await concertsRepository.getById(req.params.id);
  if (!concert)
    throw new HTTPError(
      404,
      "Could not find concert with id: " + req.params.id,
    );
  res.status(200).json(concert);
}
