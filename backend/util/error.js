import { z, ZodError } from "zod";

/**
 * @param {number} statusCode - HTTP status code (400,404,500, etc)
 * @param {string} code -  "STAGE_NOT_FOUND"
 * @param {string} message - Human-readable message
 * @example throw new HttpError(404, "STAGE_NOT_FOUND", "Stage not found");
 */
export class HttpError extends Error {
  statusCode;
  code;
  constructor(statusCode, code, message) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
    this.code = code;
  }
}

/**
 * Handles error formats:
 * throw new HttpError(statusCode, code, message)
 * if error is a Zod validation send 400 code and ZodError as a tree structure
 * default to a 500 (internal server error) if none of the above
 */
export const errorHandler = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    return res
      .status(err.statusCode)
      .json({ code: err.code, message: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(400).json(z.treeifyError(err));
  }

  return res.sendStatus(err.status ?? 500);
};
