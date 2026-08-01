/**
 * Estás creando un sistema de emparejamiento entre candidatos y ofertas laborales. Cada oferta publica una lista de 
 * habilidades deseadas (por ejemplo “JavaScript”, “React”, “CSS”). A su vez, cada candidato envía su CV con 
 * habilidades declaradas.
 * 
 * Tu objetivo es crear una función que reciba una oferta laboral y una lista de candidatos, y devuelva los IDs de los
 *  candidatos que cumplen al menos el 70% de las habilidades requeridas.
 * 
 * Ejemplos:
 * 
 * const oferta = ['JavaScript', 'React', 'Node', 'CSS', 'Git']
 * const candidatos = [
  * { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
  * { id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
  * { id: 'leo', skills: ['HTML', 'CSS'] },
  * { id: 'lu', skills: ['JavaScript', 'Node'] },
 * ]
 * candidatosCompatibles(oferta, candidatos) // ➞ ["ana", "juan"]
  Reglas:
  - El 70% de coincidencia se calcula sobre la cantidad de habilidades de la oferta (redondear hacia abajo).
  - Las habilidades no distinguen mayúsculas/minúsculas.
  - No repitas candidatos.
  - Ordenar el resultado alfabéticamente por ID.

  Explicación
  - Si la oferta tiene 5 habilidades requeridas, el 70% equivale a 3.5. Al redondear hacia abajo, el número mínimo de habilidades requeridas por candidato es 3.
  - Si la oferta tiene 6 habilidades requeridas, el 70% equivale a 4.2. Al redondear hacia abajo, el número mínimo de habilidades requeridas por candidato es 4.
  - Por esta razón, Ana y Juan son candidatos válidos, pero Leo no lo es. Ana y Juan tienen 3 habilidades requeridas, mientras que Leo solo tiene 2.


  ENTENDIMIENTO:

  - en la oferta hay un array de string con los distintas tecnologías que se piden: string[]
  - llega un array de objetos que tiene como clave el id y como valor un array con las distintas tecnolo. que 
  el candidato usa: Array<{ id: string; skills: string[] }>
  - pide crear una función que haga match en al menos un 70% con las tecnologías que tenemos vs las que el candidato
  controla. la oferta debe haceerse redondeando hacia abajo (Math.floor()) Es decir, si hay 10 habilidades son 7 como mínmo pero si son 6, es 4.2 que pasa a ser 4 el mínimo 
  Es decir, el tamaño del array de la tecnología que controla (X) el candidato debe ser como mínimo un 70% de las que
  tiene la oferta (Y) publicadas.
  Hay que multiplicar oferta.length * 0.7 y el resultado .floor() para bajarlo



  QUÉ HACER

  - crear la variable de (oferta.length * 0,7 ).floor() para saber el numero mínimo de habilidades que deben tener los 
  candidatos para deharles pasar
  - creo una variable donde se van a guardar los ids de los candidatos aceptables (le haré un .psuh() aunque se puede
  hacer por cada candidato de condidatos un .forEach)
  - tengo que entrar al objeto y validar cuantas skills tiene cada candidato
  - necesito una variable temporal que diga cuantas habilidades tienen cada uno de los candidatos y si esa es >= a la 
  de ofertas, se guarda el id en un array, sino se elimina la candidatura
  - las habilidades hay que normalizarlas con .toLowerCase() y .trim() para evitar malentendidos en ambos casos,
  tanto para oferta como para skills de candidatos
  - me dice que no puedo repetir candidatos, es decir, que los ids de nombres son únicos, necesito un new Set para 
  eliminar duplicados
  - tengo que ordenar el resultado alfabeticamente ( .sort() lo hace por defecto)


  PREGUNTAS ADICIONALES:
  - si el candidato tiene una tecnología que no hace match con la oferta, se rechaza? -> yo lo que haría sería crear un 
  nuevo array eliminando las que no hacen match o crear uno nuevo con el id y las skills que hacen match creando algo 
  temporal
  - y si un candidato/a repite una habilidad?
 */

