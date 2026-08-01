1. Crea una variable para cada operaciÃ³n aritmÃ©tica.

- const sum = 2 + 2;
- const sub = 4 - 2;
- const mul = 2 \* 2;
- const div = 4 / 2;
- const mod = 4 % 2;
- const pow = 2 \*\* 2;

2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, que haga uso de las variables utilizadas para las operaciones aritmÃ©ticas.

- let assignSum += sum;
- let assignSub -= sub;
- let assignMul \*= mul;
- let assignDiv /= div;
- let assignMod %= mod;
- let assignPow \*\*= pow;

3. Imprime 5 comparaciones verdades con diferentes operadores de comparaciÃ³n.

- sum > sub // true
- mul === pow // true
- const substring = "2" == sub // true
- mod <= div // true
  (añadiendo a todos un console.log())

4. Imprime 5 comparaciones falsas con diferentes operadores de comparaciÃ³n.

- sum < sub // false
- mul !== pow // false
- const substring = "2" != sub // false
- mod >= div // false
  (añadiendo a todos un console.log())

5. Utiliza el operador lógico and.

El operador lógico && dará true cuando las dos sean true. buscca que todo sea true

- true && true // true
- true && false // false
- false && true // false

6. Utiliza el operador lógico or.

El operador lógico || dará true cuando al menos una sea true.

- true || true // true
- true || false // true
- false || false // false

7. Combina ambos operadores lógicos.

- 20. > 10 && 5 > 0 || 5 < 3

8. Añade alguna negación.

- const isNotTrue = !true;
- let bum = !isNotTrue // true

9. Utiliza el operador ternario.

if (ture) ? true : false

10. Combina operadores aritméticos, de comparación y lógicas.

- let result = (5 + 3) _ 2 > 10 && (4 _ 2) === 8;
