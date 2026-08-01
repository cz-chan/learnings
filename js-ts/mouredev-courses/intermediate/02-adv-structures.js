/**
 * ESTURCTURAS AVANZADAS
 */

/**
 * ARRAYS AVANZADOS
 *
 *  - métodos funcionales:
 *    - forEach() -> itera (una funció o lo que quieras) sobre cada uno de los elementos pero
 * no devuelve nada (undefined)
 *    - map() -> crea un nuevo array aplicando una función a cada uno de estos elementos del array
 *    (si querés transformar datos y guardarlos, usá .map. Si solo querés hacer algo con cada elemento 
 * (como imprimir, modificar algo externo), usá forEach.)
 *    - filter -> filtra elementos con la misma condición que el map, creando un array nuevo siguiendo
 * la condición que quieras
 *    - reduce() -> reduce el array a un solo valor, acumulando el resultado en cada iteración (recibe un acumulador y el elemento actual)
 */

// forEach
let numbs = [ 1, 2, 3, 4, 5 ]
numbs.forEach( ( value ) => console.log( value ) )

// map
let newNumbs = numbs.map( ( value ) =>
  value * 2
)
console.log( newNumbs );

// filter
const evens = numbs.filter( num => num % 2 === 0 )
console.log( evens );

// reduce
const sum = numbs.reduce( ( result, current ) => result + current )

/**
 * MANIPULACIÓN
 *  
 * las tools de manipulación son útiles para trabajar con datos estructurados listas jerárquicas o 
 * necesitas manipular el contenido del array de manera flexible
 * 
 *  - flat() -> este método aplanar (para simplificarla) un array que tenga una profundidad específica
 * en una sola operación. flat es para elimiinar niveles de profundidad en arrays anidados
 *  - flatMap() ->  combinas transformaciones con la ventaja de aplanar automáticamente el resiltado. es decir, hace loq ue hace flat, aplicar un aplanamiento y transformarlo todo a un array aplanado y le aplica, si quieres, una función (.map hace eso) para cada uno de los elementos
 * el añadido de flatMap y unir el aplanar con el aplicar una funcion y convertirla en un nuevo arr
 *  
 */

let nestedArr = [ 1, 2, 3, 4, [ 5, 6, 7, 8, [ 8, 9, [ 10 ] ] ] ]
let firstFlat = nestedArr.flat() // te devuelve el array con aplanamiento igual a 1 por haberla simplemente invocado
console.log( "first: ", firstFlat ); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 8, 9, [ 10 ] ] ] // quita un []

let secondFlat = nestedArr.flat( 2 ) // dependiendo del parámetro que le añadas así te aplanará el array
console.log( secondFlat ); // [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, [ 10 ]] quita 2 []
let thirdFlat = nestedArr.flat( 3 ) // dependiendo del parámetro que le añadas así te aplanará el array
console.log( thirdFlat ); // [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10 ] quita 3 []

let phrases = [ "hola mundo", "adios mundo" ]
let words = phrases.flatMap( phrase => phrase.split( " " ) ) // recorre todas las frases y hace el recorte por el espacio y crea un nuevo array con dichos recortes 
console.log( words ); //[  'hola', 'mundo', 'adios', 'mundo' ]

/**
 * ORDENACIÓN
 * 
 *  - sort() -> a esta función tienes que indicarle el criterio de ordenación sino el ordenará como 
 * le sea más conveniente. por defecto este sort ordena de manera alfabética. con un array de strings sí lo ordenaría de manera correcta pero con los número te los ordena bien mientras no sean de 2 cifras o más ya que el 11 para el va antes que el 2 por culpa del "1"
 *  - reverse() -> simplemente te da un array de valores al reves de la que le hayas introducido. en sort tienes un nuevo array pero en reverse sí modifica el reverse en ese arr
 */

let unsorted = [ 3, 5, 1, 23, 11, 12, 13, 23.4, 3, 10, 11, 6, 7, 2, 6, 0, 1 ]
let sort = unsorted.sort()
console.log( sort ); // [0, 1, 10, 11, 2, 3, 3, 5, 6, 6, 7]
sort = unsorted.sort( ( a, b ) => a - b ) // ordena de menor a mayor
console.log( sort ); // [0, 1, 2, 3, 3, 5, 6, 6, 7, 10, 11]
sort = unsorted.sort( ( a, b ) => b - a ) // ordena de mayor a menor
console.log( sort ); // [11, 10, 7, 6, 6, 5, 3, 3, 2, 1, 0]

