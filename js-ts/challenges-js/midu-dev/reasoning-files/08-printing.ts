/**
 * 
¡Atención en la imprenta!
Estamos trabajando en una imprenta que produce etiquetas con códigos numéricos para paquetes. 
Cada dígito del 0 al 9 se imprime con una tinta distinta, y a veces… ¡una de las tintas se acaba!

Tu tarea es escribir una función que nos diga qué etiquetas saldrán defectuosas porque contienen 
el dígito cuya tinta se ha agotado.

¿Cómo funciona?
La función recibe:

Un dígito (del 0 al 9) que representa la tinta que se ha agotado.
Un número que representa la cantidad total de etiquetas que se van a imprimir, desde 1 hasta ese número.
La función debe devolver un array con todos los números que contienen el dígito sin tinta. 
Esos son los códigos que saldrán mal impresos.

secuenciaDeNumeros(1, 15)
// [1, 10, 11, 12, 13, 14, 15]
 
secuenciaDeNumeros(2, 20)
// [2, 12, 20]


RAZONAMIENTOS PROPIOS

  - el código funciona como un límite superior <= donde se tienen que comprobar los dígitos de dichos números
  que contienen el número qeu se le ha pasado de tinta. Es decir, si se le pasa el 3 (tinta) y 14 codigo, la 
  función debe retornor un array con [3, 13] pero si es código 30 y tinta 3 es [3,13,23,30].
  Todos los números hasta el límete superior (incluido) que tienen en su cuerpo el número qeu se le ha pasado
  como valor de tinta

  - si tiene que buscar los números que contienen otro número, los números de 2 o más dígitos hay que partirlos
  para que pueda rastrearlos, esto se puede hacer a través de un for normal pero si recibo un código de X dígitos
  necesito poder romperlo para ver si lo contiene. necesitaría romper el número tantas veces como grande sea.

  si me pasan el código 211 y un 1, necesito romper el 21 en 2 y 1 y si existe lo añado al array de salida y si 
  es el 201 necesito remper en 2-0-1 y ver si alguno de esos es === 1

  - el número de veces qeu puedo romper el número puede venir dado por el tamaño del código que entra. si es el 
  201, el tamaño es 3 y por ende, como mucho debería tener que romper el número en 3. para los números inferiores,
  solo lo rompería hasta que fuera undefined: if number[i+1] === undefined, pasamos al siguie

  - el código 0 o menores, devuelve un string diciéndo la excepción al igual que pasaría si 
  tinta > 9 o tinta.length > 1 aunqeu este último podría añadir un 001 y no debería dar error simplemente 
  eliminar los ceros de delante (casos límite)

  - o puedo hacer un .map donde saque cada elemento que CONTIENE el numero de tinta

  - tienen que ser numeros ambos inputs por lo que este es otro caso límite pero solo pasaría en JS no en TS
 */

function secuenciaDeNumeros(tinta: number, codigos: number): number[] | string {
	if (tinta > 9)
		return `Lo sentimos, la etiqueta tiene que estar entre 0 y 9 y tu has pasado ${tinta}`;
	if (codigos <= 0)
		return `Lo sentimos, el código debe ser como mínimo de 1 y has pasado ${codigos}`;

	// if (tinta !== Number || codigos !== Number) return "Los inputs deben ser números"

	let errorInFiles: number[] = [];

	for (let i = 1; i <= codigos; i++) {
		/* 
    tengo que iterar i = 1 (no tiene sentido que sea 0 pq códigos nunca va a poder ser 0 y porque no 
		estamos recorriendo un array sino una cadena de números que i va incrementando desde el 1 hasta
		hasta i <= codigos )
    necesito que sea igual para los casos en los que el último dígito de codigos sea = al número de tintra
    y necesito comparar el numero i si contiene a tinta pero necesito algo que haga que pueda comparar 
    todos los dígitos de i conforme se crea y hacer el push (o .map) al errorInFiles

    la pregunta es -> qué puedo hacer para convertir este número i en algo iterable sobre las sus posiciones y 
    valores de dichas posiciones que me permita hacer push si es true
    
    */
		if (i.toString().includes(tinta.toString())) errorInFiles.push(i);
	}

	return errorInFiles;
}
console.log(secuenciaDeNumeros(0, 22));

