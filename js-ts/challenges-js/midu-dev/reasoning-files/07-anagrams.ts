/**
Anagramas

Dado un par de palabras, debemos determinar si son anagramas entre sí. 
Dos palabras son anagramas si contienen las mismas letras en la misma cantidad, 
pero en cualquier orden.

Por ejemplo:

“cinema” y “iceman” son anagramas.
“hello” y “world” no son anagramas.
Instrucciones:

Crear una función que reciba dos cadenas de texto.
La función debe devolver true si las palabras son anagramas y false si no lo son.
La comparación debe ser insensible a mayúsculas y minúsculas.
Ejemplos:
esAnagrama('cinema', 'iceman') // true
esAnagrama('hello', 'world') // false
esAnagrama('Listen', 'Silent') // true
esAnagrama('evil', 'vile') // true

Consideraciones:
Las palabras pueden tener diferentes longitudes, pero solo serán anagramas si 
las letras y la cantidad de cada letra coinciden.
Puedes asumir que no habrá caracteres especiales (solo letras).

ENTENDIMIENTO Y POSIBLES SOLUCIONES A PROBLEMAS

  - 2 palabras contienen las misma letras -> .lenght deben ser iguales desde un inicio 
  (1a condición), tienen que ser key sensitive y como son palabras y no frases se debe hacer
  un .trim y un .toLowerCase (2a condición) y además deben tener las mismas letras. 
  Las primeras con un if y || inicial se arregla, la tercera es donde está el asunto

  - no va a haber caracteres especiales por lo que no hace falta normalizar esto

  - necesito contar la cantidad de letras de cada uno de las palabras y 
  comparar dicha cantidad. si no son iguales las cantidades en cada una de las letras, 
  false, else, true

*/

function esAnagrama(primeraPalabra: string, segundaPalabra: string): boolean {
	// primera validación
	if (primeraPalabra.length !== segundaPalabra.length) return false;

	/* 
    transformo en arrays de letras las palabras para que sean más fácil de trazar y a su vez, las ordeno
    alfabéticamente para que al hacer la comparazión con los maps sea más sencillo de filtrar
  */

	const firstW = [...primeraPalabra.trim().toLowerCase()].sort((a, b) =>
		a.localeCompare(b),
	);
	const secondW = [...segundaPalabra.trim().toLowerCase()].sort((a, b) =>
		a.localeCompare(b),
	);

	let firstWMap = new Map();
	let secondWMap = new Map();

	// tengo que hinyectar cada una de las letras como un key y el número de vecez qeu aparece como un value
	for (let word of firstW) {
		// lo mismo que el 06, añadi el word como key y voy sumando 1 si la letra va apareciendo cada vez
		firstWMap.set(word, (firstWMap.get(word) ?? 0) + 1);
	}
	for (let word of secondW) {
		secondWMap.set(word, (secondWMap.get(word) ?? 0) + 1);
	}

	// comparo si ambos maps en todas las letras tienen el mismo value
	// for (let i = 0; i < firstWMap.size; i++) {

	// }

	// if (firstWMap == secondWMap) {
	// 	return true;
	// }

	// console.log(firstWMap.entries());
	// console.log(secondWMap.entries());

	// for (let [index, word] of firstWMap.entries()) {
	//   if (secondWMap.entries() )
	// }

	// const newArr = Array.from(firstWMap);
	// console.log(newArr[0][1]);

	/**
	 * esya comparación está mal porque estoy comparando el número de letras que tiene el array sin saber si
	 * las letras son iguales. en el caso de hello y world si es true
	 */
	// for (let i = 0; i < firstWMap.size; i++) {
	// 	if (Array.from(firstWMap)[i][1] === Array.from(secondWMap)[i][1])
	// 		return true;
	// }

	// de esta forma comparo ambas igualdades y no da error pq ya ordené alfabéticamente los elementos
	for (let i = 0; i < firstWMap.size; i++) {
		if (
			Array.from(firstWMap)[i][1] === Array.from(secondWMap)[i][1] &&
			Array.from(firstWMap)[i][0] === Array.from(secondWMap)[i][0]
		)
			return true;
	}

	// si convieto los Maps en un array justo después de ser creados ahorrará un paso

	return false;
}

// console.log(esAnagrama("cinema", "iceman")); // true
// console.log(esAnagrama("hello", "world")); // false
// console.log(esAnagrama("Listen", "Silent")); // true
// console.log(esAnagrama("evil", "vile")); // true

