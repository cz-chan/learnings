/*
MAPS (o diccionario)

son estructuras de datos que nos permite almacenar pares clave-valor lo que hace que sean flexibles y robustos


*/

// declaración

let myMap = new Map();

// inicialización: se hace a través de corchetes como en el set pero se le añade otro corchete donde colocas entre comillas la clave y con una coma y otra comillas si son strings o number o boolean 

myMap = new Map( [
  [ "name", "juan" ],
  [ "edad", 20 ]
] )
console.log( myMap ); // Map(2) { 'name' => 'juan', 'edad' => 20 }


/*
métodos comunes

- .set() -> se le añade al igual que se inicializa, se necesita una clave-valor. 
si quisieras añadir una clave que ya existe, este elemento no se añadiría sino que modificaría el valor en caso de que fuera distinto. sería como una actualización. Es un comportamiento de que NO PUEDEN HABER CLAVES REPETIDAS pero sí valores y NO SE LE AÑADE A TRAVÉS DE CORCHETES
- .get() -> con esto puedo recuperar los valores a través de pasarle una key (que ya exista) que será única y que por ende, tendrás que saber de antemano
- .has() -> con esto podemos saber si el myMap contiene la clave qye buscas a través de un true o false muesbtras que el get te devuelve la clave un undefined si no está
- .delete() -> esto borra elementos y se hace igual que el .get() con la clave concreta
- .clear() -> esto borra por completo todo el mapa, todos los elementos
- .keys() -> esto lo que retorna un listado con las claves para así poder ver qué existe
- .values() -> y esto devuelve los values de todo el map.
- .size -> esto es una propiedad y no una funcion, y retorna el tamaño del map
- .entries() -> esto nos devuelve todas las claves y valores 

*/

myMap.set( [
  [ "hola", 'mundo' ],
  [ 'mundo', 2 ]
] ) // NO SE PUEDEN AÑADIR A TRAVÉS DEL SET DOS ELEMENTOS A LA VEZ
console.log( myMap );

/*
Map(3) { // DA UN MAP DE 3 EN VEZ DE 4
'name' => 'juan',
'edad' => 20,
[ [ 'hola', 'mundo' ], [ 'mundo', 2 ] ] => undefined
}
*/
myMap.set(
  'hola', 3
)
console.log( myMap );
/*
Map(4) {
  'name' => 'juan',
  'edad' => 20,
  [ [ 'hola', 'mundo' ], [ 'mundo', 2 ] ] => undefined,
  'hola' => 3
}
*/

const data = myMap.get( 'hola' )
console.log( data ); // 3

console.log( myMap.entries() );
/*
[Map Entries] {
  [ 'name', 'juan' ],
  [ 'edad', 20 ],
  [ [ [ 'hola', 'mundo' ], [ 'mundo', 2 ] ], undefined ],
  [ 'hola', 3 ]
}
*/