// let arr: number[] = [];
// const l = 2;
// const hh = 23456789;

// [...hh.toString()].forEach((h) => {
// 	if (h.includes(l.toString())) {
// 		arr.push(Number(h));
// 	}
// });
// console.log(arr);

/**
 * da un 94/100
 * los errores son en los returns que deberían ser throw new Error()
 *
 * y el otro error/debilidad es: 1. La conversión a string dentro del bucle es funcional, pero para
 * volúmenes de datos extremadamente grandes, una solución matemática (usando módulo y división)
 * sería más eficiente en términos de rendimiento.
 *
 * Un .toString() crea objetos en memoria y además, al hacer el .includes() lo que hace es buscar los
 * substrings de cada cadena de texto y recorrer por cada caracter de cada substring y comparando
 *
 * usando números puros es más rápido y lo que tienes que hacer es romper los números por sus dígitos y
 * buscar si esos dígitos coinciden con tinta
 */
function secuenciaDeNumerosUpdated1(tinta: number, codigos: number) {
	if (tinta > 9)
		throw new Error(
			`Lo sentimos, la etiqueta tiene que estar entre 0 y 9 y tu has pasado ${tinta}`,
		);
	if (codigos <= 0)
		throw new Error(
			`Lo sentimos, el código debe ser como mínimo de 1 y has pasado ${codigos}`,
		);

	let failedTags: number[] = [];

	for (let i = 1; i <= codigos; i++) {
		/* 
    necesito una variable donde pueda guardar el número de i ya que no puedo romper o deconstruir i
    */
		let n = i;

		/**
		 * si tengo que ahcer el módulo en 10 de n (n%10) me dará el último dígito, si este es igual a
		 * tinta, tengo que hacer el push de ese i en concreto.
		 * Sino tengo que hacer una transformación de n quitando ese último dígito y quedándome con los que
		 * quedan y volver a empezar el bucle de n%10 y comparar con tinta hasta que sea el últimi dígito,
		 * el siguiente sea undefined, y si no es, salgo del bucle y cojo el siguiente i
		 *
		 * para hacer esto necesito hacer el módulo % y luego dividir entre 10 y al conjunto, hacerle un
		 * Math.floor para eliminar los decimales y que siempre me da hacia abajo (no modifica el número)
		 */

		// el problema del if que tengo que hacer varios else para el número de digitos y puede ser infinito
		// if (n % 10 === tinta) {
		// 	failedTags.push(i);
		// }

		/**
		 * un bucle while evita el problema de hacer un único ciclo y simplemente tengo que crear una
		 * condición que mientras n%10 !== tinta, lo divida entre 10 y le haga un Math.floor para quitarle
		 * dicho decimal hasta que n tenga un lenght de 1
		 *
		 * el bucle while necesita como condición n > 0 porque nunca va a poder ser menor a 0. Sí puede ser
		 * igual a cero pero en este caso ya estoy satisfaciendo dicha condición con el if dentro del while
		 * ya uqe en caso de que el módulo sea 0, coincide con tinta si es el caso de dicho número.
		 */

		while (n > 0) {
			// if (n === tinta) {
			// 	failedTags.push(i);
			// 	break;
			// } else
			if (n % 10 === tinta) {
				failedTags.push(i);
				break;
			}

			/**
			 * con esta línea elimino el último dígito de n para poder reasignarle el nuevo valor siempre
			 * redondeando a la baja para que no haya un salto de número en los casos X,999
			 */
			n = Math.floor(n / 10);

			// let module = n % 10;
			// n = Math.floor(module / 10);
		}
	}

	return failedTags;
}

console.log("updated1", secuenciaDeNumerosUpdated1(0, 201));
/**
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
