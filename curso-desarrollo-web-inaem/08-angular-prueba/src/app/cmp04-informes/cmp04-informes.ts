import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router"; // A VECES LO IMPORTA MAL.
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-cmp04-informes',
  imports: [
    RouterOutlet,
    Menu
  ],
  templateUrl: './cmp04-informes.html',
  styleUrl: './cmp04-informes.css',
})
export class Cmp04Informes {

}
