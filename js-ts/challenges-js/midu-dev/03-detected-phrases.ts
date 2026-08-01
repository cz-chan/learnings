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
	const specialCharacterByRegexExpression =
		/[!@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/g;
	let plagiarimsPhrases: Array<string> = [];

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

// examples
const base = [
	"El conocimiento es poder.",
	"Aprender nunca es una pérdida de tiempo!",
	"Programar es divertido",
	"Be water my friend",
];
const frasesEstudiante = [
	"el conocimiento es poder", // esta
	" Aprender nunca es una pérdida de tiempo ", // esta
	"programar ??es divertido.", // esta
	"La pr??áctica hace al maestro",
	"be water my Friend", // esta
];
// console.log(detectPlagiarism(base, frasesEstudiante));

/**
 * Los problemas que me propone:
 *
 * 1. O(n*m) con nested .map: para cada base recorres todo frasesEstudiante.
 * Cambia el orden: frasesEstudiante.filter(...) buscando en un Set<string> de bases normalizadas → O(n+m).
 *
 * 2. .includes() en vez de igualdad exacta: por eso "be water my Friend" matchea aunque no sea substring
 * exacto de nada raro, pero el riesgo real es al revés — una frase corta del estudiante coincide como
 * substring de una frase larga de la base sin ser la misma frase (falso positivo).
 * Requisito pide coincidencia exacta tras normalizar → usa === (o Set.has).
 *
 * 3. .map() sin transformar, solo para iterar/efecto secundario (push): es un code smell,
 * se usa .map() como si fuera .forEach(). Usa .filter() o for...of.
 *
 *
 * DEBILIDADES DEL CÓDIGO ANTERIOR:
 *
 * 1. La lógica de comparación es demasiado permisiva: .includes() marcará como plagio
 * frases que solo son subcadenas de otras.
 *
 * 2. La complejidad algorítmica es O(n*m), lo cual es ineficiente para bases de datos grandes.
 * Se recomienda usar un Set para búsquedas O(1).
 *
 * 3. El uso de .map() para iterar sin transformar datos es una mala práctica; se debería usar .filter() o for...of.
 *
 *
 * Además hay un bug de correctitud con tu regex: quita ¿ y ¡ pero no elimina bien casos como
 * "programar ??es divertido." — los ? de en medio no deberían quitarse según el enunciado (solo al inicio/fin),
 * pero tu regex los quita en cualquier posición, lo que hace que ese caso "false-positive" pase como plagio
 * aunque tenga ?? en medio (no es un signo de puntuación al borde, es "ruido").
 */

// lo que AI de midu quiere
function detectPlagiarismUpdated1(
	base: string[],
	frasesEstudiante: string[],
): Array<string> {
	const specialCharacterByRegexExpression =
		/[!¡@#$%^&*()_+\-=\[\]{};:'",.<>/?`~\\]/g;
	let newBase = new Set(
		base.map((value) =>
			value
				.trim()
				.toLowerCase()
				.replaceAll(specialCharacterByRegexExpression, ""),
		),
	);
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