console.log( sort.reverse() ); // [0, 1, 2, 3, 3, 5, 6, 6, 7, 10, 11]

/**
 * BÚSQUEDA
 * 
 *  - includes() -> es un método que te permite encontrar ciertos elementos dentro del array que le 
 * has pasado.
 *  - find() -> con este método puedes encontrar el primer elemtno que cumpla la condición que le has pasado
 *  - findIndex() -> es similar al find pero esta vez aplicado a los índices y no a los valores
 */

let included = sort.includes( 11 );
console.log( included ); // true

let finded = []; // necesitas que se inicialice con un array vacío, sino te da error pq no sabe cómo añadirlo o si puede
sort.find( ( element, index ) => {
  if ( element % 2 === 0 )
    finded.push( { "element": element, "index": index } )
}
)
console.log( "even elements:", finded );

let indexFinded = 0;
indexFinded = sort.reverse().findIndex( ( element ) => element % 2 === 0 )
console.log( indexFinded ); // 3 -> en la tercera posición del sort (porque le he hecho el reverse, sino estaría en la 0)

/* ===================== SET ========================== */

/**
 * SETS AVANZADOS
 * 
 * los sets son conjuntos de valores ÚNICOS que no aceptan repetidos, que es distinto a los arrays. 
 * 
 * una de las características buenas de los sets es que permiten hacer OPERACIONES DE CONJUNTOS
 */

// eliminación de duplicados
const numberArr = [ 1, 22, 4, 5, 5, 6, 7, 5, 4, 3, 1, 222, 4, 6, 6, 3, 4, 2 ];
let numberSet = new Set( numberArr ) // esto te convierte el array en un set no un array
console.log( numberSet );
numberSet = [ ...new Set( numberArr ) ] // al hacer el spread, conviertes el set en array
console.log( numberSet );

// operaciones comunes con Sets: unión, intersección y diferencia

// unión
let setA = new Set( [ 1, 2, 3 ] )
let setB = new Set( [ 2, 3, 4, 5, 6 ] )
// let unionAB = new Set( [ setA, setB ] ) // te da 2 sets pro separado de sets
let unionAB = new Set( [ ...setA, ...setB ] ) // te da 1 set y elimina el duplicado (2)
console.log( unionAB );

// intersección (donde se juntan 2 conjuntos. muestra los elementos que hay en común en los sets)
let intersectAB = new Set( [ ...setA ].filter( element => setB.has( element ) ) ) // .has() es el .includes() pero de los sets
console.log( intersectAB );

// diferencia (son los elementos que están en un set y no están en el otro)
let differenceAB = new Set( [ ...setB ].filter( ( element ) => !setA.has( element ) ) ); // esto muestra qué elementos NO HAY en el setA qeu SÍ están en el setB -> Set(3) { 4, 5, 6 }
differenceAB = new Set( [ ...setA ].filter( ( element ) => !setB.has( element ) ) ); // esto muestra qué elementos NO HAY en el setA qeu SÍ están en el setB  -> Set(1) { 1 }
console.log( differenceAB );

/**
 * CONVERSIONES DE SETS
 * 
 * es muy habitual tener un set y pasarlo a un array para poder hacer operaciones con ellos
 */

console.log( [ ...setA ] ); // setA pasa a ser un array


/**
 * ITERACIONES
 * 
 * la operación para iterar el set es "forEach"
 */

setA.forEach( ( element, index ) => console.log( `Index ${ index }: Value: ${ element }` ) )


/* =================== MAP ===================== */

/**
 * MAPS AVANZADOS
 * 
 *  - forEach -> para iterar los mapas
 * 
 */

let myMap = new Map( [
  [ "name", "Chema" ],
  [ "age", 29 ]
] )
console.log( myMap );

// iteración
myMap.forEach( ( value, key ) => console.log( `${ key }: ${ value }` )
) // ojo, los elementos se invierten en el forEach donde lo primero que se obtiene ees el valor y lo siguiente la key

// conversión de mapa a array
const newArrFromMap = Array.from( myMap ) // esto transforma el mapa a un array
console.log( newArrFromMap );

// mapas a diccionarios (los diccionarios son objetos)
const newObjFromMap = Object.fromEntries( myMap )
console.log( newObjFromMap );

// convertir objeto a mapa
const newMapFromObj = Object.entries( newObjFromMap
)
console.log( newMapFromObj );
