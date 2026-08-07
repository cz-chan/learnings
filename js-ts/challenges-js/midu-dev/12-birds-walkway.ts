function countMelodySequences(birdNotes: number[]) {
	let count = 0;
	for (let i = 0; i < birdNotes.length; i++) {
		const vistos = new Set<number>([birdNotes[i]]);
		let min = birdNotes[i];
		let max = birdNotes[i];

		for (let j = i + 1; j < birdNotes.length; j++) {
			const nota = birdNotes[j];

			if (vistos.has(nota)) break;
			vistos.add(nota);

			min = Math.min(min, nota);
			max = Math.max(max, nota);

			if (max - min + 1 === j - i + 1) count++;
		}
	}

	return count;
}
