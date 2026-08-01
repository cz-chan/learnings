/**
 * VA EN LA COMPILACIÓN
 * 
 * Hay muchos tipos de tests y formas:
 * 
 *  - pruebas unitarias -> prueban funciones o módulos concretos y aislados
 *  - pruebas de integración -> comprueban la integridad de difrentes módulos
 *  - end 2 end (E2E) -> prueba una interacción completa de alguna parte del programa. Por ejemplo, hacer una compra. Necesita entrar, ver el producto, añadirlo al carrito, ir al carrito, comprarlo, que funione la compra y que le llegue el maul de verificación y que se le cobre 
 */

// units
function sum ( a, b ) {
  return a + b;
}
console.log( sum( 2, 2 ) === 4 ); // testing sin test


// integration

function isEven ( a ) {
  if ( a % 2 === 0 ) { return true } else { return false }
}
console.log( isEven( 3 ) );

module.exports = {
  isEven: isEven,
  sum: sum
}