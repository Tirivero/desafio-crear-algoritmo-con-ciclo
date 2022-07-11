/*Este algoritmo , ciclo, va a indicar la fecha de nacimiento acorde a la edad ingresada por el usuario(No va a dar exacto por los meses de nacimiento pero no me quise complicar aun me falta practica).

Y luego a su fecha de nacimiento va a ir sumandole las decadas que pasaron al año actual y las mostrara en la consola */



//Le pido al usuario que ingrese su fecha de nacimiento:

let edadActual = Number(prompt("Ingrese su edad"));
let añoActual = 2022
let fechaNacimiento = añoActual - edadActual;

if (isNaN(edadActual)){

    alert("No es una edad valida")
} else { 
    alert(`"Su fecha de nacimiento es:"${fechaNacimiento} `)

}

//Creo el ciclo para sumar las decadas que haya entre su nacimiento y la actualidad

for (i=fechaNacimiento; i<añoActual; i+=10){
    console.log(i)
}



