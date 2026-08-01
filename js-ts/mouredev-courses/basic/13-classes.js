/*
las clases son la forma moderna para trabajar con objetos y organizar el código. 
las clases permiten crear estructuras reutilizables con propiedades y funciones, 
facilitando la creación de objetos similares.

esto está basado en el paradigma de orientación a objetos (POO).

se crea con la palabla clave class y se instancia con la palabra reservada new

las clases tienes:
  - constructores -> permiten definir cuáles son las propiedades iniciales de la clase.
  - valores por defecto
  - funciones
  - propiedades privadas
  - getters y setters
*/

class Person {

  constructor ( name, age, alias ) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

}

// sintaxis para instanciar
const person = new Person( "chema", 29, "cz" )
console.log( person );

// valores por defecto
class NewPerson {

  constructor ( name = "sin nombre", age = 18, alias = "sin alias" ) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}
let person2 = new NewPerson( "chema", 49 )
console.log( person2 );


// acceso a propiedades
console.log( person2.alias ); // se accede a las propiedades como en los objetos
console.log( person2[ "alias" ] ); // se accede a las propiedades como en los objetos
person2.alias = "cz"
console.log( person2.alias );

// funciones en clases (métodos)

class PersonWhitMethod {

  constructor ( name, age, alias ) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  walk () {
    console.log( 'la persona camina' );
  }

}

// propiedades privadas
class PrivateParson {

  // primero se inicializa la pripiedad privada y en js es con un #
  #bank

  constructor ( name, age, alias, bank ) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  walk () {
    console.log( 'la persona camina' );
  }

  pay () {
    this.bank
  }
}

// getters (obtener) y setters (establecer)
class PrivateCar {

  // primero se inicializa la pripiedad privada y en js es con un # y si quiero que el valor sea fijo y no se pueda modificar necesitas crearla e inicializarla a la vez. de esta manera al crear un nuevo coche no se podrá modifiucar el battery ni aparecerá pero sí el tesla.battery pq tengo el getter
  #battery = 74

  constructor ( model = '', year = 2025, wheelTipe = "normal" || "sport" ) {
    this.model = model;
    this.year = year;
    this.wheelTipe = wheelTipe;
    // this.#battery = battery; // si la hacemos privada en el constructor no puede estar
  }

  autonom () {
    console.log( 'el coche no es autónomo' );
  }

  get battery () {
    return this.#battery;
  }
}

let tesla = new PrivateCar( "Y", 2026, "normal" )
console.log( tesla );
console.log( tesla.battery );

/**
 * HERENCIA
 * 
 * con esto puedes heredad el comportamiento y propiedades de una clase superior para facilitar
 * la reutilización del código. es útil cuando trabajas con clases que comparten comportamientos 
 * comunes
 */

class Animal {

  constructor ( name ) {
    this.name = name;
  }

  sound () {
    console.log( "emite un sonido" );
  }
}

// dog heredará todo lo de animal con la palabra "extends"
class Dog extends Animal {
  constructor ( name, size ) {
    super( name ) // es para heredar la pripiedad que tiene Animal que es identica a la de Dog 
    this.size = size; // como size es del Dog, no se le puede hacer el super
  }

  barks () {
    console.log( "el perro ladra" );

  }
}
class Cat extends Animal {
  constructor ( name, size ) {
    super( name ) // es para heredar la pripiedad que tiene Animal que es identica a la de Dog 
    this.size = size; // como size es del Dog, no se le puede hacer el super
  }

  sound () { // con esto sobreescribes
    // super( this.sound ) // con esto lo que haces es llamar al método de la clase padre
    console.log( "el gato hace miau" );

  }


}

let lola = new Dog( "Lolachan", "small" )
lola.barks()
lola.sound()

let melo = new Cat( "melo", "small" )
melo.sound()


/**
 * MÉTODOS ESTÁTICOS
 * 
 * con los métodos estáticos puedes acceder a los métodos de las clases sin necesidad
 * de instanciarlas
 */

class MathOps {
  static sum ( a, b ) {
    return a + b;
  }
}

console.log( MathOps.sum( 9, 8 ) )