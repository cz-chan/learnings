// loops

/*
- for -> estos bucles se realizan desde el inicio y tienen condiciones que mientras sigan siendo true, se realizarán pero tienes que conocer de antemano las iteraciones que te va a hacer falta
los elementos del for en la condición son:
  - la inicialización de la variable
  - la condición que tiene que revisar cada una de las vueltas para que se ejecute el código (en este caso saludará 5 veces pq empieza a contar desde el 0 y teine que llegar a i < 5. si pones i <= 5 saludará 6 veces pero pq la variable que has añadido empieza en 0, si empieza en 1 sí podrías poner el <=)
  - la condición para modificar el valor de la variable
*/

for ( let i = 0; i < 5; i++ ) {
  console.log( "hola mundo" );
}

/*
- while -> este bucle se evalua siempre antes de cada iteración y si se sigue cumpliendo se ejecuta
este bucle se compone de:
  - la condición (entre paréntesis): miesnrta sea true se ejecutará
  - el código
*/

let j = 0
while ( j < 7 ) {
  console.log( "hola mundo" );
  j++;
}

/*
- dowhile -> similar al while pero este siempre ejecutará un código al inicio, y después visualiza la condición, y mientas sea true se evaluará.
la diferencia con el while es que este se ejecuta solo si la condición es verdadera y el dowhile se ejecuta MÍNIMO una vez y después tantas veces hasta que la condición deje de ser verdadera
*/

let k = 9;
do {
  console.log( 'hola mundo' );

} while ( k < 7 ) // solo se ejecuta 1 vez pq siempre k > 7

/*
 - for of -> te permite recorrer directamente los elementos de una colección como un array, set o map de manera más legible
 en este for of necesitas algo que sea iterable ynecesitas además:
  - crear una variable que se le pase el valor del "of" que quieres iterar
*/

const books = [ "the mom test", "the cold start problem", "the great mental model", "steal like an artist", "show your work" ];
const months = [ "january", "fabruary", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december" ];
const days = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];


for ( let value of books ) {
  console.log( value ); // ejecuta el log por cada uno de los valores del array mostrando los valores de dicho array
  /*
    the mom test
    the cold start problem
    the great mental model
    steal like an artist
    show your work
  */
}

mystring = "hola desde js"

for ( let value of mystring ) {
  console.log( value ); // devuelve cada una de las letras del string
  /*
    h
    o
    l
    a
    
    d
    e
    s
    d
    e
    
    j
    s
  */
}

/*
  las buenas prácticas de los bucles te dicen que tienes que usar casi SÍ O SÍ el:
    - break;
    - continue;
    - default
*/
for ( let i = 0; i < 5; i++ ) {
  if ( i === 2 ) continue; // si es === 2 sigue adelante sin ejecutar nada
  console.log( `hola mundo - ${ i }` );
}

