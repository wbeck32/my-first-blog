var express = require('express');
var router = express.Router();

var posts = require('../posts');

router.param('post_name', function(request, response, next, post_name){
    //note: we'll define posts.find in a minute
    posts.find(post_name, function(post) {
        if(post) {
            request.post = post;
            next();
        } else {

        }
    });
});
router.get('/', function(req, res) {
  res.render('index', { title: 'My Freaking Fantastic Blog!' });
});

router.get('/post/:post_name', function(request, response) {
    response.render('post', {post: request.post});
});




/* GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'My Freaking Fantastic Blog!' });
});

router.get('/pay', function(req, res) {
  res.render('pay', {title: "Where's my money, honey?"});
});

router.get('/pcsjsi', function(req, res) {
	res.render('pcsjsi', {title: "Portland Code School"});
});
*/
module.exports = router;
