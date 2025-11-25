Desde la terminal de PS, escribimos (en el directorio raíz que queramos instalarlo, para que sea a nivel global):
 npm i -g @angular/cli
 // Angular/CLI es una herramienta para instalar utilidades en console/terminal para angular.
(la -g es nivel global, para que se puede ejecutar el angular en cualquier sitio)

Y ahora para crear un proyecto de angular nuevo escribimos esto:
 ng new 08-angular
 > Nos preguntará unas cosas, estas son las respuestas a dar:
    n
    CSS
    n
    none
    [y le damos a Enter]

Entonces se descargaran e instalaran lo elegido de Angular en dicho proyecto con nombre de carpeta: '08-angular

Para encender el servidor de angular 21:
 ng s // -> Levanta el servidor por el puerto :4200
 o: ng serve = npm start
(Está todo en el 'package.json')


Cuando trabajamos por Angular debemos tener 4 archivos por componente CREADO!!!:
  - el html
  - el CSS
  - el TypeScript
  - y el de testing

El componente root es el <app-root> del index.html en Angular.
Y el html siempre va asociado a un typescript.

Donde pone 'selector:' en 📄'app.ts', es el nombre de la etiqueta del componente, 
ya que cada vez que creamos un componente creamos una nueva etiqueta 
HTML para dicho componente.

En 'imports:' donde poner RoutedOutlet se quita y el signal que hay dentro de:
export class App {
   ... // esto se debe quedar vacío.
}

Para usar el comando siguiente se debe estar en la carpeta del proyecto de angular, sino no va.
 cd .\08-angular\
Para crear un componente se harán carpetas nuevas por cada componente para tener un mejor orden.
 ng g c cpm01-data-binding

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Standalone: Es que se instalan los componentes por medio de otros.
// API material angular: https://material.angular.dev/components/button/api#MatButton
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


(¡) CREACIÓN DE PIPES PROPIAS: (¡)
Para crear un PIPE propio vamos a la carpeta root del proyecto Angular 
 ('08-angular' -> Ahora llamado: '08-angular-prueba'):

Y en el terminal ponemos esto:
 ng g p cmp03-pipes/pipes/to-icon

(¡) Esto crea 2 archivos (uno de testing y otro que es el typescript)


// ---------------------------------------------------------------------------------------
[17:56 hrs]
Ahora vamos a hacer un ejercicio de informes:
 ng g c cmp04-informes
 
Para crear varios Pages como componentes:
 ng g c cmp04-informes/pages/inicio
 ng g c cmp04-informes/pages/nuevo-informe
 ng g c cmp04-informes/components/menu  --> Este va a estar en la carpeta de Components, por que no es un Page.

Y ahora vamos a 'app.routes.ts' -> Aquí definimos las rutas/paths de la aplicación.
 Routes es un array de rutas, que principalmente tiene el 'path' que es un string, 
 y lo siguiente es el 'component' que queremos pintar.

 export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'nuevo-informe', component: NuevoInforme }
];

Y ahora nos vamos al HTML del componente 4: 'cmp04-informes'

[18:38 hrs]
Ahora vamos a crear un ⚙servicio:
 ng g s cmp04-informes/services/informes


Y ahora creamos la carpeta 📁'09-api-informes':
 cd .\09-api-informes
 npm init -y
 npm i -D json-server  --> Instalamos esta libreria que hara de mini backend.

Ahora ir al 📄'package.json' y cambiar esta parte:
  "scripts": {
    "start": "json-server -w db.json"
  },

// El '-w' es el watchdog.


Después de configurar el fichero 📄'db.json'
Vamos a ejecutar este comando:
 npm start


