/*function <nombreFn>(<param1>, <param2>, param3>) {
    // codigo de la funcion
}*/
function saludar(nombre = 'Charly') {
    console.log('Hola ' + nombre)
}

// No se ejecuta la funcion, si no le pones los parentesis
saludar()
saludar('Mike')
saludar('Sara')
saludar('Bartolomeo')


function sumar(n1, n2) {
    const resultado = n1 + n2
    console.log(resultado)
    return resultado
}

const tres = sumar(1, 2)
const menos6 = sumar(2,-8)
const otroNum = sumar(53453,10)

console.log(tres, menos6, otroNum)

function getNombreCompleto(nombre, apellido) {
    return `${apellido}, ${nombre}`
}
const cfalco = getNombreCompleto('Charly', 'Falco')
if (cfalco === 'Falco, Charly') {
    console.log('La funcion está bien hecha')
}

// -------------------------------------------------------------------------------------------------------------------------
// Hay objetos que tienen definidas una serie de funciones que hacen cosas sobre las funciones.

// Yo quiero coger una array de objetos y lo quiero retener.

const numeros = [1, 3, 9, 4, 7, 0, 2]
// .sort -> método: es una función asociada a un objeto
const numerosOrdenados = numeros.sort() // para ordenar
numeros.sort()
console.log(numerosOrdenados)

const numerosOrdenadosDescendentes = numerosOrdenados.reverse()
console.log(numerosOrdenadosDescendentes)

const frase = 'El canario esta en la jaula...'
const fraseCambiada = frase.replace('o', '0')
console.log(fraseCambiada)

const frase2 = "El canario y el periquito están en la jaula..."
const frase2Cambiada = frase2.replaceAll('o', '0')
console.log(frase2Cambiada)

// -------------------------------------------------------------------------------------------------------------------------
/* 
    FUNCIONES FLECHA (ARROW FUNCTIONS)

// Esto es una función normal:
function nombreFn(param1, param2) {
    return param1 + param2
}

// Esto es una función flecha:
forEach((param1, param2) => {
    return param1 + param2    
})
// Estas funciones flecha se suelen usar con otras funciones embedidas.

// los parentesis son obligatorios si hay mas de un parametro y sino son opcionales:
nombre => `Hola ${nombre}`
(nombre) => `Hola ${nombre}`

(param1, param2) => param1 + param2 // al no ponerle el return en una funcion flecha que se escribe en una linea sin llaves, lo qeu este en dicha linea es lo que se devuelve.
*/
const fnSuma = (param1, param2) => {
    return param1 + param2    
}
// se igualan a una constante o a una variable para que sean parecidas a las normales.

const cuatro = fnSuma(2, 2)
console.log(cuatro)


const fnResta = (param1, param2) => param1 - param2 // Esto guarda la funcion en la referencia de la funcion que es el nombre de la constante.
const seis = fnResta(8, 2)
console.log(seis)


const fnSaludar = nombre => `Hola ${nombre}`
console.log(fnSaludar('Daniel'))


/* EJERCICIO:

 - Crear una funcion normal que dada la temperatura en grados celsius, nos la convierta a grados farenheit
 - Crear la misma función pero como función flecha

*/

function conversorCelsiusFarenheit(celsius) {
    return (celsius * 9/5) + 32
}

// en funcion flecha:
const conversorGrados = celsius => (celsius * 9/5) + 32

const celsius = 32 // grados ºC
console.log(`Hay ${celsius}ºC actualmente, lo cual son ${conversorCelsiusFarenheit(celsius)}ºF // en función normal.`)
console.log(`Hay ${celsius}ºC actualmente, lo cual son ${conversorGrados(celsius)}ºF // en función flecha.`) // fn flecha

const temperaturasHoyZaragoza = [18, 16, 14, 14, 14, 14, 17, 21]

/* MÉTODOS DE LOS ARRAYS:

 <array>.map(<función de callback>)
 <array>.filter(<función de callback>)
*/
const temps = temperaturasHoyZaragoza.map(conversorCelsiusFarenheit)
console.log(temperaturasHoyZaragoza)
console.log(temps)

// Es lo mismo que lo de arriba pero de otra forma distinta:
const temps2 = temperaturasHoyZaragoza.map((celsius) => (celsius * 9  / 5) + 32)
console.log(temps2)


const trabajadores = [
    {
        nombre: 'Charly',
        apellido: 'Falco',
        edad: 48,
        puesto: 'desarrollador'
    },
        {
        nombre: 'Sara',
        apellido: 'Smith',
        edad: 27,
        puesto: 'desarrollador'
    },
        {
        nombre: 'Fernando',
        apellido: 'Alonso',
        edad: 33,
        puesto: 'chofer'
    }
] // es un array de objetos.
const empresa = 'laempresa'

console.log(trabajadores[1].nombre[0]) // devolverá S de la primera letra de Sara

/* EJERCICIO: 

 Generar un email de la empresa por cada trabajador
*/

const generarEmailEmpresa = (trabajador) => {
    const random = Math.floor(Math.random() * 125);
    return `${trabajador.nombre}${trabajador.apellido.substring(0,3)}_${trabajador.edad + random}@${empresa}.com`.toLowerCase()
}

const trabajadorEmpresaEmail = trabajadores.map(generarEmailEmpresa) // array de los emails para trabajadores.
console.log(trabajadorEmpresaEmail)

// -------------------------------------------------------------------------------------------------------------------------


// Filter -> filtra un arrayy devuelve otro array solo que los valores cumplen el filtro

const esMayorDe20 = (num) => num > 20
console.log(esMayorDe20(17)) // false
console.log(esMayorDe20(31)) // true

const tempMayoresDe20 = temperaturasHoyZaragoza.filter(esMayorDe20)
console.log(tempMayoresDe20)


/* EJERCICIO

Obtener la lista de trabajadores que son desarrolladores.
*/

// const esDesarrollador = (trabajador) => (trabajador.puesto.trim().toLowerCase() === 'desarrollador')
const esDesarrollador = (patata) => {
    return patata.puesto === 'desarrollador'
}
const trabajadoresDevs = trabajadores.filter(esDesarrollador)
console.log(trabajadoresDevs)

const nombresDesarrolladores = trabajadoresDevs.map((trabajador) => trabajador.nombre)
console.log(nombresDesarrolladores)

// -------------------------------------------------------------------------------------------------------------------------



