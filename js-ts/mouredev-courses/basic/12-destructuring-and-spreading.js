/*
la desestructuración te permite extraer valores de un array u objeto de manera rápida.
la propagaciónfacilita la combinación, copia y expansión de los arrays y objetos de manera flexible

ambas facilitan el manejo de estructuras de datos complejas y reducen la necesidad de escribir
código repetitivo
*/

let newArr = [ 1, 2, 3, 4, 5 ];
let Persona = {
  name: "chema",
  age: 29,
  profession: "dev"
}

newArr.push( 6 ); // esto no es desestructiración ni propagación

/*
DESESTRUCTURACIÓN

*/

/* 
sintaxis de arrays
la desestructuración de arrays es a. través de corchetes -> [ ]
*/
let [ arr1, arr2, arr3, arr4, arr5, arr6 ] = newArr;
console.log( { arr1, arr2, arr3, arr4, arr5, arr6 } );

// sintaxis de arrays con valores por defecto
// let [ arr4, arr5, arr6 ] = newArr; // sin valores, estos arr desestructurados toman los valores que tienen en la posición que estan: arr4 = arr1 = i en 0 = 1, arr5 = arr2 = i en 1 = 2 y así...
// solo si el indice al cual estás apuntando no existe le puedes dar el valor que quieres, sino, tomará los que existen. si el array tiene un length de 4, tomará hasta i = 3, de i > 3, tomará los valores que les asignes o los undefined
let [ , , , , , , arr7 = 7 ] = newArr; // para asignar un valor nuevo a una variable nueva, necesitas la desestructuración completa del array, ya sea a través de ignorar o a través de colocar todos los valores ya que el spread no puede ser pq es solo para la última posición
console.log( arr7 );

// ignorar elementos del array
let [ , , , , , , , arr8 = 8 ] = newArr;
console.log( { arr8 } );

/* SINTAXIS OBJETCS
  la desestructuración de los objetos es a través de llaves -> { }
*/
let { name, age, profession } = Persona;
console.log( { name, age, profession } );

// sintaxis objects con nuevos nombres de variables
let { name: name2, age: age2, profession: profession2 } = Persona;
// en objetos el renombrar es a través de " : " pero se renombra la clave, no el valor
console.log( { name2, age2, profession2 } );

// objetos anidados

const coche = {
  brand: "Tesla",
  model: "Y",
  year: 2025,
  isAutomatic: function () {
    console.log( "si es automático" );
  },
  shipping: {
    country: "spain",
    state: "alicante",
    city: {
      name: "orihuela"
    },
    number: 51,
    isInHouse: function () {
      console.log( "entre las 12:00 y 15:00" );
    },
  }
}

let { brand: carName, shipping: { country, city: { name: cityName } } } = coche;
// la desestructuración de un objeto anidado es a través de otra desestructuración de ese mismo objeto
console.log( carName, country, cityName );

/**
 * PROPAGACIÓN
 * 
 * la propagación es (...) y permite pasar elementos de un array a otro 
 */

let myNewArr = [ ...newArr ]
console.log( myNewArr );

let myNewNewArr = [ ...myNewArr, 7, 8 ]
console.log( myNewNewArr );

// combinación de arrays

let theArr = [ ...myNewNewArr, ...myNewArr ]
console.log( theArr );

// para objetos

let newPersona = { ...Persona, location: "spain" }
console.log( newPersona );
