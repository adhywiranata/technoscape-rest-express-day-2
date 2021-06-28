const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'welcome to tokopaedi API' });
});

router.post('/login', (req, res) => {
  const acc = {
    username: req.body.username,
    password: req.body.password,
  };

  // logic ngecek database match gak password sama username
  const isMatch = true;

  if (isMatch) {
    res.json({
      accessToken: jwt.sign({
        username: req.body.username
      }, process.env.SECRET_KEY, {
        expiresIn: 36000
      })
    });
  } else {
    res.json({
      message: 'LOGIN GAGAL!',
    })
  }
});

module.exports = router;
