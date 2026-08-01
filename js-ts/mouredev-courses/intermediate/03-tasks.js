// 1. Agregega una funciÃ³n al prototipo de un objeto

class Vehicle {
  constructor ( model, brand ) {
    this.model = model
    this.brand = brand
  }
}

let tesla = new Vehicle( "Y", "Tesla" );
tesla.isElectric = function () {
  console.log( `The model ${ this.model } of ${ this.brand } is a electric car` );
}
tesla.isElectric()

// 2. Crea un objeto que herede de otro

class Bike extends Vehicle {
  constructor ( model, brand, engine ) {
    super( model, brand )
    this.engine = engine
  }
}

let cb650r = new Bike( "CB650R", "Honda", "650cc" )
console.log( cb650r );


// 3. Define un mÃ©todo de instancia en un objeto

cb650r.carnetType = function () {
  console.log( `La ${ this.model } no está limitada por defecto para el A2` );
}
cb650r.carnetType()

// 4. Haz uso de get y set en un objeto

class NewVehicle extends Vehicle {

  // los setters y getters en JS DEBEN LLAMARSE IGUAL
  get carnet () {
    return this._carnet
  }
  set carnet ( value ) {
    this._carnet = value;
  }
}
let cbr650r = new NewVehicle( "CBR650R", "Honda" );
cbr650r.carnet = "A2"
console.log( cbr650r.carnet );

// 5. Utiliza la operaciÃ³n assign en un objeto

Object.assign( Bike.prototype, NewVehicle )

let scout = new NewVehicle( "Scout", "Indian" )
scout._carnet = "A"
console.log( scout.carnet );

// 6. Crea una clase abstracta



// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy