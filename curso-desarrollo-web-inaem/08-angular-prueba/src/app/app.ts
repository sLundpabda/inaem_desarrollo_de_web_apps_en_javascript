import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cpm01DataBinding } from './cpm01-data-binding/cpm01-data-binding';
import { Cmp02Directivas } from "./cmp02-directivas/cmp02-directivas";
import { Cmp3Pipes } from "./cmp3-pipes/cmp3-pipes";

@Component({
  selector: 'app-root',
  imports: [Cpm01DataBinding, Cmp02Directivas, Cmp3Pipes], // asi importo el cmponente que he creado
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
