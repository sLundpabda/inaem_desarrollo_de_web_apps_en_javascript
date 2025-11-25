import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cpm01DataBinding } from './cpm01-data-binding/cpm01-data-binding';
import { Cmp02Directivas } from "./cmp02-directivas/cmp02-directivas";
import { Cmp3Pipes } from "./cmp3-pipes/cmp3-pipes";
import { Cmp04Informes } from "./cmp04-informes/cmp04-informes";

@Component({
  selector: 'app-root',
  imports: [ 
  // Así importo los componentes que he creado en la página: 'app.html':
    Cpm01DataBinding, 
    Cmp02Directivas, 
    Cmp3Pipes, 
    Cmp04Informes
  ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
