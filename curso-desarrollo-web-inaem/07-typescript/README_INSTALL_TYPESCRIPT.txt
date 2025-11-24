npm init -y (crea el 📑'package.json') 
(Si falla el comando de arriba mirar el fichero en la 📂'Documentos del curso')

npm i -D typescript (descarga las dependencias de desarrollo para las librerias de typescript)

    /!\ (Por si se borra el 📑'package-lock.json' o la 📂'node_modules'): /!\
    npm i (instala las dependencias desritas en el 'package.json')

    (No es necesario subir la 📂'node_modules' a git, por eso se usa el 📜'.git_ignore')

/!\ El navegador no sabe como funciona typescript por lo que se debe compilar, que se llama transpilar (no compilar), 
    para pasarlo el ts a js para que el navegador lo entienda y se pueda ejecutar en cualquier sitio. /!\

(¡) Y para compilar un script .TS se utiliza este comando, seguido del nombre del fichero .TS:
npx tsc prueba.ts

(¡) Para poner npm run <lo que sea>, se suele cambiar de 'package.json':
Editando esta parte:
...
  "scripts": {
    "transpilar": "tsc ./intro.ts" 
  },
...

Para luego poder ejecutar este comando: npm run transpilar

// Al transpilarlo se convierte el codigo .ts a .js del 2014, por lo que queremos convertirlo a una versión moderna:
// Así que en el 📑'package.json' lo cambiamos el "scripts": { "transpilar": ... },
// a esto:
...
  "scripts": {
    "transpilar": "tsc ./intro.ts --target es2024" 
  },
...

/!\ Si quiero usar el watchdog para detectar cuando hago cambios en el programa 
   le añado una -w al final:
...
  "scripts": {
    "transpilar": "tsc ./intro.ts --target es2024 -w" 
  },
...


