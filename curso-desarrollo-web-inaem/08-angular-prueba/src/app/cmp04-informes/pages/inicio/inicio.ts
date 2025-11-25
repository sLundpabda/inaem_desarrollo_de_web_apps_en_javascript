import { Component } from '@angular/core';
import { Informes } from '../../services/informes';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [
    AsyncPipe
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  informes: Array<any> = []
  informes$: Observable<any> = new Observable()

  // La inyección de dependencias:
  constructor(
    private informesService: Informes, // este es el token de injecciones (explicado en el .png).
  ) {}

  // Una vez inicializado el componente llamamos al servicio para guardar los informes en la cvariable Array 'informes':
  ngOnInit() {
    //this.informes = this.informesService.getInformes();
    // console.log('PASA POR AQUI')
    this.informes$ = this.informesService.getInformes()
    // .subscribe((datos: any) => {
    //   // console.log('Datos: ', datos)
    //   this.informes = datos;
    // })
  }

}
