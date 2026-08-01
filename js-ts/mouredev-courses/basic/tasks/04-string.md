// 1. Concatena dos cadenas de texto.

```js
const let = "hola" + "mundo"
```

// 2. Muestra la longitud de una cadena de texto.

```js
let cadena = "hola";
let num = cadena.length;
```

// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.

```js
let cadena = "hola";

const first = cadena[0];
const last = cadena[cadena.length - 1];
console.log({ first, last });
```

// 4. Convierte a mayÃºsculas y minÃºsculas un string.

```js
let cadena = "hola";
let mayusculas = cadena.toUpperCase();
let minusculas = cadena.toLowerCase();
console.log({ mayusculas, minusculas });
```

// 5. Crea una cadena de texto en varias lÃ­neas.

```js
let cadena = `hola 
    soy cz
    y estudio programacion`;
console.log(cadena);
```

// 6. Interpola el valor de una variable en un string.

```js
const nombre = "Brais";
let cadena = `hola ${nombre}`;
console.log(cadena);
```

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

```js
let cadena = "h o l a";
let resultado = cadena.replaceAll(" ", "-");
console.log(resultado); // h-o-l-a
```

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

```js
let cadena = "hola mundo cómo estás";
let palabra = "cómo";
let resultado = cadena.includes(palabra);
console.log(resultado); // true
```

// 9. Comprueba si dos strings son iguales.

```js
let cadena1 = "hola";
let cadena2 = "hola";
let resultado = cadena1 === cadena2;
console.log(resultado); // true
```

// 10. Comprueba si dos strings tienen la misma longitud.

```js
let cadena1 = "hola";
let cadena2 = "hoola";
let resultado = cadena1.length === cadena2.length;
console.log(resultado); // false
```
