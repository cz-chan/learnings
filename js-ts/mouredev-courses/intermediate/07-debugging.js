/**
 * El debugging es un mecanismo para capturar errores
 *
 * usar el console.log() no es una biena práctica para hacerlo profesional
 */

// dubugging -> todos los IDEs y navigadores tienen mecanismos de debugging

function sum ( a, b ) {
  console.log( a );
  console.log( b );
  console.log( "typeof a:", typeof a );
  console.log( "typeof b:2", typeof b );
  return a + b
}

console.log( "suma", sum( 2, "2" ) )

// los breakpoints se usan para parar el código donde quieras desde el ide

function divide ( a, b ) {
  if ( b === 0 ) throw new Error( "No se puede dividir entre cero" )
  return a / b
}

console.log( divide( 7, 0 ) )