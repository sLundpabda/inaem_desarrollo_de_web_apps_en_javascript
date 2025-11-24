import { Component } from '@angular/core';
import { Producto } from '../components/producto/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cpm01-data-binding',
  imports: [
    Producto,
    FormsModule // esto es algo que se utiliza para los formularios -> ngModel
  ],
  templateUrl: './cpm01-data-binding.html',
  styleUrl: './cpm01-data-binding.css',
})
export class Cpm01DataBinding {
  nombre: string = 'Ángel' // para que se vea en el parrafo con la propiedad {{nombre}}.
  urlLogo = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png'

  getNombre() {
    return this.nombre;
  }

  /*
    Para que muestre un texto junto al otro (por ejemplo) en el componente .html
    usamos {{variable}}, y para darle un valor de una propiedad
    typescript o una propiedad de un componente usamos [propiedad html] en dicha propiedad de la etiqueta html.

  */

    saludar() {
      alert(`Hola ${this.nombre}`);
    }

    mostrarHref(event: Event) { // se quejará por que event es de tipo 'any' por defecto.
      event.preventDefault()
      // console.log(event) // vemos que lleva dentro el event
      // Operador optional chaining ?.
      const datosPersona = {
        nombre: '',
        contacto: {
          email: '',
          telefono: {
            movil: '+34 666777888',
            // fijo: {
            //     numero: '999777555'
            // }
          }
        }
      }

      // En js no se queja, pero en typscript si (de todas formas funciona correctamente).
      // console.log(datosPersona.contacto.telefono.fijo?.numero) // le decimos que solo acedas al numero si fijo existe.

      // if (datosPersona.contacto.telefono 
      //   && datosPersona.contacto.telefono.fijo
      //   && datosPersona.contacto.telefono.fijo.numero)
    

      console.log(event)
      const target = event.target as HTMLAnchorElement
  
      console.log(target.href)
      // Y si fuera un boton -> HTMLButtonElement
    }

    resetNombre() {
      this.nombre = 'Ángel'
    }
}
