const fn1 = () => {
    return '3'
}

// Me va a dar un error ya que me devolvera un string no un numero:
const resultado: number = fn1() + 6 
console.log(resultado)


