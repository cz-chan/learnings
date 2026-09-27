/**
  Organizando la fila del parque de diversiones

  El nuevo parque de diversiones de Robot-Landia ha implementado un sistema automatizado 
  para organizar las filas. A cada visitante se le asigna un número (su nivel de energía). 
  Los robots de la entrada quieren organizar la fila para que nadie con menos energía esté 
  delante de alguien con más energía en el mismo grupo.

  Se permiten dividir a los visitantes en grupos consecutivos, pero el orden dentro de cada 
  grupo debe ser estrictamente creciente.

  Tu trabajo es calcular el mínimo número de grupos que los robots deben 
  formar para cumplir esta regla.

  OBSERVACIONES:
  Si hay energías con el mismo valor, se deben agrupar en grupos distintos.


  MI RAZONAMIENTO/ENTENDIMIENTO:

    - la función debe devolver el número MÍNIMO de grupos que se forman
    - si hay 2 elementos iguales, NO SE BORRAN, (no un Set), sino que se dividen en distintos grupos -> esto conlleva a que si i === i+1, continúe con el siguiente número
    - tienes que estar organizados por cantidad de energia (.sort? -> no) de menor a mayor
    - "dividir a los visitantes en grupos consecutivos" -> si viene una única persona, ese es el 
    mismo grupo y solo si vienen 2 personas con la misma energía, se hacen 2 grupos de 1
    - no tiene que ver la cantidad de grupos ni el tamaño de estos sino que siempre sea 
    el de la izq menor que el de la der
    - (claude me ha ayudado a entender esto) -> no se tiene que usar un .sort porque lo que busca
    el ejercicio es con el arr que entra, sin tocarlo, necesito hacer tantos grupos como sea posible
    que incorporen a las personas con energias de menor a mayor.
    
    Podría tener una variable donde guardo la cantidad de grupos (siempre suma y no se resetea y es
    la que devuelvo) y una variable de tipo number[] que haga los grupos donde siempre el de la izq sea el más pequeño. Este arr de number sí se tiene que recrear ya que necesito que vaya guardando
    los elementos que va borrando y luego resetee a cero

    Puedo siempre empezar añadiendo un elemento al number[] y comparando si [i+i] > [i], (ojo que 
    no puede ser igual, si fuera así, lo tengo que pasar al siguiente porqee no pueden tener un grupo
    2 energías iguales), si es así lo añado al arr y a su vez, lo borro del elemento.

    Cuando esté bucle acabe necesito hacer en el maxGroupCount un maxGroupCount++ para añadir un 
    elemento y volver al bucle anterior ahora haciendo otro barrido pero con el arr de number[] que 
    me queda después de haber eliminado estos números hasta que i+1 sea undefined y entonces devuelve
    ese único number y haga el maxGroupCount++

    No me hace falta poner ninguna validación de if i+1 === undefined ya que el propio bucle lo hago 
    con i < energyLevel.length
 */

function groupVisitors(energyLevels: number[]): number {
	let maxGroupCount: number = 0;
	let energyLevelsCopy = energyLevels;

	for (let i = 0; i < energyLevelsCopy.length; i++) {
		/**
		 * tengo que crear una variable tipo [] que guarde la copia del energyLevel y que pueda
		 * eliminar los elementos que ya se han seleccionado pero que no se actualice constantemente
		 * cuando el bucle acabe, sino que mantenga su estado y otra que añada los elementos a un arr
		 * que se reinicia cada vez que el ciclo acabe
		 *
		 * eso o eliminarlos del energyLevelCopy y simplemente mirar esta variable copy cada ciclo
		 */

		if (energyLevelsCopy[i] < energyLevelsCopy[i + 1]) {
			energyLevelsCopy.splice(i + 1);
		}
		if (energyLevelsCopy.length === 1) maxGroupCount++;
		maxGroupCount++;
		console.log("i:", i, "count:", maxGroupCount);
	}
	return maxGroupCount;
}

// este caso anterior está mal porque estoy comparando siempore con i y no sumando tb en i
// lo que hace que compare i con i+1, luego con i+2...
// tengo que enconrtar la forma de comprar i con i+1 y si este es mayor i pasa a ser i+1 por lo que
// i+1 sería como i+2 desde el punto de vista de la primera vuelta pero desde la segunda es i e i+1

const energyLevels1 = [5, 1, 2, 6]; // 2 ->  Grupos: [5, 6] + [1, 2]
const energyLevels2 = [6, 5, 4, 7, 8, 1]; // 4 -> Grupos: [6,7,8], [5], [4], [1]
const energyLevels3 = [1, 3, 2, 4, 3, 5]; // 2 -> Grupos: [1,3,4,5], [2,3]

// console.log("grupo 1:", groupVisitors(energyLevels1));
// console.log("grupo 2:", groupVisitors(energyLevels2));
// console.log("grupo 3:", groupVisitors(energyLevels3));

