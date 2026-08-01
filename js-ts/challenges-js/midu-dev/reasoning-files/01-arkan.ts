/**
 *
  * Naira, una aprendiz de hechicera, ha encontrado un antiguo códice en las ruinas de Arkanus. Este códice está lleno de símbolos arcanos que, según los manuscritos, ocultan un poderoso conjuro olvidado. Para descifrar el conjuro, debe interpretar correctamente los símbolos según un antiguo sistema numérico mágico.

  Estos son los símbolos conocidos y sus equivalencias:

  Símbolo	Valor
  ☽	1
  ☾	5
  ♁	10
  ⚕	50
  ⚡	100
  Pero cuidado: la energía mágica es caprichosa. Si un símbolo de menor valor aparece justo antes que uno de mayor valor, su energía se resta en lugar de sumarse.

  Debes crear una función que reciba una cadena con los símbolos y retorne su valor numérico total. Si encuentras un símbolo desconocido, el conjuro se corrompe, y la función debe devolver NaN.
 */

/**
 * decodeSpell — primer intento, con bugs ya corregidos y documentados.
 * Se deja tal cual como registro de los errores cometidos y por qué fallaban.
 */
function decodeSpell(spell: string) {
	const magicSymbols: Record<string, number> = {
		"☽": 1,
		"☾": 5,
		"♁": 10,
		"⚕": 50,
		"⚡": 100,
	};

	let sum: number = 0;
	// validación para obtener si spell tiene alguna key inválida
	const myKeys = Object.keys(magicSymbols); // obtengo las keys
	if (![...spell].every((key) => myKeys.includes(key))) return NaN;

	for (let i: number = 0; i < spell.length; i++) {
		// sum = 0 aquí dentro resetearía la suma en cada vuelta del for,
		// destruyendo la acumulación: nunca podrías sumar símbolo tras símbolo.
		// Por eso sum se declara e inicializa FUERA del bucle (línea 27).

		// Object.keys(magicSymbols).includes(spell[i]) funciona para detectar
		// símbolos desconocidos, pero es ineficiente: recorre TODAS las keys
		// del objeto en cada iteración (O(n)) solo para preguntar "¿existe?".
		// El acceso directo magicSymbols[spell[i]] hace lo mismo en O(1):
		// si la clave no existe, devuelve undefined, que sirve igual de señal.
		if (Object.keys(magicSymbols).includes(spell[i])) {
			// Mismo problema de eficiencia aquí: indexOf recorre el array de
			// keys buscando la posición, y luego se indexa el array de values
			// en esa posición. Es un rodeo para llegar a lo mismo que
			// magicSymbols[spell[i]] te da directo.
			let value =
				Object.values(magicSymbols)[
					Object.keys(magicSymbols).indexOf(spell[i])
				];

			// La regla de la resta: si el símbolo SIGUIENTE vale más que el
			// actual, el actual se resta. Aquí se calcula ese "siguiente"
			// con el mismo rodeo indexOf/values, y ADEMÁS se vuelve a calcular
			// "actual" por segunda vez en la misma comparación (línea de abajo),
			// cuando ya lo tenías guardado en `value`. Repetición innecesaria.
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

			// return sum aquí (dentro del if, dentro del for) cortaría la
			// función en la PRIMERA iteración. Con "⚡⚡⚡⚡" solo se procesaría
			// el primer ⚡ y se devolvería 100, ignorando el resto de símbolos.
			// El return de la suma final debe ir DESPUÉS de que el for termine
			// todas las vueltas (línea 56).
		} else return NaN; // símbolo desconocido -> corta aquí sí tiene sentido,
		// porque un solo símbolo inválido corrompe todo el conjuro: no hace
		// falta seguir leyendo el resto de la cadena.
	}

	return sum;
}

console.log("decode 1:", decodeSpell("☽☽☾⚡")); // 95
console.log("decode 2:", decodeSpell("☾☽☽☽")); // 8

/**
 * decodeSpell2 — versión limpia, resolviendo los problemas de decodeSpell.
 */
function decodeSpell2(spell: string) {
	let sum: number = 0; // lo que retorna la función: la suma/resta de los valores
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
		// Acceso directo por clave: O(1), y undefined si el símbolo no existe
		// en vez de tener que recorrer keys/values para averiguarlo.
		const actual = magicSymbols[spell[i]];
		const next = magicSymbols[spell[i + 1]];

		/**
		 * según el enunciado:
		 * - si aparece un simbolo menor antes de uno mayor, se resta. como leemos de izq a der,
		 * si spell[i] < spell[i+1] se resta spell[i+1] a spell[i] sino spell[i] + spell[i+1]
		 *
		 * en este caso, se suma el actual (el menor) con un signo "-" delante lo que implica la resta,
		 * sino se mantiene el valor y simplemente se suma
		 */
		sum += next > actual ? -actual : actual;
	}
	return sum;
}

