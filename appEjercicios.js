

let diaUsuario = prompt("Qué día es hoy: ");


if(diaUsuario=="Domingo"){
    alert("Buen fin de semana crack");
}else if(diaUsuario=="Sabado"){
    alert("Buen fin de semana crack");
}else{
    alert("Buena semana crack");
}





let numeroUsuario= prompt("Ingrese un número:"); 

if (numeroUsuario<0){
    alert("El número es negativo");
}else if(numeroUsuario>0){
    alert("El número es positivo");
}



let saldo= "$2500";
alert(`Su saldo es ${saldo}`);




let nombreUsuario=prompt("ingrese su nombre: ");
alert("¡Bienvenido "+nombreUsuario+"!");




let contador=1;
while(contador<11){
    alert(contador);
    console.log(contador);
contador++;
}



let contador=10;
while(contador>=0){
    alert(contador);
    console.log(contador);
    contador--;
}




let numeroMax=prompt('ingrese un número para la cuanta prograsiva: ');
let contador=0;

while(contador<=numeroMax){
        alert(contador);
        console.log(contador);
        contador++;
}





let nombre= prompt("ingresa tu nombre");
alert("Bienvenido"+nombre);
console.log("Bienvenido",nombre);





let nombre= prompt("ingresa tu nombre");
alert("Bienvenido "+nombre);
console.log("Bienvenido",nombre);

lenguajeFav=prompt("Cuál es el lenguaje de programación que más te gusta: ");
console.log(lenguajeFav);





let num1=5;
let num2=6;
let resultado=num1+num2;
console.log("El resultado de sumar",num1,"y",num2,"es",resultado);





let edad=prompt("Ingrese su edad: ");
mayorOrmenor="";
if(edad<18){
    mayorOrmenor="menor";
    console.log(`usted es ${mayorOrmenor} de edad`);
}else{
    mayorOrmenor="mayor";
    console.log(`usted es ${mayorOrmenor} de edad`);
}




numero=prompt("ingrese un número: ");
if(numero<0){
    console.log("su número es negativo");
}else if(numero>0){
    console.log("su número es positivo");
}else if(numero==0){
    console.log("su número es cero");
}





let contador=1;
let repeticionMax=10;
while(contador<=repeticionMax){

    console.log(contador);
    contador++;
}





let nota=7;
if(nota>=7){
    console.log("aprovado");
}else{
    console.log("reprovado");
}





numeroAleatorio=Math.random();
console.log(numeroAleatorio);




numeroEntero10=Math.floor(Math.random()*10)+1;
console.log(numeroEntero10);


let numeroEntero1000=Math.floor(Math.random()*1000)+1;
console.log(numeroEntero1000);




//uso de switch, case 

let opcion=prompt("ingrese se un número:  ");
switch(opcion){
case "1":
    console.log("pendejo 1");
break;
case "2":
    console.log("pendejo 2");
    break;
case "3":
    console.log("pendejo 3");
    break;
    default:                                 //default se usa en un switch, cuando ninguna de las opciones fue elegida 
    console.log("esta opcion no es valida");
}