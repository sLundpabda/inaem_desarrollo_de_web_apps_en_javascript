let n = 2 // quiero una variable que sea un número~
// n = 'dos' // ahora ya no se puede cambiar el tipo de dato, ya que tiene encuenta cuando se crean asignandoselas.
n = 5

// (¡) TypeScript es JS pero con tipos de datos, js queriendo parecerse a Java.
// Así, lo que nos aporta typescript es tipado fuerte, para evitar sobreescribir variables de diferentes tipos sobre una sola variable.

// let/const <nombre_var>: <tipo_dato> = <el dato>
let nombre: string = 'Charly'
let estaActivo: boolean = false

// NO deberíamos de utilizar any
// (para saltarse el valor de los tipos):
let cualquierCosa: any = 'cualquier cosa'
cualquierCosa = 2
cualquierCosa = true

// Mirar esta página web: https://www.typescriptlang.org/
// Y esta también: https://www.w3schools.com/typescript/typescript_intro.php
// Y este: https://boardshape.com/engineering/how-we-converted-our-project-from-typescript-to-clean-javascript


// TSC 
// Transpilar

// Crear arrays en typescript:
const numeros: Array<number> = [1, 2, 3] // -> Se puede hacer como la union de tipos de abajo poniendo: Array<number | string>
const numeros2: number[] = [4, 5, 6] // -> y la union de tipos aqui es añadiendo string[] después de number[]

// Union de tipos:
let numero: number | string = 'dos'; // por defecto le pongo un string con el dato 'dos'
console.log(numero) // dos
numero = 7 // sobreescribo el numero con 'dos' a 7 como number
console.log(numero) // 7

// Declaración de la union de tipos en objetos:
const persona: { 
    // En esta parte de debajo le asigno las propiedades y sus tipos dentro del objeto:
    nombre: string,
    apellido: string,
    email: string
} = {
    nombre: 'Dabu',
    apellido: 'Wabby Hemming',
    email: 'dabuwabby@gmail.com',
    // edad: 34 // se queja por que le he dicho arriba que solo debe tener 3 propiedades.
}

// El type es para evitar tener que repetir lo mismo de arriba en ç
// cada persona para asignar sus propiedades:
type Persona = {
    nombre: string,
    apellido: string,
    email: string
}

// Y ahora podemos crear un objeto con las propiedades de Persona:
const mike: Persona = {
    nombre: 'Mike',
    apellido: 'Kozinski',
    email: 'mike@gmail.com'
}

// Esto suelen hacerlo la gente para dar más significado a la variable:
type Edad = number
const edad: Edad = 90
// Asi se sabe que edad es de tipo Edad, es como ponerle un alias a un tipo que ya existe.
// Type nos permite crear nuevos tipos.

const nulo: null = null
const indefinido: undefined = undefined


// Haciendo funciones anonimas:
// const <nombre_function_anonima> = (n1: <tipo_variable>, n2: <tipo_variable>): <tipo_variable_a_devolver_la_function> => {
//     return n1 + n2;
// }

const sumar = (n1: number, n2: number): number => {
    return n1 + n2;
}

// para decir que no devuelven (no tienen return) nada se usa void:
const saludar = (nombre: string): void => {
    console.log(`Hola, ${nombre}`);
}


// ------------------------------------------------------------------------------------------------------
// Interfaces:
type Producto = {
    id: string,
    nombre: string,
    precio: number,
    cantidad: number
}

interface CarritoCompra {
    productos: Array<Producto>,
    addProductos(p: Producto): void
}

// ahora nos creamos nuestro carrito como ejemplo:
const carrito1: CarritoCompra = {
    productos: [],
    addProductos: function(p: Producto) { // es una funcion que ahora debemos implementar
        console.log(this)
        this.productos.push(p);
        // this es aquello que está llamando a la función donde tenemos this 
        // (en este caso this es carrito1).

        // Depende de donde ejecutemos el this, es una cosa u otra:
        // En el navegador es el objeto window.

        // En node es un objeto vacío {}.
        // Cuando this esta fuera, this coge el valor root que es {} vacío.
        // Y luego esta el global

        function mostrarCarrito() {
            console.log('Dentro', this) // En este caso this es el objeto global, y ahora mismo es el objeto de node (ya que node está ejecutando está función).
        }
        // .bin() es para sobreescribir la function.
        // mostrarCarrito = mostrarCarrito.bind(this) // sobreesribe la funcion que tengo con esa misma funcion, diciendole que el this es mostrarCarrito
        mostrarCarrito = mostrarCarrito.bind(mike) // esto puede llegar a dar problemas (además es ambiguo, se hacia hace muchos años atrás)
        mostrarCarrito()

        // Ahora se suele ahcer de esta manera: (con funciones flecha)
        let mostrarCarrito2 = () => { // dentro de las funciones flecha usammos el this que hay fuera de la funcion flecha, pero en las propias funciones normales se usa el this como global.
            console.log('Dentro 2: ', this)
        }
        mostrarCarrito2()

        // Estos ejemplos nunca se hacen, solo son ejemplos para entender qeu es el this en cada situación.
    }
}

const pan: Producto = {
    id: 'abc',
    nombre: 'Pan',
    precio: 2.30,
    cantidad: 2
}

// HASTA QUE NO LE AÑADO EL PRODUCTO 'pan' SE QUEJA la clausula de abajo:
// carrito1.addProductos() // el typescript nos ayuda con el auto-completado.
carrito1.addProductos(pan) // ya añadi el producto pan

console.log('Fuera: ', carrito1)


// (¡) Información:
// los type no pueden implementar los metodos, pero si pueden tenerlas dentro. 
// Y las interfaces sí pueden implementarse los metodos y tenerlos dentro.


