# AGENTS.md — mouredev-courses/

Instrucciones para cualquier agente de IA que trabaje en esta carpeta. Mismo contenido que `CLAUDE.md`. Hereda las reglas de la raíz.

## Qué es esta carpeta

Curso de JavaScript de **MoureDev**, seguido de forma autodidacta. El usuario escribe las lecciones a mano mientras avanza y luego resuelve los ejercicios del tema. No es código de producción.

```
basic/                 → Fundamentos 00-16 (ver su CLAUDE.md)
  └─ tasks/            → Ejercicios de cada lección básica
intermediate/          → Temas avanzados 01-09 (ver su CLAUDE.md)
  ├─ NN-tema.js        → Lección
  ├─ NN-tasks.js       → Ejercicios de esa lección
  └─ pngs/             → Imágenes usadas por las lecciones de DOM
assets.md              → Enlaces a recursos de aprendizaje
```

## Lección vs. ejercicio — distinguir SIEMPRE

- **Lecciones** (`NN-tema.js`, `_docs.md`, `assets.md`): material de referencia. Puedes explicar, ampliar, corregir errores conceptuales y añadir ejemplos con libertad.
- **Ejercicios** (`*-tasks.js`, `basic/tasks/*`): aquí manda la regla socrática. Pistas y preguntas guía, nunca la solución — salvo "me rindo".

Antes de responder, mira en qué archivo está trabajando el usuario.

## Ejecutar

Monorepo pnpm (`pnpm-workspace.yaml`) con `basic/` e `intermediate/` como paquetes. **Todo es ESM**: los tres `package.json` declaran `"type": "module"` (la excepción es `basic/16-modules-import-external.cjs`, que es CommonJS a propósito, para la lección de módulos).

```bash
node basic/06-array.js            # ejecutar una lección
node intermediate/02-tasks.js     # ejecutar unos ejercicios
pnpm test                         # jest — solo intermediate/09-test.test.js
```

Las lecciones son scripts sueltos: no se importan entre sí (salvo los `16-modules-*` de `basic/`, que existen justo para demostrar import/export).

## Convenciones

- Comentarios y nombres de variables en **español**.
- Numeración `NN-` = orden del curso. Un tema nuevo va con el siguiente número.
- Es normal que un `.js` sea un guion de apuntes con `console.log` en lugar de un programa: no lo "refactorices a producción".

## Estado

- `intermediate/` llega hasta `09-test` (Jest). Los temas siguientes seguirán el mismo patrón `NN-tema.js` + `NN-tasks.js`.
