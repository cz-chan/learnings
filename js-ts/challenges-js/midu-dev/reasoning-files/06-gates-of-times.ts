/**
 * Puertas del portal temporal
 * 
En el año 4022, los humanos usan portales temporales para moverse entre dimensiones. 
Cada portal tiene un código único (una letra minúscula) y solo uno de ellos está fuera de fase: 
no se repite en la secuencia de activaciones. Tu misión es encontrar el primer portal fuera de fase
 que aparece en la lista.

Implementa la función portalFueraDeFase que reciba un string con los códigos de portales activados 
en orden, y devuelva el índice del primer portal que no se repite. Si todos los portales están en 
fase (es decir, se repiten), devuelve -1.

Reglas:
- El input siempre será un string no vacío con letras minúsculas.
- Si no hay portales fuera de fase, devuelve -1.
- El índice debe ser el de la primera aparición única.

COSAS EN LAS QUE PENSAR:
  - el input no puede ser vacio ni con letras minúsculas -> la función deberá ser de tipo number si
  todo va bien pero de tipo string si no se envia portal para que retorne algún mensaje de advertencia
  dición "necesitas enlazar un portal"
  - como debe ser minúsculas -> debe normalizarse antes .toLowerCase y .trim
  - si todos están en fase -> -1 -> 
  - si el índice debe ser el primero elemento desincronizado el bucle debe romperse en la primera vuelta
  - necesito recorrer el arr entre para saber si todas se repiten? qué tipo de repetición es? porque 
  xyxyxy es de a 1, pero aabbcc... es de a 2. no es la repetición cada 2 caracteres pq en aabbcc falla 
  en el indice 2 (aa != bb)
  - cada portal es un único string en minúscula -> con esto y con las soluciones viene a decir que el 
  orden en el que aparecen los portales "da igual" (solo importa para decir cuál no está en fase) sino
  que importa si el string (portal) se repite en la secuencia, el primero en no repetirse, se para y 
  ese es el "malo" y el índice que se devuelve

ENTENDIMIENTO:

  - se introduce una cadena de strings que se tiene que repetir. si en algún
  punto no existe esta repetición (el "id" del portal) se debe devolver el índice de dicho portal
  en el string enviado, si todos se repiten de manera constante, devuelve un -1
  - el portal debe aparecer como mínimo 2 veces para que esté en "fase" y sea válido -> necesito una
  variable que guarde cada elemento del string por separado para que se compare con todos los demás, 
  pero esto llevaría a una complejidad O(n-1) ya que tengo que comparar como mucho los elementos de 
  n-1 del arr para ver si se repiten, en el mejor de los casos es O(1) para tamaño de n=2 pero O(n-1) 
  para un tamaño n
  o puedo hacer un .split(), guardarlo en una variable (Arr) y hacerle un new Set eliminando así los 
  duplicados (esto NO se puede pq el Set me deja un único elemento de cada, por lo que no vale) o podría
  hacer el set y comparar cada uno de los elementos del set con los elementos del arr y si en este se repiten
  al menos una vez, continua, cunado haya uno uqe no se repite, obtienes la posición en el arr de ese elemento

  tendría que tener una forma de barrer el array y que comparara cada uno de los elementos del array
  entre ellos. si uno de ellos se repite al menos una vez, pasa al siguiente hasta encontrar el primero
  que no se repita

 */

function portalFueraDeFase(portales: string): number | string {
	if (portales === "")
		return "Necesitas tener algún portal que enviar para verificar si está en fase";

	// podría hacerse de manera directa sin tener que hacer una normalización y guardar en variables
	// let normalizePortal = new Array(portales.trim().toLowerCase());
	// let normalizePortalInSet = new Set(portales.trim().toLowerCase());
	// const atLeast = 2;
	// let normalized = portales.trim().toLowerCase()

	// console.log(
	// 	normalizePortal.filter((portal) => normalizePortalInSet.has(portal))
	// 		.length >= atLeast,
	// );
	// console.log([...portales.trim().toLowerCase()]);

	// el .filter retorna un array de valores que cumplan x condicion interna
	// [...portales.trim().toLowerCase()].filter((value) => {
	// 	// for (let i = 0; i < portales.length; i++) {}
	// 	// si el value en portales se repite < atLeast, retorna ese valor y break
	// 	if (portales.repeat(1)) {
	// 		return portales.search(value);
	// 	} else {
	// 		return -1;
	// 	}
	// });

	// recorro el array por cada uno de los valores hasta qeu me de i+1 = i,
	// sino retorno esa posición y sí, paso de i a i+1. esto es ineficiente pq no tengo
	// manera de guardar el que ya he mirado
	// for (let i = 0; i < normalizePortal.length; i++) {}

	/**
	 * Con un Map del string puedo tener las keys y los values
	 */
	// rompo la cadena de portales en portales separados en un array
	// const normalizedPortals = portales.split("");

	// más elegante y moderna pero si voy a hacer un for of es innecesario porque ya lo hace por mi
	const normalizedPortals = [...portales.trim().toLowerCase()];

	/*
    inserto todos los portales en un map con un for of.

    un for of
  */
	let myMap = new Map();
	for (let portal of normalizedPortals) {
		myMap.set(portal, (myMap.get(portal) ?? 0) + 1);
		/**
		 * en la pososición de value, como es lo que yo quiero saber, el número de veces que aparece
		 * después de que revise si existe (si no existe por defecto es undefined pero yo le doy 0 con ??)
		 * le suma uno a esa letra en concreto hasta que acabe con el array
		 *
		 * con esto me planto con un Map con las letras que el array tiene y como value, el número de veces
		 * que aparecen. Si solo aparece una única vez, solo habrá un get(portal) por lo que value = 1 y ese
		 * valor sería el que retornaría
		 *
		 * el problema de esto es que no devuelve el primer valor que sea 1 y se detenga. si hay 2 valores
		 * que tienen un 1, debería devolverme el primero qeu entró al Map, el que esté en la posición del
		 * map más alta (menor número)
		 */
	}
	for (const [index, portal] of normalizedPortals.entries()) {
		/**
		 * este for of lo que hace es transformar en entries los valores del portales que he normalizado
		 * en un index (posición del array normalizado donde aparece) y en el value que es el portal. como
		 * el ejercicio me pide que su hay un portal desfasado devuelva la primera posición de ese elemento
		 * desfasado, retorno el index y no el portal o el Map de ello
		 */
		if (myMap.get(portal) === 1) return index;
	}
	return -1;

	// console.log(myMap);

	// console.log(normalizePortalInSet);

	// return -1;
}

console.log(portalFueraDeFase("xyxyxy")); // todas se repiten -> -1

console.log(portalFueraDeFase("quasar")); // q en el índice 0 ✅

console.log(portalFueraDeFase("aabbccddeeffg")); // g en el índice 12 ✅
