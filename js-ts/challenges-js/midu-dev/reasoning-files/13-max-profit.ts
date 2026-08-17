/**
 * Inversión inteligente
 * 
Estás desarrollando una app para ayudar a inversores a maximizar sus ganancias en la bolsa. 
Te piden implementar una función que calcule la mayor ganancia posible comprando y vendiendo 
una acción el mismo día.

Recibís como entrada un array de números, donde cada número representa el precio de la acción 
en un momento del día. El tiempo avanza de izquierda a derecha.

Requisitos:

  - Solo puedes comprar antes de vender.
  - Si no es posible obtener ganancia, devuelves -1.


RAZONAMIENTOS

  - si no puede haber ganancia solo puede deberse a 3 estadios: (casos límite)
    
    1. todos los números de la izq son mayores que los de la der (mercado bajista) y por ende, compres donde
    compres la venta, a no ser que haya un hold, cosa que no se puede, siempre será una pérdida por lo que te 
    interesa comprar siempre en el menor, en este caso en el último elemento del arr (=== .length) 
    y devolver un -1.
    2. hay un único número en el arr y por ende, siempre será -1
    3. si todos los precios son iguales tendré que comprar en el penúltimo y vender en el último y aunque me 
    de una suma de 0, esto serán perdidas y tendré que devolver -1 (la compra/venta tb llevaría una comisión 
    para el broker como caso real)

  -  si solo puedo comprar antes de vender, la regla es encontrar un precio mínimo lo más a la izq posible 
  el tiempo va de izq a der, y cuanto más a la derecha compre menos posibles números tengo para comparar 
  y menos posibilidades de hacer una mayor ganancia ya que mi venta siempre estaría a la derecha 
  de dicha posición.
  
  En el ejemplo, el menor número más a la izq es el 24, ya que el 11 no tendría opotunidad pq sino tendría que 
  cerrar en negativo, ya no hay un número máx al cual agarrarme. Y el número máx, a la derecha del 24 (mi min.) 
  es el 40 -> la resta es 16 = 40-24


POSIBLES SOLUCIONES

  - podría intentar encontrar de los números que recibo el menor (min) junto con la posición en la que se 
  encuentra(índie) y el mayor número (max) que existe junto con su posición. Si el index de max es mayor 
  que el de min, me quedo con esos números (values) y hago la resta y esa sería la ganancia

    Para llevar esto acabo necesitaría:
      - crear una variable temporal minValue con Math.min que encuentre el valor mínimo. este valor no debería 
      ser el último valor de la izq que me de una menor ganancia por lo que a lo mejor debería hacer demasiados
      pasos que me llevaría a una solución ineficiente ya que tendría que haer muchas validaciones
  
  - otra solución ( y creo que más acertada ) podría ser encontrar el mayor resto de las restas de todos los 
  números yendo de izq a der. Llevaría a una función "parecida" al ejercicio 12-birds donde tendría que crear 
  una variable temporal "minValue" que me hiciera las restas y quedarme con aquella que me de un resto mayor.

    Para esto necesito:
      - 2 bucles, una donde empieza en i = 0 (en el ejemplo empiezo con i = 0 = 45) y un segundo bucle j 
      que empezaría una posición +1 a i -> j = i + 1 = 24 y donde se haga las restas de los valores guardando 
      sus índices correspondientes para no perderlos. Este sería el primero valor a guardar.

      - cuanto mayor sea la resta, ese número será el que guarde. Si la resta es menor o igual a 0, return -1

      - el primer valor del array sería la primera compra que haría, indistintamenre del número que sea ya que 
      si no compro no puedo vender. la validación viene después. si la resta es mayor, me quedo con esa, sino 
      paso a la siguiente hasta que resulte se mayor o sino, dicha resta inicial sería la válida

      - el maxProfit es la resta que hago del valor de la compra contra el de max price de la venta si es posible
      y después de haber hecho dichas operaciones, hago las validaciones por eso coloco el if al final

      - la compra debo hacerla como mucho en el dailyPrices.length - 1 que ya sino no tendré oportunidad
      de vender y cargaré con la perdida completa del últomo dígo. Y si todos son iguales, maxProfit === 0 pero
      seguirá siendo pérdida

      - de esta forma el índice me daría igual ya que lo que evaluo es de todas las combinaciones posibles, cuál es
      el máximo valor que obtengo
 */

