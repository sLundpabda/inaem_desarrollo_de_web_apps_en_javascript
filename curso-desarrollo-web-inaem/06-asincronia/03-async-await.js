// ESTO NO FUNCIONA EN EL NAVEGADOR, SOLO EN NODE
import * as fs from 'fs/promises';

// UNA FUNCION ASINCRONA DEBE LLEVAR EN SUS PROMESAS UN AWAIT
const inicio = async () => {
    
    // los awaits deben estar siempre en una funcion asyncrona: (antiguamente, ahora hay nuevas versiones de node)
    let contenido = await fs.readFile('06-asincronia/files/1.txt')
    console.log(contenido.toString())

    contenido = await fs.readFile('06-asincronia/files/2.txt')
    console.log(contenido.toString())

    contenido = await fs.readFile('06-asincronia/files/3.txt')
    console.log(contenido.toString())

    console.log('FIN');
}

inicio() // llamada a la funciona asincrona

// En resumen...
// ahora se verán todas sincronas por que cada contenido esperará 
// a que este el otro, y se verán en sincronia.



