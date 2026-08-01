// Strings (cadenas de texto)

// ConcatenaciÃ³n

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log( greeting )
console.log( typeof greeting )

// Longitud

console.log( greeting.length )

// Acceso a caracteres

console.log( greeting[ 0 ] )
console.log( greeting[ 11 ] )
const first = greeting[ 0 ]
const last = greeting[ greeting.length - 1 ]
console.log( { first, last } );


// MÃ©todos comunes

console.log( greeting.toUpperCase() ) // Mayúsculas
console.log( greeting.toLowerCase() ) // Minúsculas
console.log( greeting.indexOf( "Hola" ) ) // Índice donde aparece el hola -> 0
console.log( greeting.indexOf( "Brais" ) ) // indice donde ha encontrado la palabra que le dices que es 6
console.log( greeting.indexOf( "MoureDev" ) ) // No existe por lo que devuelve -1
console.log( greeting.includes( "Hola" ) ) // Incluye
console.log( greeting.includes( "Brais" ) )
console.log( greeting.includes( "MoureDev" ) )
console.log( greeting.slice( 0, 10 ) ) // devuelve una Sección entre 2 números y no incluye el último número porque empieza a contar desde 0. devuelve la cadena que ha sido cortada, no la que "sobra"
console.log( greeting.replace( "Brais", "MoureDev" ) ) // Reemplazo
console.log( greeting.indexOf( "MoureDev" ) ) // ahora sí dará un resultado, 6

// Template literals (plantillas literales)

// Strings en varias lí­neas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log( message )

// InterpolaciÃ³n de valores
let email = "braismoure@mouredev.com"
console.log( `Hola, ${ myName }! Tu email es ${ email }.` )