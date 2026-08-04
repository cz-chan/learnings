/**
 * 
 * Conflictos de edición en tiempo real
En una app colaborativa de edición de texto, múltiples usuarios pueden editar el mismo documento 
al mismo tiempo. Para mantener consistencia, el sistema guarda cada cambio con una estructura así:
{
  user: "ana",
  op: "insert" | "delete",
  index: 4,
  text: "abc" // solo si es un insert
}

Tu misión es implementar una función resolverConflictos que tome dos arrays con los cambios 
hechos por dos usuarios diferentes y devuelva el estado final del texto asumiendo que:

El texto inicial es una cadena vacía "".
Se aplican primero todas las operaciones del primer array (en orden).
Luego, se aplican las del segundo array, pero:

Si una operación apunta a un índice fuera del texto actual, se ignora.
En el caso de insert, si el índice es válido, se inserta el texto (desplazando lo demás).
En el caso de delete, se borra un carácter en el índice dado si existe.

Reglas:
El texto comienza vacío.
Los índices son relativos al estado actual del texto en ese momento.
No se validan índices negativos ni tipos incorrectos.
No modificar los arrays originales.


ANOTACIONES/ACLARACIONES

  - el texto empieza por una cadena vacia -> la variable fixedChanges tiene como text = "" al inicio

  - devuelve un array con el texto resuelto, sin conflictos

  - op solo puede ser o "delete" o "insert" por lo que se necesita una validación

  - primero se hacen los cambios de firstUserChanges sea lo qeu sea y después de secondUserChanges. -> 
  necesitaré una array del mismo tipo que lo que entra y sale qeu sea pending donde guarde los cambios del
  primer usuario y la modificación del segundo será la que se guarde en fixedChanges y se muestre

  - "Si una operación apunta a un índice fuera del texto actual, se ignora." -> si el .lenght del text es 
  menor que el indice al que apunta, esto no se ejecuy pasa a la siguiente operación

  - "Los índices son relativos al estado actual del texto en ese momento." -> siempre se debe estar 
  escuchando el text por lo qeu necesitamos una variable que guarde todos los text conforme vayan 
  sucediendo los mensajes además dice expresamente "No modificar los arrays originales." por lo que el text 
  que se introduce no se puede tocar

  - los index me dicen qué elemento del array text (text[i]) tengo que modificar por lo que necesito mapear el 
  text cada vez que cambie el text y después hacer el .push en ese index

  - los índices nunca pueden ser negativos ni tipos incorrectos -> validación

 */

// 1. la unión: op solo admite estos dos strings
type Operation = "delete" | "insert";

// 2. la forma del objeto, reutilizando el alias anterior
type ChangesStructure = {
	user: string;
	op: Operation; // aquí es donde se valida
	index: number;
	text?: string; // solo en insert
};

