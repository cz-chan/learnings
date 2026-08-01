/**
 * Las funciones de primera clase. Es decir, puedes ser tratadas como cualquier otro valor.
 * Por ejemplo,
 *  - pueden ser guardades como variables o constantes
 *  - pueden recibir otras funciones como parámetros
 *  - pueden ser retornadas desde otras funciones
 */

const greet = function ( name ) {
  console.log( `hola ${ name }` );
}
greet( "chema" );

function processGreet ( greetFunct, name ) {
  greetFunct( name )
}
processGreet( greet, "berta" )

function returnGreeting ( name ) { return greet }

const greet2 = returnGreeting()
greet2( "ivonne" )

/**
 * arrow functions avanzadas
 * 
 * 2 caracteristicas:
 *  - arrow function con retorno implicito. no hace falta darles un return explícito
 *  - this léxico
 */

// arrow function con retorno implicito
const multiply = ( a, b ) => a * b;

// this léxico
const handler = {
  name: "ciruelo",
  greeting: function () {
    console.log( `me pica el ${ this.name }` ); // con el this dentro del objeto haces referencia a los elementos del mismo objeto. sin este this. , necesitarías pasarle como parámetro a la funcion el nombre y al llamarla, tendrías que dárselo. de esta forma, con hablerlo creado en el objeto ya es suficiente
  },
  greetingInArrowFunct: () => { // esta no devuelve el name (esto es el this. léxico) porque las arrow function crean su propio contexto del this, pierden el del objeto que las contiene
    console.log( `me pica el ${ this.name }` );
  }
}
handler.greeting();
handler.greetingInArrowFunct();


/**
 * IIFE: immediatly invoked function expression
 * 
 * es una técnica clásica en JS que se utiliza para crear un ámbito privado y ejecutar código
 * de forma inmediata
 * 
 * 
*/

// IIFE clasico -> no tiene sentido ponerle nombre porque se ejecutan inmediatamente y siempre van envueltas entre () y se ejecuta inmediatamente a través de (). necesitan separar el scope de esta y esto se hace a través de un ; antes de las anteriores ejecuciones para distinguir las ejecuciones anteriores

( function () {
  console.log( "IIFE CLÁSICO" );

} )();

// IIFI en arrow -> necesitas que el ; esté en la anterior
( () => {
  console.log( "IIFE ARROW" );

} )();

/**
 * PARÁMETROS REST (...rest)
 * 
 * agrupa todos los elementos adicionales en un array
 */

function sum ( ...numbers ) {
  // con el rest puedes no decirle cuántos parámetros quieres que se le puedan pasar a la función y directamente la persona que lo llame, podrá pasarle tantos como quieras y simplemente hará la suma. lo único que tienes que hacer es un bucle para que sume todos los parámetros que se le envie de manera dinámica
  let result = 0
  for ( number of numbers ) {
    console.log( number );
    result += number
  }
  return result
}
console.log( "result:", sum( 1, 2, 3 ) )


/**
 * OPERADOR SPREAD (...)
 * 
 * se escribe igual que rest pero se usa de manera distinta. permite expandir elementos de un array u opbjeto en ligares donde se esperan múltiples valores
 */
const nums = [ 1, 2, 3 ]
function sumWithSpread ( a, b, c ) {
  return a + b + c;
}

console.log( sumWithSpread( ...nums ) ); // esto es spread. esto expande el numbs en todos sus valores

/**
 * CLOUSURES
 * 
 * son fucniones internas de otras funciones que acceden a variables de la función externa
 */

function createCounter () {
  let count = 0;

  return function () {
    // la funcion accede al count y además guarda el contexto
    count++;
    console.log( "count:", count );

  }
}
const counter = createCounter()
counter()
counter()

/**
 * RECURSIVIDAD
 * 
 * es una función que se llama a sí misma. estas necesitas que haya alguna condición para que dejen la ejecución ya que sino serían infinitas y consumirías todos los recursos de la máquinas
 * 
 */

function factorial ( n ) {
  if ( n <= 1 ) {
    return 1
  }
  return n * factorial( n - 1 );
}
console.log( factorial( 9 ) );


/**
 * FUNCIONES PARCIALES
 * 
 * esto es dividir una función grande con muchos parámetros en otras más pequeñas que reciben 
 * parte de los parámetros con tal de hacerlas más flexibles y reutilizables
 */

function partialSum ( a, b, c ) {
  return function ( b, c ) {
    return sum( a, b, c )
  }
}

const sumWith = partialSum( 4 );
console.log( sumWith( 2, 3 ) );


/**
 * CURRYING
 * 
 * se basa en transformar una función que recibe múltiples parámetros en otras que reciben
 * esos mismos parámetros pero de a uno (un solo argumento a la vez)
 */

function curryFunct ( a ) {
  return function ( b ) {
    return function ( c ) {
      return function ( d ) {
        return sum( a, b, c, d )
      }
    }
  }
}

const sumABC = curryFunct( 1 )( 2 )( 3 )
console.log( sumABC ); // da 6
const sumD = sumABC( 9 ) // da 15
console.log( sumD );


/**
 * CALLBACKS
 * 
 * es lo que se hace cuando se le pasa a una función otra función como argumento
 */

function processData ( data, callback ) {
  const result = sum( ...data )
  callback( result )
}

function processResult ( result ) {
  console.log( result );
}
function processResult2 ( result ) {
  console.log( `El RESULTADO ES ${ result }` );
}

processData( [ 2, 4, 6 ], processResult )
processData( [ 2, 4, 6 ], processResult2 )
processData( [ 2, 4, 6 ], ( result ) => {
  console.log( `El RESULTADO EN LA ARROW ES ${ result }` )
} )