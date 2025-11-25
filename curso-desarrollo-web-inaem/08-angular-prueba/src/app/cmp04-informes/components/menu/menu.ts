import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink // Internamente la directiva captura el evento, llama al preventdDefault(), y cambia la URL.
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
