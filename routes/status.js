const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ data: 'Server Listening' }));
});

module.exports = router;
