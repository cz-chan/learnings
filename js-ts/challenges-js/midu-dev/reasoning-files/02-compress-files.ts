/**
    En el año 3025, las ciudades están controladas por Inteligencias Artificiales que almacenan registros de todos los movimientos humanos.

    Cada cierto tiempo, los nodos de vigilancia hacen una descarga segura de datos para evitar pérdidas ante apagones del sistema.

    Tienes el timestamp de la última descarga segura y un registro de modificaciones recientes que hicieron los drones. Cada modificación está representada como un par: [ID del archivo, timestamp de modificación].

    Tu misión es implementar la función getCompromisedFiles que devuelva un array con los IDs de los archivos modificados después de la última descarga, ordenados de menor a mayor.

    Ejemplos:

    const lastSafeDownload = 1670000000
    
    const droneLogs = [
      [42, 1670000500],
      [13, 1670000000],
      [8, 1670000700],
      [8, 1670000001],
      [99, 1669999999],
    ]
    
    getCompromisedFiles(lastSafeDownload, droneLogs) // => [8, 42]
    📌 Reglas:
    Si al menos una modificación es posterior al lastSafeDownload, incluye ese ID.
    No repitas IDs, aunque aparezcan varias veces.
    Devuelve un array vacío si no hay archivos comprometidos.
    El resultado debe estar ordenado de forma ascendente.

    ---

    Flujo:
    
      1. comprobar si algún log del dron tiene fecha < lastSafeDownload 
        1.1 - si no hay fechas superiores a lastSafeDownload, retorna un array vacio []
        1.2 - si hay superiores, continua
      2. del array resultante, comparar los IDs
      3. si hay iguales, al hacer el Set, elimino estas comparaciones (no: comparo los lastSafeDownload y me quedo con el que sea mayor)
      4. devuelvo el array con los IDs y lastSafeDownload

    Más explicaciones: El problema con este es que el droneLogs me llega como un array de 
    array. Por lo que los keys serán los "indices" y el value será el array tipo: 
    [id, timestamp]

    Flujos:
      1. extraer los valores del dronLog para compararlos con el lastSafeDownload
      2. compararlos y si es mayor, quedarme con ese array ( [id, ts] )
        Si hay una función que vaya hacia dentro del dronLog y compare el ts de cada id, si es mayor,
        el value del dronLog (que sería el array [id,ts]) se guarda en una variable
      3. comparar los ids para que no sean iguales (con un Set se haría automático -> si y no. un set es automático si es un arr plano sino, con un [[id, ts]] no puede saber qué es o no igual)
      4. ordenar de menor a mayor
 */

function getCompromisedFiles(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
) {
	const dronArr: Array<[number, number] | null> = []; // el arr que devuelve (lleno o vacio)

	// necesito estraer los valores del timestamp del droneLogs para compararlos

	// necesito coger el value de cada registro y compararlo con el lastSafeDownload
	for (let i = 0; i < droneLogs.length; i++) {
		// al ser un array de arrays de longitud 2, el value lo obtengo a través de iterar el array por su i pero obteniendo el valor del elemento 1 del array, es decir:
		// value = droneLog[i][1] -> esto daría el timestamp
		let timestampLogs: number = 0; // variable para guardar el ts del dronLog y comparar con lastSafeDownload

		// obtengo cada uno de los valores del timestamp droneLog con forEach
	}

	return dronArr;
}

// validation assets
const lastSafeDownload: number = 1670000000;
const droneLogs: Array<[number, number]> = [
	[42, 1670000500], // !
	[13, 1670000000],
	[8, 1670000700], // !
	[8, 1670000001], // !
	[99, 1669999999],
];

let newArrWithValues: number[] = [];
droneLogs.forEach((value, key) => newArrWithValues.push(value[1])); // obtengo los values en posición 1, en el timestamp

let newArrsWithAll: Array<[number, number]> = [];
droneLogs.forEach((value, key) => {
	newArrsWithAll.push(value); // obtengo todos los valores del array de arrays [id, ts]. con esto puedo hacer push al nuevo arr de los drones antes de hacer el "new Set" para eliminar copias en los ids
});

