
alert('Hola xd');                       
let numeroMax=20;
let numeroSecreto =  Math.floor(Math.random()*numeroMax)+1; //math.flor. también puedo usar parseInt, el parse int elimina deximales, el math aproxima al entero menor 
let numeroUsuario=0;
let contador=1;
// let veces= 'vez';
let maxIntentos=4;
console.log(numeroSecreto);

while(numeroUsuario!=numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMax} por favor:`)); //parse int me convierte el string en entero 

    console.log(typeof("numero del usuario:",numeroUsuario));  //Funcion que imprime el mensaje en la consola del entorno de desarrollo , para probar la información relevante 
//el typeof me srive para mostrar el tipo de dato que esta mostrando 
    console.log("comparación",numeroUsuario==numeroSecreto);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el número, el número es: ${numeroUsuario} y lo intento ${contador} ${contador==1?'vez':'veces'}`); //en ${} puedo meter cualquier código valido en javaScript  //convinar texto literal y variables, también puedo usar aler("Acertaste el número, el número es: "+ numeroUsuario);
    }else{
        
        if(numeroUsuario<numeroSecreto){
            alert("El número secreto es mayor");
        }else{
            alert("El número secreto es menor");
        }
        /*console.log("Valor correcto "+numeroSecreto)
        alert("No acertaste el número, el número correcto era "+numeroSecreto);*/
        contador++;        
        //veces='veces';
    }
    if (contador>maxIntentos){
        alert(`Llegaste al número máximo de ${maxIntentos} intentos xd`);
        break; //rompe el búcle 
    }
   
}




