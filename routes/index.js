var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My Fantastic Blog!', subtitle: 'WAAAAAA' });
});

router.get('/pay', function(req, res) {
  res.render('pay', {title: "Where's my money, honey?"});
});

module.exports = router;
