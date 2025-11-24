// esta seria la version sin defer
window.addEventListener('load', () => {
    let valorInicial = localStorage.getItem('cuenta')
    if (!valorInicial) valorInicial = 0;
    document.getElementById('cuenta').textContent = valorInicial

    const btnDec = document.getElementById('btnDecrementar')
    btnDec.addEventListener('click', () => {
        const cuenta = document.getElementById('cuenta')
        const valor = Number(cuenta.textContent) - 1
        cuenta.textContent = valor

        // Guarda el valor asociado a la clave 'cuenta' en el localStorage
        localStorage.setItem('cuenta', valor)
    })

    const btnInc = document.getElementById('btnIncrementar')
    btnInc.addEventListener('click', () => {
        const cuenta = document.getElementById('cuenta')
        const valor = Number(cuenta.textContent) + 1
        cuenta.textContent = valor

        localStorage.setItem('cuenta', valor)
    })

})

// Version con defer o con el script al final del todo
//const btnDec = document.getElementById('btnDecrementar')
//btnDec.addEventListener('click', () => {
//    const cuenta = document.getElementById('cuenta')
//    const valor = Number(cuenta.textContent) - 1
//    cuenta.textContent = valor
//})

// Para acceder al localStorage se accede desde el window
console.log(window.localStorage)

// Usamos el localStorage para guardar datos en el navegador web de forma temporal/permanente, hasta que el script js lo decida.
// Usamos el sessionStorage para guardar/almacenar datos de forma temporal hasta que se cierre el navegador web.
