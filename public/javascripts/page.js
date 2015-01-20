(function() {

var myPage = document.getElementsByTagName('body');

var myArticle = document.createElement('article');
var artBody = document.createElement('p');
var artTitle = document.createElement('h1');

artTitle.addEventListener('click', logClick);

myArticle.appendChild(artTitle);
myArticle.appendChild(artBody);

artTitle.textContent = 'Article title';
artBody.textContent = 'The rain in spain';

myPage[0].appendChild(myArticle);

})();

var el = document.getElementsByTagName('h1')[0];

function logClick () {
	var tmp = document.getElementsByTagName('p')[0];
	if (tmp.style.display === "none") {
		tmp.style.display = "inline";
	} else {
		tmp.style.display = "none";
	}
}
el.addEventListener('click', logClick);

// new function
var para = document.getElementsByTagName('p')[0];

function highlight() {
	var tmp = document.getElementsByTagName('p')[0];
if(tmp.style.backgroundColor === "red") {
	tmp.style.backgroundColor = "white";
} else {
	tmp.style.backgroundColor = "red";
}
}

para.addEventListener('click', highlight);

//Immediately-Invoked Function Expression
//IFFE