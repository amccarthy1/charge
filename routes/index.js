var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/channel/:username', function(req, res, next) {
  res.render('channel', { username: req.params.username });
})

module.exports = router;
