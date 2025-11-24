import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-cmp02-directivas',
  imports: [FormsModule, NgClass], // habria que importar NgFor, pero esta @deprecado
  templateUrl: './cmp02-directivas.html',
  styleUrl: './cmp02-directivas.css',
})
export class Cmp02Directivas {
  animales: Array<string> = [
    'tortuga',
    'periquito',
    'langosta',
    'conejo'
  ]

  suscripciones: Array<any> = []

  // se ejecuta cuando se inicia el componente:
  ngOnInit() {
    console.log('Se acaba de inicializar el componente')
    // le digo que si el localStorage suscripciones es null (por que no existe), entonces me haces un string con [] array para que me lo parsees como un array vacio.
    this.suscripciones = JSON.parse(localStorage.getItem('suscripciones') || '[]')
  }

  usuarioValido: any = {
    username: 'angel1234',
    password: '1234',
    rol: 'premium'
  }
  estasAutenticado: boolean = false
  username: string = ''
  password: string = ''

  login() {
    if (this.usuarioValido.username == this.username
      && this.usuarioValido.password == this.password)
    {
      this.estasAutenticado = true
    }
  }
}