function resolverConflictos(
	firstUserChanges: ChangesStructure[],
	secondUserChanges: ChangesStructure[],
): string {
	let fixedChanges: string = "";
	let onTextChange: string = ""; // es innecesaria

	// console.log(firstUserChanges.length);

	// innecesario y rompe toda la lógica dentro del bucle
	// if (firstUserChanges[0].index !== 0)
	// 	return "El index debe empezar en cero '0' ya que no hay nada escrito aún.";

	/**
	 * como pueden enviar más de un cambio a la vez, necesito poder hacer un for de cada uno de los cambios
	 * que hayan y hacer qeu ese text pertenezca a dicho cmabio
	 */
	for (let i = 0; i < firstUserChanges.length; i++) {
		// esta forma no es correcta porque no puedo iterar sobre los text por cada uno de los mensajes que envíe
		// firstUserChanges.forEach((change) => {
		// 	const { index, op, text } = change;
		// 	if (text === "") fixedChanges = text!; // este first text siempre debe aparecer
		// });
		// innecesario pq no aplica ningún cambio y no rompería nada
		// if (firstUserChanges[0].text === "")
		// 	return "No puedes enviar un mensaje vacio desde un inicio";
		// como estoy validando tipos fuera de la función para que solo acepte los casos específicos,
		// es innecesario
		// if (
		// 	firstUserChanges[i].op !== "delete" &&
		// 	firstUserChanges[i].op !== "insert"
		// )
		// 	return "Solo puedes hacer las operaciones 'insert' o 'delete'";
		// no gace falta pq el enunciado no pide que se validen estos casos
		// if (firstUserChanges[i].index < 0)
		// 	return `No puedes enviar índices negativos. Has enviado ${firstUserChanges[i].index}`;

		/*
		la validación qeu sí hay que hacer es: si index > .length del onTextChange (en el caso i=0, posición
		del array es otra excepción pq siempre empezamos con un length de 1 pq está vacio) para el caso de 
		"insert". Pero index >= .length -1 pq puedo borrar hasta el caracter que está en posición 0 del arr 
		en el caso de "delete"
		*/

		// desestructuro las variables para no repetir constantemente los elementos (DRY)
		const { index, op, text } = firstUserChanges[i];

		/*
		NO hace falta un caso especial para i === 0 (ni para el texto vacío).
		"" es el caso general con los números más pequeños: slice sobre un string
		vacío no explota, devuelve "". Así que insertar en el índice 0 de "" es
		"" + textoNuevo + "" —> textoNuevo. La regla general ya lo cubre.

		Señal de alarma: si necesito un if para la primera vuelta del bucle, casi
		siempre es que mi regla general no es lo bastante general.
		*/
		// if (i === 0) fixedChanges = text ?? "";

		/**
			el enunciado de midu elimina a propósito los cambios que no "cuadran" con los length porque si un
			cambio posterior depende del anterior debería dar un error  ya que no ha habido cambio pero este
			enunciado no pide eso por lo que este tipo de errores "no existirían para mí" pero en la vida real
			no es así por lo qeu el continue aquí está bien colocado
		 */
		if (op === "insert" && index > fixedChanges.length) {
			console.warn(
				"No puedes tener un index mayor a la cantidad de elementos que tienes",
			);
			continue;
		}
		if (op === "delete" && index >= fixedChanges.length) {
			console.warn("No puedes eliminar más elementos de los que tienes");
			continue;
		}

		/**
		 * necesito una variable donde guarde los texto de manera provisional mientras se van haciendo
		 * las operaciones pertinentes (delete / insert en el índice correspondiente del onTextChange)
		 * en este y al final, añadirlo al fixedChanges
		 */
		// let onTextChange: string = "";
		// // aquçi no puede estar pq siempre nace "" y no la guarda, tiene que estar fuera del bucle
		onTextChange = onTextChange.concat(text ?? "").slice(index);

		fixedChanges = onTextChange;
	}

	return fixedChanges;
}

// 3. anotados: sin esto TS ensancha "insert" a string y la llamada falla
const cambiosA: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: -1, text: "" },
	{ user: "ana", op: "insert", index: 0, text: "Hola" },
	{ user: "ana", op: "insert", index: 4, text: " mundo" },
];

// después de esta, el mensaje quedaría "Hola mundo"

const cambiosB: ChangesStructure[] = [
	// elimina lo que hay en el index 4 que sería el espacio " " antes de mundo
	{ user: "luis", op: "delete", index: 4 },
	// añade Mundo Cruel al indice 4 que está entre "a" de Hola del insert 1 y la "m" del insert 2
	// pq ha borrado el espacio con el delete 1
	{ user: "luis", op: "insert", index: 4, text: "Mundo cruel" },
];

// console.log(resolverConflictos(cambiosA, cambiosB));
// => "HolaMundo cruelmundo"

// let a = "hola";
// let b = "";
// console.log(b.concat(a));

