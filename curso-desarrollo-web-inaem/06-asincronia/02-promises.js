// ESTO NO FUNCIONA EN EL NAVEGADOR, SOLO EN NODE
const fs = require('fs/promises') // es lo mismo que fs pero en vez de usar callbacks, vamos a usar promesas.

const promesa1 = fs.readFile('06-asincronia/files/1.txt')
const promesa2 = fs.readFile('06-asincronia/files/2.txt')
const promesa3 = fs.readFile('06-asincronia/files/3.txt')
console.log(promesa1) // me va a devolver una promesa.

// Las promesas solo devuelven 1 valor, ya que .then() actua como una funcion (flecha) => {}.
promesa1.then((contenido) => { // onfulfilled -> es el valor de la promesa que te devuelve.
    console.log(contenido.toString())
    return promesa2 // al hacer un return dentro de un .then, es que hacemos otra promesa después
    // return 'Esto es una promesa' // si pongo esto, se mandará al .then() de debajo.

}).then((contenido) => { // onfulfilled -> es el valor de la promesa que te devuelve.
    console.log(contenido.toString())
    return promesa3

}).then((contenido) => { // onfulfilled -> es el valor de la promesa que te devuelve.
    console.log(contenido.toString()) 

}).catch((err) => {
    console.error('Error', err.toString())

}).finally((end) => {
    console.log('FIN')
});

/* O se puede escribir esto:

).finally {
    console.log('FIN');
};*/

