

function calculadora() {
    let espada = 1500
    let arco = 1300
    let hacha = 1700
    alert("buenos dias Viajante! tengo para ofrecerte grandes armas que encajan completamente contigo, mira porfavor")
    alert("Espada Larga : 1500 monedas, Arco Largo: 1300 monedas, y mi favorita, Hacha Doble: 1700 monedas")
    let OroInventario = 2000
    let operacion = prompt("Elige el item a comprar: (espada, arco, hacha)")
    switch (operacion) {
        case "espada":
            return OroInventario - espada
        case "arco":
            return OroInventario - arco
        case "hacha":
            return OroInventario - hacha
        default:
            alert("OYE, no tengo ese item")
            const respuesta = confirm("¿desea probar nuevamente?")
            if (respuesta) {
                calculadora()
            }
            else {
                return "NULL"
            }
    }

}

let resultado = calculadora()
alert("ooooh una excelente eleccion, aqui tienes! recuerda usarla solo cuando sea necesario, adios!!! ")
alert("muy bien, luego de la compra te quedan aun " + resultado + " monedas de oro paga gastar")
console.log(nombre + " clase " + clase + " cuenta con " + resultado + " monedas de oro")
alert("muy bien " + nombre + " esto solo fue el comienzo de un gran aventura, tomalo como una preentrega de la misma, pronto seguiras tu comino siendo el/la "+ clase + " que dara que hablar")
