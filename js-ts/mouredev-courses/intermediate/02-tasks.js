
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let newURLs = [ "c12z.io", "qiip.me", "lavidamodernaes.com", "aromathic.com", "maieuthic.com" ]
console.log( "Map", (
  newURLs.map( ( url ) => "https://" + url ) ) ); // añade https://
console.log( "Filter", ( newURLs.filter( url => url.includes( ".me" ) ) ) );  // devuelve qiip.me
let total = newURLs.reduce( ( acc, actualValue ) => {
  return actualValue.includes( ".com" ) ? acc + 1 : acc
}, 0 );
console.log( "Reduce", `En el array de urls hay ${ total } que acaban en '.com'` );

let fruits = [ 'manzana', 'naranja', 'manzana', 'uva', 'naranja', 'manzana' ]
let totalFruits = fruits.reduce( ( acc, fruit ) => {
  acc[ fruit ] = ( acc[ fruit ] || 0 ) + 1
  return acc
}, {} )
console.log( `El total de frutas es:`, totalFruits );

// 2. Dado un array de nÃºmeros, crea uno nuevo con dichos nÃºmeros elevados al cubo y filtra sÃ³lo los nÃºmeros pares

let arrNum = [];
for ( let i = 0; i <= 20; i++ ) {
  arrNum.push( i )
}
console.log( arrNum ); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let newArrNum = [];
let even = []

// 2 formas distintas de hacer lo mismo
// arrNum.map( ( num ) => {
//   newArrNum.push( num ** 3 );
// } )
// newArrNum.map( ( evenNum ) => {
//   if ( evenNum % 2 === 0 ) even.push( evenNum )
// } )
// console.log( { newArrNum }, { even } );

arrNum.map( ( numb ) => newArrNum.push( numb ** 3 ) )
even = newArrNum.filter( ( n ) => n % 2 === 0 )
console.log( { newArrNum }, { even } );


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lecciÃ³n

let users = [
  { nombre: "Ana", edad: 25, emails: [ "ana@gmail.com", "ana@yahoo.es" ], pedidos: [ "laptop", "mouse", "microphone" ] },
  { nombre: "Luis", edad: 17, emails: [ "luis@outlook.com" ], pedidos: [ "teclado" ] },
  { nombre: "Juan", edad: 17, emails: [ "juan@google.com" ], pedidos: [ "mouse" ] },
  { nombre: "Eva", edad: 30, emails: [ "eva@mail.com", "eva@work.com", "eva@proton.me" ], pedidos: [ "monitor", "laptop", "auriculares", "microphone" ] },
  { nombre: "Ivan", edad: 16, emails: [ "ivan@hotmail.com" ], pedidos: [ "laptop" ] },
  { nombre: "Sole", edad: 22, emails: [ "sole@gmail.com", "sole@yahoo.com" ], pedidos: [ "mouse", "alfombrilla" ] },
  { nombre: "Mari", edad: 22, emails: [ "mari@gmail.com", "juani@yahoo.com" ], pedidos: [ "pc", "alfombrilla" ] }
]

let userEmails = []
let emailAdults = []

// el flatMap retorna un array nuevo habiéndole aplicado ya un flat y un map (una función a cada elemento) y por ende, hay que retornarlo en una variable para que se guarde, no hacer el push dentro de dicha variable
userEmails = users.flatMap( ( user ) => {
  if ( user.edad >= 18 ) {
    return ( user.emails ) // si a esto le añado un .push() me crea un array de 2 profundidades
  }
  return []
} )

// .reduce() agrupa usuarios por dominio de email
// Estructura final: { "gmail.com": ["Ana", "Sole"], "yahoo.es": ["Ana"], ... }
emailAdults = users.filter( ( user ) => user.edad >= 18 ).reduce( ( acc, user ) => {
  // para cada usuario, itera todos sus emails
  user.emails.forEach( email => {
    // extrae dominio: "ana@gmail.com" → "gmail.com" (índice [1] después de split por @)
    let domain = email.split( "@" )[ 1 ]

    // si dominio no existe en acc, crea un array vacío para él
    // (acc es el acumulador: el objeto resultado que se construye en cada iteración)
    if ( !acc[ domain ] ) acc[ domain ] = []

    // añade el nombre del usuario a la lista de ese dominio
    acc[ domain ].push( user.nombre )
  } )
  // retorna acc actualizado al siguiente usuario
  return acc
}, {} ) // {} es el valor inicial del acumulador (objeto vacío)

