const { sum, isEven } = require( './09-test.js' )

test( 'Suma de 3+5 debe ser 8', () => {
  expect( sum( 3, 5 ) ).toBe( 8 )
} )

// 1. Crea una funciÃ³n isEven(number) que devuelva true si el nÃºmero es par y false si es impar

test( 'true if number is even', () => {
  expect( isEven( 2 ) ).toBe( true )
} )

