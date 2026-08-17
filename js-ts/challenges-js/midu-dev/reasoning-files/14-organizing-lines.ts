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
    - si hay 2 elementos iguales, NO SE BORRAN, (no un Set), sino que se dividen en distintos grupos
    - tienes que estar organizados por cantidad de energia (.sort?) de menor a mayor
    - "dividir a los visitantes en grupos consecutivos" ->
    - si viene una única persona, ese es el mismo grupo y solo si vienen 2 personas con la 
    misma energía, se hacen 2 grupos de 1
    - no tiene que ver la cantidad de grupos ni el tamaño de estos sino que siempre sea 
    el de la izq menor que el de la der
    - (claude me ha ayudado a entender esto) -> no se tiene que usar un .sort porque lo que busca
    el ejercicio es con el arr que entra, sin tocarlo, necesito hacer tantos grupos como sea posible
    que incorporen a las personas con energias de menor a mayor.
    
    Podría tener una variable donde guardo la cantidad de grupos (siempre suma y no se resetea y es
    la que devuelvo) y una variable de tipo number[] que haga los grupos donde siempre el de la izq sea el más pequeño. Este arr de number sí se tiene que recrear ya que necesito que vaya guardando
    los elementos que va borrando y luego resetee a cero

    Puedo siempre empezar añadiendo un elemento al number[] y comparando si [i+i] > [i], (ojo que 
    no puede ser igual, si fuera así,l tengo que pasar al siguiente porqee no pueden tener un grupo
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
	}
	return maxGroupCount;
}

const energyLevels = [5, 1, 2, 6];
console.log(groupVisitors(energyLevels)); // → 2

// Se pueden agrupar como:
// Grupo 1: [5, 6]
// Grupo 2: [1, 2]
