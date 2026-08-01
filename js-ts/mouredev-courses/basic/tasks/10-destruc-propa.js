// 1. Usa desestructuraciÃ³n para extraer los dos primeros elementos de un array.

let arr = [ 1, 2, "hola, true", false ];
let [ arr1, arr2 ] = arr

console.log( { arr1, arr2 } );

// 2. Usa desestructuraciÃ³n en un array y asigna un valor predeterminado a una variable.

let [ , , , , hola = 1 ] = arr
console.log( { hola } );

// 3. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto.

let book = {
  fronPage: "red",
  pageCount: 500,
  isRead: false
}
let { fronPage, pageCount } = book
console.log( { fronPage, pageCount } );


// 4. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto y asÃ­gnalas a nuevas variables con nombres diferentes.

// let { pageCount: count = 360, isRead: read = true } = book; // no se puede asignar nuevos valores a las propiedades
let { pageCount: count, isRead: read } = book;
console.log( { count, read } );

// 5. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto anidado.

let newBook = {
  ...book,
  bookName: "The great mental models",
  wasPurchased: {
    cost: 32,
    currency: "dolar",
    where: "amazon.com"
  }
}
let { bookName, wasPurchased: {
  cost, currency
} } = newBook
console.log( { cost, currency, bookName } );

// 6. Usa propagaciÃ³n para combinar dos arrays en uno nuevo.

let arr3 = [ ...arr, 23, 24 ];
let arr4 = [ ...arr, arr3, 90 ]
console.log( { arr4 } );

// 7. Usa propagaciÃ³n para crear una copia de un array.

let arr5 = [ ...arr4 ]
console.log( arr5 );

// 8. Usa propagaciÃ³n para combinar dos objetos en uno nuevo.

let isInLibrary = {
  isIn: true,
  location: "alicante",
  population: "torrevieja"
}

let newBookLocation = { ...book, ...isInLibrary };
console.log( { newBookLocation } );

// 9. Usa propagaciÃ³n para crear una copia de un objeto.

let newBookLocation2 = { ...newBookLocation }
console.log( { newBookLocation2 } );

// 10. Combina desestructuraciÃ³n y propagaciÃ³n.

const car = {
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

let { model, shipping: { city: { name } } } = car

let bookInACar = {
  bookName,
  isInACar: true,
  // para acceder a estas variables siguientes necesitas primero desestructurarlas y crearlas como variables
  model,
  whereIsTheCar: { shipping: { city: name } }
}
console.log( bookInACar );
