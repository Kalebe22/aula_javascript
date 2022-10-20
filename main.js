
/*var nome = "Leandro Terto";
var idade = 50;
var idade2 = 10;
alert(nome + "tem" + idade + "anos");
alert(idade + idade2)*/

var currentnumberwrapper = document.getElementsByid("currentnumber")
var currentnumber = 0;

function increment() {
	currentnumber = currentnumber + 1;
	currentnumberwrapper.innerHtml = currentnumber;
}

function decrement() {
	currentnumber = currentnumber - 1;
	currentnumberwrapper.innerHtml = currentnumber;
}