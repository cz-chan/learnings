/**
 * La asincronía sirve para manejar un multiple thread que no bloqueen la app si algo se está
 * ejecutando y aún no ha acabado
 */

console.log( "Inicio" );
// for ( let i = 0; i < 10000; i++ ) { } // esto bloquea el cópdigo hasta que se ejecuta
console.log( "Fin" );

/**
 * JS gestiona la asyncronia a través de un evet loop
 *
 * Componentes del event loop:
 *  - call stack -> pertenecen a las funciones
 *  - web APIs -> cuando hacemos llamadas externas a webs o dbs o servidores o. setTimeout()
 *  - task queue -> tareas que se ejecutan cuando el call stack está vacio
 *
 * Flujo del event loop:
 *  1. ejecuta lo que tiene en el call stack
 *  2. operaciones async -> las manda a la gestiones de asincronia que son Web APIs o Nodejs
 *  3. Operación acaba -> lo coloca en la task queue o microtask queues
 *  4. If call stack is empty -> mueve las tareas PRIMERO las microtask y después
 * el tasks al call stack para poder ejecutarlas
 *  5. Repeat
 */


// MECANISMOS FUNDAMENTALES

/**
 * CALLBACKS
 *
 * son funciones que recibe una funcion como argumento y se ejecuta cunado la operación ha finalizado
 */

// callback de manera nativa para ejecutar en js -> setTimeout

console.log( "init" );

setTimeout( () => {
  console.log( 'eject 2s' );

}, 2000 )
console.log( "end" );

// problema de lso callback -> callback hells por ende, callback, sí, callback hell, no

function step1 ( callback ) {
  setTimeout( () => {
    console.log( "step 1 checked" );
    callback()

  }, 1000 )
}
function step2 ( callback ) {
  setTimeout( () => {
    console.log( "step 2 checked" );
    callback()

  }, 1000 )
}
function step3 ( callback ) {
  setTimeout( () => {
    console.log( "step 3 checked" );
    callback()

  }, 1000 )
}

// step1( () => {
//   // esto se ejecuta después de que se ejecute el step1 con su timeout de un segundo pq es la llamada al callback
//   step2( () => {
//     step3( () => {
//       console.log( "a tomar por culo" );
//     } )
//   } )
//   console.log( "pasos completados" )

// } )

/**
 * PROMISES
 * 
 * este es otro mecanísmo qeu soluciona los probleams de las callback hells.
 * 
 * una promesa es la representación de un resultado de una operación que aún no ha terminado pero que 
 * lo hraá en un futuro y puede resolverse correctamente (resolve) o fallar (reject)
 */

const promise = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    const ok = true
    if ( ok ) {
      resolve( "Operación exitosa" )
    } else {
      reject( "ha habido un error" )
    }
  }, 3000 )
} )

promise
  .then( result => {
    // .then es para cuando se ejecuta de manera correcta y se espera el resultado
    console.log( result );

  } )
  .catch( err => {
    // cuando no se ejecuta bien y salta un error
    console.log( err );

  } )
  .finally( () => {
    // se ejecuta siemrpe, salte o no el error
    console.log( "se ejecuta siempre" );

  } )

// ENCADENAR PROMESAS

function promise1 () {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      console.log( "promise 1 completed" );
      resolve(); // hay que llamar al resolve para decirle que todo ha acabado ok
    }, 1000 )
  } )
}
function promise2 () {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      console.log( "promise 2 completed" );
      resolve(); // hay que llamar al resolve para decirle que todo ha acabado ok
    }, 2000 )
  } )
}
function promise3 () {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      console.log( "promise 3 completed" );
      resolve(); // hay que llamar al resolve para decirle que todo ha acabado ok
    }, 3000 )
  } )
}

// encadenar promesas eliminal el callbackhell porque no hay una anidación compleja de escribir y visualizar
promise1() // cuando acabe promsea1 llamop a 2
  .then( promise2 ) // cuando acabe promesa2 llamo a promesa3
  .then( promise3 ) // cuando acabe promesa 3 ejecuto el log
  .then( () => {
    console.log( "todas las promesas completadas" );
  } )

console.log( "fin del programa" );


/**
 * ASYNC / AWAIT
 * 
 * es la forma moderna de hacerlo y solo es ponerle a lo que quiers hacer asíncrono la palabra 
 * "async" y a lo que quieres que espere el "await"
 */

function wait ( ms ) {
  return new Promise( resolve => setTimeout( resolve, ms ) )
}

async function process () {
  console.log( 'process init' );
  await wait( 6555 )
  console.log( 'process end' );
}

process()