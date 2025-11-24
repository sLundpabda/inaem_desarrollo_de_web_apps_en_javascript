// ESTO NO FUNCIONA EN EL NAVEGADOR, SOLO EN NODE (Por que se usa en sistema archivos del servidor)
// ya que el navegador no puede acceder al sistema de archivos
const fs = require('fs')
// forma asyncrona
fs.readFile('06-asincronia/files/1.txt', 'utf8', (err, contenido) => {
    console.warn(err) // --> si no hay errores, devolverá: null
    console.log(contenido.toString()) // le digo a js lo que debe hacer con el contenido
})

fs.readFile('06-asincronia/files/2.txt', 'utf8', (err, contenido) => {
    console.log(contenido.toString())
})

fs.readFile('06-asincronia/files/3.txt', 'utf8', (err, contenido) => {
    console.log(contenido.toString())
})


// forma syncrona
fs.readFile('06-asincronia/files/1.txt', 'utf8', (err, contenido) => {
    console.warn(err) // --> si no hay errores, devolverá: null
    console.log(contenido.toString()) // le digo a js lo que debe hacer con el contenido

    fs.readFile('06-asincronia/files/2.txt', 'utf8', (err, contenido) => {
        console.log(contenido.toString())

        fs.readFile('06-asincronia/files/3.txt', 'utf8', (err, contenido) => {
            console.log(contenido.toString())
        })
    })
})




console.log('FIN') // esto es para saber cuando acaba el programa de ejecutarse