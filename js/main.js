/*var nome= "Pedro Savio";
var idade= 21;

alert(nome + " tem "  + idade + " com esse comando no scritp vc cria poppups em js, da pra criar um arquivo que nem no css3");

var frutas = [{nome:"maça" , cor: "vermelha"},{nome:"banana" , cor: "amarelo"}];
console.log(frutas);
alert(frutas[1].nome);

var lista = ["maça","pera","uva"];
lista.push("tijolo");
lista.push("telha");
lista.pop();
console.log(lista);

console.log(lista.toString());
console.log(lista.join(" pedrosavio "));
*/

/*var d= new Date();
alert(d.getDay()+1);
alert(d.getHours());
alert(d.getMinutes());

var count = 0;
while(count <=5){
	console.log(count);
	alert(count);
	count++;
};

var contador;
for(contador=0;contador<=5;contador++){
	alert(" falta " + contador +" Segungos!!!");
};

var idade= prompt("qual sua idade?");
if(idade>=18){
	alert("maior de idade");
}else{alert("menor de idade");};*/


function soma(n1,n2){
	return n1 + n2;
}
alert(soma(5,85));

function botao(){
	alert("quem clicar é cornowell");
}
function botao2(){
	document.getElementById("ad").innerHTML= "clicooooou no 2";
}

function botao3(){
	document.getElementById("ad2").innerHTML= "clicooooou no 3";
}
function botao4(){
	window.open("https://github.com/pedrosavio99");

}
function botao5(){
	window.location.href="https://github.com/pedrosavio99";

}

function troca(){
	document.getElementById("mouse").innerHTML="Passouo mouse";
}
function volta(){
	document.getElementById("mouse").innerHTML="Passe o mouse aqui";
}
function funcao(elemento){
	alert(elemento.value);
}