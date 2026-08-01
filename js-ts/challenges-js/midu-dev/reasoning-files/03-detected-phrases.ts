/**
 * 
    Varias escuelas están usando un sistema automático para detectar si los alumnos copiaron texto de otras fuentes. 
    Tu tarea es implementar una función que compare un conjunto de frases escritas por un estudiante con una base 
    de frases consideradas como sospechosas de ser copiadas.

    Una frase se considera plagiada si coincide con una frase de la base ignorando mayúsculas, 
    espacios al inicio/final y signos de puntuación (como ”.”, ”!”, ”?”).

    Ejemplos:

    const base = [
      'El conocimiento es poder.',
      'Aprender nunca es una pérdida de tiempo!',
      'Programar es divertido',
    ]
    
    const frasesEstudiante = [
      'el conocimiento es poder',
      ' Aprender nunca es una pérdida de tiempo ',
      'programar es divertido.',
      'La práctica hace al maestro',
    ]
    
    detectarPlagio(base, frasesEstudiante)
    // ➞ [
    // "el conocimiento es poder",
    // " Aprender nunca es una pérdida de tiempo ",
    // "programar es divertido."
    // ]
    Reglas:
    Ignora mayúsculas/minúsculas.
    Ignora espacios al principio o final de la frase.
    Ignora ”.”, ”!” o ”?” al final de la frase.
    Ignora ”.”, ”¡” o ”¿” al inicio de la frase.
    Devuelve un array con las frases del estudiante que están plagiadas.
    El orden debe respetar el array de frases del estudiante.
    No modifiques las frases originales en el resultado.
 * 
 */

function detectPlagiarism(
	base: string[],
	frasesEstudiante: string[],
): Array<string> {
	// ojo con la g pq sino, se pueden repetir carácteres y no estarían eliminándose
	const specialCharacterByRegexExpression =
		/[!@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/g;
	let comparisonPhrases: Array<string> = [];
	let plagiarimsPhrases: Array<string> = [];

	// normalizamos cada una de las frases que me vienen de los estudiantes para poder comparar
	frasesEstudiante.forEach((value) => {
		comparisonPhrases.push(
			value
				.toLowerCase()
				.trim()
				.replaceAll(specialCharacterByRegexExpression, ""),
		);
	});

	/* 
	queremos saber si alguna de las frases de los estudiantes están en el base pero antes de esto necesito normalizar
	el baes pq es un string[] y no un Array<[string]> por eso no deha hacer el .toLowerCase ni ningún método de Arrays
	pero sí me deja con los demás yas que yo he construido arrays por defecto
	*/

	// for (let i: number = 0; i < comparisonPhrases.length; i++) {
	// 	if (base[i].includes(comparisonPhrases[i])) {
	// 		console.log(comparisonPhrases[i]);
	// 		plagiarimsPhrases.push(comparisonPhrases[i]);
	// 	}
	// }

	// comparisonPhrases.forEach((value) => {
	// 	if (
	// 		base
	// 			.toLowerCase()
	// 			.trim()
	// 			.replaceAll(specialCharacterByRegexExpression, "")
	// 			.includes(value)
	// 	)
	// 		plagiarimsPhrases.push(value);
	// });

	console.log("base", base);
	console.log("frases plagiadas", plagiarimsPhrases);

	let normalizeBase: Array<string> = [];

	base.map((value) => {
		normalizeBase.push(
			value
				.toLowerCase()
				.trim()
				.replaceAll(specialCharacterByRegexExpression, ""),
		);
	});

	console.log("new normalize base", normalizeBase);

	// estaría bien pero tengo que devolver la frase según el estudiante me la ha pasado por lo que
	// no podría ser de esta manera pq no tengo forma de volver a tener exactamente la misma frase
	for (let i: number = 0; i < comparisonPhrases.length; i++) {
		if (normalizeBase.includes(comparisonPhrases[i])) {
			// console.log(comparisonPhrases[i]);
			plagiarimsPhrases.push(comparisonPhrases[i]);
		}
	}

	return plagiarimsPhrases;
}

// examples
const base = [
	"El conocimiento es poder.",
	"Aprender nunca es una pérdida de tiempo!",
	"Programar es divertido",
	"be water my friend",
];
const frasesEstudiante = [
	"el conocimiento es poder", // esta
	" Aprender nunca es una pérdida de tiempo ", // esta
	"programar ??es divertido.", // esta
	"La pr??áctica hace al maestro",
	"be water my Friend", // esta
];
console.log(detectPlagiarism(base, frasesEstudiante));

// RESPUESTA CORRECTA ENCONTRADA POR MÍ

function detectPlagiarismPhrases(
	base: string[],
	frasesEstudiante: string[],
): Array<string> {
	const specialCharacterByRegexExpression =
		/[!@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/g;
	let plagiarimsPhrases: Array<string> = [];

	// necesito normalizar el base y las frases de los estudiantes para qeu se puedan convertir en array y pueda usar los métodos con ellos
	// para ello tengo que tirar de .map() ya que este por defecto me decuelve un array y ya podría comparar los distintos elementos de cada una de ellas normalizándolos y después, dependiendo de cuál sea el resulrtado (true/false) le podríua pasar la frase qeu está mal al array que devuelvo
	base.map((basePhrases) => {
		frasesEstudiante.map((studentPhrase) => {
			if (
				basePhrases
					.trim()
					.toLowerCase()
					.replaceAll(specialCharacterByRegexExpression, "")
					.includes(
						studentPhrase
							.trim()
							.toLowerCase()
							.replaceAll(specialCharacterByRegexExpression, ""),
					)
			) {
				plagiarimsPhrases.push(studentPhrase);
			}
		});
	});

	return plagiarimsPhrases;
}

// lo que AI de midu quiere
function detectPlagiarismUpdated1(
	base: string[],
	frasesEstudiante: string[],
): Array<string> {
	const specialCharacterByRegexExpression =
		/[!@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/g;
	// let plagiarimsPhrases: Array<string> = []; // no me sirve pq retorno directamente este arr

	// let newBase = new Set(); // creo el set para el nuevo base

	// // normalizo la base como parte del ejercicio para tener una base común
	// base.map((value) => {
	// 	// hago .add al set por cada elemento que he normalizado en el base
	// 	newBase.add(
	// 		value
	// 			.trim()
	// 			.toLowerCase()
	// 			.replaceAll(specialCharacterByRegexExpression, ""),
	// 	);
	// });
	// console.log(newBase);

	// lo que pide AI:
	let newBase = new Set(
		base.map((value) =>
			value
				.trim()
				.toLowerCase()
				.replaceAll(specialCharacterByRegexExpression, ""),
		),
	); // creo el set para el nuevo base y hago conversión dentro sin el .add ya que .map devuelve un array aunque en este caso devolverá cada uno de los values por separado en el set

	// console.log(newBase);

	// retorno directamente el array con las frases de los estudiantes que son copiadas
	return frasesEstudiante.filter((studentPrase) =>
		newBase.has(
			studentPrase
				.trim()
				.toLowerCase()
				.replaceAll(specialCharacterByRegexExpression, ""),
		),
	);
}

console.log(detectPlagiarismUpdated1(base, frasesEstudiante));
