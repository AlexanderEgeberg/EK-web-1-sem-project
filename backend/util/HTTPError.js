// /**
//  * @param {number} statusCode - HTTP status code (400,404,500, etc)
//  * @param {string} code -  "STAGE_NOT_FOUND"
//  * @param {string} message - "Stage not found"
//  * @example throw new HTTPError(404, "STAGE_NOT_FOUND", "Stage not found");
//  */

class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default HTTPError;
