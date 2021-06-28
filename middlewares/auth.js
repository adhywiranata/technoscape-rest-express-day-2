const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  // LOGIC untuk cek apakah token yang dikirim itu valid
  try {
    jwt.verify(req.headers.token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.sendStatus(401);
  }
}

module.exports = auth;
