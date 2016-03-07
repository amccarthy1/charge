var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/channel', function(req, res, next) {
  res.render('channel', { username: 'test' });
})

module.exports = router;
