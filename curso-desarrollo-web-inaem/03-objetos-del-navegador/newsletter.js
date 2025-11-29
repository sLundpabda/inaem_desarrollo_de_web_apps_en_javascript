// Selector de CSS
// De etiqueta -> form
// De id -> #nombre
// De clase -> .check
// Checkboxes marcados -> input[type="checkbox"]:checked

const suscripcionesKey = "suscripciones";
const formulario = document.querySelector('form') // funciona pasandole un selector de css
console.log(formulario)

/* METODO DE PINTAR TABLAS BÁSICO (VIEJO)

const pintarSuscripcionEnTabla = (suscription_data) => {
    const tbody = document.querySelector('table > tbody');
    const fila = document.createElement('tr')
    
    const celdaNum = document.createElement('td')
    celdaNum.textContent = suscription_data.num

    const celdaNombre = document.createElement('td')
    celdaNombre.textContent = suscription_data.nombre
    
    const celdaEmail = document.createElement('td')
    celdaEmail.textContent = suscription_data.email
    
    const celdaTyC = document.createElement('td')
    celdaTyC.textContent = suscription_data.tyc ? '✔' : '✖'
    
    const celdaPubli = document.createElement('td')
    celdaPubli.textContent = suscription_data.publi ? '✔' : '✖'
        
    const celdaDatos = document.createElement('td')
    celdaDatos.textContent = suscription_data.datos ? '✔' : '✖'

    const fechaSuscripcion = new Date(suscription_data.fechaSuscripcion);
    const celdaFecha = document.createElement('td')
    celdaFecha.textContent = fechaSuscripcion.toLocaleString()

    fila.appendChild(celdaNum)
    fila.appendChild(celdaNombre)
    fila.appendChild(celdaEmail)
    fila.appendChild(celdaTyC)
    fila.appendChild(celdaPubli)
    fila.appendChild(celdaDatos)
    // -----------------------------------------------------------------------------------
    fila.appendChild(celdaFecha)

    tbody.appendChild(fila)

    // const celdaTotal = document.getElementById('totalSuscripciones')
    // celdaTotal.textContent = suscription_data.num
    actualizarTotalSuscripciones(suscripciones.num)
}*/

// metodo primero mejorado como segundo
const pintarSuscripcionesEnTabla = () => {
    const tbody = document.querySelector('table > tbody')
    const filasSuscripciones = suscripciones.map((suscripcion, index) => {
        return `<tr>
            <td>${index+1}</td>
            <td>${suscripcion.num}</td>
            <td>${suscripcion.nombre}</td>
            <td>${suscripcion.email}</td>
            <td>${new Date(suscripcion.fechaSuscripcion).toLocaleString()}</td>
            <td><span>${suscripcion.tyc ? '✔️' : '❌'}</span></td>
            <td><span>${suscripcion.publi ? '✔️' : '❌'}</span></td>
            <td><span>${suscripcion.datos ? '✔️' : '❌'}</span></td>
            <td class="buttons"><button type="button" class="btnDelete" data-id="${suscripcion.num}">🗑️</button><button type="button" class="btnEditar" data-id="${suscripcion.num}">📝</button></td>
        </tr>` // Ponemos un data-(lo_que_sea) para guardarlo en un dataset y acceder después.
    })
    // ponemos el new Date(suscripcion.fechaSuscripcion).toLocaleString()) para convertir el formato de timestamp a una fecha y hora entendible para humanos.

    tbody.innerHTML = filasSuscripciones.join('')

    addListenerBotonesEliminar() // para eliminar solo la fila necesaria

    actualizarTotalSuscripciones(suscripciones.length)
}

const actualizarTotalSuscripciones = (total) => {
    const celdaTotal = document.getElementById('totalSuscripciones')
    celdaTotal.textContent = total
}

