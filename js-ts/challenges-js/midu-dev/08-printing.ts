function secuenciaDeNumeros(tinta: number, codigos: number) {
	if (tinta > 9)
		throw new Error(
			`Lo sentimos, la etiqueta tiene que estar entre 0 y 9 y tu has pasado ${tinta}`,
		);
	if (codigos <= 0)
		throw new Error(
			`Lo sentimos, el código debe ser como mínimo de 1 y has pasado ${codigos}`,
		);

	let failedTags: number[] = [];

	for (let i = 1; i <= codigos; i++) {
		let n = i;

		while (n > 0) {
			if (n % 10 === tinta) {
				failedTags.push(i);
				break;
			}
			n = Math.floor(n / 10);
		}
	}

	return failedTags;
}
