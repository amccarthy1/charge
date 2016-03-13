var express = require('express');
var models = require('../models');
var router = express.Router();

var channel = require('./channel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/channel/:service/:username', channel.byNameService)

module.exports = router;
