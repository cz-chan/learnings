// una función es un bloque de código que realiza una tarea específica y permite ser reutilizable

// simples
function myFunc () {
  console.log( "Hola mundo!" );
}
myFunc();

// con param

function myFuncWithParams ( param1, param2 ) {
  console.log( `Hola ${ param1 } y ${ param2 }` );
}
myFuncWithParams( "Pepe", "Juan" );

// anónimas

const myFun2 = function () {
  console.log( 'Esto es una función anónima' );
}

// arrow functions

const myFun3 = ( name ) => {
  console.log( `Esto es una arrow function ${ name } ` );
}
myFun3( "Juan" );

// igual que la 3 pero más simplificada para aquellas qe solo tienen una ejecución o linea
const myFun4 = ( name ) => console.log( `Esto es una arrow function ${ name } ` );

function sum ( a, b ) {
  console.log( `${ a } + ${ b } =`, a + b );

}
sum( 2, 4 );
// estas funciones para que no se "rompan" puedes inicializar los parámetros con algún valor por defecto

function sum2 ( a = 0, b = 0 ) {
  console.log( `${ a } + ${ b }` );

}
sum2( 2, 4 );
sum2(); // por defecto da 0

// returm
// permite devolver un valor y salir de la función

function mult ( a = 0, b = 0 ) {

  return a * b;
}
console.log( mult( 2, 4 ) ); // 6

// funciones anidadas (scope)

function extern () {
  console.log( "Hola desde la función externa" );
  function intern () {
    console.log( "Hola desde la función interna" );
  }
  intern(); // esto se ejecuta segundo
}
extern(); // esto se ejecuta primero
// si intentamos llamar a intern() desde fuera de extern() nos dará un error porque no existe en el scope global


// funct de orden superior
// son funciones que reciben otras funciones como parámetros

function applyFunc ( opFunc, a, b ) {
  opFunc( a, b )
}

applyFunc( sum, 2, 12 )

// forEach

let myArray = [ 1, 2, 3, 4, 5 ]
let arr = []

myArray.forEach( ( value, index ) => {
  let mult = value * index;

  console.log( `Índice ${ index } y valor ${ value } ` );
  arr.push( mult )
} )
console.log( arr );
// map