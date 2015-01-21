(function() {

var myPage = document.getElementsByTagName('body');
var myArticle = document.createElement('article');
var artBody = document.createElement('p');
var artTitle = document.createElement('h1');

//artTitle.addEventListener('click', logClick);

myArticle.appendChild(artTitle);
myArticle.appendChild(artBody);

artTitle.textContent = 'Article title';
artBody.textContent = 'The rain in spain';

myPage[0].appendChild(myArticle);


})();

/*
var myEmail = document.getElementById('email');
myEmail.addEventListener('blur', valEmail);

function valEmail(evt) {
	console.log('checking email ');
	var em = myEmail.value;
	//if it's a valid email go on
	//else display error message and don't go on
	var emRegEx = new RegExp('.+');
	if(emRegEx.test(em) === true) {

	} else {
		document.getElementById('emailVal').innerHTML = 'DANGER!';
	}
	console.log(emRegEx.test(em));
	console.log(emRegEx);
}


var myCC = document.getElementById('cc');
myCC.addEventListener('blur', valCC);

function valCC(evt) {
	var cc = myCC.value;
	console.log('checking credit card: ',cc);
}

var myExp = document.getElementById('exp');
myExp.addEventListener('blur',valExp);

function valExp(evt) {
	var exp = myExp.value;
	console.log('checking Expiration date: ',exp);
}

var myButt = document.getElementById('myButt');
myButt.addEventListener('click', checkForm);

function checkForm(evt) {
	evt.preventDefault();
	//finally check for empty fields
	//use the forms array object to iterate through all fields
	console.log('check the whole form here?');
//	return;
}

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
*/
//Immediately-Invoked Function Expression
//IFFE
