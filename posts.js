// posts.js
var fs = require('fs');

var find = function(post_name, cb) {
	console.log('pn: ',post_name);
    fs.readdir(__dirname + '/posts/', function(err, files) {
    	console.log(files);
        if (files.indexOf(post_name + '.html') !== -1) {
            fs.readFile('./posts/' + post_name + '.html', function(err, data) {
                cb(data);
            });
        } else {
            cb(null);
        }
    });
};

module.exports.find = find;