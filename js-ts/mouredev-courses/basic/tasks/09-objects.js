// 1. Crea un objeto con 3 propiedades.

const obj1 = {
  name: "chema",
  age: 29,
  profession: "dev"
}
console.log( { obj1 } );

// 2. Accede y muestra su valor.

console.log( obj1.age );
console.log( obj1.name );
console.log( obj1.profession );

// 3. Agrega una nueva propiedad.

obj1.age = 98;
console.log( obj1.age );

// 4. Elimina una de las 3 primeras propiedades.

delete obj1.age
delete obj1.name
delete obj1.profession;
console.log( obj1 );

// 5. Agrega una función e invócala.

obj1.funct = ( ( name ) => console.log( `hola ${ name }` ) );
obj1.funct( "chema" )
console.log( obj1 );

// 6. Itera las propiedades del objeto.

obj1.name = "chema"
obj1.age = 99;
for ( values in obj1 ) {
  console.log( "hola desde: ", { values } );
}

// 6.1 para acceder a los key y values
for ( key in obj1 ) {
  console.log( `key: ${ key }, value: ${ obj1[ key ] }` );
}

// 7. Crea un objeto anidado.

obj1.learnings = {
  growth: {
    dylan: "growth rockstar",
    cxl: {
      course1: "growth mkt",
      course2: "behavior science"
    }
  },
  dev: {
    devtalles: {
      python: false,
      js: true,
      react: false
    }
  }
}
console.log( obj1.learnings );

// 8. Accede y muestra el valor de las propiedades anidadas.

// 9. Comprueba si los dos objetos creados son iguales.

let obj2 = obj1;

console.log( obj1 == obj2 );


// 10. Comprueba si dos propiedades diferentes son iguales.