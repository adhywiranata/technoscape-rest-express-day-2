const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'welcome to tokopaedi API' });
});

module.exports = router;
