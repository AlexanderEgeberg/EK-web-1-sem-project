import * as guestsRepository from "../repositories/guests.repository.js";
import HTTPError from "../util/HTTPError.js";
import { CreateGuestDto, UpdatedGuestDto } from "../dto/guests.dto.js";

export async function getAll(req, res) {
  const allguests = await guestsRepository.getAll();
  res.json(allguests);
}

export async function getById(req, res) {
  const guest = await guestsRepository.getById(req.params.id);
  if (!guest)
    throw new HTTPError(404, "Could not find guest with id: " + req.params.id);

  res.status(200).json(guest);
}

export async function createGuest(req, res) {
  const newguest = CreateGuestDto.parse(req.body);

  const guest = await guestsRepository.createGuest(newguest);

  res.status(201).json(guest);
}

export async function updateGuest(req, res) {
  const input = { ...req.body, id: Number(req.params.id) };
  const newGuests = UpdatedGuestDto.parse(input);

  const guest = await guestsRepository.updateGuest(newGuests);
  if (!guest)
    throw new HTTPError(404, "Could not find guest with id: " + req.params.id);
  res.status(200).json(guest);
}

export async function deleteGuest(req, res) {
  const deleted = await guestsRepository.deleteGuest(req.params.id);
  if (deleted === 0)
    throw new HTTPError(404, "Could not find guest with id: " + req.params.id);
  res.sendStatus(204);
}
