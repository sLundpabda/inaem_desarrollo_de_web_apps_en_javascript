https://www.lydiahallie.com/blog/event-loop

# readme: (Explciación de como funciona el código de las imagenes)
# las partes del codigo verdes entran al event loop y cuando ya se cargan, solo las partes azules van a la pila de memoria de abajo y las verdes se van descartando despues de cargarse.
# la pila de memoria estan todas las callbacks de cada 1 de las partes de codigo azul, que se van delegando a C (el lenguaje C, ya que javascript no puede leer por si mismo datos dentro del OS)
# y cada una de esas partes espera hasta que C le responda con la respuesta del contenido ya leido,
# entonces se devuelve el dato, y se hace el console.log() inmediato.
# Por eso se ven de forma asincrona cada callback de fs.readFile(...)
