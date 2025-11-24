import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  producto: any = {
    titulo: 'Manzanas',
    descripcion: 'Manzanas de la huerta Viñedos Unidos',
    precio: 4.25,
    fechaLanzamiento: new Date(1980, 2, 22),
    imagenUrl: 'https://alimentosdecalidadbierzo.es/wp-content/uploads/2016/06/manzanas-verdes-rojas.jpg'
  }
}
