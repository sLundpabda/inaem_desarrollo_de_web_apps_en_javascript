import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // para la inyección de dependencias en el componente: 'inicio.ts'.
})
export class Informes {
  getInformes() {
    return [
      {
        id: 1,
        titulo: 'El caballo blanco de Santiago',
        contenido: 'El caballo blanco de Santiago, no era blanco, era gris.',
        usuarioId: 1, // esto seria el autor
        fechaAlta: Date.now(),
        estado: 'investigando'
      },
      {
        id: 2,
        titulo: 'El niño vampiro sale de la cueva',
        contenido: 'Trás 1900 años encerrado en la cueva, se ha descubierto que por las noches si que salia.',
        usuarioId: 1, // esto seria el autor
        fechaAlta: Date.now(),
        estado: 'cerrado'
      }
    ]
  }
}

// Los servicios sson clases en las que nosotros vamos a poder añadir methods/métodos que usualmente 
// usamos para interactuar con APIs.
//
// También podemos poner: si hay alguna logica entre varios componentes se puede duplciar, 
// se puede tener en 1 solo servicio todo centralizada.
// Este tipo de logica que no es propio de un componente sino de varios componentes, podemos llevarla a un servicio.
//