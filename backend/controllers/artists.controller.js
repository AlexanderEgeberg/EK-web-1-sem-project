import * as artistsRepository from "../repositories/artists.repository.js";

export async function getAll(req, res) {
  const allArtists = await artistsRepository.getAll();
  res.json(allArtists);
}

export async function getById(req, res) {
  const artist = await artistsRepository.getById(req.params.id);
  if (!artist) {
    throw new HttpError(
      404,
      "ARTIST_NOT_FOUND",
      "Could not find artist with id: " + req.params.id,
    );
  }
  res.status(200).json(artist);
}