/**
 * 
 * La solución primera da correcto en todo pero es ineficiente y crea ciertos bugs al dar como verdadera
 * la primera comparación del último bucle
 * 
 * Problemas al código
 * 

1. La lógica de comparación final es defectuosa: el bucle retorna 'true' en la primera 
coincidencia encontrada en lugar de verificar que todos los elementos coincidan.
2. El uso de Mapas después de ordenar el array es redundante; si los arrays están ordenados, 
basta con comparar los elementos en cada índice.
3. La conversión repetida de Mapas a Arrays dentro del bucle es ineficiente (O(n^2)).

 * 
 * MEJORAS PROPUESTAS

1. Simplifica la función: una vez que las cadenas están normalizadas y ordenadas, 
simplemente compara si los arrays resultantes son idénticos.
2. Elimina el uso de Mapas, ya que el ordenamiento previo ya garantiza que las letras 
estén en la misma posición si son anagramas.
3.Corrige la lógica de retorno para asegurar que se comparen todos los 
caracteres antes de decidir si son anagramas.
 */

function esAnagramaUpdated1(
	primeraPalabra: string,
	segundaPalabra: string,
): boolean {
	if (primeraPalabra.length !== segundaPalabra.length) return false;

	const firstW = [...primeraPalabra.trim().toLowerCase()].sort((a, b) =>
		a.localeCompare(b),
	);
	const secondW = [...segundaPalabra.trim().toLowerCase()].sort((a, b) =>
		a.localeCompare(b),
	);

	console.log({ firstW, secondW });

	/*
  si ya he ordenado las cadenas de second y first solo tendría que comparar las posiciones de cada una de ellas
  y si son iguales, true, else, false

  esta lógica hace que el bigO sea de O(n logn)
  */

	for (let i = 0; i < firstW.length; i++) {
		if (secondW[i] !== firstW[i]) {
			return false;
		}
	}

	return true;
}

// console.log(esAnagramaUpdated1("cinema", "iceman")); // true
// console.log(esAnagramaUpdated1("hello", "world")); // false

/**
 * Está bien 64/100 pero me dice que la complejidad podría bajar a O(n) si no uso el .sort ahí
 *
"1. La complejidad algorítmica es O(n log n) debido al uso de `sort`. Aunque es eficiente para cadenas
cortas, se podría lograr una complejidad O(n) utilizando un mapa de frecuencias (hash map) para
contar las letras."
 */

function esAnagramaUpdated2(
	primeraPalabra: string,
	segundaPalabra: string,
): boolean {
	let firstNormalizeWord = primeraPalabra
		.trim()
		.replaceAll(/\s/g, "")
		.toLowerCase();
	let secondNormalizeWord = segundaPalabra
		.trim()
		.replaceAll(/\s/g, "")
		.toLowerCase();

	if (firstNormalizeWord.length !== secondNormalizeWord.length) return false;

	const firstW = [...firstNormalizeWord];
	const secondW = [...secondNormalizeWord];

	/**
	 * el ejer puede ser sinónimo del anterior 06 porque vamos a crear un map en el cual vamos a set las letras
	 * con sus valores y después, con el secondW vamos a restar dichas letras.
	 *
	 * en al caso de qeu sean iguales, todos los values serán cero y por ende, anagramas, sino, false
	 */

	let comparisonWordsMap: Map<string, number> = new Map();

	// añades las words que quieres comparar
	for (let word of firstW) {
		comparisonWordsMap.set(word, (comparisonWordsMap.get(word) ?? 0) + 1);
	}

	// eliminas las words del map que tenga el secondW para encontrar el count de cada una
	for (let word of secondW) {
		comparisonWordsMap.set(word, (comparisonWordsMap.get(word) ?? 0) - 1);
	}

	// buscamos si algunos de los values del comparisonWordsMap es != 0, si lo es, es que no son anagramas
	for (const [word, numb] of comparisonWordsMap.entries()) {
		/**
		 * este for of lo que hace es responder el value del word dentro del map. si este es != a cero, false por lo
		 * que no serán anagramas pq no habrá conseguido eliminar todas las letras o habrá eliminado de más
		 */
		if (comparisonWordsMap.get(word) !== 0) return false;
	}

	return true;
}

console.log(esAnagramaUpdated2("cinema", "iceman")); // true
console.log(esAnagramaUpdated2("hello", "world")); // false
console.log(esAnagramaUpdated2("Listen", "Silent")); // true
console.log(esAnagramaUpdated2("evil", "vile")); // true
console.log(esAnagramaUpdated2("tengo un coche azul", "ego tonze na cul chu")); // false

console.log(
	"tengo un coche azul".trim().replaceAll(/\s/g, "").toLowerCase().length,
);
console.log(
	"ego tonze na cul chu".trim().replaceAll(/\s/g, "").toLowerCase().length,
);

/**
 * esta última está bien en un 95/100 asi qeu good
 */
