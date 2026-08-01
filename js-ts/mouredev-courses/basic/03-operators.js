// operadores

// OPERADORES ARITMÉTICOS fundamentales

let a = 3
let b = 10

console.log( a + b ) // suma
console.log( a - b ) // resta
console.log( a * b ) // multiplicación
console.log( a / b ) // división

console.log( a % b ) // módulo (resto)
console.log( a ** b ) // potenciación

console.log( a++ ); // incrementa en 1
console.log( a-- ); // decrementa en 1


// OPERADORES DE ASIGNACIÓN

let myVar = 2; // = es asignación

myVar += 2; // += suma el valor de 2 a myVar
myVar -= 2; // -= resta el valor de 2 a myVar
myVar *= 2; // *= multiplica el valor de 2 a myVar
myVar /= 2; // /= divide el valor de 2 a myVar
myVar %= 2; // %= módulo el valor de 2 a myVar
myVar **= 2; // **= potenciación el valor de 2 a myVar


// OPERADORES DE COMPARACIÓN (siempre dan true o false)

console.log( a > b ); // mayor que
console.log( a < b ); // menor que
console.log( a >= b ); // mayor o igual que
console.log( a <= b ); // menor o igual que
console.log( a == b ); // comparas una igualdad SOLO por VALOR -> puede dar true "2" == 2
console.log( a != b ); // diferente valor
console.log( a === b ); // comparas tanto igualdad DE TIPO y DE VALOR -> false "2" === 2
console.log( a !== b ); // diferente valor o tipo de dato

console.log( 0 == false ); // true
console.log( 0 === false ); // false
console.log( 1 == true ); // true
console.log( 2 == true ); // false
console.log( 2 === true ); // false
// esto pasa por como está construido js para que un 0 sea false, 1 true y todos los demás no existan por ende son como el 0, false para jugar con los binarios

console.log( null == undefined ); // true -> pero no son iguales ni del mismo tipo de dato, en null hay ausencia de valor por el programador, undefined ausencia de valor porque no está inicializado pero para JS son iguales por la igualdad de valor
console.log( null === undefined ); // false -> porque son diferentes tipos de datos ya que comparas por igualdad de tipo de dato y de valor

console.log( 0 == '' ); // true
console.log( 0 == '  ' ); // true
console.log( 0 == 'hola' ); // false
console.log( 0 === '' ); // false

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacÃ­as
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacÃ­as 
*/

// OPERADORES LÓGICOS
// comparan valores booleanos entre sí

// and -> &&
// or -> ||
// not -> !

console.log( true && true ); // true
console.log( true && false ); // false
console.log( false && true ); // false
console.log( false && false ); // false

console.log( true || true ); // true
console.log( true || false ); // true
console.log( false || true ); // true
console.log( false || false ); // false

console.log( !true ); // false
console.log( !false ); // true

// &&
console.log( 2 > 1 && 2 < 3 ); // true
console.log( 2 < 1 && 3 < 1 ); // false
console.log( 2 < 1 && 2 > 1 ); // false

// ||
console.log( 2 > 1 || 2 < 1 ); // true
console.log( 2 < 1 || 2 < 1 ); // false

// ! -> invierte valores
console.log( !( 2 > 1 ) ); // false
console.log( !( 2 < 1 ) ); // true

// OPERADOR CONDICIONAL TERNARIO
//. PERMITEN ESCRIBIR CONDICIONES

const isRaining = true;

isRaining ? console.log( "Lleva un paraguas" ) : console.log( "No lleves paraguas" );

console.log( 0 == false ); // true -> COMPARACION SOLO POR VALOR
console.log( 0 === false ); // false -> COMPARACION POR VALOR Y TIPO DE DATO