function groupVisitors1(energyLevels: number[]): number {
	// construyo una variable donde guardar la cantidad de grupos
	let groupsCount = 0;
	let copyEnergyLevel = [...energyLevels]; // la forma de copiar es [...arr_a_copiar]
	let restArr: number[] = [];
	/**
	 * otras formas de copiar
	 *  -> const copia = original.slice() // sin parámetros
	 *  -> cosnt copia = Array.from(original)
	 *  -> const copia = [].concat(original)
	 */

	for (let i = 0; i < copyEnergyLevel.length; i++) {
		/**
		 * el elemento i siempre tiene que ser el menor a i+1 para que el grupo se forme.
		 * si i > a i+1, si se tendrá que mantener igual y tendrá que correr el array en
		 * una posición manteniendo i estático y solo modificar el i+1 que ahora sería i+2
		 *
		 * en el moemtno que se encuentre un núemro i < i+1 -> tanto el i como el i+1 pasan a formar
		 * como mínimo un grupo que saldrá de este bucle interno y pasará a ser i el primer valor más a la
		 * izq del array inicial qie no se haya incluido en el primer grupo.
		 *
		 * lso elementos que formen parete de este grupo, tendrán que dejar de formar parte del original,
		 * lo que me lleva a pensar que una solución sería empezar el primer bucle con una copia d
		 * el array original y después de cada vuelta que se de formando un grupo tener otro array vacio
		 * que se llene con aquellos elementos que han quedado que no se hayan eliminado y así sucesiva.
		 * hasta que este array que se va montando cada bucle llegue a un length de 1 que sería el último
		 * grupo, en este caso de 1 elemento. u otro caso que fuera un length de cero ya que no ha
		 * quedado ninguno aislado.
		 *
		 * pero ademas de borrar los i+1 que sean > i, tengo que borrar al final del bucle tb ese i para
		 * que el nuevo array restante empiece con un número nuevo
		 *
		 * excepción: si i > i + 1 siempre hasta acabar el array, este 1 pasa a ser un grupo en sí
		 * mismo y si el array es mayor a 1, pasaría i a ser i+1 empezando el ciclo desde cero como si
		 * el elemento de la izq no existiera
		 *
		 * preguntas:
		 *  - dónde coloco el arr que guarda el nuevo arr con los elementos que quedan sin eliminar ->
		 * tiene que estar fuera de los bucles ya que se reiniciaria cada vez que empiece un nuevo bucle?
		 * en la primera barrida esta es cero porque aún no se cuántos tengo que eliminar
		 */
		let record = copyEnergyLevel[i];

		for (const j of copyEnergyLevel) {
			if (j > record) {
				record = j;
			} else {
				restArr.push(j);
			}
		}
	}

	return groupsCount;
}

// console.log("grupo 1:", groupVisitors1(energyLevels1)); // 2
// console.log("grupo 2:", groupVisitors1(energyLevels2)); // 4
// console.log("grupo 3:", groupVisitors1(energyLevels3)); // 2

console.log([10, 20, 30, 40].splice(0, 0, 0)); // [] porque muestra aquello que quito

//! esto lo ha hecho claude porque no he conseguido llegar a la solución (comentarios mios)
function groupVisitors2(energyLevels: number[]): number {
	// creamos una copia para no tocar el original ya que voy a ir sustituyendo los que me
	// quedan por en este array y empiezo por la lista entera en un inicio ya que es el
	// propio inicio
	let pendientes = [...energyLevels];

	// variable donde vamos a guardar el núemor de grupos que vamos a sumar cada vez que un bucle acabe
	let grupos = 0;

	while (pendientes.length > 0) {
		// queremos llegar a un estado de length === 0 porque significaría que ya no queda ningún
		// número dentro de restantes por lo que si es === 0, sale del bucle

		// está vacia en cada barrido pero a este restantes es a la cual le voy a meter los que no
		// cumplan la condición de "es el anterior menor al posterior?"
		const restantes: number[] = []; // vacío en cada barrido

		// variable con la cual voy a comparar todos los número del arr pendientes
		let ultimo = pendientes[0]; // el primero siempre empieza grupo

		for (let j = 1; j < pendientes.length; j++) {
			// empiezo en i porque el 0 ya es el que estoy comparando con respecto al resto
			if (pendientes[j] > ultimo) {
				// "i" es menor a "i+1", i pasa a eser ese i+1 -> donde ahora i = i+1 hasta
				// que sea menor al siguiente
				ultimo = pendientes[j]; // entra y pasa a ser la referencia
			} else {
				// si no es mayor, lo que hago es guardarlo en un array distinto de pendientees para después
				// hacerlo igual a este y así solo tener aquellos que no hayan sido mayores al número que se
				// estaba comparando
				restantes.push(pendientes[j]); // no cabe → próximo barrido
			}
		}

		grupos++; // sumo un bucle
		pendientes = restantes; // igualos los restantes que pasan a ser mis nuevos pendientes
	}

	return grupos;
}

console.log("grupo 1:", groupVisitors2(energyLevels1)); // 2
console.log("grupo 2:", groupVisitors2(energyLevels2)); // 4
console.log("grupo 3:", groupVisitors2(energyLevels3)); // 2

/**
 * esta versión 2 tiene una debilidad: O(N^2) y si puede dejar en O(N logN)
 * a través del alrgoritmo de Patience Sorting
 */
