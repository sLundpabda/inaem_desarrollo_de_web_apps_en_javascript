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
sessionStorage.setItem('hola_mundo', '¡Hola, mundo!')
console.log(window.sessionStorage)


/* 
Y para crear cookies, se suele usar PHP pero en JS tambien se puede hacer: 
  document.cookie = "tema=oscuro; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/";
*/

// Esto es para crear la cookie:
function setCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
  const expira = "expires=" + fecha.toUTCString();
  document.cookie = `${nombre}=${valor}; ${expira}; path=/`;
}

setCookie("tema", "oscuro", 7); // 7 days expires

// Esto es para leer la cookie:
function getCookie(nombre) {
  const cname = nombre + "=";
  const decoded = decodeURIComponent(document.cookie);
  const cookies = decoded.split(';');
  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return null;
}

console.log("Cookie usuario: ", getCookie("tema"));

// Esto es para borrar la cookie:
function borrarCookie(nombre) {
  document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// borrarCookie("tema");

