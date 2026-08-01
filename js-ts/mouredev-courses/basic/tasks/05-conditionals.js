// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.


const user = 223;
const psw = 999

console.log( ( user && psw ) ? "user correcto" : "user no valido" );


// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
// el switch es para comparar valores fijos

const num = 9;

if ( num > 0 ) {
  console.log( "mayor a cero" );
} else if ( num < 0 ) {
  console.log( "menor a cero" );
} else {
  console.log( "es cero" );
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

const age = 18;
console.log( age > 18 ? "vota" : "no vota" );


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

let juan;

const esMayorDeEdad = ( age > 18 ) ? ( juan = "es mayor de edad" ) : ( juan = "menor de edad" );
console.log( esMayorDeEdad );

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".

let mes = "abril";
let estacion;

switch ( mes ) {
  case ( "junio" || "julio" || "agosto" || "septiembre" ):
    estacion = "verano";
    break
  case ( "octubre", "noviembre", "diciembre" ):
    estacion = "otoño";
    break
  case ( "enero" || "febrero" || "marzo" ):
    estacion = "invierno"
    break
  default:
    estacion = "primavera"
}
console.log( estacion );


// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
