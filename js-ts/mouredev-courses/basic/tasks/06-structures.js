// 1. Crea un array que almacene cinco animales.

let newArray = [];
newArray.push( "hola", "soy", "vegeta", 777, "mf" )
console.log( newArray );


// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.

newArray.push( "al final" );
newArray.unshift( "al inicio" )
console.log( newArray );

// 3. Elimina el que se encuentra en tercera posiciÃ³n.

newArray.splice( 2, 1 ); // elimina desde la posición 2 un elemento,e s decir, el elemento 2. si pones 2,2, eliminas desde la posición 2, 2 elementos
console.log( newArray );

// 4. Crea un set que almacene cinco libros.

let newSet = new Set();
//! newSet.add( [ "the mom test", "the cold start problem", "the great mental model", "steal like an artist", "show your work" ] ) // de esta forma añades elementos a un mismo set, si quieres que sean sets distintos tienes que hacer una única llamada por cada set por lo que no estaría bien

const books = [ "the mom test", "the cold start problem", "the great mental model", "steal like an artist", "show your work" ];
books.forEach( ( book ) => newSet.add( book ) );
console.log( newSet );

// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.

newSet.add( "mindset" );
newSet.add( "the cold start problem" );
console.log( newSet );

// 6. Elimina uno concreto a tu elecciÃ³n.

newSet.delete( books[ ( books.length ) ] ) // para borrar el show your work debería ser esto pq hemos añadido el mindset
console.log( books[ 3 ] );

console.log( newSet ); // debe eliminarse mindset

// 7. Crea un mapa que asocie el número del mes a su nombre.

const month_to_number = new Map();
const months = [ "january", "fabruary", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december" ];
const days = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

for ( i = 0; i < days.length; i++ ) {
  // month_to_number.set( months[ i ], days[ i ] )
  month_to_number.set( days[ i ], months[ i ] )
}

console.log( month_to_number );

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.

month_to_number.has( 5 ) ? console.log( "the month is: ", month_to_number.get( 5 ) ) : console.log( "this month doesn't exist" )

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

//! month_to_number.set( "summer", month_to_number.set( [ // esto estaría mal porque el .set me pide también un valor lo que que ya estoy jaciendo es aportando los valores en el primer set con el [ ... .get()] 
month_to_number.set( "summer", [

  month_to_number.get( 6 ),
  month_to_number.get( 7 ),
  month_to_number.get( 8 ),
  month_to_number.get( 9 )

] )
console.log( month_to_number );


// 10. Crea un Array, transfórmalo a un Set y almacÃ©nalo en un Map.

let newArray2 = new Set( books )
console.log( "new set: ", newArray2 );
let newMap2 = new Map();
newMap2.set( "new map 2", newArray2 )
console.log( newMap2 );
