// window es el padre de todos, pero se pueden poner sin usar window como inicial
console.log(`${window.screen.height} de alto y ${screen.width} de ancho.`) // un ejemplo es screen.width

console.log(location) // nos devuelve donde nos encontramos mediante un Object.

console.log(history) // nos permite ver el historial
// history.back()
// history.forward()

console.log(navigator) // nos da la información en Object del navegador web

const mostrarPosicion = (posicion) => {
    // console.log(posicion) // te devuelve todo el objeto del navigator.geolocation.getCurrentPosition
    console.log(`Te encuentras en latitud: ${posicion.coords.latitude}. longitud: ${posicion.coords.longitude}`)
}

navigator.geolocation.getCurrentPosition(mostrarPosicion) // recibe un callback, 
/* Que es una funcion que le pasamos por parametro, pero es js (a quien delegamos que ejecute la función) 
   quien lo ejecuta y me devuelve el resultado. */

// navigator.getBattery() // me devuelve el nivel de batería del dispositivo/ordenador (suele funcionar en portatiles)

const mostrarTitulo = () => {
    const contenedor = document.createElement('div')

    const titulo = document.createElement('h1')
    // titulo.textContent = 'Hola mundo\n'
    const text = document.createTextNode("Hola mundo!!!")
    titulo.style = 'color: #9b5595ff;'
    titulo.appendChild(text)

    contenedor.appendChild(titulo)

    const body = document.getElementsByTagName('teppha')[0] // le digo que coja el primero, si es que hay mas bodys en el documento html.
    // console.log(body)
    body.appendChild(contenedor)
}

mostrarTitulo();
