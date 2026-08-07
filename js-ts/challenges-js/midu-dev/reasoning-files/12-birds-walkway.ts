/**
 * 
 * Desfile de los Pájaros Cantores
 * 
En una competencia anual de aves, los pájaros cantores desfilan uno tras otro. 
Cada pájaro canta una nota representada por un número entero. Sin embargo, 
al jurado solo le interesan las secuencias en las que los pájaros cantan notas sin 
repetir y que tengan exactamente todas las notas desde el mínimo hasta el máximo sin interrupciones.

El jurado quiere saber cuántas de estas secuencias válidas existen en el desfile. 
Una secuencia válida debe tener al menos 2 pájaros y cumplir:
- Las notas no se repiten
- Contienen todos los enteros entre el mínimo y el máximo


Tu tarea es implementar una función que cuente cuántas 
subsecuencias consecutivas válidas hay en el arreglo.

MI RAZONAMIENTO/ENTENDIMIENTO 

  - las notas pueden no entrar en orden pero sí tiene que tener un orden CONSECUTIVO para que cuenten 
  como válidas -> .sort() es una opción aunque muta el array pero puede ser útil
  - una secuencia válida debe tener como mínimo 2 elementos -> .length >= 2 -> caso límite
  - las notas deben estar con números enteros -> caso límite. -> 
  - la secuencia no se puede repetir, es dcir, si hay 3 notas iguales, solo la cuentan una vez -> puedo 
  hacer un set del birdNotes para eliminar lso duplicados ya que si no cuentan, no se ve afectado 
  el resultado del número de secuencias
  - el número de secuencia que devuelve la función es el número de de elementos uqe hay consecutivos y no
  se repiten [1,2,3,4] o [8, 9, 10, 11], ambos devolverán un 4

*/

function countMelodySequences(birdNotes: number[]): number | string {
	if (birdNotes.length < 2) return "Debe haber al menos 2 notas";

	// con esto creo la variable arr de numbs, elimino de golpe los repetidos y ordeno
	let normalizeNotes: number[] = [...new Set(birdNotes)].sort();
	let secuence: number[] = [];
	// let secuence: number = 0;
	// para secuencias muy grandes esto llena el stack (pero a mi se me ha ocurrido este)
	// let minNote2 = Math.min(...secuence);

	// esto (según claude) es más eficiente
	// let minNote = normalizeNotes.reduce((min, actual) =>
	// 	actual < min ? actual : min,
	// );

	// console.log(normalizeNotes[normalizeNotes.length + 1]); // undefined

	for (let i = 0; i <= normalizeNotes.length; i++) {
		/**
		 * tengo que comparar si el elemento en i+1 tiene un valor superior en una unidad al valor en i,
		 * si es así, tengo que añadirlo al secuence (o si creo una variable number simplemente n++ donde esta
		 * n parte en 0)
		 *
		 * pero llega un punto que i+1 se hace undefined por lo que no ese [i+1] lo hago = i y
		 */
		// console.log(normalizeNotes);

		if (normalizeNotes[i] + 1 === normalizeNotes[i + 1]) {
			// console.log("itreración", secuence + 1);
			console.log(
				"itreración",
				secuence,
				"\n",
				`Secuence ${[i]}:`,
				normalizeNotes[i],
				normalizeNotes[i + 1],
			);
			secuence.push(normalizeNotes[i]);
			// secuence++;
			console.log("total de suma:", secuence);
		}
		if (normalizeNotes[i + 1] === undefined)
			normalizeNotes[i + 1] === normalizeNotes[i];
		// secuence.push(normalizeNotes[i]);
	}

	// for (let note of birdNotes) {
	// 	let newNote = note - minNote;
	// 	console.log(newNote);
	// }

	// return secuence;
	return secuence.length;
}

const birdNotes = [1, 3, 2, 5, 4];
// console.log(countMelodySequences(birdNotes)); // → 5

// Las secuencias válidas son:

// [1, 3] → no es válida, falta el 2
// [1, 3, 2] → contiene 1, 2, 3 ✅
// [1, 3, 2, 5] → no es válida, falta el 4
// [1, 3, 2, 5, 4] → contiene todos del 1 al 5 ✅
// [3, 2] → contiene 2, 3 ✅
// [3, 2, 5] → no es válida
// [3, 2, 5, 4] → es válida ✅
// [2, 5] → no es válida, falta el 2 y 3
// [2, 5, 4] → no es válido, falta el 3
// [5, 4] → es válida ✅

// Total: 5 secuencias distintas que cumplen.