function candidatosCompatibles(
	oferta: string[],
	candidatos: Array<{ id: string; skills: string[] }>,
): string[] {
	let minimumSkills = Math.floor(oferta.length * 0.7);
	let eligibleCandidates: string[] = [];

	candidatos.forEach((value) => {
		if (value.skills.length >= minimumSkills) {
			eligibleCandidates.push(value.id);
		}
	});

	// console.log(eligibleCandidates); // tendría 2 anas

	let mySet = new Set(eligibleCandidates.sort()); // esto elimina los duplicados y los ordena
	// console.log(mySet);

	return [...mySet]; // el spread pasa de un set a un array
}
const oferta = ["javascript", "React", "Node", "CSS", "Git"];
const oferta2 = ["java", "React", "Node", "CSS", "Git"];
// console.log(Math.floor(oferta.length * 0.7));

const candidatos = [
	{ id: "juan", skills: ["Javascript", "react", "Node", "Git"] }, // no debería pasar en el prumero pq he modificado el camelCase de react y js pero como compara por número de habilidades y no por la habilidad en concreto pasa al igual que pasaría un candidato que tenga habilidades que no existen en la oferta si llega a superar el minimumSkills
	{ id: "ana", skills: ["JavaScript", "CSS", "React", "Node", "Git"] },
	{ id: "ana", skills: ["JavaScript", "CSS", "React", "Node", "Git"] },
	{ id: "leo", skills: ["HTML", "CSS"] },
	{ id: "lu", skills: ["CSS", "Node", "java"] },
	{
		id: "llum",
		skills: [
			"JavaScript",
			"Node",
			"nextjs",
			"azure",
			"aws",
			"java",
			"java",
			"javascript",
		],
	}, // esta no debería pasar pq no son las habilidades requeridas para el puesto pero con el primero sí pasa y que además, tiene avilidades repetidas
];
// console.log(
// 	candidatos.forEach((val) => {
// 		console.log(val.skills.length);
// 	}),
// );

console.log("first", candidatosCompatibles(oferta, candidatos));
// ➞ ["ana", "juan"]

/**
 * el candidatosCompatibles pasa todos lso test excepto 1 qeu no está visible y que puede ser por culpa de no
 * comparar las skills una a una y hacer que .toLowerCase() sea lo que hace falta para que pasen.
 *
 * es decir, necesito:
 *
 *  1. pasar tanto las skills de ofertas como las de los candidatos a .toLowerCase() y hacer un .trim() (por si acaso)
 *  2. hacer la cuenta de las coincidencias
 */
