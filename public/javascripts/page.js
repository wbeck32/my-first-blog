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
var myEmail = document.getElementById('email');
myEmail.addEventListener('blur', valEmail);

function valEmail(evt) {
	console.log('checking email ',evt);
	var em = myEmail.value;
	console.log(em);

}


var myCC = document.getElementById('cc');
myCC.addEventListener('blur', valCC);

function valCC(evt) {
	var cc = myCC.value;
	console.log('checking credit card: ',cc);
}

var myExp = document.getElementById('exp');
myExp.addEventListener('blur',valExp);

function valExp() {
	var exp = myExp.value;
	console.log('checking Expiration date: ',exp);
}

var myButt = document.getElementById('myButt');
function checkForm(evt) {
	evt.preventDefault();
	console.log('hello');
//	return;
}
myButt.addEventListener('click', checkForm);

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
