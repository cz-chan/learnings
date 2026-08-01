// 1. Crea una funciÃ³n isEven(number) que devuelva true si el nÃºmero es par y false si es impar

function isEven ( a ) {
  if ( a % 2 === 0 ) { return true } else { return false }
}
console.log( isEven( 3 ) );


// 2. Escribe una prueba en Jest para verificar que la funciÃ³n funciona correctamente


// const isEven = require( "./09-test" ); // así se recoge
test( 'true if number is even', () => {
  expect( isEven( 2 ).toBe( true ) )
} )


// 3. Verifica que la prueba se ejecuta satisfactoriamente