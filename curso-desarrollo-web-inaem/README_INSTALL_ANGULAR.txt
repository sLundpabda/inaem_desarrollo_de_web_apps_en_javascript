Desde la terminal de PS, escribimos (en el directorio raíz que queramos instalarlo, para que sea a nivel global):
 npm i -g @angular/cli
 // Angular/CLI es una herramienta para instalar utilidades en console/terminal para angular.
(la -g es nivel global, para que se puede ejecutar el angular en cualquier sitio)

Y ahora para crear un proyecto de angular nuevo escribimos esto:
 ng new 08-angular
 > Nos preguntara unas cosas, estas son las respuestas a dar:
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

Donde pone 'selector:' en 'app.ts', es el nombre de la etiqueta del componente, 
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

