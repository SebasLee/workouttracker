const express = require('express');
const router = express.Router();

const CHEST = require('../models/chestTri');

router.get('/', (req, res) => {
    res.render('index', {
      pushday: CHEST,
    })
  });

module.exports = router;