function countMelodySequencesUpdated1(birdNotes: number[]): number | string {
	let normalizeNotes: number[] = [...new Set(birdNotes)].sort();
	let countNotes: number = 0;

	if (birdNotes.length < 2) return 0;
	if (birdNotes.length !== normalizeNotes.length) {
		return `La secuencia ${birdNotes} no es válida porque tiene notas repetidas`;
	}

	countNotes = normalizeNotes.at(-1)! - normalizeNotes[0] + 1;

	return countNotes;
}

// console.log("updated1:", countMelodySequencesUpdated1(birdNotes)); // → 5

/**
 *
 * NO ESTABA ENTENDIENDO BIEN EL PROBLEMA POR LO QUE NO ME DABA CORRECTO
 *
 * Tengo que encontrar el número de subarrays de números contiguos que hay dentro del array birdNotes, que NO se
 * repiten y que son UNO CONSECUTIVO DEL OTRO y que a su vez, están en las INMEDIACIONES (uno delante o detrás
 * del otro).
 *
 * El ejemplo de midu no son secuencias aislasino sino que es el array que pone de ejemplo  [1, 3, 2, 5, 4]
 * descompuesto en los arrays consecutivos que se pueden dar y que son válidos.
 *
 * Yo entendía que dentro de ese array, hayan números consecutivos. por ende, tenñía que ordenar y hacer el Set a
 * todo para saber si validaba dicho input en general
 *
 * La solución / entendimiento
 *
 * 	- tengo que encontrar varias validaciones dentro dicho array:
 * 		- que no sean iguales dos números consecutivos, sino no se cuenta
 * 		- que sean consecutivos el uno cno el otro indistintamente si están colocados al "derecho" o revés
 * 	- necesito una variable que o cuente el numero de push que se le hace siendo de tipo [][] o una variable tipo
 * number qeu haga un ++ cuando cumpla todas las condiciones y sino que continue con el bucle
 * 	- si el tamaño es menos a 2, es decir, 0 o 1 tendrá que devolver 0 ya que no existe secuencia
 * 	-
 */

function countMelodySequencesUpdated2(birdNotes: number[]): number {
	// es más costoso usar un numer[][] que un simple number e ir haciendo ++ por
	// cada vuelta del bucle para solo usar el .length
	let countNotes: number = 0;

	// primera validación: si es menor, para la función
	if (birdNotes.length < 2) return 0;

	for (let i = 0; i < birdNotes.length; i++) {
		/**
		 * necesito hacer un bucle que vaya recorriendo el array introducido desde la posición cero hasta el
		 * lenght y cuante cuántas sucesiones existen, cunado acabe con esta posición i = 0, pase a la posocoón
		 * i = 1 y siga comparando hasta birdNotes.length -1 ya que la úiltima posición será la que esté incluida
		 * en el último array, en el caso de birnNotes el último arr sería [5,4], no tendría sentido un [4] porque
		 * no habría sucesión.
		 *
		 * para hacer esto, necesito un doble bucle donde i en este caso se mantenga estático, en 0 como
		 * primera posición y j (que sería siempre i+1, por lo que empieza este bucle en 1),
		 * siga iterando hasta birdNotes.length, y cuando acabe, salga del bucle, y el i pase a ser 1
		 * y por ende, j = 2
		 *
		 * puedo usar la variable countNotes[][] para ir añadiendo los distintos arrays que cumplan las validaciones
		 * y al final cuente dicho length como retorno de la función para saber cuántas son. El problema de esto es
		 * que tengo qeu crear una variable que sea [][] y quizá tener una varible tipo number que simplemente haga
		 * un countNotes++ cuando se cumpla una condición y vuelve a resetear el array birdNotes eliminando la
		 * primera posición hasta que ese nuevo array sea de length = 1 lo que haría que el bucle se acabara
		 */

		let newSet = new Set<number>();
		let newArr = new Set<number>([birdNotes[i]]);

		for (let j = i + 1; j < birdNotes.length; j++) {
			/**
			 * necesito encontrar una forma de validar los números consecutivos, y complen todas las validaciones:
			 * 	- i y j sean +-1
			 * 	- que si i y j no son, añada un nuevo componente al arr pero que si i, j y j+1 si son haga el ++
			 * 	- esto se hace hasta que el length se acabe y vuelve a empezar
			 * 	- necesito una variable donde pieda guardar los arrays que voy validando en j y que se resetee cuando
			 * salga del bucle j -> creo un tempArr fuera de este pero dentro del bucle i para poder guardar y comprobar
			 * 	-
			 */
		}
	}

	return countNotes;
}

console.log("updated 2:", countMelodySequencesUpdated2(birdNotes)); // → 5

/**
 * ESTE EJERCICIO NO HE TENIDO COJONES A ACABARLO. NO HE SABIDO COMO HACER EL PROPIO EJERCICIO.
 * Después de entender por fin qué había que hacer, no he sabido como hacer la gestión de los sets ni los min/max
 *
 * Esta es la sución que me ha dado claude cuando me he rendido, que pasa en un 95/100 y explicada por mí
 */

