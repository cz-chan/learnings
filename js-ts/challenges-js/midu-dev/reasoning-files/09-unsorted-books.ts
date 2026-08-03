/**
 * Los libros desordenados
El bibliotecario Don Biblio está reorganizando la gran biblioteca de la ciudad. 
Cada libro tiene una posición específica donde debe colocarse, pero por un error del sistema… 
¡los libros están completamente desordenados! 😱

El programa recibe dos listas:

Una con los títulos de los libros (por ejemplo: ['Aprende lo Último de JavaScript', 
'Aprende Git y GitHub', 'Cocina']). Y otra con las posiciones de la estantería donde 
deben ir (como [2, 0, 1]).
Tu tarea es ayudar a Don Biblio a colocarlos correctamente según sus posiciones.

¿Cómo funciona?
Cada libro tiene una posición única en la estantería, pero las posiciones:

No necesariamente comienzan en 0 (podrían empezar en 5, 12, etc.).
Siempre son números consecutivos y en orden ascendente.
Tu función debe devolver un array con los libros en el orden correcto, 
como si los estuvieras colocando en la estantería desde la posición más baja a la más alta.

Reglas:
Siempre habrá el mismo número de libros y de posiciones.
Ningún libro ni ninguna posición se repite.
Las posiciones pueden empezar en cualquier número, pero siempre serán consecutivas.

ENTENDIMIENTO

  - 2 parámetros: libros en array + posiciones de los libros en array -> ambos deben están conectados
  donde la posición libros[i] le corresponde el número posiciones[i]

  - debo colocar los libros en posición. el array resultante de libros debe coincidir en orden, con 
  el número de posición que llego

  - ningún array que entre pruede estar vacio, sí puede contener posiciones el 0 ya que este sería el 
  primer elemento del array ordenado y NUNCA deberían repetirse las posiciones (comprobar si el array
  de posiciones tiene una posición igual a otra)

  - el array ordenado debe ser en orden ascendente, es decir, 0, 1, 2 ...

  - como ambos parámetros están conectado y son la posición de los libros que llegan, ambos arr deben
  tener la misma length

  - ni los libros ni las posiciones se pueden repetir en el array que han introducido como param

  - como las posiciones pueden llegar en cualquier orden, necesito tener un Mapa u Objeto donde guarde
  como key el número y como value el libro y vaya comparando cada uno de los valores 

QUÉ HACER

  - tengo que crear un Mapa u Objeto donde coloque las keys como los números y los values como los libros
  para así poder recorrerlos y comparar las keys, de menos a mayor y hacer el push de sus values al array
  de salida. La pregunta es, qué estructura a la hora de recorrerla es más sencilla y consume menos recursos?

  la mejor es Object porque no usa hash sino que por cada búsqueda va directa al elemento que se le pide sin
  pasar por un hashing. las keys nunca cambian

  - otra solución sin tener que pasar por este .sort y la creación del objeto, sería usar como el índice
  mínimo que aparece en el array de posiciones como resta para obtener las posiciones. Es decir, si tengo 
  el array [8, 6, 5, 7, 9] y el mínimo es el 5, si resto a todos los números este 5, obtendré la posición en
  la que debería estar el número y nunca van a ser iguales ya que la condición inicial ya estoy validando que
  no haya ningún número ni ningún libro iguales en el arr ni sean menores a 0 (esta idea me la ha dado claude,
  la mía era la anterior, crear objeto y de ahí, rastrear el key y hacer el .map/.push)

  para esto puedo crear una variable que sea let minimum = posiciones.sort()[0] (esto no va a funcionar porque el .sort muta el array que se referencia), lo que necesito es un "Math.min(arr)" (me devuelve el mínimo sin mutar array) después restar a todos los número con un .forEach proque no me hace falta devolver nada (.map), simplemente transdormarla y después 
  asociar la posición (i) del menor elemento de posiciones a la posición (i) de libros y hacer el push
 */

function organizarEstanteria(libros: string[], posiciones: number[]): string[] {
	if (libros.length !== posiciones.length) {
		throw new Error(
			`Los libros y su orden deben contener la misma cantidad de elementos. El conjunto de libros 
      tiene ${libros.length} elementos mientras que el de posiciones tiene ${posiciones.length} 
      elementos. Revísalos.`,
		);
	}
	let sortedBooks: string[] = [];

	// no es así pq esto está mutando el propio array de posiciones lo que ensucia los datos
	// let minumum = posiciones.sort()[0];
	let minimum = Math.min(...posiciones); // se hace el spread pq min no acepta arrays sino números sueltos

	// let normalizePositions: number[] = [];

	posiciones.forEach((num, index) => {
		let i = num - minimum;
		// normalizePositions.push(i);

		/**
		 * en ningún momento me hace falta hacer un sort u ordenar el array con los i en un nuevo arr pq si tengo
		 * el número normalizado (restado al menor para empezar todo en 0) y el index de dicho número, como son
		 * ambos arrays del mismo tamaño puedo darle a cada una de las posiciones de sortedBooks (sortedBooks[i])
		 * el valor del libro en el index en el cual se encuentra dicho i en posiciones
		 */
		sortedBooks[i] = libros[index];
	});

	return sortedBooks;
}

const libros = ["Ajedrez", "Poesía", "Geografía", "Física"];
const posiciones = [2, 3, 1, 0];
// console.log(posiciones.sort()[0]); // 0

// console.log(organizarEstanteria(libros, posiciones));
// ['Física', 'Geografía', 'Ajedrez', 'Poesía']

const librosRaros = [
	"Dragones",
	"Hechizos",
	"Brujería",
	"Alquimia",
	"Pociones",
];
const posicionesRaras = [8, 6, 5, 7, 9];
// console.log(posicionesRaras.sort()[0]); // 5

console.log(organizarEstanteria(librosRaros, posicionesRaras));
// ['Brujería', 'Hechizos', 'Alquimia', 'Dragones', 'Pociones']

/**
 * LA SOLUCIÓN está bien pero la AI de midu me pone: 1.El uso de `Math.min(...posiciones)` puede causar un
 * error de desbordamiento de pila (stack overflow) si el array de posiciones es extremadamente 
 * grande (aunque es poco probable en este contexto).
 * 
 * Para solucionarlo puedo hacer lo siguiente: 
 * 
 * const minimum = posiciones.reduce((min, actual) => (actual < min ? actual : min), posiciones[0]);
 * 

let minimum = posiciones[0];
for (const num of posiciones) {
  if (num < minimum) minimum = num;
}
 
*/

function organizarEstanteriaUpdated1(libros: string[], posiciones: number[]) {
	if (libros.length !== posiciones.length) {
		throw new Error(
			`Los libros y su orden deben contener la misma cantidad de elementos. El conjunto de libros tiene ${libros.length} elementos mientras que el de posiciones tiene ${posiciones.length} elementos. Revísalos.`,
		);
	}

	const sortedBooks: string[] = [];

	// según claude esta es la solución mejor para evitar el stack overflow
	// pero nunca se me habría ocurrido .reduce
	const minimum = posiciones.reduce(
		(min, actual) => (actual < min ? actual : min),
		posiciones[0],
	);

	// let minimum = posiciones[0];
	// for (const num of posiciones) {
	// 	if (num < minimum) minimum = num;
	// }

	posiciones.forEach((position, index) => {
		let min = position - minimum;

		sortedBooks[min] = libros[index];
	});

	return sortedBooks;
}

console.log(organizarEstanteriaUpdated1(libros, posiciones));
console.log(organizarEstanteriaUpdated1(librosRaros, posicionesRaras));
