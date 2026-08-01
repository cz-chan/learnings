// 1. y 2. Crea una clase que reciba dos propiedades. y AÃ±ade un mÃ©todo a la clase que utilice las propiedades.

class TwoProperties {
  constructor ( name, surename ) {
    this.name = name
    this.surename = surename
  }
  init () {
    console.log( `name: ${ this.name }, surename: ${ this.surename }` );
  }
}
let chema = new TwoProperties( "chema", "ferrandez" )
chema.init()

// 3. Muestra los valores de las propiedades e invoca a la funciÃ³n.

console.log( chema.name, chema.surename );

// 4. y 5, AÃ±ade un mÃ©todo estÃ¡tico a la primera clase. y Haz uso del mÃ©todo estÃ¡tico.

class Persona {
  constructor ( name, surename ) {
    this.name = name
    this.surename = surename
  }

  static greeting () {
    console.log( "hola mundo" );

  }

  init () {
    console.log( `name: ${ this.name }, surename: ${ this.surename }` );
  }
}

let berta = new Persona( "berta", "perez" )
// berta.greeting() // no funciona porque es estático
Persona.greeting() // así si funciona

// 6. y 7. Crea una clase que haga uso de herencia. y Crea una clase que haga uso de getters y setters.

class newPersona extends Persona {
  constructor ( age, name, surename, work ) {
    super( name, surename )
    this.age = age;
    this._work = work
  }

  get employee () {
    console.log( "yes" );
  }

  set work ( theirWork ) {
    this._work = theirWork;
  }
}
let mari = new newPersona( 32, 'mari', "botella", "waiter" )
console.log( mari );
mari.work = "firefighter"

console.log( mari );


// 8.y 9. Modifica la clase con getters y setters para que use propiedades privadas. y Utiliza los get y set y muestra sus valores.

class NewPerson extends Persona {
  #age
  #work

  constructor ( age, name, surename, work ) {
    super( name, surename )
    this.#age = age;
    this.#work = work
  }

  get employee () {
    console.log( "yes" );
  }
  get age () {
    return this.#age;
  }

  set work ( theirWork ) {
    this.#work = theirWork;
  }
  get work () {
    return this.#work;
  }
}
let mery = new NewPerson( 34, "mery", "posada", "psycho" )
console.log( mery );
console.log( mery.age, mery.work )
// console.log( mery.age(), mery.work() ) // no son funciones por lo que no se pueden ejecutar con ()

// 10. Sobrescribe un mÃ©todo de una clase que utilice herencia.

class Girl extends NewPerson {

  constructor ( name, age, surename, friends ) {
    super( name, age, surename )
    this.friends = friends;
  }

  friends () {
    console.log( `Yo, ${ this.name } tengo ${ this.friends }` );
  }
}

let luisa = new Girl( "luisa", 56, "fernanda", 48 )
console.log( luisa.friends )