function candidatosCompatiblesUpdated1(
	oferta: string[],
	candidatos: Array<{ id: string; skills: string[] }>,
): string[] {
	let minimumSkills = Math.floor(oferta.length * 0.7);
	let eligibleCandidates: string[] = [];

	let normalizeOffer = oferta.map((skill) => skill.toLowerCase().trim()); // hago un .map() pq me devuelve un array
	// console.log("offer normalized", normalizeOffer);

	// let normalizeSkillsCandidate = candidatos.map(({ id, skills }) => {
	// 	return [id, skills.map((skill) => skill.toLowerCase().trim())];
	// });
	// console.log("normalize skills candidates", normalizeSkillsCandidate);

	// let normalizeSkillsCandidate2 = candidatos.forEach((val) => {
	// 	val.skills.map((skill) => skill.toLowerCase().trim);
	// });
	// console.log("normalize skills candidates 2", normalizeSkillsCandidate2); // undefined pq el forEach no devuelve nada

	/* 
  como esto no va, pq me devuelve un array distinto al que tiene que devolver, necesito crear una variable que coja
  cada array de los candidatos y por cada candidato haga un trim y lowerCase de las skills y dejarlo como está. 
  un for podría llegra a valer
   */

	// for (let i = 0; i < candidatos.length; i++) {
	// 	// necsito entrar a cada una de las skills de los candidatos
	// }

	/**
	 * tendría que entrar a cada una de las ofertas y contara cada una de las skills y hacer una variable countTemp:
	 * que sumara uno por cada una de las skills que .includes() la oferta y que si esta variable es mayor o igual al
	 * minimumSkills hiciera el push, de lo contrario siguiera
	 *
	 * NECESITO:
	 *  1. recorrer cada una de las candidaturas (un forEach no devuelve nada, un .map un array -> podría servir para
	 * devolver el array de ids válidos)
	 *  2. crear la variable countSkill y compararla al final de cada iteracuón de candidato si es >= a minimum
	 *  3.
	 *  4. devolver el [ids] o un .push(values.id)
	 */
	candidatos.forEach((value) => {
		// value.skills.forEach((skill) => skill.toLowerCase().trim());
		// console.log("normalized", value.skills);

		let countSkills = 0;

		/**
		 * el bucle de esta forma permite que un candidato ponga 2 veces una skill y se la de por válida pq cuenta
		 * si el skill[i] es igual '===' al normalizeOffer pero si le damos la vuelta al bucle, al iterar la oferta sobre las
		 * skills del candidato, con que haya una única coincidencia sumaría al countSkills
		 */
		// for (let i = 0; i < value.skills.length; i++) {
		// 	// quiero buscar cada candidato, cuantas skills que están dentro de la oferta tiene
		// 	for (let j = 0; j < oferta.length; j++) {
		// 		if (value.skills[i].toLowerCase().trim() === normalizeOffer[j])
		// 			// if (value.skills[i].toLowerCase().trim().includes(normalizeOffer[j]))
		// 			/**
		// 			 * con .includes() si la oferta es java y el candidato tiene javascript lo da como bueno pq incluye el string
		// 			 * pero si hago una comparación estricta con === ya no lo incluiría ya que el .includes mide por caracteres
		// 			 */
		// 			countSkills++;
		// 		// console.log(value.skills[i].toLowerCase());
		// 		// console.log(countSkills);
		// 	}

		// 	/*
		//   si el bucle está dentro del for de i lo evalua en cada una de las skills. tu queires que se evalue una única
		//   vez por candidato

		//   si tienes un id[i], lo que decuelce el la primera letra del id no el valor del id como tal
		//   */
		// 	// if (countSkills >= minimumSkills) {
		// 	// 	eligibleCandidates.push(value.id[i]);
		// 	// }
		// }

		// este bucle no perite al candidato que 2 habilidades iguales cuenten como más de una habilidad
		for (let i = 0; i < normalizeOffer.length; i++) {
			for (let j = 0; j < value.skills.length; j++) {
				if (value.skills[j].toLowerCase().trim() === normalizeOffer[i]) {
					countSkills++;

					break; // cuando haya una coincidencia, sales del bucle (ed esta forma evitas que cuente 2 skills iguales)
				}
			}
		}
		if (countSkills >= minimumSkills) {
			eligibleCandidates.push(value.id);
		}

		// if (
		// 	value.skills.map((skill) => skill.toLowerCase().trim()).length >=
		// 	minimumSkills
		// ) {
		// 	eligibleCandidates.push(value.id);
		// }
	});

	// console.log(eligibleCandidates); // tendría 2 anas

	let mySet = new Set(eligibleCandidates.sort((a, b) => a.localeCompare(b))); // esto elimina los duplicados y los ordena
	// console.log(mySet);

	return [...mySet]; // el spread pasa de un set a un array
}

console.log("good one", candidatosCompatiblesUpdated1(oferta, candidatos)); // debe pasar ana y juan
console.log("good one", candidatosCompatiblesUpdated1(oferta2, candidatos)); // solo debería pasar: ana, juan y lu

/**
 * LO QUE CLAUDE ME DA COMO PERFECTO
 */

