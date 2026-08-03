/**
 * El más votado

Imagina que estás desarrollando un sistema de votaciones para un concurso. 
Cada persona puede votar a un solo participante, pero puede votar más de una vez durante el evento. 
Después de que finalice el evento, necesitas saber qué participante recibió el mayor número de votos.

En caso de empate, se debe devolver el nombre del participante que aparece 
por última vez en el array de votos.

Restricciones
El array votos siempre tendrá al menos un voto.

RAZONAMIENTOS/ENTENDIMIENTO

  - una persona solo vota a un participante pero puede votarle más de una vez.

  - necesito saber el número de votos por participante y devolver el que tenga más

  - si empate -> se devuelve el primero que haya entrado en el array de votos es decir, el último (en posición)
  dentrodel array de votos
 * 
*/

function participanteConMasVotos(votos: string[]): string {
	if (votos.length === 0) throw new Error("Debe haber al menos un voto");

	let votesMap: Map<string, number> = new Map();
	let winner: string = "";
	// no puede empezar con 1 pq al comparar si maxVotesCount > voteCounte le estoy diciendo si es >.
	// Si le digo que  maxVotesCount = 1, este > del if nunca entrará y no habrá un ganador y no dará
	// resultado pq en la comparación habrá un falso negativo
	let maxVotesCount: number = 0;

	for (let vote of votos) {
		votesMap.set(vote, (votesMap.get(vote) ?? 0) + 1);
	}
	// console.log(votesMap);

	// como ya tengo el map con todos los votos, esto es innecesario
	// votesMap.forEach((upvoted, name) => {
	// 	if (upvoted > maxVotesCount) {
	// 		maxVotesCount = upvoted;
	// 		// winner = name;
	// 	}
	// });

	// recupero el nombre del ultimo en el array de votos para ver su puntuación y si coincide con maxVotesCount,
	//  si es así gana en caso de empate
	for (let i = votos.length - 1; i >= 0; i--) {
		/**
		 * creo dos variables para no repetir en el bucle siempre las consultas
		 */
		let participant = votos[i];
		let voteCount = votesMap.get(participant) ?? 0;

		/**
		 * necesito encontrar a la persona que entró primero al array de votos que sería votos[i]
		 * de esta persona, necesito saber la cantidad de votos que tiene
		 * y compararla con el maxVotesCount, si es =, este es el ganador, si es inferior i-- y paso al siguiente
		 * que sería el segundo que entro en votos
		 */
		// votesMap.forEach((upvoted, name) => {
		// 	if (upvoted > maxVotesCount) {
		// 		maxVotesCount = upvoted;
		// 		winner = name;
		// 	}
		// 	if (votesMap.get(votos[i]) === maxVotesCount) {
		// 		winner = name;
		// 	}
		// });

		// comparo si existe un maxVoteCount mayor al establecido
		/**
		 * la clave está en el " > " ya que hago que sea estricto. Si no es mayor (no vale que sea igual)
		 * el winner es el primero que ha superado al maxVotesCount
		 */
		if (voteCount > maxVotesCount) {
			maxVotesCount = voteCount;
			winner = participant;
		}
	}

	return `El ganador es ${winner} con ${maxVotesCount} votos.`;
}

console.log(
	participanteConMasVotos(["Ana", "Luis", "Pedro", "Ana", "Luis", "Luis"]),
);
// -> "Luis" porque tiene el mayor número de votos (3 votos).

console.log(
	participanteConMasVotos(["Carlos", "Ana", "Carlos", "Carlos", "Ana", "Ana"]),
);
// -> "Ana" porque empata con Carlos (ambos tienen 3 votos),
// pero Ana aparece por última vez en el array.

console.log(participanteConMasVotos(["Mario", "Luigi", "Luigi", "Peach"]));
// -> "Luigi" porque tiene el mayor número de votos (2 votos).

console.log(participanteConMasVotos(["Mario"]));
// este es el caso en el que si maxVotesCount = 1 no da el resultado

console.log(
	"error test: carlos",
	participanteConMasVotos(["Ana", "Luis", "Carlos", "Ana", "Carlos"]),
);
