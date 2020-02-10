'use strict'

var express = require('express');
var StarshipController = require('../controllers/StarshipController');

var router = express.Router();

router.get('/starships', StarshipController.index);

router.post('/starships', StarshipController.store);

router.get('/starships/:id', StarshipController.show);

router.put('/starships/:id', StarshipController.update);

router.delete('/starships/:id', StarshipController.delete);

module.exports = router;
