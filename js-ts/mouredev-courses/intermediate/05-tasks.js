// 1. Realiza una peticiÃ³n GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch( "https://jsonplaceholder.typicode.com/posts/" )
  .then( ( resp ) => {
    try {
      const data = resp.json()
      return data

    } catch ( err ) {
      console.log( err );

    }
  } )
  .then( ( value ) => {
    try {
      return console.log( value );
    } catch ( error ) {
      console.log( error );
    }
  } )
  .catch( ( err ) => {
    return console.log( err );

  } )

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch( "https://jsonplaceholder.typicode.com/posts/" )
  .then( ( resp ) => {
    try {
      const data = resp.json()
      const ok = resp.ok; // el ok viene le la resp no de la data
      const status = resp.status; // el ok viene le la resp no de la data
      console.log( ok, { "status": status } );

      return data

    } catch ( err ) {
      console.log( err );

    }
  } )
  .then( ( value ) => {
    try {
      return console.log( value );
    } catch ( error ) {
      console.log( error );
    }
  } )
  .catch( ( err ) => {
    return console.log( err );

  } )

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function gestData ( query ) {
  const fetching = await fetch( `https://jsonplaceholder.typicode.com/${ query }` )

  try {
    const data = await fetching.json()
    const ok = await fetching.ok
    const status = await fetching.status

    console.log( data );
    console.log( "getData: ", ok, { "status": status } );


  } catch ( err ) {
    console.log( err );
  }
}

gestData( "users" )

// 4. Realiza una peticiÃ³n POST a JSONPlaceholder para crear una nueva publicaciÃ³n. EnvÃ­a un objeto con propiedades como title o body

async function createPost ( title = "", body = "" ) {

  /**
   * FORMA DEL POST: (está sacada de la api, cada una tiene la suya)
   *  {
   *    "userId": Number,
   *    "id": Number,
   *    "title": "",
   *    "body": ""
   *  }
  */
  const post = {
    // id y userID ya lo pone la propia api (debería)
    // userId: 1,
    // id: 1,
    title: title,
    body: body
  }

  try {
    const fetching = await fetch( "https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( post )
    } )

    if ( !fetching.ok ) throw new Error()

    const data = await fetching.json()
    console.log( data );


  } catch ( err ) {
    console.log( err );

  }

}
createPost( "Hola mundo", "ESTO ES UN MENSAJE DE HOLA MUNDO" )

// 5. Utiliza el mÃ©todo PUT para actualizar completamente un recurso (por ejemplo, modificar una publicaciÃ³n) en JSONPlaceholder

async function updatedAllResource ( postToUpdate = 0, newTitle = "", newBody = "" ) {
  try {
    const fetching = await fetch( `https://jsonplaceholder.typicode.com/posts/${ postToUpdate }`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
        id: postToUpdate,
        title: newTitle,
        body: newBody
      } )
    } )

    if ( !fetching.ok ) throw new Error( `Ha habido un error de tipo ${ fetching.status }` )

    const data = await fetching.json()
    console.log( `El post ${ postToUpdate } se ha actualizado con éxito. Status: ${ fetching.status }`, { "The new post: ": data } );

  } catch ( error ) {
    console.log( error );

  }
}

updatedAllResource( 13, "new title for 13th post", "un mensaje para mi gatete 13" )

// 6. Realiza una peticiÃ³n PATCH para modificar Ãºnicamente uno o dos campos de un recurso existente

async function updatedPartialPost (
  postToUpdate = 0,
  kindOfElementToModified = "",
  newContent = ""
) {

  try {

    if ( kindOfElementToModified !== "title" && kindOfElementToModified !== "body" ) {
      throw new Error( `kindOfElementToModified must be "title" o "body", received: ${ kindOfElementToModified }` )
    }

    const resp = await fetch( `https://jsonplaceholder.typicode.com/posts/${ postToUpdate }`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      /*
        computed property name: los corchetes [ ] hacen que JS EVALÚE
        kindOfElementToModified y use su VALOR ("title" o "body") como
        nombre de la clave, en vez de crear una clave literal llamada
        "kindOfElementToModified". Así, sin if/else, el mismo objeto sirve
        para actualizar cualquiera de los dos campos según lo que se reciba.
      */
      body: JSON.stringify( {
        [ kindOfElementToModified ]: newContent
      } )
    } )
    const data = await resp.json()
    console.log( `Has modificado el ${ kindOfElementToModified } del post ${ postToUpdate }`, { "queda:": data } );
  } catch ( error ) {
    console.log( error );
  }
}

updatedPartialPost( 69, "title", "my title is new" )


// 7. EnvÃ­a una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicaciÃ³n) y verifica la respuesta

async function deletedPost ( postId = 0 ) {
  try {

    const resp = await fetch( `https://jsonplaceholder.typicode.com/posts/${ postId }`, {
      method: "DELETE",
      // al delete no hay que pasarle nada (en esta api) salvo el postID
    } )

    if ( resp.ok ) console.log( `El post con el id ${ postId } se ha borrado correctamente.` );

  } catch ( err ) {
    console.log( err );
  }
}

deletedPost( 99 )

// 8. Crea una funciÃ³n que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokÃ©API para obtener los datos de un PokÃ©mon concreto, a continuaciÃ³n los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API