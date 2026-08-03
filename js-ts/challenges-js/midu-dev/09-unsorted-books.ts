function organizarEstanteria(libros: string[], posiciones: number[]) {
	if (libros.length !== posiciones.length) {
		throw new Error(
			`Los libros y su orden deben contener la misma cantidad de elementos. El conjunto de libros tiene ${libros.length} elementos mientras que el de posiciones tiene ${posiciones.length} elementos. Revísalos.`,
		);
	}

	const sortedBooks: string[] = [];

	let minimum = Math.min(...posiciones);

	posiciones.forEach((position, index) => {
		let min = position - minimum;

		sortedBooks[min] = libros[index];
	});

	return sortedBooks;
}
