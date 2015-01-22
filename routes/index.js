var express = require('express');
var router = express.Router();

var posts = require('../posts');

// router.param('post_name', function(request, response, next, post_name){
//     //note: we'll define posts.find in a minute
//     posts.find(post_name, function(post) {
//         if(post) {
//             request.post = post;
//             request.title = post_name;
//             next();
//         } else {

//         }
//     });
// });



router.get('/', function(req, res) {
  res.render('index', { title: 'My Freaking Fantastic Blog!' });
});

router.get('/post/:post_name', function(request, response) {
    response.render('post', {post: request.post, postTitle:request.title});
});

module.exports = router;
