import * as guestsRepository from "../repositories/guests.repository.js";

export async function getAll(req, res) {
  const allguests = await guestsRepository.getAll();
  res.json(allguests);
}

export async function getById(req, res) {
  const guest = await guestsRepository.getById(req.params.id);
  if (!guest) {
    throw new HttpError(
      404,
      "GUEST_NOT_FOUND",
      "Could not find guest with id: " + req.params.id,
    );
  }
  res.status(200).json(guest);
}

export async function createGuest(req, res) {
  const newguest = CreateguestDto.parse(req.body); //dtoerne er ikke lavet endnu

  const guest = await guestsRepositories.createguest(newguest);

  res.status(201).json(guest);
}

export async function updateGuest(req, res) {
  const input = { ...req.body, id: Number(req.params.id) };
  const newGuests = UpdatedGuestsDto.parse(input);

  const guest = await guestsRepositories.updateGuests(newGuests);
  if (!guest) return res.status(404).json({ error: "guest not found" });
  res.status(200).json(guest);
}

export async function deleteGuest(req, res) {
  const deleted = await guestsRepositories.deleteGuests(req.params.id);
  if (deleted === 0) return res.status(404).json({ error: "guest not found" });
  res.sendStatus(204);
}
