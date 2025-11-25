import { Component } from '@angular/core';
import { Informes } from '../../services/informes';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  informes: Array<any> = []

  // La inyección de dependencias:
  constructor(
    private informesService: Informes, // este es el token de injecciones (explicado en el .png).
  ) {}

  // Una vez inicializado el componente llamamos al servicio para guardar los informes en la cvariable Array 'informes':
  ngOnInit() {
    this.informes = this.informesService.getInformes();
  }

}
