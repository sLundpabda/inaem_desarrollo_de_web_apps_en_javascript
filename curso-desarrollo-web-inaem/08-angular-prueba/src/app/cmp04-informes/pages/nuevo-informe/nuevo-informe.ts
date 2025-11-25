import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Informes } from '../../services/informes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-informe',
  imports: [
    ReactiveFormsModule // Para hacer un formulario reactivo.
  ],
  templateUrl: './nuevo-informe.html',
  styleUrl: './nuevo-informe.css',
})
export class NuevoInforme {
  // datos = {
  //   titulo: '',
  //   contenido: ''
  // }

  formInforme: FormGroup | null = null;

  constructor(
    private informesService: Informes, // simpre que usemos un servicio, vamos al constructor del componente donde lo queramos usar y lo inyectamos.
    // Y es basicamente poner private <nombre_de_la_propiedad_que_nosotros_queramos> : <nombre_del_servicio> 
    private router: Router, // injectamos el Router para poder controlar la redirección a las rutas/paths por las Pages.
  ) {}

  ngOnInit() {
    this.formInforme = this.initForm();
  }

  guardar() {
    // Dentro del FormGroup hay estos datos:
    // El touched es que se ha cogido el focus y luego lo ha perdido, y el untouched es al revés.
    // El valid y invalid es que el campo es valido o invalido.
    // El pristine es el valor por defecto, y dirty es que se ha cambiado ese valor (son lo contrario):
    // console.log(this.formInforme) // mostramos por consola el formulario para saber que tiene. (FormGroup)
    // Con estos datos podemos usarlos para decorar el elemento html con el css, ya que según lo que tenga true, tendrá diferentes clases de lo arriba mencionado.

    // Se puede hacer de 2 maneras:
    /*if (this.formInforme) {
      console.log(this.formInforme.value)
    }*/
    // console.log(this.formInforme?.value)

    const informeForm = this.formInforme?.value;
    this.informesService.addInformes(informeForm).subscribe((datos) => {
      console.log("Respuesta: ", datos)
      this.router.navigateByUrl('/inicio') // nos sirve para después de crear un informe, y se guarde entoncés te envie de nuevo al http://localhost:4200/inicio.
    })
  }

  // FORMULARIOS REACTIVOS
  private initForm() {
    // para ver como se crea el form mientras se inicializa:
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]), // el formcontrol recibe un parametro que es el valor que le quiero dar a ese campo.
      contenido: new FormControl('', [Validators.required, Validators.minLength(8)]),
      estado: new FormControl('creado'),
      usuarioId: new FormControl(1),
      fechaAlta: new FormControl(Date.now())
    })
  }
}

// Entonces un formulario reactivo lo que va a hacer es actualizar los datos según los modificamos nosotros.
