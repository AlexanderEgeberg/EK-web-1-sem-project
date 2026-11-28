import * as concertsRepository from "../repositories/concerts.repository.js";

export async function getAll(req, res) {
  const allconcerts = await concertsRepository.getAll();
  res.json(allconcerts);
}

export async function getById(req, res) {
  const artist = await concertsRepository.getById(req.params.id);
  if (!artist) {
    throw new HTTPError(
      404,
      "CONCERTS_NOT_FOUND",
      "Could not find artist with id: " + req.params.id,
    );
  }
  res.status(200).json(artist);
}