function resolverConflictosUpdated1(
	firstUserChanges: ChangesStructure[],
	secondUserChanges: ChangesStructure[],
) {
	// let fixedChanges: string = "";
	let onTextChange: string = "";

	/**
	 * hago un for of pq es más limpio de escribir y no me hace falta un firstUserChanges[i] pq ya es
	 * el propio bucle que lo hace
	 */
	for (let changes of firstUserChanges) {
		const { index, op, text } = changes;

		// no haría falta
		if (index < onTextChange.length) {
			console.warn("No se puede tener un índice menor al tamañi del texto");
			continue;
		}

		if (op === "insert" && index > onTextChange.length) {
			console.warn(
				"No puedes tener un index mayor a la cantidad de elementos que tienes",
			);
			continue;
		}
		if (op === "delete" && index >= onTextChange.length) {
			console.warn("No puedes eliminar más elementos de los que tienes");
			continue;
		}

		if (op === "insert") {
			onTextChange =
				onTextChange.slice(0, index) + (text ?? "") + onTextChange.slice(index);
		} else {
			onTextChange =
				onTextChange.slice(0, index) + onTextChange.slice(index + 1);
		}
	}
	console.log("first change:", onTextChange);

	for (let changes of secondUserChanges) {
		const { index, op, text } = changes;

		if (op === "insert" && index > onTextChange.length) {
			console.warn(
				"No puedes tener un index mayor a la cantidad de elementos que tienes",
			);
			continue;
		}
		if (op === "delete" && index >= onTextChange.length) {
			console.warn("No puedes eliminar más elementos de los que tienes");
			continue;
		}

		if (op === "insert") {
			onTextChange =
				onTextChange.slice(0, index) + (text ?? "") + onTextChange.slice(index);
		} else {
			onTextChange =
				onTextChange.slice(0, index) +
				// ⬆️ me devuelve el inicio del onTextChange hasta donde tengo que comprobar
				/*
				 	como necesito eliminar el índice que me pide, y como el primer argumento de .slice es inclusivo, así que empezando en index + 1 me salto justo el carácter que quiero borrar
				*/
				onTextChange.slice(index + 1);
		}
	}

	return onTextChange;
}

console.log("updated 1:", resolverConflictosUpdated1(cambiosA, cambiosB));
// => "HolaMundo cruelmundo"

const h = "hola";
console.log(h.slice(0, 1) + h.slice(1));

function resolverConflictosUpdated2(
	firstUserChanges: ChangesStructure[],
	secondUserChanges: ChangesStructure[],
) {
	let onTextChange: string = "";

	for (let changes of firstUserChanges) {
		const { index, op, text } = changes;

		if (index < 0) continue;

		if (op === "insert" && index > onTextChange.length) {
			console.warn(
				"No puedes tener un index mayor a la cantidad de elementos que tienes",
			);
			continue;
		}
		if (op === "delete" && index >= onTextChange.length) {
			console.warn("No puedes eliminar más elementos de los que tienes");
			continue;
		}

		if (op === "insert") {
			onTextChange =
				onTextChange.slice(0, index) + (text ?? "") + onTextChange.slice(index);
		} else {
			onTextChange =
				onTextChange.slice(0, index) + onTextChange.slice(index + 1);
		}
	}

	for (let changes of secondUserChanges) {
		const { index, op, text } = changes;

		if (index < 0) continue;

		if (op === "insert" && index > onTextChange.length) {
			console.warn(
				"No puedes tener un index mayor a la cantidad de elementos que tienes",
			);
			continue;
		}
		if (op === "delete" && index >= onTextChange.length) {
			console.warn("No puedes eliminar más elementos de los que tienes");
			continue;
		}

		if (op === "insert") {
			onTextChange =
				onTextChange.slice(0, index) + (text ?? "") + onTextChange.slice(index);
		} else {
			onTextChange =
				onTextChange.slice(0, index) + onTextChange.slice(index + 1);
		}
	}

	return onTextChange;
}

const caso1: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: 0, text: "Hola" },
	{ user: "ana", op: "insert", index: 4, text: " mundo" },
];

const caso2: ChangesStructure[] = [
	{ user: "luis", op: "delete", index: 4 },
	{ user: "luis", op: "insert", index: 4, text: "Mundo cruel" },
];

