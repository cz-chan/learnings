/**
En la fábrica de jugos Frutópolis, los robots empacadores reciben frutas en una cinta transportadora. 
Por reglas de seguridad, las frutas deben entrar y salir en un orden específico: 
la última fruta que entra debe ser la primera en salir.

Tu misión es ayudar a verificar si una secuencia de salida es posible, dadas las frutas que entraron. 
Implementa la función frutaEmpacadaCorrectamente que reciba dos arrays: entrada (el orden en el que las frutas llegaron)
 y salida (el orden en el que las frutas se empacaron), y devuelva true si la secuencia de salida es válida, 
o false si no se puede lograr respetando el orden de apilado.

Ejemplos:

frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['kiwi', 'banana', 'manzana']
)
// true → se empacaron en orden LIFO
 
frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['banana', 'kiwi', 'manzana']
)
// false → no se puede obtener así desde una pila
Reglas:
Las frutas son strings únicos, sin repetir.
Solo se puede usar una pila para empacar.
Devuelve true si la salida es posible, false si no.
 */

// SOLUCIÓN ENCONTRADA POR MI
function frutaEmpacadaCorrectamente(entrada: string[], salida: string[]) {
	/**
	 * tendria que crear algo que pudiera comparar la posición en entrada con la posición en salida.
	 * si ambas son contrarias
	 *
	 * si entrada[i++] = salida[i--] ok pero para el comportamiento en pila, necesito usar el push/pop de los arrays
	 * para poder modificar la entrada y la salida
	 */

	// let tempIn: string = "";
	// let tempOut: string = "";

	for (let i = 0; i < entrada.length; i++) {
		// cojo la ultima posición del array (entrada.length - 1) y le resto el tamaño del array
		let j = entrada.length - 1 - i;
		if (entrada[i] === salida[j]) {
			console.log(`entrada ${i}`, entrada[i]);
			console.log(`salida ${j}`, salida[j]);
			// return true;
		} else {
			console.log(`entrada ${i}`, entrada[i]);
			console.log(`salida ${j}`, salida[j]);
			return false;
		}
	}
	return true;

	// NO
	// let i: number = 0;
	// let j: number = entrada.length - 1;

	// while (i < j) {
	// 	if (entrada[i] === salida[j]) {
	// 		console.log("entrada", entrada[i]);
	// 		console.log("salida", salida[j]);
	// 		i++;
	// 		j--;
	// 	} else {
	// 		return false;
	// 	}
	// }
	// return true;

	// entrada.forEach((fruit, index) => {
	// 	console.log(entrada.length);

	// 	console.log("entrada:", fruit);
	// 	console.log("salida:", salida[entrada.length - 1]);
	// });
}

// console.log(
// 	"true",
// 	frutaEmpacadaCorrectamente(
// 		["manzana", "banana", "kiwi"],
// 		// ["manzana", "banana", "kiwi"],
// 		["kiwi", "banana", "manzana"],
// 	),
// );
// true → se empacaron en orden LIFO (last in, first out)

// console.log(
// 	"false",
// 	frutaEmpacadaCorrectamente(
// 		["manzana", "banana", "kiwi"],
// 		["banana", "kiwi", "manzana"],
// 	),
// );
// false → no se puede obtener así desde una pila

