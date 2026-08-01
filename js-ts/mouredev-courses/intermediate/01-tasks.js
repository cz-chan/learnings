// 1. Crea una función que retorne a otra función

function fun1 () {
  let a = 0;
  return function funInside ( a ) {
    return a * a
  }
}
console.log( fun1()( 8 ) );


// 2. Implementa una función currificada que multiplique 3 números

function fun2 ( a ) {
  return function funInside1 ( b ) {
    return function funInside2 ( c ) {
      return a * b * c;
    }
  }
}
const c1 = fun2( 2 )
const c2 = c1( 2 )( 3 )
console.log( c2 );

// 3. Desarrolla una funciÃ³n recursiva que calcule la potencia de un número elevado a un exponente

function f3 ( base, exp ) {
  if ( exp === 0 ) return 1;
  return base * f3( base, exp - 1 );
}
console.log( f3( 2, 3 ) );

// 4. Crea una funciÃ³n createCounter() que reciba un valor inicial y retorne un objeto con mÃ©todos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function f4 ( initialValue = 0 ) {
  let value = initialValue

  function sum () {
    return ++value;
  }
  function subs () {
    return --value;
  }

  function getValue () {
    return value;
  }

  return { sum, subs, getValue }
}
// si hago estos retornos, lo que pasa es que cada vez que llamo a la funcion el valor vuelve al valor con la que la estoy inicializando. tendría que nombrarla una vez y empezar a llamar a los métodos y solo darle un valor único
// console.log( f4( 2 ).subs() )
// console.log( f4( 3 ).sum() )
// console.log( f4( 3 ).getValue() )

const callf4 = f4( 9 ) // necesito llamar a la función a través de guardarla en algún lado que es como le doy el valor pq si solo tengo f4(9) no me lo añade pq no se crea nada
console.log( callf4.getValue() ); //9
console.log( callf4.sum() ); //10
console.log( callf4.sum() ); //11
console.log( callf4.getValue() ); //11
console.log( callf4.subs() ); //10
console.log( callf4.subs() ); //9
console.log( callf4.subs() ); //8
console.log( callf4.getValue() ); //8


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

const numArr = [ 9, 10 ]

function sum ( ...numbers ) {
  let result = 0

  for ( number of numbers ) {
    result += number;
  }
  return result;
}
console.log( numArr ); // [ 9, 10 ]
console.log( ...numArr ); // 9 10

// console.log( sum( numArr ) ); // 09,10
console.log( sum( ...numArr ) ); // 19

function f5 ( multiplier, ...nums ) {
  let sumNums = sum( ...nums )

  return sumNums * multiplier;
}
console.log( f5( 2, ...numArr ) );

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

const newNumbs = [ 1, 2, 3, 4 ]
function f6 ( numbers, callback ) {
  let result = sum( ...numbers );

  callback( result );
}
function f7 ( result ) {
  console.log( result );
}
console.log( f6( newNumbs, f7 ) ); // es undefined pq ya ha un log dentro del f7
f6( newNumbs, f7 )

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implí­cito

// 10. Haz uso del this léxico

let car = {
  brand: "tesla",
  model: "Y",
  allowedCountry: [ "usa", "canada", "alemania", "noruega", "suecia" ],
  notAllowedCountry: [ "china", "reino unido", "francia", "italia", "españa" ],
  country: "",
  canSelfDrive: function ( country ) {
    this.country = country
    if ( this.allowedCountry.includes( this.country.toLowerCase() ) ) {
      console.log( "puedes tener la conducción autónoma" );
    } else if ( this.notAllowedCountry.includes( this.country.toLowerCase() ) ) {
      console.warn( `no puedes tener un coche autónomo en estos paises: ${ this.notAllowedCountry }` );
    } else {
      console.info( "No tengo datos de si tu pais permite la conducción autónoma" )
    }
  },
  canChangeWheel: () => {
    console.log( `no porque vives en ${ this.country }` ); // da undefined

  }
}

car.canSelfDrive( "España" )
car.canChangeWheel()
console.log( "my country is:", car.country );

