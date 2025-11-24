console.log("hola mundo")

var nombre = 'Ángel'
// nombre = 2
console.log(typeof nombre)

var Nombre = 'Charly'

// Un comentario de linea
/* Un comentario de
multiples lineas
*/

var edad; // undefined

/* 
string
number
boolean
undefined
null
object
*/

var nombreCompleto = "Ángel Villalba" // CamelCase

/*
    TIPOS DE DATOS
*/

// String
let apellido = "Villalba"
apellido = 'Villalba Fernández-Paniagua'

const dni = '00000000T'
// dni = '888'

// String Interpolation o Template String
console.log('Hola, me llamo '+nombre+' '+apellido+'.')
console.log(`Hola, me llamo ${nombre} ${apellido}.`)


/*
Valores truthy y falsy
- Thuthy -> true, 1, 1, "Ángel", Infinity, [], {}
- Falsy -> false, 0, "", undefined, null. NaN
*/

if ([]) { // 0 o NaN
    console.log("Es truthy")
} else { 
    console.log("Es falsy")
}

// Array
const colores = ['naranja', 'azul', 'rojo', 'amarillo']
const sabores = new Array('naranja', 'piña', 'fresa', 'limón')

const listaVaciaDe3Elementos = new Array(3)

// Objetos
const persona = {
    nombre: 'Charly',
    apellido: 'Falco',
    direccion: {
        tipo: 'calle',
        nombre: 'Norte',
        numero: 28,
    },
    /*
    hobbies: {'tenis', 'cine'}, // tambien puede ser asi, que es lo más normal
    */
    hobbies: [
        {
            tipo: 'baloncesto',
            lugar: 'cancha',
        },
        {
            tipo: 'natación',
            lugar: 'olimpia',
        }
    ]
}

const charly = {
    nombre: 'Charly',
    email: 'charly@gmail.com',
}
const angel = {
    nombre: 'Ángel',
    email: 'angel@gmail.com',
}
const mike = {
    nombre: 'Mike',
    email: 'mike@gmail.com',
}
const lista3Personas = [charly, angel, mike]

// otra forma de hacerlo:
const tresPersonas = [
    {
        nombre: 'Daniel',
        apellido: 'Andreu',
        edad: 24,
    },
    {
        nombre: 'Andrés',
        apellido: 'Falcaldo',
        edad: 44,
    },
    {
        nombre: 'Mike',
        apellido: 'Ferrer',
        edad: 32,
    }
]

// Acceso a los arrays
console.log (tresPersonas)
console.log(colores[3])

// Acceso a los objetos
console.log(persona['apellido'])

// Acceder al nombre de Mike de la lista3Personas
console.log(tresPersonas[2].nombre)
console.log(tresPersonas[2]['nombre'])

const edadd = 19
console.table(tresPersonas)
console.error('Esto es un error')

// pop-ups:
/*alert('Bienvenido a nuestra web')

const opcion = confirm('¿Vas a salir este finde?')
console.log(opcion)

const password = prompt('Introduce tu contraseña:')
console.log(password)*/

/* Ejercicio: 

 - Paso 1: mostrar un mensaje al usuario dandole la bienvenida a la página de chiste de programación.
 - Paso 2: preguntarle si quiere añadir un chiste (si/no)
 - Paso 3.1: 
 - Paso 3.2:

 */
/*alert("Bienvenido a nuestra pagna de chiste de programacion")
const accion = confirm("¿Quieres añadir un chiste?")

 if (accion) {
    const chiste = prompt("Inserta un chiste:")
    console.log(chiste)
 } else {
    console.log("Que sos eres")
 }*/

 // switch
 const nota = 7
 
 switch(nota) {
    case 5:
        console.log("Suficiente")
        break;
    case 6:
        console.log("Bien")
        break;
    case 8:
        console.log("Notable")
        break;
    case 10:
        console.log("Sobresaliente")
        break;
    default:
        console.log("Otra nota")
 }

 // BUCLES FOR
 for (let i = 0; i < 3; i++) {
    console.log(i)
 }

 // En pos se guarda el indice del array de colores en cada iteracion
 for (let pos in colores) {
    console.log(`${colores[pos]}: ${sabores[pos]}`)
 }

 
 /* Ejercicio:
    - iterar el array de lista3Personas usando alguno de los bucles anterior
    - mostrar los datos con el siguiente formato:

    1 - Charly (charly@gmail.com)
    2 - Ángel (agel@gmail.com)
    3 - Mike (mike@gmail.com)

    Intentar hacerlo con String Interpolation
    Para convertir a un string a number -> Number(i)
*/
for(let i = 0; i < 3; i++) {
    console.log(`${i+1} - ${lista3Personas[i].nombre} (${lista3Personas[i]['email']})`)
}

let index = 1
for (let persona of lista3Personas) {
    console.log(`${index} - ${persona.nombre} (${persona.email})`)
    index++
}

for (let pos in lista3Personas) {
    console.log(`${Number(pos)+1} - ${lista3Personas[pos].nombre} (${lista3Personas[pos].email})`)
    if (Number(pos)+1 == 3) break
}

// --------------------------------------------------------------------------------------------------

let usuarioHaAceptado = false
while (!usuarioHaAceptado) {
    usuarioHaAceptado = confirm('Aceptas usar JS como lenguaje para todo?')
}
console.log('El usuario ha aceptado')

usuarioHaAceptado = false
do {
    usuarioHaAceptado = confirm('Aceptas usar JS como lenguaje para todo?')
} while (!usuarioHaAceptado)
