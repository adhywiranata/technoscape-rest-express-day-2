/*
PRIVATE API / with authentication
authentication api => api butuh private key/token untuk bisa diakses.
*/
function auth(req, res, next) {
  // LOGIC untuk cek apakah token yang dikirim itu valid
  if (req.headers.token === process.env.SECRET_KEY) {
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = auth;
