const fecha = new Date()
console.log(fecha)


// 0 -> Enero
// 1 -> Febrero
// ...
// 11 -> Diciembre
const fecha1 = new Date(2000, 0, 23, 1, 0)
console.log(fecha1.getTime()) // Obtienes el timestamp de fecha1.


const timestamp = Date.now() // el Date.now() te devuelve el timestamp actual.
console.log(timestamp) // el timestamp es la mejor forma de poder usar la Date para cambiar sus datos.
const fechaActual = new Date(timestamp);

// Se puede formatear en otros tipos de datos la Date:
console.log(fechaActual.toUTCString())
console.log(fechaActual.getFullYear())
console.log(fechaActual.getMonth())
console.log(fechaActual.getDate())
console.log(fechaActual.getHours())
console.log(fechaActual.getMinutes())
console.log(fechaActual.getUTCMilliseconds())
console.log(fechaActual.toLocaleString())

// PL-900 Microsoft:
// https://gkspain.learnondemand.net/User/CurrentTraining/5174094
