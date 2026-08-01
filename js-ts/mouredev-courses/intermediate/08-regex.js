/**
 * REGULAR EXPRESSION: 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
 *  https://regex101.com/
 * 
 * Son patrones de búsqueda de texto. Es uno de los mecanismos más potentes a la hora de realizar
 * estas búsqueda a travñés de texto.
 * 
 * Sigue un estandar por lo que están en todos los lenguajes
 */

/**
 * SINTAXIS:
 * 
 *  - las regex tienen que ir siempre entre barras " / " (al inicio y final)
 *  - el criterio de búsqueda va entre las barras 
 *  - regex tiene sus propios métodos -> la operación más simple es .test() la cual hace una 
 * búsqueda y devuelve true o false dependiendo de si la expresión regular funciona en el texto
 * que le vas a pasar
 */

const regex = /abc/
const regex2 = RegExp( "abc" ) // esta forma de definir una regex pero es más simple la primera
const text = "hola abc js"
const newText = "hola mundo js"

// test -> verifica coincidencia con true/false
regex.test( text ) // true
regex.test( newText ) // false

// 
const age = "mi edad es 49"
const regex3 = /\d/ // para detectar si hay números
const regex4 = /[0-3]/ // busca números entre el 0 y 3

console.log( regex3.test( age ) ); // true
console.log( regex4.test( age ) ); // false

// replace -> remplaza el texto por el texto que le pasas
const regex5 = /JavaScript/ // busca números entre el 0 y 3
console.log( "Hola desde JS".replace( "desde JS", "TS" ) ) // replace cambia una cadena de texto por otra cosa que le indiques pero tb acepta regex
console.log( "Hola muundo desde JS.".replace( regex5, 2 ) ); // no cambia pq no hay javascript
console.log( "Hola muundo desde javascript.".replace( regex5, 2 ) ); // no cambia pq es key sensitive, las mayúsculas le importan por lo que primero se debería aplanar o usar otro flags

console.log( "ando contando 1 2 3 4 5 6 7 8".replace( regex3, "[numero]" ) ); // solo reemplaza al primero que observa

const regex6 = /\d/g // para encontrar tantos números como haya le añades el flag " g " que en este caso busca globalmente
console.log( "ando contando 1 2 3 4 5 6 7 8".replace( regex6, "[numero]" ) );

// exec: retorna los detallas de la coincidencia
const text2 = "ando contando 1 2 3 4 5 6 7 8"
console.log( regex6.exec( text2 ) ) // me devuelve el primer índicia donde se ha encontrado la coincidencia

while ( ( match = regex6.exec( text2 ) ) !== null ) {
  console.log( match ); // esto ejecuta el exec mientras no de algo null (sabes que es null pq al ponerte encima del exce puede dar como valor: RegExpExecArray | null)
}