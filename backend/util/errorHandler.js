/**
 * Handles error formats:
 * throw new HttpError(statusCode, code, message)
 * if error is a Zod validation send 400 code and ZodError as a tree structure
 * default to a 500 (internal server error) if none of the above
 */

export default (err, _req, res, _next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Somethng went wrong";
  let error = err.error || "Internal server error";
  return res.status(statusCode).json({ code: error, message: message });
};
