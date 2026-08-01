/**
 * PROTOTIPOS Y HERENCIA
 * 
 * ahora ya no está tan presente en JS aunque antes sí. 
 * 
 * los prototipos son mecanismos por los cuales los objetos pueden heredar propiedades y funciones
 * de otros objetos. 
 * Cualquier obbjeto que crees en JS tiene un prototipo asociado
 */


let person = {
  name: "chema",
  age: 29,
  greet: function () {
    console.log( `greet: hola soy ${ this.name }` );

  },
  greet2 () {
    console.log( `hola desde greet 2 soy ${ this.name }` );
  }
}

console.log( person.__proto__ );
console.log( Object.getPrototypeOf( person ) );

// est aes una de las maneras que tienes de crear propiedades en el person
person.sayAge = function () {
  console.log( `Hola, tengo ${ this.age }` );
}

console.log( person );
person.sayAge()

/**
 * HERENCIA
 * 
 * En JS para tener la capacidad de heredar necesitas los prototipos
 * 
 * En esta época la manera de trabajar con herencia es a travésd e las CLASSES 
*/

let programmer = Object.create( person )
console.log( "programmer", programmer );
programmer.greet()
programmer.sayAge()

programmer.languaje = "js"
console.log( programmer.languaje );
console.log( person.languaje ); // undiefined pq lo tiene el programmer no el person

/**
 * MÉTODOS ESTÁTICOS Y DE INSTANCIA
 * 
 * 
 */

// esta forma está deprecated
function Person ( age, name ) {
  this.name = name
  this.age = age
}

Person.greet = function () {
  console.log( "hola mundo" );

}

let new_person = new Person( 30, "juan" )
Person.greet()
// new_person.greet() // esto no va si la creación del método se hace como el Person.greet... pero sí si se hace desde el "prototype"

Person.prototype.greet2 = function ( career ) {
  console.log( `Qué buena tu carra como ${ career }` );
  // console.log( `Qué buena tu carra como ${ this.career }` ); // con el this. no funciona
}
new_person.greet2( "dev" )

/**
 * MÉTODOS AVANZADOS
 * 
 *  - assign -> permite combinar objetos
 *  - key, values and entries -> estos permten obtener claves, valores y claves-valores de un obje
 */

// assign
let person_core = { name: "mariano" }
let person_detail = { age: 30, alias: "el corto" }

let full_person = Object.assign( person_core, person_detail )

// key, values and entries
console.log( ( Object.keys( full_person ) ) );
console.log( ( Object.values( full_person ) ) );
console.log( ( Object.entries( full_person ) ) ); // un array dentro de un array dependiendo del orden
