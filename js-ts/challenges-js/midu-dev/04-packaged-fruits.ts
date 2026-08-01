function frutaEmpacadaCorrectamente(
	entrada: string[],
	salida: string[],
): boolean {
	if (entrada.length !== salida.length) return false;

	const stack: string[] = [];
	let j = 0;

	for (const fruit of entrada) {
		stack.push(fruit);

		while (stack.length > 0 && stack.at(-1) === salida[j]) {
			stack.pop();
			j++;
		}
	}

	return stack.length === 0;
}
