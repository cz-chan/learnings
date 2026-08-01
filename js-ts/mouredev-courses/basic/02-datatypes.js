// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// NÃºmeros (number) -> hasta 64 bits
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined 
let undefinedValue // da undefined pq está definida pero no inicializada
console.log( undefinedValue )

// Null
let nullValue = null // esto da ausencia de valor intencional. esperamos un valor pero ahora es null

// Symbol
// Identificador único que sirve para crear propiedades de objetos que no se pueden sobrescribir
let mySymbol = Symbol( "mysymbol" )

// BigInt
// cuando quieres representar valores numéricos (ENTEROS) mayores a 64 bits
let myBigInt = BigInt( 817239871289371986589716389471628379612983761289376129 )
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log( typeof myName ) // typeof es una función que nos permite saber el tipo de dato de una variable
console.log( typeof alias )
console.log( typeof email )

console.log( typeof age )
console.log( typeof height )

console.log( typeof isTeacher )
console.log( typeof isStudent )

console.log( typeof undefinedValue )

console.log( typeof nullValue )

console.log( typeof mySymbol )

console.log( typeof myBigInt )
console.log( typeof myBigInt2 )