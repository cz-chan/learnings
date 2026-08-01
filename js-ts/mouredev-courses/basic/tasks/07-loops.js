// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.

for ( let i = 0; i <= 20; i++ ) {
  console.log( `número ${ i }` );
};

let i = 0;
while ( i <= 20 ) {
  console.log( `el número es ${ i }` );
  i++;
};

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.

let sum100 = 0;
i = 0;
let j = 100;
while ( i <= j ) {
  sum100 += i
  i++;
}
console.log( sum100 );

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.

j = 0;
i = 0;
for ( j = 2; j <= 50; j += 2 ) {
  console.log( `numero par: ${ j }` );
}

j = 0;
i = 0;
while ( j <= 50 ) {

  if ( i % 2 === 0 ) {
    console.log( `número par: ${ i }` );
  } else {
    console.log( `número inpar: ${ i }` );
  }
  j++;
  i++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

const books = [ "the mom test", "the cold start problem", "the great mental model", "steal like an artist", "show your work" ];
for ( value of books ) {
  console.log( value );
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

let firstBook = books[ 0 ];
i = 0
let count = 0;
let vocals = "aeiou";

for ( i = 0; i < firstBook.length; i++ ) {
  let bookWords = firstBook[ i ]
  vocals.includes( bookWords ) ? count++ : ""
}
console.log( count );

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

i = 0;
const months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
let multiValue = 1; // tiene que empezar en 1 pq multiplicar por 0 no se puede

for ( i = 0; i < months.length; i++ ) {
  multiValue = multiValue * months[ i ]
}
console.log( multiValue );

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

i = 0;
let table = 5;

for ( i; i <= 10; i++ ) {
  // console.log( "Tabla de multiplicar" );
  let multi = i * table;
  console.log( `${ i } x ${ table } = ${ multi }` );
}

// 8. Usa un bucle para invertir una cadena de texto.

let word = "roma";
let drow = ""
// i = 0;

// con esto copio la palabra al derecho
// for ( i = 0; i < word.length; i++ ) {
//   drow += word[ i ]
// }

for ( i = word.length - 1; i >= 0; i-- ) { // necesitas el -1 pq seria 4 y empueza en el 0
  drow += word[ i ]
}
console.log( drow );

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.

// i = 0;
// a = 1;
// b = 0;
// for ( i = 1; i <= 10; i++ ) {
//   // fibonacci es 0 + 1 + 1 + 2 + 3 + 5 ... -> j = (i-1) + (i-2) donde i es el número del índice donde te encuentras y j es el siguiente
//   console.log( a );

//   let temp = a + b;  // siguiente número
//   console.log( temp );
//   a = b;             // a avanza
//   b = temp;          // b avanza
// }

let temp = 0
a = 0;
b = 1;
for ( i = 1; i <= 10; i++ ) {
  temp = a + b;
  console.log( temp );
  a = b;
  b = temp;
}
// console.log( temp );

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
let newArr = []
i = 0
for ( i; i < arr.length; i++ ) {
  if ( arr[ i ] >= 10 ) newArr.push( arr[ i ] )
}
console.log( newArr );
