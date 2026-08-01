# intermediate — JavaScript nivel intermedio

Los temas avanzados del curso. Cada tema tiene su lección (`NN-tema.js`) y sus ejercicios (`NN-tasks.js`).

## Temas

| # | Lección | Ejercicios | Tema |
| --- | --- | --- | --- |
| 01 | `01-advanced-funct.js` | `01-tasks.js` | Funciones avanzadas |
| 02 | `02-adv-structures.js` | `02-tasks.js` | Estructuras de datos avanzadas |
| 03 | `03-adv-classes.js`, `03-adv-objects.js` | `03-tasks.js` | Clases y objetos avanzados |
| 04 | `04-async.js` | `04-tasks.js` | Asincronía |
| 05 | `05-apis.js` | `05-tasks.js` | APIs |
| 06 | `06-DOM.js` | `06-tasks.js` | DOM |
| 07 | `07-debugging.js` | `07-tasks.js` *(pendiente)* | Debugging |
| 08 | `08-regex.js` | `08-tasks.js` | Expresiones regulares |
| 09 | `09-test.js` + `09-test.test.js` | `09-tasks.js` | Testing con Jest |

## Ejecutar

```bash
node 04-async.js      # cualquier lección o ejercicio
cd .. && pnpm test    # los tests del tema 09
```

## Los dos temas especiales

**06 — DOM.** No se ejecuta con Node: abre los HTML en el navegador.
- `06-DOM.example.html` + `06-DOM.example.js` → ejemplo mínimo.
- `06-DOM.tasklist.html` + `06-DOM.tasklist.js` → lista de tareas, el proyecto del tema.
- [`pngs/`](pngs/) → imágenes que usan esas páginas.

**09 — Testing.** `09-test.js` es el código y `09-test.test.js` sus pruebas con Jest. Es lo único del repo que tiene tests de verdad.
