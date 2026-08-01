# learnings

Mi repositorio de estudio de **JavaScript y TypeScript**. Aquí guardo lecciones, apuntes, retos resueltos y checklists de lo que voy dominando.

No es un proyecto de software: no hay app, ni build, ni despliegue. Es material de aprendizaje.

## Qué hay dentro

| Carpeta | Qué se hace ahí |
| --- | --- |
| [`structures/`](structures/) | Checklists de métodos nativos por estructura de datos (Array, Object, String, Map, Set…) y de estructuras que se implementan a mano (Stack, Queue, Tree, Graph…). Marco `- [x]` lo que ya domino. |
| [`js-ts/challenges-js/`](js-ts/challenges-js/) | Retos y katas de algoritmia resueltos por mí (AdventJS y midu.dev). |
| [`js-ts/mouredev-courses/`](js-ts/mouredev-courses/) | Curso de JavaScript de MoureDev: lecciones comentadas + ejercicios por tema, de básico a intermedio. |

Cada carpeta tiene su propio `README.md` con el detalle.

## Cómo se usa

```bash
# Ejecutar cualquier lección o ejercicio
node js-ts/mouredev-courses/basic/06-array.js

# Tests (solo la lección de testing con Jest)
cd js-ts/mouredev-courses && pnpm install && pnpm test
```

Los archivos de `structures/` son solo lectura y checklists: se abren, no se ejecutan.

## Nota sobre los agentes de IA

Los archivos `CLAUDE.md` y `AGENTS.md` repartidos por el repo configuran a los asistentes de IA en **modo tutor socrático**: dan pistas y preguntas, nunca la solución — salvo que yo escriba "me rindo".
