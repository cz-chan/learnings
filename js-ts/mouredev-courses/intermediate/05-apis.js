process.loadEnvFile(); // esto es para la importación en JS de las .env variables
/**
 * APPLICATION PROGRAMMING INTERFACES - APIs
 * 
 * Las APIs son formas en las que las aplicaciones se pueden conectar entre sí a través de protocolos
 * seguros y que siguen unos estandares fijos
 */


/**
 * API REST
 * 
 * No todas las APIs son iguales. La más utilizada es API REST (RESTFULL)
 * 
 * Se caracterizan por usar protocolo web HTTP + URLs +JSON
 */

/**
 * MÉTODO HTTP
 * 
 * Los método HTTP son: 
 *  - GET: solicita los datos
 *  - POST: sirve para enviar datos que van a crear nuevos recursos
 *  - PUT: sirve, por lo general, para enviar datos pero actualizarlos
 *  - DELETE: para eliminarl recursos
 * 
 * Códigos de respuesta:
 *  Todo ok: 2**
 *  - 200 OK: indica que ha sido exitoso
 *  - 201: ha ido todo bien y el recurso se ha creado
 *  - por lo general, los 200 es que ha ido bien la cosa
 * -- -- --
 * 
 *  Errores de cliente 4**
 *  - 400: ha habido un error por parte del cliente
 *  - 404: algo no encontrado. no se ha encontrado el recurso
 * -- -- --
 * 
 *  Errores de servidor: 5**
 *  - 500: error en el lado del servidor
 * 
 * Cómo funciona:
 *  
 */


/**
 * MÉTODO GET
 * 
 * La opoeración nativa de JS para consumir apis es fetch()
 */


// api de ejemplo
fetch( "https://jsonplaceholder.typicode.com/posts" )
  .then( resp => {
    // console.log( resp ); // esta es la respuesta del servidor pero para obtener los datos lo que necesitas de esa respuesta es el JSON pq en la api hay un json
    // en este primer procesamiento de datos necesitas 1º transformar los datos a json pero después RETORNARLA
    return resp.json() // una vez retornada es cuadno con el .then(data => ...) vas a poder acceder a los datos
  } )
  .then( data => {
    console.log( data );
  } )
  .catch( err => {
    console.log( err );
  }
  )



/**
 * ASYNC/AWAIT con APIs
 * 
 * 
 */

// se ejecuta antes el getUsers() pq solo son 10 objetos mientras que los post son 100 por lo que el primero que acabe, primero se muestra aunque se haya llamado después
async function getUsers () {
  try {
    const resp = await fetch( "https://jsonplaceholder.typicode.com/users" )
    const data = await resp.json()
    // hay que hacer await de ambos, tanto de la data como de la resp
    console.log( data );

  } catch ( err ) {
    console.log( err );

  }
}
getUsers()

/**
 * POST METHOD
 * 
 * Inserta un post
 */

async function createPost () {
  try {

    // el formato del post viene de la propia api, de la forma en la que está construida
    const newPost = {
      userId: 1,
      title: "Titulo del post",
      body: "Body del post"
    }

    // la resp es la petición
    const resp = await fetch( "https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // método que quieres que ejecute el fetch
      headers: { // la forma en la que quieres que interacture el contenido
        "Content-Type": "application/json"
      },
      body: JSON.stringify( newPost ) // son los datos que le envias al servidor en formato JSON. el JSON.stringyfy lo que hace es transformar un formato de js a uno de JSON que la api entiende
    } )

    // invocación del POST

    const data = await resp.json()
    console.log( data );

  } catch ( err ) {
    console.log( err );

  }
}

createPost()


/**
 * HERRAMIENTAS PARA HACER PETICIONES HTTP
 * 
 * POSTMAN.COM
 * APIDOG.COM
 * 
 */

/**
 * MANEJO DE ERRORES
 * 
 * 
 */