/**
 * PROBLEMAS A MI SOLUCIÓN:
 *
 * 1. La lógica implementada no resuelve el problema de validación de pila (LIFO).
 * 2. La lógica actual solo compara el orden inverso de los arrays, lo cual no simula el comportamiento
 * de una pila (LIFO) donde se pueden realizar operaciones de 'push' y 'pop' de forma intercalada.
 * 3. El algoritmo falla al validar secuencias donde el orden de salida requiere apilar varios elementos
 * antes de extraer el primero.
 *
 * A NIVEL DE ARQUITECTURA / COMPLEJIDAD:
 *
 * 4. Complejidad temporal: O(n) — un único recorrido. El problema NO es de rendimiento, es de
 *    corrección: un algoritmo O(n) que da la respuesta equivocada es peor que uno O(n) correcto,
 *    la Big O no mide si el resultado es válido.
 * 5. Complejidad espacial: O(1), pero a costa de violar la restricción del enunciado
 *    ("Solo se puede usar una pila para empacar"). No hay ninguna estructura de datos que module
 *    el estado intermedio (qué frutas están "esperando" a ser sacadas); solo aritmética de índices.
 * 6. Acoplamiento frágil entre punteros: `j = entrada.length - 1 - i` asume una relación fija
 *    y simétrica entre las posiciones de ambos arrays. Esa relación no existe en el problema real:
 *    el orden de salida depende del HISTORIAL de push/pop, no de una fórmula posicional cerrada.
 *    Cualquier cambio en el patrón de entrada/salida rompe la fórmula.
 * 7. Falta de validación de invariantes: no comprueba que `entrada.length === salida.length` antes
 *    de indexar (`salida[j]` con `j` fuera de rango daría `undefined` en vez de un error explícito).
 * 8. No hay estructura que represente el dominio: el enunciado pide modelar una pila (ADT), y la
 *    solución actual no tiene ningún objeto/variable que represente "el estado actual de la pila".
 *    Eso hace que el código no sea extensible ni testeable por partes (no puedes inspeccionar
 *    el estado intermedio, solo el resultado final).
 */

//MEJORAS A LA SOLUCIÓN

function frutaEmpacadaCorrectamenteUpdated1(
	entrada: string[],
	salida: string[],
): boolean {
	/* 
	necesito crear una variable donde se haga el push de los .pop() de la salidad con el .shift() de la entraday 
	y los compare, tengan que ser iguales, sino dará false
	*/

	let comparisonFruit: string | undefined = "";

	for (let i: number = 0; i < entrada.length; i++) {
		comparisonFruit = entrada.shift();
		if (comparisonFruit !== salida.pop()) {
			return false;
		}
	}

	return true;
}

let entrada1 = ["manzana", "banana", "kiwi"];
let salida1 = ["kiwi", "banana", "manzana"];
let salida2 = ["banana", "kiwi", "manzana"]; // esta salida debería dar error+

// console.log(frutaEmpacadaCorrectamenteUpdated1(entrada1, salida1)); // true
// console.log(frutaEmpacadaCorrectamenteUpdated1(entrada1, salida2)); // true

/**
 * PROBLEMA EN updated1:
 *
 * Usaste `for (let i = 0; i < entrada.length; i++)` sobre el `length` original,
 * mientras dentro del bucle mutabas `entrada` con `.shift()`. Cada `.shift()` reduce
 * `entrada.length` en 1 en tiempo real, pero la condición del bucle ya evaluó el
 * length inicial en cada vuelta y el índice `i` sigue avanzando como si el array
 * no hubiera cambiado. Eso descuadra el índice: te quedas comparando con menos
 * elementos de los que crees, o el bucle deja de recorrer todo lo que debería.
 * Es la misma familia de bug que "modificar un array mientras lo iteras".
 */

function frutaEmpacadaCorrectamenteUpdated2(
	entrada: string[],
	salida: string[],
): boolean {
	/* 
	necesito crear una variable donde se haga el push de los .pop() de la salidad con el .shift() de la entraday 
	y los compare, tengan que ser iguales, sino dará false
	*/

	let comparisonFruit: string = "";

	for (let i: number = 0; i < entrada.length; i++) {
		let out: number = entrada.length - i - 1;
		comparisonFruit = entrada[i];
		if (comparisonFruit !== salida[out]) {
			return false;
		}
	}

	return true;
}

// console.log("updated 2", frutaEmpacadaCorrectamenteUpdated2(entrada1, salida1)); // true
// console.log("updated 2", frutaEmpacadaCorrectamenteUpdated2(entrada1, salida2)); // true

