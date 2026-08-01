function candidatosCompatibles(
	oferta: string[],
	candidatos: Array<{ id: string; skills: string[] }>,
) {
	const normalize = (s: string) => s.toLowerCase().trim();
	const skillsOferta = [...new Set(oferta.map(normalize))];
	const minimo = Math.floor((skillsOferta.length * 7) / 10);

	const compatibles = candidatos
		.filter(({ skills }) => {
			const propias = new Set(skills.map(normalize));
			return skillsOferta.filter((s) => propias.has(s)).length >= minimo;
		})
		.map(({ id }) => id);

	return [...new Set(compatibles)].sort();
}
