# basic — Fundamentos de JavaScript

Las lecciones de la parte básica del curso. Cada archivo son mis apuntes de un tema, escritos como código ejecutable con `console.log` para ver qué pasa.

## Lecciones

| # | Archivo | Tema |
| --- | --- | --- |
| 00 | `00-helloworld.js` | Primer script |
| 01 | `01-variables.js` | `var`, `let`, `const` |
| 02 | `02-datatypes.js` | Tipos de dato |
| 03 | `03-operators.js` | Operadores |
| 04 | `04-string.js` | Strings |
| 05 | `05-conditional.js` | Condicionales |
| 06 | `06-array.js` | Arrays |
| 07 | `07-set.js` | Set |
| 08 | `08-maps.js` | Map |
| 09 | `09-loops.js` | Bucles |
| 10 | `10-functions.js` | Funciones |
| 11 | `11-objects.js` | Objetos |
| 12 | `12-destructuring-and-spreading.js` | Destructuring y spread |
| 13 | `13-classes.js` | Clases |
| 14 | `14-error-handling.js` | Manejo de errores |
| 15 | `15-console-methods.js` | Métodos de consola |
| 16 | `16-modules-*.js` / `.cjs` | Módulos: ESM y CommonJS |

Otros archivos:
- [`tasks/`](tasks/) — los ejercicios de cada lección.
- `_docs.md` — cajón de apuntes (vacío por ahora).

## Ejecutar

```bash
node 06-array.js
```

El paquete es **ESM** (`"type": "module"`). La excepción es `16-modules-import-external.cjs`, en CommonJS a propósito: la lección 16 compara los dos sistemas.
