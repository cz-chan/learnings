/**
 * CLASSES ADVANCED
 * 
 * Esta es la forma correcta de trabajar en la actualidad con objetos con forma de herencia, a través
 * de las clases y de instanciar nuevos objetos con las características de la clase padre
 */

class Person {

  constructor ( name, age ) {
    this.name = name
    this.age = age
  }

  greet () {
    console.log( `Hola soy ${ this.name }` );
  }
}

/**
 * HERENCIA
 */
let new_p = new Person( "chema", 50 )
new_p.greet()

console.log( new_p );

new_p.sayAge = function () {
  console.log( `Tengo ${ this.age } anios` );
}
new_p.sayAge()

/**
 * ABSTRACCIÓN
 * 
 * Una clase abstracta es esa clase que o se puede instanciar directamente
 */

// clase abstracta
class Animal {
  constructor ( name ) {
    if ( new.target === Animal ) {
      throw new Error( "No se puede instanciar una clase abstracta" )
    }
    this.name = name;
  }

  makeSound () {
    throw new Error( "Este método tiene que ser instanciado por la subclase u objeto" )
  }
}

/**
 * POLIMORFISMO
 * 
 * Esto solo lo tienen los objetos, es decir, las clases instanciadas de una clase madre abtracta. Sirve para responder de forma distinta a un mismo método
 */

class Cat extends Animal {
  makeSound () {
    console.log( 'MIAU' );
  }
}
const cat = new Cat( "Cat" )
cat.makeSound() // esto dará un error si no está instanciado el método makeSound en el objeto que lo está llamando pq sino, estaría llamando al método de la propia clase madre y eso es una restricción que se le ha puesto a la clase para que sea abstracta

class Dog extends Animal {
  makeSound () {
    console.log( 'GUAU' );
  }

}
const dog = new Dog( "Dog" )
dog.makeSound()

/**
 * MIXINS
 * 
 * es una froma que existe para compartir métodos entre clases sin tener que usar la herencia
 */

const FlyMixin = {
  // está en mayus la primera pq es la forma que quiero hacer para representar esa característica de volar
  fly () {
    console.log( `${ this.name } esta volando` ); // aunauqe no exista ningun name, si lo añades a un objeto que sí tiene un name, lo tomará como suyo
  }
}

class Bird extends Animal {
}
class Dragon extends Animal {
}

// Object.assign( Bird, FlyMixin ) // necesitas el prototype para poder asignarle la capacidad de volar, sin ella no se puede crear
Object.assign( Bird.prototype, FlyMixin )
// Object.assign( Dragon.prototype, FlyMixin )

const bird = new Bird( "chamabird" )
console.log( bird.name );
bird.fly()
const dragon = new Bird( "chamadragon" )
console.log( dragon.name );
dragon.fly()


/**
 * SINGLETON
 * 
 * Es un patron de diseño para resolver un patron común. este intenta resolver que una clase solo se puede instanciar una única vez
 */

class Session {
  constructor ( name ) {
    if ( Session.instance ) { // esta es la forma que hay en JS para decirle que haya una única instancia 
      return Session.instance
    }
    this.name = name
    Session.instance = this
  }
}

const sessionUser = new Session( "chema" )
console.log( sessionUser );
const sessionUser2 = new Session( "juan" )
console.log( sessionUser2 ); // retorna chema pq solo puede ser un unico valor


/**
 * SYMBOL
 * 
 * Es un tipo de dato primitivo y se introdujo cmo un iedntificador único e inmutable.
 * 
 */

class User {
  constructor ( name, age, ID ) {
    this.name = name
    this.age = age
    this[ ID ] = Math.random() // esto era la forma antigua de tener variables privadaas pero que se actualizó a través del " # " 
  }

  getID ( ID ) {
    return this[ ID ]
  }
}

const user = new User( 'juan', 89 )
console.log( user )

// console.log( user.getID() );
// console.log( user.ID )
// console.log( user[ ID ] )

/**
 * INSTANCEOF
 * 
 * 
 */

class Car {

}
const tesla = new Car()

console.log( tesla === Car ); // false
console.log( tesla instanceof Car ); // true -> te dice si es una instancia de


/**
 * CREATE
 * 
 * es otra forma de crear instancias a través del prototipo
 */

const anotherCar = Object.create( Car.prototype )
console.log( anotherCar instanceof Car ); // true

/**
 * PROXYS
 * 
 * un proxy es para interceptar y modificar el comportamiento de las clases. esto puede ser útil para validar y aplicar seguridad y es algo qeu se pone en medio para que haga una acción
 * 
 * estos proxys siempre teinen una forma muy concreta de crearse.
 * necesitan:
 *  - 2 métodos:
 *    - get -> que recibe como parámetros:
 *      - target: es la instancia como tal (en este caso es el BanckAccount)
 *      - property: 
 *
 *    - set -> que recibe como parámetros:
 *      - target: 
 *      - property: 
 *      - value: 
 */

const proxy = {
  get ( target, property ) {
    console.log( `Se está accediendo a la propiedad ${ property }` );
    return target[ property ]
  },
  set ( target, property, value ) {
    console.log( target );
    console.log( property );
    console.log( value );
    if ( property === "balance" && value < 0 ) {
      throw new Error( "El saldo no puede ser negativo" )
    }
    target[ property ] = value;
  }


}

class BankAccount {
  constructor ( balcance ) {
    this.balcance = balcance
  }
}

const account = new Proxy( new BankAccount, proxy )
console.log( account.balcance );
account.balcance = 200
console.log( account.balcance );

