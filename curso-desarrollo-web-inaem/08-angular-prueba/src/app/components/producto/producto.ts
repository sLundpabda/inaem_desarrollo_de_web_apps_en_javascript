import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [
    CurrencyPipe, 
    DatePipe, // hace que la fecha se vea más legible (según el formato que le pongas en el .html del producto).
    TitleCasePipe // hace que la primera letra de cada palabra vaya en mayuscula.
  ],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  producto: any = {
    titulo: 'Manzanas',
    descripcion: 'Manzanas De la huerta viñedos Unidos',
    precio: 4.25,
    fechaLanzamiento: new Date(1980, 2, 22),
    imagenUrl: 'https://alimentosdecalidadbierzo.es/wp-content/uploads/2016/06/manzanas-verdes-rojas.jpg'
  }
}


// En el pipe del 'titlecase':
// El pipe se ejecuta solo cuando el titulo cambia, ya que recuerda el valor anterior y no se ejecuta.

// Tambien esta el 'uppercase' y el 'lowercase' de pipes para usar (hay más en el documento que nos paso Ángel).

// Link para aprender de los PIES en Angular 19: 
// dev.to/cristian_arieta_7df932e5f/que-son-los-pipes-en-angular-y-como-usarlos-1iek


