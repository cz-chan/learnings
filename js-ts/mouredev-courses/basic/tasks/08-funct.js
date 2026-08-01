// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

const sum = ( a = 0, b = 0 ) => {
  return ( a + b );
}
console.log( sum( 2, 8 ) );


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

let nums = [ 3, 56, 66, 8, 7, 1002, 45, 1004, 8, 64, 89, 87, 98, 1001, 1003 ];
// lenght = 15

const majorNum = ( arr = [] ) => {
  let theMajor = [ 0 ]; // inicializas theMajor con el primer dígito

  for ( let i = 1; i < arr.length; i++ ) {
    // por cada i del array empezando por el 1, ya que el 0 ya lo tienes guardado, hasta lenght < arr y le sumas uno

    // si la posición en i es mayor que el theMayor, tehMajor pasa a ser ese arr[i]
    if ( arr[ i ] > theMajor ) {
      theMajor = arr[ i ];
    }
  }

  return theMajor;
}
console.log( majorNum( nums ) )

// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.

const book = "the mom test"; // 3 vocals

const countVocals = ( word = "" ) => {

  const vocals = "aeiou";
  let count = 0;

  for ( let i = 0; i < word.length; i++ ) {
    if ( vocals.includes( word[ i ].toLowerCase() ) ) count++; // necesitas el lowercase porque son distintos caracteres el A que a
  }

  return count;
}
console.log( countVocals( book ) );


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

function stringToUpperCase ( word = "" ) {

  let newWord = "";
  newWord = word.toUpperCase();

  return newWord;
}
console.log( stringToUpperCase( book ) );

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

const primeNumber = ( num = 0 ) => {
  let isPrime = true;
  /*
    3 casos:
      1. num < 0: no puede darse
      2. 0 < num <= 2: siempre primo
      3. num > 2
  */
  if ( num < 0 ) return ( "el número debe ser mayor a 0" );

  if ( num <= 2 ) return isPrime;
  // if ( 0 < num <= 2 ) return isPrime; // esto en JS no se puede dar pq no lo lee, necesito 2 condiciones separados por algún operador

  if ( num > 2 ) {
    for ( let i = 2; i < num - 1; i++ ) {
      // i empieza en 2 porque si empezara en 1, siempre iba a dar false porque 7/1, por ejemplo, siempre va a dar como módulo un 0. y tiene que empezar en el 2, y no en el 3, porque con los números pares pequeños daría falsos positivos
      ( num % i === 0 ) ? isPrime = false : isPrime;
    }
  }
  return isPrime;
}
console.log( primeNumber( 4 ) );


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

let numsArr1 = [ 8, 7, 1002, 45, 1004, 3, 56, 66, 8, 64, 89, 87, 98 ];
let numsArr2 = [ 3, 56, 66, 8, 7, 8, 9, 10, 53, 1001, 100, 90, 32, 3 ];

const twoArr = ( arr1 = [], arr2 = [] ) => {
  let newArr = [];

  for ( values of arr1 ) {
    if ( arr2.includes( values ) ) newArr.push( values )
  }

  return newArr;
}
console.log( twoArr( numsArr1, numsArr2 ) );

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function isOdd ( arr = [] ) {
  let oddArr = [];

  for ( values of arr ) {
    if ( values % 2 === 0 ) oddArr.push( values )
  }

  return oddArr;
}
console.log( isOdd( numsArr1 ) );


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

let sqr = [ 2, 3, 4, 5, 6, 7 ]
const squareNum = ( arr = [] ) => {
  let squared = [];

  // for ( values of arr ) {
  //   let sqr = values ** 2;
  //   squared.push( sqr );
  // }
  for ( values of arr ) squared.push( values ** 2 ); // más simple
  return squared;
}
console.log( squareNum( sqr ) );


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

const aWord = "roma amor un palabra";
const reverse = ( word = "" ) => {
  let drow = "";

  // drow = word.split( " ", 2 ).reverse().toString().replace( ",", " " );
  drow = word.split( " " ).reverse().join( " " )

  return drow;
}
const newReverse = ( word = "" ) => {
  let splited = word.split( " " );
  let drow = [];

  for ( let i = word.length - 1; i >= 0; i-- ) {
    drow.push( word[ i ] )
  }

  return drow.join( "" );
}
console.log( reverse( aWord ) );
console.log( newReverse( aWord ) );



// 10. Crea una función que calcule el factorial de un número dado.

const num = 5;
const factorialCalc = ( n = 0 ) => {
  if ( n === 0 || n === 1 ) return 1;
  return n * factorialCalc( n - 1 );
}

console.log( factorialCalc( num ) );