function candidatosCompatiblesFinalUpdates(
	oferta: string[],
	candidatos: Array<{ id: string; skills: string[] }>,
): string[] {
	// abstraes la normalización en una única función que recibe un string y que la normaliza. con esto evitas DRY
	const normalize = (s: string) => s.toLowerCase().trim();

	/**
	 * como me pide eliminar duplicados de ID, puedo hacerlo al final de haber hecho la comparación y
	 * obtener los candidatos o puedo primero eliminar duplicados y después hacer todo el proceso.
	 *
	 * esta última opción es más rentable a nivel memoria ya que conlleva una transformación pero puede
	 * eliminar tiempo de iteración en flujos posteriores
	 *
	 * transformas a un set e inmediatamente lo devuelvesa un array con el spread
	 */
	const skillsOferta = [...new Set(oferta.map(normalize))];

	/**
	 * el umbral debe ser un 70% del total de la oferta. Se pude hacer multiplicando con un 0.7
	 * pero el problema es la coma flotante qeu te deja, mientras que si lo haces por dos partes,
	 * x7 y después /10 esa coma flotante desaparece
	 *
	 * Se calcula sobre la oferta normalizada por su hubieran duplicados
	 */
	const minimo = Math.floor((skillsOferta.length * 7) / 10);

	const compatibles = candidatos
		/**
		 * usamos .filter pq este devuelve un array (como .map) pero la diferencia es que este devuelve
		 * el array con los elementos que hayan sido true en la condición que se le propone por defecto.
		 *
		 * un .map devuelve todos los elementos después de aplicarle la condición
		 */
		.filter(({ skills }) => {
			/**
			 * haces un set y dentro de este un map para que te devuelva un nuevo array con las skills
			 * normalizadas y a estas les haces el set para eliminar los duplicados
			 *
			 * filtras dobles skills
			 */
			const propias = new Set(skills.map(normalize));

			// Se itera la OFERTA: cada requisito se evalúa exactamente una vez, así
			// el conteo no puede pasar de skillsOferta.length. .has() es igualdad
			// estricta, sin el falso positivo de 'javascript'.includes('java').
			/**
			 * conviertes las skills en un set porque al hacer un .has tiene una complejidad de O(1) porque
			 * no recorre todo el set en busca de ese elemento sino que a través del hash, va directamente
			 * al elemento que esrá buscando, siempre es complejidad O(1) indistintamente de las skills y
			 * tamaño. Mientras que el .includes de un array, necesita recorrer todo el array, uno por uno,
			 * hasta hacer match con el elemento (no hace doble match pq se ha normalizado pero sin hacer Set
			 * podrían haber dobles) y recorrer todo un array dando falsos positivos y una complejidad de 0(n)
			 * siendo n el número de iteraciones por cada candidatura -> nº candidaturas * n veces (tamaño
			 * array)
			 */
			return skillsOferta.filter((s) => propias.has(s)).length >= minimo;
		})
		// De los que pasan, con el .map devuelves solo el id.
		.map(({ id }) => id);

	// Set → "no repitas candidatos" (dos objetos con id 'ana' dan un solo id).
	// localeCompare → orden alfabético real; .sort() pelado ordena por UTF-16
	// (mayúsculas antes que minúsculas, acentos al final).
	return [...new Set(compatibles)].sort((a, b) => a.localeCompare(b));
}

console.log("final", candidatosCompatiblesFinalUpdates(oferta, candidatos));
console.log("final", candidatosCompatiblesFinalUpdates(oferta2, candidatos));

