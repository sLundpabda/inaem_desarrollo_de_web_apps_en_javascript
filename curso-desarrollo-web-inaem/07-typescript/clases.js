"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
/*
let n: number = 2
BigInt

'2025-10-12' -> 2025, 10, 12
 split() para trocearlo y sacar cada dato para luego convertirlo en un Date.
*/
const fechSeparada = '2025-10-12'.split('-');
const year = fechSeparada[0];
const month = fechSeparada[1];
const day = fechSeparada[2];
const fechJS = new Date(Number(year), Number(month), Number(day));
console.log(fechJS);
// CLASES EN TYPESCRIPT: 
// (Es una plantilla en la cual voy a crear objetos de ese mismo tipo)
class Suscripcion {
    nombre;
    _email;
    tyc;
    publi;
    datos;
    timestamp;
    _id;
    // Main builder:
    constructor(
    // public id: string,  
    nombre, _email, // cuando se pone privado es para campos que solo se vayan a cambiar dentro de la clase.
    tyc, publi, datos, timestamp = Date.now()) {
        this.nombre = nombre;
        this._email = _email;
        this.tyc = tyc;
        this.publi = publi;
        this.datos = datos;
        this.timestamp = timestamp;
        this._id = (0, uuid_1.v4)();
    }
    // Getters & Setters:
    get email() {
        return this._email;
    }
    set email(emailNuevo) {
        this.email = emailNuevo;
    }
    // nos sirve para saber cuantos dias han pasado desde que nos suscribimos:
    getDiasSuscrito() {
        const timestampActual = Date.now();
        const diferenciaDeMs = timestampActual - this.timestamp;
        const dias = diferenciaDeMs / (3600000 * 24);
        // const dias = diferenciaDeMs / 86400000;
        return dias;
    }
}
const suscripcionAngel = new Suscripcion('Ángel', 'angel@gmail.com', true, true, false, new Date(2025, 10, 18, 19).getTime());
console.log(suscripcionAngel.nombre);
const suscripcionesNewsletter = [];
// Ejercicio: añadir 3 suscripciones en la lista 'suscripcionesNewsletter':
const suscripcionDaniel = new Suscripcion('Daniel', 'daniel@gmail.com', 
//Date.now(),
false, true, true, Date.now());
const suscripcionMarta = new Suscripcion('Marta', 'marta@gmail.com', 
//Date.now(),
false, true, false);
suscripcionesNewsletter.push(suscripcionAngel, suscripcionDaniel, suscripcionMarta);
console.log(suscripcionesNewsletter);
console.log(suscripcionAngel.getDiasSuscrito());
console.log(suscripcionMarta.getDiasSuscrito());
