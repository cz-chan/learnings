/**
 * Console permite depurar, monitorear y iptimizar el rendimiento del código.
 */

// log
console.log( "hola mundo" );

// error
console.error( "error" )
console.error( "error al conectar a la base de datos: ", new Error( "Conexion fallida" ) )

// warn
console.warn( "Esto ha sido una advertencia" );

// info
console.info( " este es un mensaje de información " )

// table
let data = [ // no le pone nombre a la column
  [ "Chema", 32 ],
  [ "Sarah", 28 ]
]
let data2 = [ // le pone nombre a la column
  { name: "Chema", age: 32 },
  { name: "sarah", age: 28 },

]
console.table( data )
console.table( data2 )

// group()

console.group( "Usuarios" ) // cabecera
console.log( "Nombre: juan" ); // elementos del grupo
console.log( "Nombre: mariano" );
console.log( "Nombre: paca" );
console.groupEnd() // cierra el grupo

// time
// en este bloque sí o sí debe empezar y acabar con el mismo valor para saber que es el mismo
console.time( 'tiempo de ejecución' ) // se inicia la ejecución
for ( let i = 0; i < 1000; i++ ) {

}
console.timeEnd( "tiempo de ejecución" ) // se acaba la ejecución

// assert
// muestra un mensaje de error si lo que evalua es falso
let age = 17
console.assert( age >= 18, "el usuario debe ser mayor de edad" )

// count
// cuanta la cantidad de veces que se ha llamado como comentario

console.count( "click" ) // click = 1
console.count( "click" ) // click = 2
console.countReset( "click" ) // resetea ocn el nombre cponcreto y vuelce la variable click a 0

//trace
// muestra el seguimiento de la pila de ejecucion stacktrace


function a () {
  b()
}
function b () {
  console.trace( " seguimiento de la ejecución" )

}
a();

// clear

// console.clear() // esto limpia la consola