const caso3: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: 0, text: "abc" },
];
const caso4: ChangesStructure[] = [
	{ user: "luis", op: "delete", index: 1 },
	{ user: "luis", op: "delete", index: 5 },
];

const caso5: ChangesStructure[] = [];
const caso6: ChangesStructure[] = [
	{ user: "lucas", op: "insert", index: 0, text: "Inicio" },
];

const caso7: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: 0, text: "123" },
	{ user: "ana", op: "insert", index: 3, text: "456" },
];
const caso8: ChangesStructure[] = [
	{ user: "maria", op: "delete", index: 2 },
	{ user: "maria", op: "insert", index: 2, text: "x" },
];

const caso9: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: 0, text: "wow" },
];
const caso10: ChangesStructure[] = [
	{ user: "bob", op: "delete", index: 0 },
	{ user: "bob", op: "delete", index: 0 },
	{ user: "bob", op: "delete", index: 0 },
];
const caso11: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: 0, text: "123" },
];
const caso12: ChangesStructure[] = [
	{ user: "ana", op: "insert", index: 1, text: "x" }, // en medio
];

console.log("updated 2:", resolverConflictosUpdated2(caso1, caso2));
console.log("updated 2:", resolverConflictosUpdated2(caso3, caso4));
console.log("updated 2:", resolverConflictosUpdated2(caso5, caso6));
console.log("updated 2:", resolverConflictosUpdated2(caso7, caso8));
console.log("updated 2:", resolverConflictosUpdated2(caso9, caso10));
console.log("1x23 :", resolverConflictosUpdated2(caso11, caso12));

/**
 * Resolución del chatbot de midu:
 *
 * Problemas
 * 1. Uso de console.warn dentro de la lógica de negocio. ✅
 * 2.Lógica de validación inconsistente con los requisitos del problema.
 *
 * Debilidades
 * 1. El uso de console.warn contamina la salida y no es apropiado para una función
 * de procesamiento de datos
 * 2. La lógica de validación en el primer bucle es demasiado restrictiva y contradice el ejemplo
 * proporcionado (ej. el ejemplo permite insertar en el índice 0 de un string vacío,
 * pero tu código tiene validaciones que podrían bloquear operaciones válidas)
 * 3. Existe duplicación de código entre el procesamiento del primer y segundo array.
 */

// función extra de validación para eliminar el DRY y así abstraer la lógica
function applyChanges(initText: string, changes: ChangesStructure[]): string {
	/* 
	creamos una variable texto vacia, que será aquella que reciba la función como 
	el texto inicial y las distintas consecuciones del texto que se va modificando
	*/
	let createChanges: string = initText;

	/**
	 usamos el bucle for of pq nos permite hacer una iteración de manera "automática" sobre el elemento 
	 que vamos a querer iterer y no tener un changes[i] y que vaya iterando cada una de las veces
	 */
	for (let change of changes) {
		// desestructuramos para no repetirnos con changes.(lo que sea) (principio DRY)
		const { index, op, text } = change;

		/* 
		validamos si el index es menor a cero. para los caso sque pongan indices negativos, 
		los dejamos pasar porque si son índices negativos lo que hace un slice es empezar desde el final del 
		texto en vez de desde el inicio (empieza en text.length)
		*/
		if (index < 0) continue;

		/**
		 	la validación que me pide el enunciado es que si en la operación "insert" el index es mayor que el 
			propio texto a editar lo deje pasar pq empezará en la última posición de dicho text que se está
			escribiendo
		 */
		if (op === "insert" && index > createChanges.length) {
			continue;
		}
		/**
		 si en operación === "delete" el index es mayor al propio tamañi del texto, tb lo dejo pasar porque
		 en este caso el delete se haría en el último elemento. necesito que sea ">=" pq sino se rompen los 
		 test debido a que da undefined
		 */
		if (op === "delete" && index >= createChanges.length) {
			continue;
		}

		/**
		 * para el caso de insert lo que queremos hacer es:
		 * 1. leer la variable del texto que vamos a cambiar que puede ser "" o que ya esté sobre escrita.
		 * 2. coger ese valor y partirlo dependiendo del índice:
		 * 	2.1. cogemos desde el inicio hasta el índice incluido (la parte de la izq de la palabra/frase)
		 *  2.2. insertamos el texto justo después de ese slice con "+" (en strings se puede concatener así)
		 * 	2.3. insertamos el final de la palabra/frase desdee el índice que hemos cortado
		 * 	(ojo: en este caso no tenemos que borrar el índice, simplemente "movemos" la palabra/frase un
		 * huevo e insertamos dicha palabra en ese hueco)
		 */
		if (op === "insert") {
			createChanges =
				createChanges.slice(0, index) +
				(text ?? "") +
				createChanges.slice(index);
		} else {
			/**
			 * en el caso de op === "delete"(solo pueden haber 2 tipos de casos gracias a la validación
			 * de TS en "type Operation" ) buscamos eliminar única y exclusivamente el índice que nos dice,
			 * no queremos sustituir ninguna palabra ya que en el mensaje de delete nunca viene un text
			 *
			 * para eliminar ese carácter lo qeu hacemos es coger el elemento de la der (0 to index) y el
			 * carácter de la izq sin el índice que me pide eliminar (index + 1 to end). al hacer un +1, desplazo
			 * el slice una posición lo que hace que ese caracter index en la parte izq ya no esté
			 */
			createChanges =
				createChanges.slice(0, index) + createChanges.slice(index + 1);
		}
	}
	//retorno la palabra que me ha quedado después de todos los bucles (2)
	return createChanges;
}

