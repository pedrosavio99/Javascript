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

var d= new Date();
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
}else{alert("menor de idade");};




