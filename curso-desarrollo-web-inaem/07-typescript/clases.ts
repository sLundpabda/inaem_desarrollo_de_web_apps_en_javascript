import {v4 as uuidV4} from 'uuid';

/*
let n: number = 2
BigInt

'2025-10-12' -> 2025, 10, 12
 split() para trocearlo y sacar cada dato para luego convertirlo en un Date.
*/
const fechSeparada = '2025-10-12'.split('-')
const year = fechSeparada[0]
const month = fechSeparada[1]
const day = fechSeparada[2]

const fechJS = new Date(Number(year), Number(month), Number(day))
console.log(fechJS);


// CLASES EN TYPESCRIPT: 
// (Es una plantilla en la cual voy a crear objetos de ese mismo tipo)

class Suscripcion {
    private _id: string


    // Main builder:
    constructor(
        // public id: string,  
        public nombre: string, 
        private _email: string,  // cuando se pone privado es para campos que solo se vayan a cambiar dentro de la clase.
        public tyc: boolean,
        public publi: boolean,
        public datos: boolean,
        public timestamp: number = Date.now(),
    ) {
        this._id = uuidV4()
     }

    // Getters & Setters:
    get email() {
        return this._email;
    }

    set email(emailNuevo) {
        this.email = emailNuevo;
    }

    // nos sirve para saber cuantos dias han pasado desde que nos suscribimos:
    getDiasSuscrito(): number {
        const timestampActual = Date.now()
        const diferenciaDeMs = timestampActual - this.timestamp
        const dias = diferenciaDeMs / (3600000 * 24);
        // const dias = diferenciaDeMs / 86400000;
        return dias;
    }
}  

const suscripcionAngel = new Suscripcion(
    'Ángel', 
    'angel@gmail.com', 
    true,
    true,
    false,
    new Date(2025, 10, 18, 19).getTime(), // le estoy diciendo que me suscribi hace 2 dias a las 7PM.
)

console.log(suscripcionAngel.nombre)

const suscripcionesNewsletter: Array<Suscripcion> = []

// Ejercicio: añadir 3 suscripciones en la lista 'suscripcionesNewsletter':

const suscripcionDaniel = new Suscripcion(
    'Daniel', 
    'daniel@gmail.com', 
    //Date.now(),
    false,
    true,
    true,
    Date.now(),
)
const suscripcionMarta = new Suscripcion( 
    'Marta', 
    'marta@gmail.com', 
    //Date.now(),
    false,
    true,
    false,

)

suscripcionesNewsletter.push(suscripcionAngel, suscripcionDaniel, suscripcionMarta)
console.log(suscripcionesNewsletter)

console.log(suscripcionAngel.getDiasSuscrito())
console.log(suscripcionMarta.getDiasSuscrito())




