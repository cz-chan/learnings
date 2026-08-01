// 1. Captura una excepciÃ³n utilizando try-catch.

let sum = ( a, b ) => {
  if ( typeof a !== "number" || typeof b !== "number" ) {
    return "error, los valores deben ser números";
  }
  return a + b;
}

try {
  console.log( sum( 1, 2 ) );
} catch ( err ) {
  console.log( "se ha dado un error:", err.message );
}

// 2. Captura una excepciÃ³n utilizando try-catch y finally.

try {
  console.log( sum( 1, "2" ) );
} catch ( err ) {
  console.log( "se ha dado un error:", err.message );
} finally {
  console.log( "revisa los inputs que has colocado y vuelve a intentarlo" );
}

// 3. Lanza una excepciÃ³n genÃ©rica.
try {
  throw new Error( "Error genérico" )
} catch ( error ) {
  console.log( "Se ha capturado un error:", error.message )
}

// 4. Crea una excepción personalizada.

class Excep extends Error {
  constructor ( message, number ) {
    super( message )
    this.number = number
  }

  throwThis () {
    console.log( `error throw this. the number is ${ this.number }` );

  }
}

// 5. Lanza una excepción personalizada.

try {
  throw new Excep( "desde except", 2 ) // este "desde except" es lo que se muestra en el err.message
} catch ( err ) {
  console.log( "mensaje except", err.message );
  err.throwThis()
}

// 6. Lanza varias excepciones según una lógica definida.

class MultExcep extends Error {
  constructor ( message, number1, number2 ) {
    super( message )
    this.number1 = number1
    this.number2 = number2
  }

  printNums () {
    console.log( `Los números que has enviado son:`, this.number1, " y ", this.number2 );
  }
}

let mult = ( a, b ) => {

  if ( a === 0 || b === 0 ) {
    throw new MultExcep( `Algunos de los números es 0, revísalos.`, a, b )
  }

  if ( a < 0 || b < 0 ) {
    throw new MultExcep( `Para que la multiplicación sea válida tienen que ser números positivos, revisa si has puesto alguno negativo.`, a, b )
  }

  if ( typeof a !== "number" || typeof b !== "number" ) {
    throw new MultExcep( `Esta función solo funciona con números. Revisa los valores introducidos.`, a, b )
  }

  return a * b;
}

try {
  mult( "0", 8 )
} catch ( err ) {
  console.log( err.message )
  err.printNums()
}

// 7. Captura varias excepciones en un mismo try-catch.

try {
  mult( "0", 9 )
  mult( 1, -9 )
  mult( 0, -9 )
  mult( 2, 9 )
} catch ( error ) {
  console.log( error.message );
  error.printNums()

}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

// 9. Crea una funciÃ³n que verifique si un objeto tiene una propiedad especÃ­fica y lance una excepciÃ³n personalizada.

// 10. Crea una funciÃ³n que realice reintentos en caso de error hasta un mÃ¡ximo de 10.å