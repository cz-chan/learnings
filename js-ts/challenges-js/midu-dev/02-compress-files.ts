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

// SOLUCIÓN A LA QUE HE LLEGADO DE PRIMERAS
function getCompromisedFiles(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
): number[] {
	let droneArr: Array<[number, number]> = [];

	droneLogs.forEach((value) => {
		if (value[1] > lastSafeDownload) droneArr.push(value);
	});

	let temporalMap: Map<number, number> = new Map();

	droneArr.forEach((value) => {
		if (!temporalMap.get(value[0])) {
			temporalMap.set(value[0], value[1]);
		} else {
			if (
				temporalMap.has(value[0]) &&
				(temporalMap.get(value[0]) ?? 0) < value[1]
			) {
				temporalMap.set(value[0], value[1]);
			}
		}
	});

	droneArr = Array.from(temporalMap);
	let arrIDs: Array<number> = [];
	droneArr.forEach((value) => arrIDs.push(value[0]));
	arrIDs = arrIDs.sort((a, b) => a - b);
	return arrIDs;
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

console.log(getCompromisedFiles(lastSafeDownload, droneLogs));

/**
 * MEJORAS QUE PROPONE:
 *
 * 1. Simplifica el proceso utilizando un `Set` para almacenar los IDs únicos
 * que cumplen la condición `timestamp > lastSafeDownload`.
 * 2. Utiliza métodos funcionales como `.filter()` y `.map()` para reducir la cantidad de código imperativo.
 * 3. Recuerda que para obtener los IDs únicos ordenados, basta con filtrar,
 * convertir a un `Set` para eliminar duplicados y luego aplicar `.sort((a, b) => a - b)`.
 *
 * DEBILIDADES DEL CÓDIGO:
 *
 * 1. El código es innecesariamente verboso; se pueden filtrar y extraer los IDs en una sola pasada.
 * 2. La lógica de filtrado y mapeo realiza múltiples iteraciones sobre los datos,
 * lo cual es ineficiente para grandes volúmenes de registros.
 * 3. El uso de `dronArr` y `temporalMap` añade complejidad innecesaria a la memoria.
 *
 */

function getCompromisedFilesUpdated1(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
): number[] {
	let droneArr: number[] = [];

	droneLogs.forEach((value) => {
		if (lastSafeDownload < value[1]) {
			droneArr.push(value[0]);
		}
	});

	let setConvert = new Set(droneArr);
	droneArr = [...setConvert].sort((a, b) => a - b);

	// o -> droneArr = [ ... new Set(droneArr) ].sort((a, b) => a - b);

	return droneArr;
}
console.log(getCompromisedFilesUpdated1(lastSafeDownload, droneLogs));

function getCompromisedFilesUpdated2(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
): number[] {
	let droneArrIDs: number[] = [];

	droneArrIDs = [
		...droneLogs.reduce((acc: Set<number>, value: number[]) => {
			if (value[1] > lastSafeDownload) {
				acc.add(value[0]);
			}
			return acc;
		}, new Set()),
	].sort((a, b) => a - b);

	return droneArrIDs;
}
console.log(getCompromisedFilesUpdated2(lastSafeDownload, droneLogs));

// lo perfecto para la ai sería (aún así es un 95/100):
function getCompromisedFilesUpdated3(
	lastSafeDownload: number,
	droneLogs: Array<[number, number]>,
) {
	return [
		...droneLogs.reduce((acc: Set<number>, value: [number, number]) => {
			if (value[1] > lastSafeDownload) {
				acc.add(value[0]);
			}
			return acc;
		}, new Set()),
	].sort((a, b) => a - b);
}
console.log(getCompromisedFilesUpdated3(lastSafeDownload, droneLogs));
