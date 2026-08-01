/*
los objetos son estructuras de datos que permiten almacenar valores como pares clave-valor, lo que permite representar entidades complejas y organizar informacuón de manera más clara

en JS casi todo es un objeto o se puede tratar como tal. los objetos permiten modelar datos del mundo real

los objetos son más copmplejos que los mapas
*/

// Sintaxis
//(ojo, array = [], objeto = {})

let person = {
  name: "Junito",
  age: 29,
  alias: "cz"
}

/*
acceso a propiedades
  - a través del "." -> person.
  - a través de corchetes accediendo a la clave (no al valor ojo)
*/
person.name = "chema";
console.log( person.name );
console.log( person[ "name" ] );

// los objetos no son inmutables. se pueden modificar
person.age = 30

// también se pueden eliminar propiedades y añadirlas
delete person.age
console.log( person );
person.email = "chema@gmail.com"
console.log( person );

// los objetos tb pueden tener métodos (funciones)
const coche = {
  brand: "Tesla",
  model: "X",
  year: 2026,
  isAutomatic: function () {
    console.log( "no es automático" );
  }
}
coche.isAutomatic();


// anidación de objetos
const coche2 = {
  brand: "Tesla",
  model: "Y",
  year: 2025,
  isAutomatic: function () {
    console.log( "si es automático" );
  },
  shipping: {
    country: "spain",
    state: "alicante",
    number: 51,
    isInHouse: function () {
      console.log( "entre las 12 y 15" );
    },
  }
}
console.log( coche2 );
coche2.isAutomatic()
coche2.shipping.isInHouse()

//igualdad de objetos
const coche3 = {
  brand: "Tesla",
  model: "X",
  year: 2026,
  isAutomatic: function () {
    console.log( "no es automático" );
  }
}
const coche4 = {
  brand: "Tesla",
  model: "3",
  year: 2026,
  isGood: function () {
    console.log( `Los Tesla ${ this.model } del año ${ this.year } no salieron muy buenos` );
    // es buena práctica hacer referencia a los this en los métodos porque siempre hace referencia al objeto dentro del cual se encuentra. en este caso a lo que hay dentro de coche4
  }
}
console.log( coche3 );
console.log( coche );

console.log( coche == coche3 ); // false
console.log( coche === coche3 ); // false
// estos objetos no son iguales, aunque los veas, pq estos objetos se guardan en memoría y se accede a ellos a través de referencias y dichas referencias NO son iguales por lo que no da igual pq se comparan estas referencias y no los valores que guarda.
// si quisieras comparar esto, tendrías que hacerlo propiedad a propiedad

console.log( coche.model === coche3.model ); // true

// ITERACIONES
for ( let values in coche3 ) {
  // cuando iteramos estás accediendo a las claves y necesitas el "in" y no el "of" ya que el "for of" solo funciona para objetos iterables: arrays, strings, Map, Set, etc.
  console.log( values );
}


// funciones como objetos -> estoy creando una especie de objetos
function Person ( name, age ) {
  this.name = name;
  this.age = age;
} // esta forma no está del todo bien ya que son clases y no funciones
let Person5 = new Person( "chema", 29 )
console.log( Person5 );
