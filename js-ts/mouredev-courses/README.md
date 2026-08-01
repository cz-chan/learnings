# mouredev-courses

Mi seguimiento del **curso de JavaScript de MoureDev**. Escribo cada lección a mano mientras la estudio y después resuelvo los ejercicios del tema.

## Contenido

| Carpeta / archivo | Qué hay ahí |
| --- | --- |
| [`basic/`](basic/) | Fundamentos, lecciones `00`–`16`: variables, tipos, operadores, strings, condicionales, arrays, Set, Map, bucles, funciones, objetos, destructuring, clases, errores, consola y módulos. |
| [`basic/tasks/`](basic/tasks/) | Los ejercicios de cada lección básica. |
| [`intermediate/`](intermediate/) | Temas avanzados `01`–`09`: funciones avanzadas, estructuras, clases/objetos, asincronía, APIs, DOM, debugging, regex y testing. Cada tema con su `NN-tasks.js`. |
| [`assets.md`](assets.md) | Enlaces a recursos de apoyo. |

## Cómo funciona

- Los archivos `NN-tema.js` son **la lección**: apuntes ejecutables llenos de `console.log`.
- Los archivos `*-tasks.js` (y `basic/tasks/`) son **los ejercicios**: los resuelvo yo.
- La numeración marca el orden del curso.

## Ejecutar

Es un monorepo de pnpm. Todo es ESM (`"type": "module"`).

```bash
pnpm install

node basic/06-array.js            # una lección
node intermediate/04-tasks.js     # unos ejercicios
pnpm test                         # Jest, para la lección de testing (09)
```

Para las lecciones de DOM (`06-DOM.*`) abre los `.html` en el navegador, no las ejecutes con Node.

## Estado

Básico completo (`00`–`16`). Intermedio hasta `09-test`; `07-tasks.js` sigue pendiente.