console.log(newArrWithValues);
console.log(newArrsWithAll);

function newGetCompromisedFiles(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
) {
	let dronArr: Array<[number, number]> = []; // el arr que devuelve (lleno o vacio)

	droneLogs.forEach((value) => {
		// value es [id, timestamp] y para sacar el valor de cada uno, necesito el value[1] (valor de cada value en la posición 1 del array)

		if (value[1] > lastSafeDownload) dronArr.push(value); // hago la comparaciuón y si son mayores, lo añado al arr del dron
	});

	// cojo cada uno de los values ([id, ts]) del dronArr para comparar los ids y si existe ya uno, necesito que solo guarde el de ts mayor

	// creo el mapa donde voy a guardar los values temporales para pasárselos al dronArr
	//! RECUERDA QUE UN MAP, AL HACER UN .SET(KEY) TE DA EL VALUE NO LA PROPIA KEY -> este error te ha llevado a que esté mal el ejercicio mucho tiempo
	let temporalMap: Map<number, number> = new Map();

	// por cada value, necesito que lo guarde en el temporalMap para poder comparar los ids y los ts
	// esta comparación no es necesaria pero qeuría hacerla
	dronArr.forEach((value) => {
		// añado un primer elemento si no hay nada que comparar. cuando hay algo ya en el temporal, pasa al else
		if (!temporalMap.get(value[0])) {
			temporalMap.set(value[0], value[1]); // le paso los valores que quiero que tenga el Map en la primera vuelta
		} else {
			// comparo para la segunda y X vueltas pq ya existe algun valor en el Map con
			// busco comparar si el valor de temporal en value[0] es igual a lo que entra del dronArr y si lo es, a su vez, comparar con el temporal value[1] (ts) y el que entra para que solo si es igual al id pero e que entra es mayor que el que está, haga el set del nuevo valor
			if (
				temporalMap.has(value[0]) && // validas que el value[0] exista dentro del Map
				// segunda condición es que el ts de dentro sea mayor al que llega, sino, tiene que hacer el set del nuevo
				(temporalMap.get(value[0]) ?? 0) < value[1]
			) {
				temporalMap.set(value[0], value[1]);
			}
		}
	});
	console.log("map", temporalMap);

	// conversión de map a array
	dronArr = Array.from(temporalMap);

	// eliminar los timestamp apra que solo se quede el id
	let idsDronArr: Array<number> = []; // creo el arr donde guardo los ids

	dronArr.forEach((value) => idsDronArr.push(value[0])); // añado los ids al nuevo arr

	// ordeno el nuevo arr de forma ascendente, es decir, de menor a mayor
	idsDronArr = idsDronArr.sort((a, b) => a - b);

	// return dronArr;
	return idsDronArr;
}
console.log(newGetCompromisedFiles(lastSafeDownload, droneLogs));

// lo perfecto para la ai sería (aún así es un 95/100):
function getCompromisedFilesUpdated3(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
) {
	// restornamos el valor por defecto, sin pasarlo por una variable para que no use memoria
	return [
		// como estamos creando un Set, para tranformarlo a un array, necesoitas desestructurarlo
		// el método para añadir los valores es el .reduce() pq este recibe un acumulado (el valor que se va a iterar y que depende del tipo según se le pase como último parámetro, en este caso el set para que ya elimine por defecto el ID duplicado) y el value es el pripio elemento del droneLogs por eso es [number, number] y no un Array<[number, number]>
		...droneLogs.reduce((acc: Set<number>, value: [number, number]) => {
			// validamos si el timestamp es menor que el lastSafeDownload para saber si guardarlo o no
			if (value[1] > lastSafeDownload) {
				// como solo nos piden los ids, añadimos el elemento 0 del value ( [id, timestamp] ) al acc cada una de las vueltas
				acc.add(value[0]);
			}
			return acc;
		}, new Set()),
		// hacemos al propio spread el sort para que sea de menor a mayor donde si el primer dígito es mayor y da negativo la resta, lo invierte
	].sort((a, b) => a - b);
}