function maxStockProfit(dailyPrices: number[]): number {
	let maxProfit: number = 0;

	console.log("validación 1");

	if (dailyPrices.length === 1) return -1;
	// let min = Math.min(...dailyPrices);
	// let max = Math.max(...dailyPrices);
	let buyPrice: number = 0;
	let lowPrice: number = 0;

	// for (let price of dailyPrices) {
	//   /**
	//    * no puede ser un for...of porque cada vez que el bucle pasa por un elemento, el price se actualiza
	//    * y no tengo forma de guardar un price dependiendo de un índice
	//    */
	// }

	for (let i = 0; i < dailyPrices.length; i++) {
		// compra inicial que se tiene que hacer

		/* 
    creo un segundo bucle para mantener fija i y comprar con toda la cadena restante de valores y asignar el 
    valor nuevo al maxProfit dependiendo de la resta entre la venta (valor en [j] vs la compra [i]) y el 
    resultado que mayoór me de lo guardo como maxProfit
    */

		for (let j = i + 1; j < dailyPrices.length; j++) {
			/* 
      creo una variable temporal que me guarde la resta entre compra y venta para poder 
      comparar en el maxProfit
      */
			let newProfit = dailyPrices[j] - dailyPrices[i];

			newProfit > maxProfit ? (maxProfit = newProfit) : maxProfit;
			// console.log({ newProfit, maxProfit });
		}
	}

	console.log("validación 2");
	if (maxProfit <= 0) return -1;

	console.log("validación 3");
	return maxProfit;
}

const dailyPrices = [45, 24, 35, 31, 40, 38, 11];

// console.log(maxStockProfit(dailyPrices)); // => 16
// Compra a 24, vende a 40

/**
 * SUGERENCIA DE MEJORA DE LA IA DE MIDU
 *
 * Debilidades:
 * 1. El uso de bucles anidados resulta en una complejidad temporal de O(n²), lo cual es
 * ineficiente para grandes conjuntos de datos.
 * 2. El código realiza cálculos innecesarios al iterar sobre todas las combinaciones posibles.
 *
 * Para solucionar esto necesito hacer lo que hago en el bucle j con un único bucle con únicamente i
 */

function maxStockProfitUpdated1(dailyPrices: number[]): number {
	let maxProfit: number = 0;
	let buyPrice = dailyPrices[0]; // el precio de compra base

	if (dailyPrices.length === 1) return -1;

	// el bucle lo arranco en i=1 pq la variable buyPrice ya tengo el i=0 y así siempre es la venta y no la compra
	for (let i = 1; i < dailyPrices.length; i++) {
		// lowPrice = dailyPrices[i + 1];
		// if (lowPrice === undefined) break;

		/*
    como mínimo el precio de venta va a ser posición 1 del arr
    entonces la comparación aquí sería si el precio de venta en posición 1 es menor que el de 2, me quedo con
    esta primera posición, sino tengo que pasar a posición 2 pq la venta tendrá un mayor precio proque habrá una
    mayor diferencia entre el comprar y vender

    cuando más bajo compre, y más alto venda, más beneficio tengo por lo que el dailyPrice[i] debe ser lo menor 
    posible mienrta que el sellPrice debe ser el mayor posible sin llegar al final del array ya que este 
    pasaría a ser mi precio de compra y lo perdería todo
    
    tengo que buscar que el price de venta ([i]) sea lo mayor posible y el precio de compra sea el menor posible
    por lo que que el sellPrice debe ser el menor posible.
    
    sellPrice debe ser menor siempre a dailyPrices[i] y a su vez, la
    */

		/**
		 * el sellPrice es el precio de venta que voy a hacer mientras que el buyPrice sería el pricio en [i=0] en
		 * un inicio pq para vender primero debo comprar.
		 *
		 *
		 */

		// buyPrice = dailyPrices[i];
		// let sellPrice = dailyPrices[1];

		let newProfit = dailyPrices[i] - buyPrice;

		if (buyPrice < dailyPrices[i]) buyPrice = dailyPrices[i];

		newProfit > maxProfit ? (maxProfit = newProfit) : maxProfit;
		console.log({ newProfit, maxProfit });
	}

	if (maxProfit <= 0) return -1;

	return maxProfit;
}

console.log("updated 1", maxStockProfitUpdated1(dailyPrices)); // => 16
//claude --resume bade6ac1-dcec-414d-9993-c8288cda54fd
