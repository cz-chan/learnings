/**
 * MANEJO DE ERRORES (excepciones)
 *
 * Las excepciones son cosas anómalas que interrumpen el flujo normal de una función o código
*/


/* captura de errores
  - try-catch
  - try-catch-finally
*/
let myObj;
try {
  console.log( myObj.email );

} catch ( err ) {
  console.log( "se ha dado un error", err.message );

}

// finally  se ejecuta siempre
try {
  console.log( myObj.email );

} catch ( err ) {
  console.log( "se ha dado un error", err.message );

} finally {
  console.log( "este código si que va" );

}

/**
 * lanzar errores
 * - throw
*/

// throw new Error( "esto es un error" )

function sum ( a, b ) {
  if ( typeof a !== "number" || typeof b !== "number" ) {
    console.log( "tiene que ser un número" );
    // pq lo que devuelve typeof cuando a = 2 es "number", no el objeto number
  }

  // if ( Number.isInteger( a ) ) {
  //   console.log( "no es un número. necesitas que sean números para sumar" );

  // }

  if ( ( !( a instanceof Number ) || !( b instanceof Number ) ) ) { // le dices si a es una instancia de Number y buscas que no se ejecute el código si no son números
    /*
    esto no funciona pq instanceof solo busca objetos. si a es un objeto tipo Number. 
    a en este caso es una variable con un valor no un objeto. si fuera let a = new Number(2), a sí sería un instanceof de Number
    */

    console.log( "no se puede dar la operación" );
  }

  if ( a == 0 || b == 0 ) {
    throw new SumZeroIntegerErr( "se está intentando sumar cero. esto no va a dar nada.", a, b )
  }
  return a + b;
}
console.log( sum( "2", 3 ) );


function sumIntegers ( a, b ) {

  if ( !Number.isInteger( a ) || !Number.isInteger( b ) ) {
    throw new Error( "no se puede ejecutar. esta solo puede ejecutar numeros enteros" );

  }
  return a + b;
}
try {
  console.log( sumIntegers( 9, 8 ) );
  console.log( sumIntegers( 9, "8" ) );
  console.log( sumIntegers( "9", 8 ) );
  console.log( sumIntegers( "9", "8" ) );
} catch ( err ) {
  console.log( "Se ha dado un error", err.message );

}

// captura de varios tipos de errores
try {
  console.log( sumIntegers( 9, 8 ) );
  console.log( sumIntegers( 9, "8" ) );
  console.log( sumIntegers( "9", 8 ) );
  console.log( sumIntegers( "9", "8" ) );
} catch ( err ) {
  if ( err instanceof TypeError ) {
    console.log( "Se ha dado un error", err.message );
  } else if ( err instanceof Error ) {
    console.log( "Se ha dado un error", err.message );
  }

}

// crear excepciuones personalizadas

class SumZeroIntegerErr extends Error {

  constructor ( message, a, b ) {
    super( message )
    this.a = a
    this.b = b
  }

  printNum () {
    console.log( this.a, "+", this.b );
  }
}

try {
  console.log( sum( 9, 0 ) );
} catch ( err ) {
  console.log( "se ha dado un error.", err.message );
  err.printNum() // esto es la funcion que te dice qué se está sumando o qué se eestá dando

}