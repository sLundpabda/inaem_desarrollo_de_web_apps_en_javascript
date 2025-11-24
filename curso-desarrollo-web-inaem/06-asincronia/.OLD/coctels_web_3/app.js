const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const API_URL_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const buscarCocktails = async (filtro) => {
    // TODO: hacer peticion a la API para obtener la lista de cocktails
    const response = await fetch(`${API_URL}${filtro}`)
    console.log(response)
    
    // el .json() devuelve otra promesa
    const data = await response.json() // quiero que me devuelvas los datos en json -> para convertirlos en objeto de JS.
    console.log(data)

    return data.drinks // cada vez que hacemos un return dentro de una funcion async, esta parte se convierte en promesa.

    // Ejemplo del objeto que necesitabamos:
    // return [
    //     {
    //         idDrink: 11007,
    //         strDrink: 'Margarita',
    //         strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
    //     }
    // ]
};

const pintarCocktails = (cocktails) => {
    const listado = document.querySelector('#listadoCocktails')

    const listaCocktailsHtml = cocktails.map((cocktail) => {
        return `<li id="${cocktail.idDrink}">
            <span>
                <img src="${cocktail.strDrinkThumb}" width="150" alt="Imagen de ${cocktail.strDrink}"></img>
                <p>${cocktail.strDrink}</p>
            </span>
            <button class="btnIdDrink" type="button">📋</button>
        </li>`
    });
    listado.innerHTML = listaCocktailsHtml.join('') 

    pintarSinResultados('') // lo pinta vacio para que no se vea

    // ---------------------------------------------------------------------------------------------------------------------------
    const btnAlertInstrucciones = document.querySelectorAll('.btnIdDrink') // 'li>button'<<-- (!) ¡así erá antes!
    
    btnAlertInstrucciones.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
            const idDrink = btn.parentNode.id // el parent del boton es el elemento <li> al que debo acceder.
            console.log(idDrink)
            buscarInstrucciones(idDrink)
        })
    })

}

const pintarSinResultados = (data) => {
    const listado = document.querySelector('#contenedorCocktails p');
    const sinResultadosHtml = (datos) => {
        return `${datos}`;
    };

    listado.innerHTML = sinResultadosHtml(data); 
    console.log('Dentro: ', data)

    if (data === '') {
        const listado = document.querySelector('#listadoCocktails')

        const listaCocktailsHtml = () => {
            return ``;
        };
        listado.innerHTML = listaCocktailsHtml.join('') 
    }
};

const buscarInstrucciones = async (petition) => {
    const response = await fetch(`${API_URL_ID}${petition}`)
    const data = await response.json();
    // console.log(data.drinks[0]) // solo se usa para debugging de lo que devuelve la API de cockteles.

    let descripciones = data.drinks[0].strInstructionsES;
    if (descripciones !== null) {
        alert(descripciones)
    } else {
        descripciones = data.drinks[0].strInstructions;
        alert(descripciones)
        // alert("No se han encontrado instrucciones...")
    }

}

// ---------------------------------------------------------------------------------------*

const formulario = document.querySelector('#buscador')
formulario.addEventListener('submit', async (event) => { // importante poner event
    event.preventDefault() // para evitar que se refresque la pagina web al hacer el submit en el formulario de dentro.
    console.log(formulario.elements.filtro.value)

    const cocktailABuscar = formulario.elements.filtro.value

    // ahora que hemos devuelto un dato en buscarCocktails, ahora es una promesa:
    const cocktails = await buscarCocktails(cocktailABuscar) // con los cockteles ya obtenidos llamamo a pintarCocktails()
    // console.log("Respuesta API: ", cocktails)

    if (cocktails !== null) {
        pintarCocktails(cocktails)
    } else {
        pintarSinResultados('Sin resultados')
    }
})


/*
EJERCICIO: [YA HECHO AL TERMINAR LA CLASE, ME AYUDO ANGEL(EL PROFESOR) A ACABARLO, MIENTRAS MI PADRE ESPERABA PARA IRNOS] 18/11/2023 - 21:10 CET. 

- Poner un botón al lado de cada cocktail.
- Obtener del HTML el id correspondiente a dicho cocktail.
- Al pulsar el botón, hay que hacer una petición a la URL:
 -- https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=<id>
- De los datos recibidos, coger "strInstructionsES" y mostrarlas en un alert

*/


// console.log(window.innerWidth) para saber el anchura
// console.log(window.innerHeight) para saber el altura