// Para guardar los datos del array suscripciones en el LocalStorage
const anyadirSuscripciones = (suscripcion) => {
    /* let suscripcionesEnStorage = localStorage.getItem(suscripcionesKey)
     if (!suscripcionesEnStorage) {
         suscripcionesEnStorage = []
     } else { 
         suscripcionesEnStorage = JSON.parse(suscripcionesEnStorage)
     } */

    let suscripcionesEnStorage = getSuscripciones()
    suscripcionesEnStorage.push(suscripcion)
    localStorage.setItem(suscripcionesKey, JSON.stringify(suscripcionesEnStorage))

    // const tbody = document.querySelector('table > tbody');
    // tbody.appendChild()

    return suscripcionesEnStorage
}

const getSuscripciones = () => {
    let suscripcionesEnStorage = localStorage.getItem(suscripcionesKey)
    if (!suscripcionesEnStorage) {
        suscripcionesEnStorage = []
    } else { 
        suscripcionesEnStorage = JSON.parse(suscripcionesEnStorage)
    }

    return suscripcionesEnStorage
}

// es una función que le vamos a pasar una posicion y tiene que obtener todas las suscripciones de un array y de ese array eliminar el que le estamos pasando aquí, para luego guardarlo en suscripciones y que se actualice la tabla.
const eliminarSuscripcion = (posicion) => {
    let listaSuscripciones = getSuscripciones()
    console.log(posicion)

    // Quitamos el elemento de la lista que se encuentra en la posición dada:
    // listaSuscripcion.splice(posicion, 1)
    listaSuscripciones = listaSuscripciones.filter((suscripcion) => {
        return suscripcion.num !== posicion
    })

    localStorage.setItem(suscripcionesKey, JSON.stringify(listaSuscripciones))
    console.log(listaSuscripciones)

    // Quitar la fila de la suscripcion eliminada 
    const filaAEliminar = document.querySelector(`button[data-id="${posicion}"]`).parentNode.parentNode
    document.querySelector('table > tbody').removeChild(filaAEliminar)

    actualizarTotalSuscripciones(listaSuscripciones.length)

    return listaSuscripciones
}

const addListenerBotonesEliminar = () => {
    const botonesEliminar = document.querySelectorAll('.btnDelete')
    
    botonesEliminar.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log(btn.dataset.id) // el dataset te devuelve un objeto con las claves que hay después del data- (guión) en el HTML
            const posicionSuscripcion = btn.dataset.id
            suscripciones = eliminarSuscripcion(posicionSuscripcion)
            
            pintarSuscripcionesEnTabla()
        })
    })
}


// const suscripciones = [];
let suscripciones = getSuscripciones()
pintarSuscripcionesEnTabla()


formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('Se ha enviado el formulario')
    console.log(event.target.elements) // es el evento submit, ahi me salen todos los datos del formulario a enviar
    const campos = event.target.elements

    const nombre = campos.nombre.value
    const email = campos.email.value
    const publi = campos.publi.checked
    const tyc = campos.tyc.checked
    const datos = campos.datos.checked

    // Check values:
    if (nombre.trim().length === 0 && email.trim().length === 0) {
        console.log('Void strings for name and email.');
        return;
    }

    // Suscription object:
    const suscripcion = {
        id: 0, // se usará para el ID universal
        email: email,
        nombre: nombre,
        publi: publi,
        tyc: tyc,
        datos: datos,
        num: uuidv4(),
        fechaSuscripcion: Date.now(), // lo creamos como timestamp para que al mandarlo a la DB sea más fácil su uso.
    }
    console.log(suscripcion) // nos dara el objeto suscripcion

    // Añade la suscripcion al principio del array de suscripciones
    // suscripciones.push(suscripcion)
    suscripciones = anyadirSuscripciones(suscripcion) // para guardarlo en el LocalStorage.

    // Añade la susripcion al principio del array de suscripciones
    // suscripciones.unshift(suscripcion)

    // pintarSuscripcionEnTabla(suscripcion)
    pintarSuscripcionesEnTabla()

    // Reseteamos el formulario (para dejarlo vacio espués de hacer un submit con datos a enviar)
    formulario.reset()
})


// Para comentar atajo: Ctrl+K + Ctrl+C
// Para descomentar atajo: Ctrl+K + Ctrl+U