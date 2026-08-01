// Array

// Declaración

let myArray = []; // con esto definimos una estructura de datos 
let myArray2 = new Array() // otra forma de crear arrays

console.log( myArray )
console.log( myArray2 )

// Inicialización

myArray = [ 3 ];
myArray2 = new Array( 3 );
/* estas estructuras no se comportan igual. en el primero caso al array
se le añade el elemento 3 mientras que en la segunda, lo que hace es crear 
un array de 3 elementos los cuales no están definidos y que tienes que añadir
tú a través de una sintacsis similar a Java: myArray2 = new Array(1, 2, 3)

por lo que es más entendible trabajar con let newArray = [];
*/

console.log( myArray )
console.log( myArray2 )

myArray = [ 1, 2, 3, 4 ]
myArray2 = new Array( 1, 2, 3, 4 )

console.log( myArray )
console.log( myArray2 )

myArray = [ "Brais", "Moure", "mouredev", 37, true ]
myArray2 = new Array( "Brais", "Moure", "mouredev", 37, true )

console.log( myArray )
console.log( myArray2 )

myArray2 = new Array( 3 ) // prediseñas un array con 3 huecos
myArray2[ 2 ] = "Brais"
// myArray2[0] = "Moure"
myArray2[ 1 ] = "mouredev"
myArray2[ 4 ] = "mouredev"

console.log( myArray2 )

myArray = []
myArray[ 2 ] = "Brais"
// myArray[0] = "Moure"
myArray[ 1 ] = "mouredev"

console.log( myArray )

// MÃ©todos comunes

myArray = []

// MÉTODOS MÁS COMUNES
/* push y pop 
- .push() añade elementos al final del array (hay que especificarle el elemento que quieres 
que añada) array.psuh(true)
- .pop() elimina elementos del último hueco del array y además lo muestra
*/


myArray.push( "Brais" )
myArray.push( "Moure" )
myArray.push( "mouredev" )
myArray.push( 37 )

console.log( myArray )

console.log( myArray.pop() ) // Elimina el último y lo devuelve
myArray.pop()

console.log( myArray )


/* shift y unshift
- .shift() -> elimina el primer elenento del array (no hay que pasarle nada)
- unshift() -> añade uno o más elementos al principio del array pero tienes que especificarle
qué elementos quieres array.unshift("elemento-1", 2) 
*/

console.log( myArray.shift() )
console.log( myArray )

myArray.unshift( "Brais", "mouredev" )
console.log( myArray )

// OPERACIONES
/* 
- .length -> devuelve cuanto mide el array
al ser una propiedad y no una función, no hay que ponerle los paréntesis

- .clear -> no existe un método para limpiar el array más allá de volver a inicializarla con un 
array vacio array = [] o a través del .length -> array.lenght = 0;

- .slice(inicio, fin) -> NO muta el array original, devuelve uno nuevo (copia superficial) con
una porción del array.
· inicio: índice donde empieza a copiar (incluido)
· fin: índice donde corta, SIN incluirlo
array.slice(1, 3) -> devuelve los elementos de los índices 1 y 2 (el 3 queda fuera)

- .splice(inicio, cantidad, ...nuevos) -> a diferencia de .slice(), MUTA el array original y
devuelve un array con los elementos eliminados.
· inicio: índice desde donde empieza a actuar (incluido)
· cantidad: NO es un segundo índice, es el número de elementos a eliminar desde "inicio"
· nuevos (opcional): elementos a insertar en la posición "inicio", donde se borró el contenido
array.splice(1, 4, "Nuevo elemento") -> elimina 4 elementos empezando en el índice 1 (índices 1,2,3,4)
y en su lugar inserta "Nuevo elemento" (también podría ser un número o cualquier tipo de dato primitivo)
*/
//lenght
console.log( myArray.length )

// clear
myArray = []
myArray.length = 0 // alternativa
console.log( myArray )

// slice
myArray = [ "Brais", "Moure", "mouredev", 37, true ]

let myNewArray = myArray.slice( 1, 3 )

console.log( myArray )
console.log( myNewArray )

// splice
myArray.splice( 1, 3 )
console.log( myArray )

myArray = [ "Brais", "Moure", "mouredev", 37, true ]

myArray.splice( 1, 2, "Nueva entrada" )
console.log( myArray )


