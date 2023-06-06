const jwt = require("jsonwebtoken");
const { createResponse } = require("../utils");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .send({
          success: false,
          status: 403,
          message: "A token is required for authentication",
        }
      );
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({
        success: false,
        status: 401,
        message: "Invalid Token",
      }
    );
  }
  return next();
};

module.exports = verifyToken;
