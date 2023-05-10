//introduccion al juego//

alert("Bienvenid@ a este pequeño juego")

let nombre = prompt("ingresa tu nombre");


alert("hola " + nombre + " preparate para adentrarte en una divertida aventura");

console.log("el nombre del personaje es " + nombre);

//selector de clase//
alert("Muy bien, pensemos en que tipo de ser vivo te gustaria ser");

let clase =prompt("Escribe el nombre de la clase que quieres ser: 1. Humano  2. Elfo  3. Orco").toLocaleLowerCase();

if (clase === "humano") {
    alert("wooow seleccionaste un Humano... claramente no te gusta innovar. PERO ES UNA GRAN CLASE!")
}

else if (clase === "elfo") {
    alert("WOOOW!!! aparentemente te gusta la elegancia y la presicion! Una gran eleccion")
}
else if (clase === "orco") {
    alert("Excelente eleccion! mi clase favorita! claramente, eres muy fuerte!... y terco... y bruto.... pero MUY FUERTE!")
}
else {
    alert("Vamos " + nombre + " perdiste tu oportunidad, si quieres intentar de nuevo presiona F5")
   };    

console.log("la clase seleccionada es " + clase);
//Comienzo de aventura//

alert("Muy Bien! Comencemos! eres " + clase + " Que Responde al nombre de " + nombre)

alert("Te encuentras sentado en una taberna, tomando tus ultimas gotas de cerveza, en cuanto entra un persona misteriosa, y se sienta en tu mesa sin permiso ")

alert("te ofrece jugar un juego de cartas, donde la recompensa sera algo dificil de no aceptar");

alert("--reparte las cartas--")

alert("el extraño te dice:-Mira,el juego es muy facil, repartire 2 cartas para cada uno, pondremos 1 carta  a la vez, y gana el que coloque las cartas mas altas--")


//ciclo for//

let cartas=2

for(let cartas=1;cartas<=2;cartas++) {
    alert("se entrego la carta N° " + cartas)
}

alert("El extraño te dijo 'este es mi mazo asi que comienzo yo!'- a lo que coloca una carta con el numero 5")
alert("tu miras tu primer carta y tienes un 6, por lo que ganas la primera ronda")
alert("el extraño juega su segunda carta y es un misero 1, acto seguido juegas tu segunda carta, y le ganas")

alert("el extraño te culpa de hacer trampa y dice que no te pagara nada")
//resolucion de apuesta//

if (clase === "humano") {
    alert("Como tu querid@ " + nombre + " eres una clase " + clase  + ", de manera diplomatica conveces al extraño de pagarte porque no hiciste ningun tipo de trampa, y haces que te entregue tu premio") 
}
else if (clase === "elfo") {
    alert("-te ries entre dientes, y le recuerdas que eres una clase " + clase + " y sin que se de cuenta le arrebatas lo que es tuyo sin que se de cuenta y te vas")
}
else if (clase === "orco") {
    alert("Muestras tus dientes, le partes tu jarra vacia en su cabezota, y te quedas con lo que te corresponde. -quizas este extraño se olvido que vienes de un clan de " + clase)
}

//funciones//
alert("te alejas de la taverna, con el fin de comprarle algun arma al herrero para tus proximas aventuras, cuentas con 2000 monedas de oro")
alert("te adentras en el pueblo, llegas al herrero y lo saludas")


calculadora();



//fin de la historia//
