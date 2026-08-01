/**
	Naira, una aprendiz de hechicera, ha encontrado un antiguo códice en las ruinas de Arkanus. Este códice está lleno de símbolos arcanos que, según los manuscritos, ocultan un poderoso conjuro olvidado. Para descifrar el conjuro, debe interpretar correctamente los símbolos según un antiguo sistema numérico mágico.

  Estos son los símbolos conocidos y sus equivalencias:

  Símbolo	Valor
  ☽ =	1
  ☾ =	5
  ♁ =	10
  ⚕ =	50
  ⚡ =	100
  Pero cuidado: la energía mágica es caprichosa. Si un símbolo de menor valor aparece justo antes que uno de mayor valor, su energía se resta en lugar de sumarse.

  Debes crear una función que reciba una cadena con los símbolos y retorne su valor numérico total. Si encuentras un símbolo desconocido, el conjuro se corrompe, y la función debe devolver NaN.
 */

function decodeSpell(spell: string) {
	const magicSymbols: Record<string, number> = {
		"☽": 1,
		"☾": 5,
		"♁": 10,
		"⚕": 50,
		"⚡": 100,
	};

	// validación para obtener si spell tiene alguna key inválida
	const myKeys = Object.keys(magicSymbols); // obtengo las keys
	if (![...spell].every((key) => myKeys.includes(key))) return NaN;

	let sum: number = 0;

	for (let i: number = 0; i < spell.length; i++) {
		if (Object.keys(magicSymbols).includes(spell[i])) {
			let value =
				Object.values(magicSymbols)[
					Object.keys(magicSymbols).indexOf(spell[i])
				];
			if (
				Object.values(magicSymbols)[
					Object.keys(magicSymbols).indexOf(spell[i + 1])
				] >
				Object.values(magicSymbols)[Object.keys(magicSymbols).indexOf(spell[i])]
			) {
				sum -= value;
			} else {
				sum += value;
			}
		} else return NaN;
	}

	return sum;
}

console.log("decode 1:", decodeSpell("☽☽☾⚡")); // 95
console.log("decode 2:", decodeSpell("☾☽☽☽")); // 8

function newDecodeSpell(spell: string) {
	let sum: number = 0;
	const magicSymbols: Record<string, number> = {
		"☽": 1,
		"☾": 5,
		"♁": 10,
		"⚕": 50,
		"⚡": 100,
	};

	// validación para obtener si spell tiene alguna key inválida
	const myKeys = Object.keys(magicSymbols); // obtengo las keys
	if (![...spell].every((key) => myKeys.includes(key))) return NaN;

	for (let i: number = 0; i < spell.length; i++) {
		const actual = magicSymbols[spell[i]];
		const next = magicSymbols[spell[i + 1]];

		sum += next > actual ? -actual : actual;
	}

	return sum;
}

console.log("decode 1:", newDecodeSpell("☽☽☾⚡")); // 95
console.log("decode 2:", newDecodeSpell("☾☽☽☽")); // 8
console.log("decode 3:", newDecodeSpell("☽♁")); // 9

/**
 * LA FORMA MÁS EFICIENTE
 */

function bestDecodeSpell(spell: string) {
	const mySymb: Record<string, number> = {
		"☽": 1,
		"☾": 5,
		"♁": 10,
		"⚕": 50,
		"⚡": 100,
	};

	let sum: number = 0;

	for (let i = 0; i < spell.length; i++) {
		if (!mySymb[spell[i]]) return NaN; // validamos dentro del bucle si hay algún NaN

		let actual: number = mySymb[spell[i]];
		let next: number = mySymb[spell[i + 1]];

		if (next === undefined) {
			// decidimos que si next es mayor al valor lenght del arr, le sume el anterior
			sum += actual;
		} else {
			sum += actual < next ? -actual : actual;
		}
	}
	return sum;
}
