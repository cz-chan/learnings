function esAnagrama(primeraPalabra: string, segundaPalabra: string) {
	let firstNormalizeWord = primeraPalabra
		.trim()
		.replaceAll(/\s/g, "")
		.toLowerCase();
	let secondNormalizeWord = segundaPalabra
		.trim()
		.replaceAll(/\s/g, "")
		.toLowerCase();

	if (firstNormalizeWord.length !== secondNormalizeWord.length) return false;

	const firstW = [...firstNormalizeWord];
	const secondW = [...secondNormalizeWord];

	let comparisonWordsMap: Map<string, number> = new Map();

	for (let word of firstW) {
		comparisonWordsMap.set(word, (comparisonWordsMap.get(word) ?? 0) + 1);
	}

	for (let word of secondW) {
		comparisonWordsMap.set(word, (comparisonWordsMap.get(word) ?? 0) - 1);
	}

	for (const [word, numb] of comparisonWordsMap.entries()) {
		if (comparisonWordsMap.get(word) !== 0) return false;
	}

	return true;
}