/**
 * PROBLEMA EN updated2:
 *
 * `out = entrada.length - i - 1` es la misma fórmula de índice fijo de la primera
 * solución (solo sin los console.log). Asume que `salida` es siempre el reverso
 * exacto de `entrada`, es decir, comprueba únicamente el caso trivial LIFO puro
 * (todo entra y luego todo sale en orden inverso). No simula push/pop reales,
 * así que no valida secuencias LIFO intercaladas.
 *
 * Prueba con los propios datos: frutaEmpacadaCorrectamenteUpdated2(entrada1, salida2)
 * da `true`, pero salida2 = ['banana', 'kiwi', 'manzana'] es justo el caso que el
 * enunciado marca como `false` (no se puede lograr desde una pila). Mismo fallo
 * que el punto 6 del diagnóstico de la primera solución: acoplamiento frágil entre
 * punteros que no representa el historial real de la pila.
 */

function frutaEmpacadaCorrectamenteUpdated3(
	entrada: string[],
	salida: string[],
): boolean {
	/* 
	necesito crear una pila donde voy a almacenar las frutas en el orden que salieron
	*/

	// variable stack donde se guardan las frutas que entran
	let stack: string[] = [];

	// creo una variable que va a mover un puntero j (por ejemplo) dentro del array salida
	let j: number = 0;

	// uso for ... of para recorrer cada fruta del array de frutas y hacer el push en stack en vez de un bucle for
	/**
	 * j sí puede ir de 0 hacia adelante en salida, normal, sin restar nada — el problema es que estás pensando en
	 * "posición de entrada vs posición de salida" (por eso te sale lo de "contrarias"), pero eso
	 * ya lo intenté en updated1 y updated2 y falló para la solución que pide
	 */
	for (let fruit of entrada) {
		stack.push(fruit);

		// si dejo aquí dentro el bucle, comparar cada vez que se añade una fruta pero nunca son iguales pq aun no se ha completado el push de todas las frutas
		// el método .at(-1) me devuelve el último elemento del stack
		// if (stack.at(-1) !== salida[j]) { // no es un bucle if sino un while (mientras no coincida)
		// 	return false;
		// } else j++;

		/**
		 * este while solo se activará cuando el salida[j] (0, 1, 2...) sea igual a la última posición del stack.
		 * esto es porque en este caso estás buscando que lo primero que salga es lo primero que hay en el array de salida,
		 * por ende hasta que no llega a una fruta que coincida con la primera del array de salida, no entra al while y no
		 * suma j para ser 1 en el siguente bucle.
		 *
		 * el array salida nunca se agota, simplemente lo recorre, lo único que se agota es el stack (si todas las frutas
		 * que hay dentro son las mismas que hay en el array de salida) y por tanto, vamos a devolver true si ese stack está
		 * vacio después de haber acabado por completo de recorrer el array de salida.
		 *
		 * el array de stack siempre va a ir llenándose ya que no se elimina nada si no entra al while
		 *
		 */
		while (stack.length > 0 && stack.at(-1) === salida[j]) {
			stack.pop();

			j++;
		}
	}
	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}
}

// console.log("updated 3", frutaEmpacadaCorrectamenteUpdated3(entrada1, salida1)); // true
// console.log("updated 3", frutaEmpacadaCorrectamenteUpdated3(entrada1, salida2)); // true