function countMelodySequencesUpdated3(birdNotes: number[]) {
	// creamos una variable count a la que haremos el ++ con forme se hagan las validaciones pertinentes
	let count = 0;

	/**
	 * necesitamos 2 bucles distintos:
	 * 	1o: el primero, i, para guardar la variable donde vamos a empezar a validar las distintas cadenas. Ej:
	 * 	si la cadena es [1, 3, 2, 5, 4], tenemos que empezar con i = 0 = 1 -> [1,3], después [1,3,2], después
	 * [1,3,2,5]. Con esto hacemos que siempre sea estable el 3, el inicio
	 * 	2o. es el que añade elemento al array inicial de i -> [1,3], todos los número siguientes los añade el bucle
	 * j. Cuando acaba el bucle j, pasa a i = 1 = 3 por lo que el bucle i empieza de nuevo pero ahora con el arr
	 * inicial como [3,2] y j va añadiendo elemento
	 *
	 * Dentro de todo esto, para hacer el count++ necesitamos ciertas validaciones en el bucle
	 */
	for (let i = 0; i < birdNotes.length; i++) {
		/* 
		creamos una variable vistos que nos diga si los elementos que estamos añadiendo al arr están repetidos
		y si es true, pasa de largo del elemento y no hace el count++
		*/
		const vistos = new Set<number>([birdNotes[i]]);

		/**
		 * creamos 2 variables que guardan el número más pequeño y el más grande vistos hasta ahora en el
		 * trozo. Arrancan las dos con birdNotes[i] porque de momento el trozo es ese único elemento, y se van
		 * actualizando dentro del bucle j con Math.min / Math.max cada vez que entra una nota nueva.
		 *
		 * OJO: min y max NO comparan las notas entre sí ni deciden si son consecutivas. Solo describen los
		 * EXTREMOS del trozo. Quien decide si el trozo es válido es el if de más abajo, que mira el trozo
		 * entero de golpe: con min, max y la cantidad de notas sabe si el rango está completo o si falta
		 * alguno por el medio.
		 */
		let min = birdNotes[i];
		let max = birdNotes[i];

		for (let j = i + 1; j < birdNotes.length; j++) {
			/* 
			creamos la variable con el número que vamos a introducir en cada pasada del bucle j y la que vamos a ir compararndo vs. la menor/mayor y así asognando el nuevo valor (o mantenerlo) del min y max
			*/
			const nota = birdNotes[j];

			if (vistos.has(nota)) break;
			vistos.add(nota);

			/**
			 * actualizamos los extremos del trozo con la nota que acaba de entrar. Ojo: aquí NO juzgamos nada,
			 * solo describimos el trozo actual. La nota no tiene por qué encajar con lo que ya hay: en [1,3,2]
			 * el 3 no encadena con el 1 y aun así el trozo acaba siendo válido cuando llega el 2.
			 *
			 * Lo importante es que al pasar de j a j+1 solo entra UN número, así que actualizar min/max cuesta
			 * O(1) (una comparación) en vez de recorrer el trozo entero buscando el mínimo y el máximo cada vez.
			 * Eso es lo que mantiene el algoritmo en O(n²) y no en O(n³).
			 */
			min = Math.min(min, nota);
			max = Math.max(max, nota);

			/**
			 * esta línea es la clave de todo y la lógica que resuelve el ejercicio:
			 *
			 * un conjunto de n números DISTINTOS contiene todos los enteros entre su mínimo y su máximo
			 * si y solo si (max - min + 1) === n. Si faltara alguno por el medio, el rango sería más ancho
			 * que la cantidad de números que tenemos.
			 *
			 * 	- max - min + 1 = cuántos números DEBERÍA haber para que el rango esté completo
			 * 	- j - i + 1     = cuántos números HAY de verdad en el trozo (de la posición i a la j)
			 *
			 * Lo de "distintos" ya lo garantiza el break de arriba: si hubiera repetidos no llegaríamos aquí.
			 *
			 * Ej. [1,3,2] -> min 1, max 3 -> 3-1+1 = 3, y hay 3 números -> cuadra ✅
			 * Ej. [1,3]   -> min 1, max 3 -> 3-1+1 = 3, pero solo hay 2 números -> falta el 2 ❌
			 *
			 * Y si no cuadra NO se rompe el bucle: seguimos con j porque una nota posterior puede rellenar
			 * el hueco ([1,3] no vale, pero [1,3,2] sí).
			 */
			if (max - min + 1 === j - i + 1) count++;
		}
	}

	return count;
}