// esto tb funciona pero no hace que use el flatMap
// for ( let i = 0; i < users.length; i++ ) {
//   if ( users[ i ].edad >= 18 ) {
//     let emails = users[ i ].emails
//     userEmails.push( emails )
//   }
// }
// usersInSameCompany = userEmails.flat().filter( ( email ) => email.split( "@" )[ 1 ] )


console.log( userEmails );
console.log( emailAdults );
// console.log( usersInSameCompany )

// 4. Ordena un array de números de mayor a menor

let arrNum2 = []

// son números randoms pero ordenados por culpa del arrNum
for ( let i = 0; i < arrNum.length; i++ ) {
  let random = ( i + 1 ) * Math.random()
  let mult = ( random * arrNum[ i ] )

  arrNum2.push( Math.round( mult ) )
}
console.log( arrNum2 );


// como hacer un arr ordenado a desordenado
let arrNum3 = [ ...arrNum2 ]  // copia del array
arrNum3.sort( () => Math.random() - 0.5 ) // restas 0.5 para que sea sí o sí el random positivo o negativo
console.log( "unsorted", arrNum3 );


let arrNumSorted = []
arrNumSorted = arrNum3.sort( ( a, b ) => a - b ) // si es positivo, hace swipe sino , se queda igual
console.log( "sorted", arrNumSorted );


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let newSet1 = new Set( users.find( ( user ) => user.nombre.toLowerCase() === "eva" ).pedidos ) // busco los pedidos de eva
let newSet2 = new Set( users.find( ( user ) => user.nombre.toLowerCase() === "ana" ).pedidos ) // lo de ana

console.log( "Eva", newSet1 );
console.log( "Ana", newSet2 );

// unión -> por defecto los sets no dan duplicados por lo que lo que te da al unirlos es lo que hay sin duplicados
let union = new Set( [ ...newSet1, ...newSet2 ] )
console.log( "union", union );

// intersection -> es lo que hay que los une. lo que ambos tienen
let intersection = new Set( [ ...newSet1 ].filter( ( inCommon ) => newSet2.has( inCommon ) ) )
console.log( "intersec", intersection );

// difference -> es lo DISTINTO (!) a los dos pero en este caso es lo que hay en el Set2 que no hay en el 1
let difference = new Set( [ ...newSet2 ].filter( ( nonCommon ) => !newSet1.has( nonCommon ) ) )
console.log( "differen", difference );

// 6. Itera los resultados del ejercicio anterior

union.forEach( ( value ) => console.log( `Item: ${ value }` )
)

// 7. Crea un mapa que almacene informaciÃ³n se usuarios (nombre, edad y email) e itera los datos

let newMap = new Map( [ ...users ].map( ( { nombre, edad, emails }, index ) => [ index, { nombre, edad, emails } ] ) )
console.log( "newMap", newMap );

// 8. Dado el mapa anterior, crea un array con los nombres

let newArrFromMap = []
for ( let i = 0; i < newMap.size; i++ ) {

  let name = newMap.get( i ).nombre
  newArrFromMap.push( name )
}

console.log( newArrFromMap );

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let emailFromAdults = []

users.map( ( user ) => {
  if ( user.edad >= 18 ) {
    let emails = user.emails
    emailFromAdults.push( emails )
  }
} )
console.log( emailFromAdults );

let adultsEamilToSet = new Set( [ ...emailFromAdults ].flat() ) // si quito el flat es set de 4 pq hay más de una persona con un email
console.log( adultsEamilToSet );

// 10. Transforma el mapa en un objeto, a continuaciÃ³n, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let newNewMap = new Map()
newMap.forEach( ( user, index ) => { // ojo con los valores de user, index pq son en ese orden, el index está el último


  let email = user.emails[ 0 ]
  newNewMap.set( email, user )

} )
console.log( newNewMap );
