// 1. Crea una RegEx que valide correos electrÃ³nicos

const emaileXP = "chema@gmail.com"

// el divisior obligatorio es el @. necesito contenido delante y detrás. además, detras necesito tb letras, númros o ambos con un " . " y que después de este haya como mínimo 2 letras, aquí ya no pueden haber números
const emailRegexValidation = /^[A-Za-z0-9_.+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/

/**
 * MINIDOC
 *
 *  1. el " - " debe ir al inicio o al final pq sino en código ASCII, es un rango inválido → dará error de sintaxis pq lo tomará como rango entre "algo"-"y otro algo"
 *
 *  2. el " + " de fuera del [] como cuantificador significa "una o más repeticiones de lo que hay en la clase".
 *
 *  3. el dóminio permite que haya letras, números y guiones pero no ".", "+" o "_"
 *
 *  4. para poner el . y que sea un literal necesitas el backslash " \ " sino significará "cualquier carácter"
 *
 *  5. cuando quieres poner que tenga 2 o más elementos dentro de un patrón se usa el cuantificador " {2,} " que dice que tiene que haber como mínimo 2 y no das o límite superior
 *
 *  6. ^ y $ son anclas: ^ obliga a que el match empiece en el primer caracter del string, $ obliga
 *     a que termine en el ultimo. Sin ellas, test() solo comprueba que el patron aparezca EN ALGUNA
 *     PARTE del string (ej "hola chema@gmail.com que tal" daria true). Con ambas, exiges que el
 *     string COMPLETO sea un email valido, nada antes ni despues.
 *
 */
console.log( emailRegexValidation.test( emaileXP ) );


// -- OTRAS FORMAS DE VALIDAR UN EMAIL --

// variante A: usando \w en vez de [A-Za-z0-9_]
const emailRegexW = /^[\w.+-]+@[\w-]+\.[A-Za-z]{2,}$/

/**
 * MINIDOC variante A
 *
 *  1. \w es una clase predefinida que equivale a [A-Za-z0-9_], asi que [\w.+-] cubre lo mismo
 *     que [A-Za-z0-9_.+-] pero mas corto.
 *
 */
console.log( emailRegexW.test( emaileXP ) );

// variante B: case-insensitive con el flag " i "
const emailRegexCaseInsensitive = /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z]{2,}$/i

/**
 * MINIDOC variante B
 *
 *  1. el flag " i " (insensitive) al final de la regex hace que no distinga mayusculas de
 *     minusculas, asi que solo hace falta escribir el rango en minuscula (a-z) y ya cubre
 *     tambien A-Z. Con esto validas emails como "Chema@Gmail.COM" igual que en minuscula.
 *
 */
console.log( emailRegexCaseInsensitive.test( "Chema@Gmail.COM" ) );

// variante C: permite subdominios (ej: mail.empresa.co.uk)
const emailRegexSubdomains = /^[\w.+-]+@(?:[a-z0-9-]+\.)+[a-z]{2,}$/i

/**
 * MINIDOC variante C
 *
 *  1. (?:...)  es un grupo NO capturador, se usa solo para agrupar sin guardar el resultado
 *     en memoria (mas eficiente si no necesitas usar ese match despues).
 *
 *  2. (?:[a-z0-9-]+\.)+ repite "un trozo de dominio seguido de un punto" una o mas veces,
 *     por eso permite varios niveles antes del TLD final: "mail." + "empresa." + "co." + "uk"
 *
 */
console.log( emailRegexSubdomains.test( "chema@mail.empresa.co.uk" ) );


// 2. Crea una RegEx obtenga Hashtags de un Texto

const hashText = "#JS #TS #javascript"
const regexHash = /#\w+/g

/**
 * MINIDOC
 * 
 *  - el " # " no es un caracter especial por lo que se puede poner sin problemas y como por lo general va antes, se le añade que detras puedan haber tantas létras o números como quieras
 * 
 *  - el " g " es para decirle que mache tanto como haya
 */

let count = 0
while ( ( match = regexHash.exec( hashText ) ) !== null ) {
  console.log( match );
  // console.log( hashText.match( regexHash ) ); // da un bucle infinito porque

  count++;
}
console.log( count );

// regexHash.test( hashText )

// 3. Crea una RegEx que valide contraseÃ±as seguras (mÃ­nimo 8 caracteres, al menos una letra y un nÃºmero, un caracter especial y una letra mayús y otra minús)

const pass = "87@4oFwgu$sg8u!"
const pass2 = "1234aF"

const regexPassValitador = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¡@_#$%\^&*()=+,\.~`'"?¿!;\[\]\\{}:><\-]).{8,}$/

console.log( regexPassValitador.test( pass ) );
console.log( regexPassValitador.test( pass2 ) );


// -- OTRAS FORMAS DE VALIDAR UNA CONTRASEÃ‘A --

// variante A: sin lookaheads, varias regex simples combinadas con &&
const tieneMinuscula = /[a-z]/ // podría ser \w
const tieneMayuscula = /[A-Z]/ // podría ser \W
const tieneNumero = /[0-9]/ // tb podría ser \d
const tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/
const tieneLongitud = /.{8,}/

const validarPassSimple = ( str ) =>
  tieneMinuscula.test( str ) &&
  tieneMayuscula.test( str ) &&
  tieneNumero.test( str ) &&
  tieneEspecial.test( str ) &&
  tieneLongitud.test( str )

/**
 * MINIDOC variante A
 *
 *  1. en vez de un solo regex con 4 lookaheads, usas 5 regex pequeÃ±as y las combinas con &&
 *     en una funcion. Hace exactamente lo mismo pero es mas facil de leer si no dominas
 *     lookaheads todavia: cada linea comprueba UNA sola condicion.
 *
 *  2. tiene la desventaja de recorrer el string varias veces (una por cada .test()) en vez
 *     de una sola pasada como hace la regex con lookaheads, pero para strings cortos como
 *     una contraseÃ±a la diferencia de rendimiento es insignificante.
 *
 */
console.log( validarPassSimple( pass ) );
console.log( validarPassSimple( pass2 ) );

// variante B: la misma idea que variante A pero mas corta, usando un array y .every()
const requisitos = [ /[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/, /.{8,}/ ]
const validarPassArray = ( str ) => requisitos.every( ( regex ) => regex.test( str ) )

/**
 * MINIDOC variante B
 *
 *  1. .every() recorre el array de regex y devuelve true solo si TODAS las funciones que le
 *     pasas devuelven true (aqui, que TODOS los .test() den true). En cuanto una de ellas de
 *     false, para y devuelve false, no sigue comprobando el resto (short-circuit).
 *
 *  2. es mas facil de mantener: si quieres aÃ±adir un requisito nuevo, solo aÃ±ades una regex
 *     mas al array en vez de tocar la funcion.
 *
 */
console.log( validarPassArray( pass ) );
console.log( validarPassArray( pass2 ) );


// NOTA: AplÃ­calas utilizando diferentes operaciones