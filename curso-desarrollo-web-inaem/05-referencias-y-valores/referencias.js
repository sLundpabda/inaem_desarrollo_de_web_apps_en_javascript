// Aqui usamos valores fijos:
const a = 2
const b = 2
console.log(a == b) // true

// Aqui usamos referencias:
const lista1 = [1, 2, 3]
const lista2 = [1, 2, 3]
console.log(lista1 === lista2) // false

lista1.push(4)
lista2.push(5)
console.log(lista1+"->lista1")
console.log(lista2+"-> lista2")

// -----------------------------------------------------------------------------------

const lista3 = lista1 // asociamos la direccion de memoria 0x0029 de lista3 a lista1
lista3.push(6)
console.log(lista3+"-> lista3")
console.log(lista1+"-> lista1")

console.log(lista1 == lista3) // true

// Aqui copiamos una lista sin hacerla referencia a otra variable lista
// Hay varias maneras de hacerlo:
// const lista4 = [].concat(lista2) // esta manera es antigua

// Spreed operator es ==> ...<objecto> que se encarga de extraer lo que hay en un array y se lo pasa al otro ya creado
const lista4 = [...lista2] // asi se crea la lista del array
lista4.push(7)
console.log(lista4+"-> lista4")
console.log(lista2+"-> lista2")

const lista5 = [...lista2, 8, 9] // Así se pueden agregar a lista5 lo que hay en lista2 y se concatenan (se van añadiendo los siguientes datos a la lista).
const lista6 = [lista2, 8, 9] // Aquí no usamos el spreed operator.
console.log(lista5)
console.log(lista6)

/* 
 Ejercicio
 - Crear una constante yaml que sea igual a json.
 - Después modificar el nombre a Yaml.
 - Mostrar las 2 constantes, y comprobar que cada una tiene el nombre correctamente.
*/
const json = {
    nombre: 'Json',
    apellido: 'Statham'
}
// Antes de existir el spreed operator se hacia asi:
// const yaml = Object.assign({}, json) // lo que permite en un 1er objeto ir añadiendo los objetos que tienen después.

const yaml = {...json} // copio lo que hay en json a yaml.
yaml.nombre = 'Yaml'; // Al ser una lista (OBJETO) o un array no editamos la direccion de memoria, sino su contenido. Por lo que se puede modificar sus datos.

// una forma más compacta de hacer lo de arriba:
const toml = {
    ...json, 
    nombre: 'Toml'
}

console.log(yaml)
console.log(json)
console.log(toml)