console.log("decode2 1:", decodeSpell2("☽☽☾⚡")); // 95
console.log("decode2 2:", decodeSpell2("☾☽☽☽")); // 8

/**
 * decodeSpell3 — misma idea que decodeSpell2, expresada con map/reduce
 * en vez de un for clásico. Separa la validación/conversión (map) del
 * cálculo (reduce), a costa de recorrer el string dos veces en vez de una.
 *
 * OJO: a diferencia de decodeSpell/decodeSpell2, esta versión NO comprueba
 * símbolos desconocidos (no hay chequeo de undefined en nums), así que
 * nunca llega a devolver NaN como pide el enunciado.
 */
function decodeSpell3(spell: string) {
	const values: Record<string, number> = {
		"☽": 1,
		"☾": 5,
		"♁": 10,
		"⚕": 50,
		"⚡": 100,
	};

	// validación para obtener si spell tiene alguna key inválida
	const myKeys = Object.keys(values); // obtengo las keys
	if (![...spell].every((key) => myKeys.includes(key))) return NaN;

	// esto convierte un string a un array de números
	const nums: number[] = [...spell].map((s) => values[s]);

	/**
	 * reduce(callback, valorInicial) recorre el array UNA vez, de izq a
	 * derecha, y va acumulando un resultado. En cada vuelta:
	 *
	 *   nums.reduce((acumulador, elementoActual, indice) => nuevoAcumulador, inicial)
	 *
	 * - `inicial` (el 0 al final) es el valor de arranque del acumulador
	 *   ANTES de la primera vuelta. Aquí: sum empieza en 0.
	 * - En cada vuelta, lo que devuelve el callback se convierte en el
	 *   acumulador de la SIGUIENTE vuelta (no se acumula solo, tú decides
	 *   qué se propaga con el `return`/expresión).
	 * - Al terminar el array, reduce devuelve el último acumulador. Por eso
	 *   aquí no hace falta una variable `sum` externa ni un return final:
	 *   el propio reduce ES el return de la función.
	 *
	 * Ejemplo mental con nums = [1, 1, 5, 100] (☽☽☾⚡):
	 *
	 *   vuelta 1: sum=0 (es el acumulador que justo es 0 que pones al final, por lo que quieres que empiece a contar),   actual=1,  i=0 -> nums[1]=1   no es > 1  -> nuevo sum = 0+1 = 1
	 *   vuelta 2: sum=1,   actual=1,  i=1 -> nums[2]=5   es > 1     -> nuevo sum = 1-1 = 0 (pq no es mayor o igual, la condición siempre es >)
	 *   vuelta 3: sum=0,   actual=5,  i=2 -> nums[3]=100 es > 5     -> nuevo sum = 0-5 = -5
	 *   vuelta 4: sum=-5,  actual=100,i=3 -> nums[4]=undefined      -> nuevo sum = -5+100 = 95
	 *
	 * Resultado final: 95. Compara esto con el `for` de decodeSpell2: es
	 * exactamente la misma lógica (actual vs siguiente, sumar o restar),
	 * solo que en vez de reasignar `sum` a mano dentro de un bucle, se lo
	 * pasas de vuelta al reduce en cada iteración.
	 */
	return nums.reduce(
		(sum, actual, i) => (nums[i + 1] > actual ? sum - actual : sum + actual),
		0,
	);
}

/**
 * EN TODAS LAS FUNCIONES NECESITO VALIR SI EL RESULTADO PREVIAMENTE ES NaN ANTES DE PODER
 * PASAR A LA FUNCIÓN
 * 
 * Para ello lo que queremos es saber si el spell contiene alguna de las keys que no tiene 
 * el mySymbols. Para ello lo que podemos hacer es convertir el spell en un array[] a través 
 * del spread [...spell] -> dando un array con cada una de las keys por separado y esto lo comparamos 
 * a través del método .includes para el mySymbol y dando como valor true o false dependiendo de si 
 * hay algún síbolo que lo contenga o no.
 * 
 * En caso de false, retornamos el NaN al inicio
 * 
 * Quedando algo parecido a:
 * 
		const magicSymbols: Record<string, number> = {
			"☽": 1,
			"☾": 5,
			"♁": 10,
			"⚕": 50,
			"⚡": 100,
		};
		const symbols = "☽☽☾⚡";
		const keys = Object.keys(magicSymbols);

		console.log("string to array of string:", [...symbols]);
		console.log(
			"validation",
			[...symbols].every((key) => keys.includes(key)),
		); // true

 */

/**
 * ADEMÁS DE ESTO, TB SE PUEDE MANEJAR LA EXCEPCIÓN CUANDO NEXT === UNDEFINED O DONDE I+1 = UNDEFINED
 *
 * Esto se haría llevando a la variable esta al estado de actual
 *
 * if (next === undefined) {
 * 	sum += actual -> con esto haces que el valor del next pase a ser el actul y use
 * ese como suma a la suma
 * }
 */