fetch( "https://jsonplaceholder.typicode.com/chemadev" )
  .then( resp => {
    if ( !resp.ok ) { // el ok es un boolean que todas tienen y que te dice si todo ha ido bien, es decir, es un status === 200, todo lo qeu nosea esto, será un false lo que llevará en este caso a el throw new Error()
      throw new Error( `Error HTTP: ${ resp.status }` );
    }
    return resp.json()
    console.log(

      "pending", resp ) // esto da como error 404 sin embargo no llega al catch
    // esto pasa pq la respuesta HA SIDO CAPAZ DE LLEGAR AL SERVIDOR y aunque este no tenga nada con dicha respuesta, devuelve un 404, una respuesta de error pero una respuesta. significa que el servidor ssí ha respondido
    // lo que buscas también al pedir la response no solo es la response en sí sino el código que tenga. quieres un código tipo 200
  } )
  // .then( data => {
  //   console.log( data );
  // } )
  .catch( err => {
    console.log( err );
    // de esta forma si hay un error, nunca llega al catch pq la api responde un 404 pero no salta el error
  }
  )


/**
 * MÉTODOS ADICIONALES
 * 
 *  - PATCH: permite actualizar PARCIALMENTE un elemento. Con un PUT actualizas el recurso 
 * completo, con un PATCH tan solo una parte
 *  - OPTIONS: permite saber qué métodos HTTP están permitidos para un recurso
 */

// PARTIAL POST UPDATE

async function partialPostUpdate () {
  // solo quiero actualizar el título (por lo que no le paso el post completo)
  try {

    // el formato del post viene de la propia api, de la forma en la que está construida
    // const newPost = {
    //   userId: 1,
    //   title: "Titulo del post",
    //   body: "Body del post"
    // }
    const newTitle = { title: "Este es el nuevo título del post" }

    // numero del post a actualizar
    const postNumber = 1

    // la resp es la petición
    const resp = await fetch( `https://jsonplaceholder.typicode.com/posts/${ postNumber }`, {
      method: "PATCH", // es una actualización parcial
      headers: { // la forma en la que quieres que interacture el contenido
        "Content-Type": "application/json"
      },
      body: JSON.stringify( newTitle ) // son los datos que le envias al servidor en formato JSON. el JSON.stringyfy lo que hace es transformar un formato de js a uno de JSON que la api entiende
    } )

    // invocación del POST

    const data = await resp.json()
    console.log( data );

  } catch ( err ) {
    console.log( err );

  }
}

partialPostUpdate()


/**
 * AUTENTICACIÓN
 *
 * Por lo general, siempre van a haber alguna forma de autenticarse, ya sea con loging, con API_KEYs
 * u otros métodos.
 *
 * Acceder a APIs tan sencillo sin autenticación suele ser para hacer pruebas o para aprender,
 * nunca se hace de manera tan sencilla en las reales. Se caeria
 *
 */

// Authentication with API_KEY: from openweathermap.org


// https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}


// city = "orihuela"
// console.log( authBaseURL );

async function getWeather ( city ) {
  const baseOwUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ process.env.OPEN_WEATHER_API_KEY }`
  // const apiKeyPath = `${ process.env.OPEN_WEATHER_API_KEY }`
  const queryParam = "q="

  try {

    const resp = await fetch( `${ baseOwUrl }` )
    const data = await resp.json()
    console.log( data );

  } catch ( err ) {
    console.log( err );

  }
}
getWeather( "murcia" )

/**
 * OTROS MÉTODOS DE AUTH
 * 
 *  - Bearer Tokes: son tokes de acceso que se incluyen en la cabecera Authorization de la solicitud
 * http y permite identificar al usuario autenticado sin necesidad de enviar usuario/contraseña 
 * en cada petición
 *  
 * - JWT: es un token compacto en formato JSON codificado en base64 que contiene información del
 * usuario y su validez (expiración, permisos...)
 * 
 * Ambos son más seguros que pasarle a trabés de params la APIKEY a la url
 */

/**
 * VERSIONADO DE APIS
 * 
 * Es útil para mentener la compatibilidad de las distintas versiones de APIs. Se suele poner en la
 * url algún tipo de identificador como v1, v2... para seguir dando mantenimiento a versiones
 * anteriores pero seguir actualizando la api sin que se rompan las anteriores versioans o implementa-
 * ciones con distintas soluciones
 */

/**
 * OTRAS APIs
 * 
 * pokiapi.co 
 */

async function getPokemon ( pokemon ) {

  // https://pokeapi.co
  const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`

  try {
    const response = await fetch( url )
    const data = await response.json()
    console.log( `Habilidades de ${ data.name }` )
    data.abilities.forEach( ability => {
      console.log( ability.ability.name )
    } )
  } catch ( error ) {
    console.log( "Error", error )
  }
}

getPokemon( "pikachu" )