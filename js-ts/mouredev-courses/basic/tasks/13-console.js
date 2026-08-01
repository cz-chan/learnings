// 1. Crea un función que utilice error correctamente.

function sum ( a, b ) {
  if ( a < 0 || b < 0 ) {
    return new Error( `NO PUEDES SUMAR NÚMEROS NEGATIVOS. "${ a }" ó "${ b }" son negativos` )
  }

  return a + b;
}

console.log( sum( 8, -1 ) );

// 2. Crea una funciÃ³n que utilice warn correctamente.

function mult ( a, b ) {
  if ( a < 0 || b < 0 ) {
    console.warn
      ( `La multiplicación te va a salir negativa porque has puesto "${ a }" ó "${ b }" negativos.` )
  }

  return a * b;
}

console.log( mult( 8, -1 ) );

// 3. Crea una funciÃ³n que utilice info correctamente.
function div ( a, b ) {
  if ( b === 0 ) {
    console.info
      ( `La división te va a dar infinito porque has colocado un 0 en el segundo dígito.` )
  }

  return a / b;
}

console.log( div( 8, 0 ) );

// 4. Utiliza table.

const table = ( a ) => {

  let row = []
  for ( let i = 0; i <= 10; i++ ) {

    row.push( { index: `1 x ${ a } = `, mult: i * a } )
  }
  console.table( row )
}
table( 5 )

// 5. Utiliza group.

const table2 = ( a ) => {

  let row = []
  for ( let i = 0; i <= 10; i++ ) {
    console.group( "for group 2" )
    row.push( { index: `1 x ${ a } = `, mult: i * a } )
    console.log( row )
    console.groupEnd( "for group 2" )
  }
  console.table( row )
}
table2( 6 )

// 6. Utiliza time.

const table3 = ( a ) => {

  let row = []
  console.time( "tiempo de ejecucuón 3" )
  for ( let i = 0; i <= 10; i++ ) {
    console.group( "for group 3" )
    console.count( "push in row 3" ) // saldrá 11 porque empieza en 0 y acaba en 10
    row.push( { index: `1 x ${ a } = `, mult: i * a } )
    console.log( row )
    console.groupEnd( "for group 3" )
  }
  console.timeEnd( "tiempo de ejecucuón 3" )
  console.table( row )
}
table3( 8 )

// 7. Valida con assert si un número es positivo.

let age = 17
console.assert( age < 18, "eres menor de edad" )

// 8. Utiliza count.

const table5 = ( a ) => {

  let row = []
  for ( let i = 0; i <= 10; i++ ) {
    console.group( "for group 5" )
    console.count( "push in row 5" ) // saldrá 11 porque empieza en 0 y acaba en 10
    row.push( { index: `1 x ${ a } = `, mult: i * a } )
    console.log( row )
    console.groupEnd( "for group 5" )
    console.trace( "seguimiento de la ejecución 6" )
  }
  console.table( row )

}
table5( 8 )

// 9. Utiliza trace.

const table6 = ( a ) => {

  let row = []
  for ( let i = 0; i <= 10; i++ ) {
    console.group( "for group 6" )
    console.count( "push in row 6" ) // saldrá 11 porque empieza en 0 y acaba en 10
    row.push( { index: `1 x ${ a } = `, mult: i * a } )
    console.log( row )
    console.groupEnd( "for group 6" )
    console.trace( "seguimiento de la ejecución 6" )
  }
  console.table( row )

}
table6( 8 )


// 10. Utiliza clear.