function frutaEmpacadaCorrectamenteUpdated4(
	entrada: string[],
	salida: string[],
): boolean {
	// creo la variable stack donde almaceno los valores del stack
	let stack: string[] = [];
	// si la entrada.length != salida.length es que algo hay de más o de menos, por lo que no se cumple condición que sería lo mismo que decir que el stack.lenght > 0
	if (entrada.length !== salida.length) return false;

	// cojo el length de los arrays y lo invierto para que vaya uno de der a izq y el otro al reves para poder comparar valores
	let k: number = entrada.length;

	// creo el bucle que introduce las frutas al stack (esto no haría falta pq con comparar el .shift() de la entrada (fue el primero que entró) con el .pop() de la salida (fue lo último que entró) deben ser iguales)
	/*
	for (let fruit of entrada) {
		stack.push(fruit);
	}
	 */

	// while (k >= 0) {
	// 	if (entrada.shift() !== salida.pop()) {
	// 		return false;
	// 	}
	// 	k--;
	// }

	// entrada = entrada.reverse(); // no es con reverse pq lo que dice qeu es comprueba una vez se ha hecho el out y no comprobando una por una con forme se recorre el arr
	// si hago un push al stack desde entrada de manera inversa, que el push las col y comparo por
	// if (entrada === salida) {
	// 	return true;
	// }

	// volvermos a la idea del stack
	for (let fruit of entrada) {
		stack.push(fruit);
	}

	/* tengo que sacar del stack el ultimo que entró y compararlo con el bucle de salida. 
	si son iguales, true, else false
	recuerda que el .pop() o .reverse() o .shift() mutan el propio array de ahí el hacer el stact.pop y recorrer el array
	de salida con un bucle normal
	*/

	for (let i = 0; i < stack.length; i++) {
		// de esta manera hago que sean inversos y por ende, tendrían que coincidir. el primer elemento que sale (salida[0]) deber ser el primero que entró y como el .push siempre añade al inicio, el primero que entro en stack será el último en la posición, que es justo el que al hacer pop elimino
		if (stack.pop() !== salida[i]) {
			return false;
		}
	}

	// estop es aún peor pq da un 68 / 100
	// for (let i = 0; i < entrada.length; i++) {
	// 	// de esta manera hago que sean inversos y por ende, tendrían que coincidir. el primer elemento que sale (salida[0]) deber ser el primero que entró y como el .push siempre añade al inicio, el primero que entro en stack será el último en la posición, que es justo el que al hacer pop elimino
	// 	let k = entrada.length - 1 - i;
	// 	if (entrada[i] !== salida[k]) {
	// 		return false;
	// 	}
	// }

	return true;
}

console.log("updated 4", frutaEmpacadaCorrectamenteUpdated4(entrada1, salida1)); // true
console.log("updated 4", frutaEmpacadaCorrectamenteUpdated4(entrada1, salida2)); // true

// console.log("normal", entrada1);
// entrada1.reverse;
// console.log("reverse", entrada1);

/**
 * ERROR DE UPDATED4:
 *
 * 1. La lógica actual es incorrecta para el problema planteado. El algoritmo intenta vaciar toda la entrada en la pila
 * antes de comparar, lo cual no permite intercalar operaciones de 'push' y 'pop' necesarias para
 * validar secuencias LIFO complejas.
 * 2. El bucle `for` que recorre la pila mientras realiza `pop()` es problemático porque modifica la longitud
 * de la pila mientras se itera sobre ella.
 */

function frutaEmpacadaCorrectamenteUpdated5(
	entrada: string[],
	salida: string[],
): boolean {
	if (entrada.length !== salida.length) return false;

	const stack: string[] = [];
	let j = 0;

	for (const fruit of entrada) {
		stack.push(fruit);

		while (stack.length > 0 && stack.at(-1) === salida[j]) {
			stack.pop();
			j++;
		}
	}

	return stack.length === 0;
}

console.log("updated 5", frutaEmpacadaCorrectamenteUpdated5(entrada1, salida1)); // true
console.log(
	"updated 5",
	frutaEmpacadaCorrectamenteUpdated5(
		["manzana", "banana", "kiwi"],
		["banana", "kiwi", "manzana"],
	),
); // true (LIFO intercalado válido, pese al comentario original del enunciado)

/**
 * UPDATED6 — interpretación ESTRICTA del enunciado:
 * no se permite intercalar push/pop. Entran TODAS las frutas y después se vacía la pila.
 * Consecuencia: `salida` solo es válida si es el inverso exacto de `entrada`.
 */
function frutaEmpacadaCorrectamenteUpdated6(
	entrada: string[],
	salida: string[],
): boolean {
	if (entrada.length !== salida.length) return false;

	const stack: string[] = [];

	// 1) entran todas las frutas a la pila
	for (const fruit of entrada) {
		stack.push(fruit);
	}

	// 2) se vacía la pila: cada pop debe coincidir con la salida esperada, en orden
	for (const expected of salida) {
		if (stack.pop() !== expected) return false;
	}

	return true;
}

console.log("updated 6", frutaEmpacadaCorrectamenteUpdated6(entrada1, salida1)); // true
console.log(
	"updated 6",
	frutaEmpacadaCorrectamenteUpdated6(
		["manzana", "banana", "kiwi"],
		["banana", "kiwi", "manzana"],
	),
); // false