function resolverConflictosUpdated3(
	firstUserChanges: ChangesStructure[],
	secondUserChanges: ChangesStructure[],
) {
	let onTextChange: string = "";

	/* 
	voy guardando (aunque no es la forma eficiente) los resultados de las funciones en el onTextChange que
	va a ser la variable que al final se muestre como resultado (la cual es igual que la de createChanges 
	al final de todo el bucle)

	la forma optimizada (que me ha dado claude) es la de updated4
	*/

	// ⬇️ no optimizado
	// onTextChange = applyChanges(onTextChange, firstUserChanges);
	// onTextChange = applyChanges(onTextChange, secondUserChanges);

	// ⬇️ mi solución "optimizada" a la cual había llegado. a través de un "callback" ya que recibe lo que sale
	onTextChange = applyChanges(
		applyChanges(onTextChange, firstUserChanges),
		secondUserChanges,
	);

	return onTextChange;
}

console.log(
	"updated3 tiene que dar '1x23' :",
	resolverConflictosUpdated3(caso11, caso12),
);

/**
 * ESSTA ÚLTIMA ES LA QUE MÁS LE GUSTA A MIDUBOT,
 * aun así me salta la siguiente debilidad:
1. La validación de índices para 'insert' es ligeramente más estricta de lo que suele requerir un editor
de texto (normalmente se permite insertar en `index === length`), aunque cumple con la lógica solicitada.
 */
function resolverConflictosUpdated4(
	firstUserChanges: ChangesStructure[],
	secondUserChanges: ChangesStructure[],
): string {
	function applyChanges(initText: string, changes: ChangesStructure[]): string {
		let createChanges: string = initText;

		for (let change of changes) {
			const { index, op, text } = change;

			if (index < 0) continue;

			if (op === "insert" && index > createChanges.length) {
				continue;
			}
			if (op === "delete" && index >= createChanges.length) {
				continue;
			}

			if (op === "insert") {
				createChanges =
					createChanges.slice(0, index) +
					(text ?? "") +
					createChanges.slice(index);
			} else {
				createChanges =
					createChanges.slice(0, index) + createChanges.slice(index + 1);
			}
		}

		return createChanges;
	}

	return applyChanges(applyChanges("", firstUserChanges), secondUserChanges);
}

console.log(
	"updated4 tiene que dar '1x23' :",
	resolverConflictosUpdated4(caso11, caso12),
);
