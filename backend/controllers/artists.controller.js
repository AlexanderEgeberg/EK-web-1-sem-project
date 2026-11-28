import * as artistsRepository from "../repositories/artists.repository.js";

export async function getAll(req, res) {
  const allArtists = await artistsRepository.getAll();
  res.json(allArtists);
}

export async function getById(req, res) {
  const artist = await artistsRepository.getById(req.params.id);
  if (!artist) return res.status(404).json({ error: "artist not found" });
  res.status(200).json(artist);
}
