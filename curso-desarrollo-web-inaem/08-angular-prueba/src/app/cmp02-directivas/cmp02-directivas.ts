import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp02-directivas',
  imports: [FormsModule], // habria que importar NgFor, pero esta @deprecado
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

