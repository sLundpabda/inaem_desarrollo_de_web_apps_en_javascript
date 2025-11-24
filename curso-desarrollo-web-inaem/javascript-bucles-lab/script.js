let azarNumero = Math.floor(Math.random() * 51)

let usuarioHaAcertado = false
let turnos = 0;
while (!usuarioHaAcertado) {
    let numeroEscogido = prompt('Dime un número (del 0 al 50)')
    if (numeroEscogido == azarNumero) {
        alert(`¡Has ganado!, con ${turnos} turno/s.`)
        const repetir = confirm('¿Quiéres volver a jugar?')
        if (!repetir) usuarioHaAcertado = true, turnos = 0, azarNumero = Math.floor(Math.random() * 51);
    } else if (numeroEscogido > azarNumero) {
        alert('El número es mayor al adivinar')
    } else {
        alert('El número es menor al adivinar')
    }
    turnos++
}