/**
 * ============================================================================
 * DOCUMENTACIÓN LÍNEA A LÍNEA
 * ============================================================================
 *
 * Idea general antes de entrar al detalle:
 * el reto es "¿cuántas skills DE LA OFERTA cubre este candidato?". Fíjate en la
 * dirección: se cuenta sobre la oferta, no sobre las skills del candidato. Ese
 * fue el bug que arrastré durante toda la resolución: contaba pares que
 * coincidían, así que un candidato con "JavaScript" y "javascript" sumaba 2
 * por una sola skill de la oferta.
 *
 * ----------------------------------------------------------------------------
 * const normalize = (s: string) => s.toLowerCase().trim()
 * ----------------------------------------------------------------------------
 * QUÉ HACE: convierte "  React " en "react".
 *
 * POR QUÉ EXTRAERLO A UNA VARIABLE:
 * la normalización se aplica en DOS sitios (oferta y skills del candidato). Si
 * la escribo inline en los dos, el día que añada un `.replace(...)` para quitar
 * guiones tengo que acordarme de tocar los dos. Con la función suelta, un solo
 * punto de cambio. Además le pone nombre a la intención: "normalize" se lee
 * mejor que `.toLowerCase().trim()` repetido.
 *
 * POR QUÉ toLowerCase Y trim:
 * el enunciado dice que las habilidades no distinguen mayúsculas. El `trim()`
 * no lo pide el enunciado, es defensivo: un CV real trae " React" con espacio.
 * Cuesta cero y evita un falso negativo.
 *
 * POR QUÉ ESTO NO ES UN `function`:
 * arrow function porque es una expresión corta de una línea, no necesita `this`
 * propio y se lee como un valor. Es lo idiomático en JS moderno para helpers así.
 *
 * ----------------------------------------------------------------------------
 * const skillsOferta = [...new Set(oferta.map(normalize))]
 * ----------------------------------------------------------------------------
 * Se lee de dentro hacia fuera, en tres pasos:
 *
 * 1) oferta.map(normalize)
 *    POR QUÉ .map() Y NO .forEach():
 *    `map` DEVUELVE un array nuevo con el resultado de aplicar la función a cada
 *    elemento. `forEach` devuelve `undefined` — sirve para efectos secundarios
 *    (imprimir, hacer push), no para transformar. Esto lo comprobé yo mismo más
 *    arriba: `normalizeSkillsCandidate2` salía `undefined` justamente por usar
 *    forEach. Regla: si quieres "lo mismo pero transformado", es map.
 *
 *    POR QUÉ `normalize` SIN PARÉNTESIS:
 *    le paso la función, no la llamo. `map` la llamará él por cada elemento.
 *    Si escribiese `normalize(...)` estaría pasando el RESULTADO, no la función.
 *    (Este es el error que cometí en la línea 145 del intento anterior:
 *    `skill.toLowerCase().trim` sin paréntesis pasaba la función sin ejecutar.)
 *
 * 2) new Set(...)
 *    POR QUÉ:
 *    un Set no admite duplicados. Si la oferta llega como ['React','react'],
 *    tras normalizar son dos 'react' idénticos, y `skillsOferta.length` sería 2.
 *    Eso inflaría el mínimo (2 * 0.7) cuando en realidad solo se pide 1 skill.
 *    Deduplicando, el denominador es el número de skills REALES de la oferta.
 *
 *    POR QUÉ UN Set Y NO un .filter((v,i,a) => a.indexOf(v) === i):
 *    el truco del filter+indexOf es O(n²) porque indexOf recorre el array
 *    entero en cada vuelta. El Set usa hashing: O(n). Y se lee mejor.
 *
 * 3) [...  ]
 *    POR QUÉ:
 *    el spread convierte el Set de vuelta en array. Lo necesito array porque en
 *    la línea siguiente uso `.length` y más abajo `.filter()`, y un Set NO tiene
 *    esos métodos (tiene `.size`, y no tiene filter/map). El Set es solo una
 *    parada intermedia para deduplicar.
 *
 * ----------------------------------------------------------------------------
 * const minimo = Math.floor((skillsOferta.length * 7) / 10)
 * ----------------------------------------------------------------------------
 * POR QUÉ Math.floor:
 * lo dice el enunciado: redondear hacia abajo. 5 skills → 3.5 → 3.
 *
 * POR QUÉ * 7 / 10 Y NO * 0.7:
 * porque 0.7 no es representable exacto en binario (IEEE 754). A partir de 90
 * elementos el error se hace visible:
 *     90 * 0.7           // 62.99999999999999
 *     Math.floor(90*0.7) // 62   ← MAL, debería ser 63
 *     Math.floor(90*7/10)// 63   ← bien
 * Multiplicar primero por un entero (7) mantiene el número exacto y solo divide
 * al final, cuando ya no hay margen para acumular error. Con ofertas de 5 skills
 * jamás lo notaría, pero cuesta lo mismo escribirlo bien.
 *
 * POR QUÉ SOBRE skillsOferta.length Y NO oferta.length:
 * porque skillsOferta ya está deduplicada. Es el punto 2 de arriba: si calculo
 * sobre `oferta` cruda, unos duplicados en la oferta suben el listón sin motivo.
 *
 * POR QUÉ const Y NO let:
 * no se reasigna nunca. `const` documenta esa intención y el linter te avisa si
 * alguien la reasigna por error. Regla práctica: empieza siempre con `const` y
 * baja a `let` solo cuando el compilador te obligue.
 *
 * ----------------------------------------------------------------------------
 * const compatibles = candidatos.filter(...).map(...)
 * ----------------------------------------------------------------------------
 * POR QUÉ filter + map Y NO forEach + push:
 * mi versión con forEach+push funciona, pero describe el CÓMO (crea un array
 * vacío, recórrelo, mete cosas dentro). filter+map describe el QUÉ: "quédate con
 * los que cumplen, y de esos quédate el id". Además el array intermedio no puede
 * ser mutado desde fuera por accidente.
 *
 * POR QUÉ SE PUEDEN ENCADENAR:
 * porque `filter` devuelve un array, y sobre un array puedo llamar a `map`. Esto
 * es lo que NO pasa con forEach (devuelve undefined, la cadena se corta ahí).
 *
 * COSTE: filter+map recorre la lista dos veces en vez de una. Con listas de este
 * tamaño da igual; la legibilidad gana. Si fueran millones de elementos, ahí sí
 * usaría un reduce o un bucle.
 *
 * ----------------------------------------------------------------------------
 * .filter(({ skills }) => { ... })
 * ----------------------------------------------------------------------------
 * POR QUÉ EL DESTRUCTURING `({ skills })`:
 * el callback recibe el objeto candidato entero, pero dentro solo uso `skills`.
 * Destructurando en el propio parámetro me ahorro escribir `value.skills` cada
 * vez y, sobre todo, declaro en la firma qué parte del objeto me interesa. En el
 * `.map(({ id }) => id)` de abajo pasa lo mismo con `id`.
 *
 * ----------------------------------------------------------------------------
 * const propias = new Set(skills.map(normalize))
 * ----------------------------------------------------------------------------
 * ESTA LÍNEA ES LA QUE MATA EL BUG DE LOS DUPLICADOS.
 *
 * POR QUÉ:
 * si el candidato declara ['JavaScript', 'javascript'], al normalizar quedan dos
 * 'javascript', y el Set los colapsa en uno. Ya no hay forma de que una skill
 * cuente dos veces. Por eso aquí NO hace falta el `break` que necesitaba en el
 * doble bucle: el break era un parche para cortar el conteo repetido; el Set
 * elimina la posibilidad de que exista.
 *
 * POR QUÉ Set Y NO array:
 * porque en la línea siguiente pregunto muchas veces "¿está esto dentro?".
 * `array.includes(x)` recorre el array entero → O(n) por consulta.
 * `set.has(x)` va por hash → O(1). Con una oferta de m skills y un candidato de
 * k skills: con array son m*k comparaciones (mi doble bucle original), con Set
 * son m consultas + k inserciones. Esa es la diferencia entre O(m*k) y O(m+k).
 *
 * POR QUÉ SE CREA DENTRO DEL filter Y NO FUERA:
 * porque es un Set POR CANDIDATO. Cada vuelta necesita el suyo. Si lo sacase
 * fuera, mezclaría las skills de todos.
 *
 * ----------------------------------------------------------------------------
 * return skillsOferta.filter((s) => propias.has(s)).length >= minimo
 * ----------------------------------------------------------------------------
 * POR QUÉ ITERA skillsOferta Y NO LAS SKILLS DEL CANDIDATO:
 * ESTE ES EL INSIGHT DEL RETO. La pregunta es "¿cuántas skills de la oferta
 * cubre?". Al recorrer la oferta, cada skill requerida se evalúa exactamente una
 * vez, así que el conteo máximo posible es `skillsOferta.length` y no puede
 * inflarse. Recorriendo las skills del candidato, en cambio, un candidato con
 * skills irrelevantes o repetidas puede sumar de más — que es justo lo que le
 * pasaba a `llum`.
 *
 * POR QUÉ .has() Y NO .includes():
 * dos motivos independientes — uno de rendimiento y otro de corrección.
 *
 *   a) RENDIMIENTO: O(1) vs O(n)
 *
 *      La diferencia no está en los métodos, está en cómo guardan los datos
 *      por dentro.
 *
 *      Un ARRAY son cajas numeradas en fila. No sabe qué contiene. Para
 *      responder "¿está 'react' aquí?" no le queda otra que mirar caja por
 *      caja hasta encontrarlo o llegar al final:
 *
 *          const arr = ['js', 'css', 'node', 'git', 'react']
 *          arr.includes('react')
 *          // ¿'js'? no. ¿'css'? no. ¿'node'? no. ¿'git'? no. ¿'react'? sí.
 *          // 5 comparaciones
 *
 *      Si el array tuviera 1000 elementos y el buscado estuviera al final,
 *      serían 1000 comparaciones. El coste crece con el tamaño → O(n).
 *
 *      Un SET es una tabla hash. Al insertar, aplica una función hash que
 *      convierte el string en un número, y ese número dice EN QUÉ HUECO
 *      guardarlo:
 *
 *          hash('react') → 8823  → hueco 8823
 *          hash('js')    → 141   → hueco 141
 *
 *      Para responder "¿está 'react'?" no busca: recalcula hash('react'), va
 *      directo al hueco 8823 y mira si hay algo. UNA operación, tenga el Set
 *      5 elementos o 5 millones. Coste constante → O(1).
 *
 *      La analogía: buscar un nombre leyendo una lista de papel de arriba
 *      abajo (array) vs. abrir la agenda directamente por la letra R (Set).
 *
 *      POR QUÉ IMPORTA AQUÍ: dentro del filter hago una consulta por cada
 *      skill de la oferta, y eso se repite por cada candidato. Con arrays son
 *      m*k comparaciones (m skills de oferta × k del candidato) — exactamente
 *      mi doble bucle original. Con Set: k inserciones para construirlo + m
 *      consultas de coste 1. O(m*k) → O(m+k).
 *
 *      EL MATIZ HONESTO: el Set no es gratis, construirlo cuesta recorrer las
 *      k skills una vez. Si solo fuera a hacer UNA consulta, el array sería
 *      igual de bueno o mejor. El Set gana cuando consultas muchas veces sobre
 *      la misma colección — que es justo este caso.
 *
 *   b) CORRECCIÓN: `includes` sobre un STRING busca subcadena, y ese fue el
 *      bug de "java" vs "javascript":
 *          'javascript'.includes('java')   // true  ← falso positivo
 *          ['javascript'].includes('java') // false ← comparación por ===
 *      El mismo nombre de método significa cosas distintas según el receptor.
 *      `Set.has()` no tiene esa ambigüedad: siempre es igualdad estricta.
 *
 * POR QUÉ .filter().length Y NO UN CONTADOR MANUAL:
 * `filter` devuelve los elementos que cumplen; su `.length` es el número de
 * coincidencias. Es la misma cuenta que hacía con `countSkills++`, pero sin
 * variable mutable de por medio. Menos sitios donde equivocarse.
 *
 * ALTERNATIVA VÁLIDA: `skillsOferta.reduce((n, s) => n + (propias.has(s) ? 1 : 0), 0)`
 * hace la cuenta en una sola pasada sin crear array intermedio. Más eficiente,
 * menos legible. A esta escala, prefiero el filter.
 *
 * ----------------------------------------------------------------------------
 * return [...new Set(compatibles)].sort((a, b) => a.localeCompare(b))
 * ----------------------------------------------------------------------------
 * POR QUÉ new Set AQUÍ:
 * el enunciado dice "no repitas candidatos". Si llegan dos objetos con id 'ana',
 * ambos pasan el filtro y el id aparece dos veces. El Set lo deja en uno.
 *
 * POR QUÉ DEDUPLICO ANTES DE ORDENAR Y NO AL REVÉS:
 * funcionalmente da igual (mi versión hacía `new Set(arr.sort())` y funcionaba,
 * porque un Set conserva el orden de inserción). Pero leído de izquierda a
 * derecha, "quita duplicados, luego ordena" es el orden lógico de las dos reglas
 * del enunciado. Poner el sort dentro del Set hace pensar que el sort influye en
 * la deduplicación, y no es así.
 *
 * POR QUÉ localeCompare Y NO .sort() A SECAS:
 * `.sort()` sin comparador convierte todo a string y ordena por código UTF-16.
 * Eso NO es orden alfabético:
 *     ['ana','Beto','Ávila'].sort()   // ['Beto','Ávila','ana']
 * Las mayúsculas van antes que las minúsculas (A=65, a=97) y los acentos al
 * final. `localeCompare` ordena según las reglas del idioma, que es lo que
 * significa "alfabéticamente" en el enunciado. Con ids todo-minúscula-ASCII las
 * dos versiones coinciden — por eso mi `.sort()` pelado pasaba los tests. Es un
 * bug latente, no un bug ausente.
 *
 * ============================================================================
 * RESUMEN DE LOS CAMBIOS RESPECTO A MI VERSIÓN
 * ============================================================================
 * 1. Set de skills del candidato  → mata los duplicados sin necesitar `break`.
 * 2. Iterar la oferta, no el CV   → el conteo no puede inflarse.
 * 3. filter + map                 → describe el qué, no el cómo.
 * 4. const en vez de let          → nada se reasigna.
 * 5. localeCompare                → orden alfabético de verdad.
 * 6. * 7 / 10                     → sin error de coma flotante.
 * 7. normalize extraída           → un único sitio donde cambiar la regla.
 * 8. Sin `: number` explícitos    → TS ya los infiere; el tipo solo se escribe
 *                                   donde aporta (arrays vacíos, firmas).
 */
