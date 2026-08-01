// sets

/*
 esto es similar a los arrays
estos se declarar sí o sí con la palabra new Set()

pero la principal diferencia entre array y set es que NO ADMITEN ELEMENTOS DUPLICADOS vs. un array que sí podría tener 2 elementos iguales dentro de este pero tiene qeu ser EXACTAMENTE IGUAL. por ejemplo si pongo "Hola" y "hola", los detecta como diferentes y los admitiría dentro de esto.

para solventarlo tendrías que normalizar la data con un .toLowerCase y un .trim, un .replace(" " ", " ' ") y así sucesivamente
*/

// declaración 

let mySet = new Set();

// inicialización

// mySet = new Set( "gola", "mejillon", 2, true ); // esta no es la forma de inicializar un set con datos
// mySet = {} -> esta NO es la forma de definir o de volver a inicializar un set vacio

mySet = new Set( [ "gola", "mejillon", 2, true ] ); // los sets se inicializan con CORCHETES

/*
métodos comunes

add y delete
- .add -> para añadir AL FINAL datos
- .delete -> para borrar datos pero tienes que decirle QUÉ ELEMENTO EXACTAMENTE QUIERES BORRAR, no le vale un índice, necesitas pasarle el valor de dicho elemento. no tiene acceso a los índices. además esta operación a parte de borrar el contenido, retonar "true" o "false" dependiendo de si la operación se ha llevado a cabo vs. el .pop() del array que sí devolvía aquello que había borrado
- .has() -> esto busca si existe dentro del set el elemento pero al igual que el delete, necesitas pasarle el valor concreto que estás buscando
- .size() -> es el equivalente al .lenght() del array
-
*/

mySet.add( "hola mundo" );
mySet.delete( "gola" )

// para convertir un set en un array
let myArray = Array.from( mySet )

// para convertir un array en un set
let mySet = new Set( myArray )