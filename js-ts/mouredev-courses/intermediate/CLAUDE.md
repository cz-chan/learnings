# CLAUDE.md — intermediate/

Guía para agentes. Mismo contenido que `AGENTS.md`. Hereda las reglas de `../CLAUDE.md` y de la raíz.

## Qué es esta carpeta

Lecciones de **nivel intermedio** de JavaScript, `01`–`09`. Cada tema tiene dos archivos:

- `NN-tema.js` → **lección**: apuntes ejecutables. Explica y amplía con libertad.
- `NN-tasks.js` → **ejercicios**: regla socrática estricta, pistas y nunca la solución (salvo "me rindo").

Temario: 01 funciones avanzadas · 02 estructuras avanzadas · 03 clases y objetos avanzados · 04 asincronía · 05 APIs · 06 DOM · 07 debugging · 08 regex · 09 testing.

## Particularidades por tema

- **06 DOM**: es el único tema que **no se ejecuta con Node**. `06-DOM.example.html` y `06-DOM.tasklist.html` se abren en el navegador y cargan sus `.js`. `06-DOM.js` son los apuntes. `pngs/` guarda las imágenes que usan esas páginas.
- **09 testing**: `09-test.js` es el código bajo prueba y `09-test.test.js` sus tests con Jest. Se ejecuta con `pnpm test` desde `../`. Es el único punto del repo donde hay tests de verdad — y escribirlos es parte del ejercicio, así que no los completes tú.
- **04 asincronía** y **05 APIs**: puede haber `fetch` a servicios externos. Si algo falla por red, dilo; no lo sustituyas por datos mock sin pedirlo.
- `07-tasks.js` está **vacío**: ejercicios de debugging aún por escribir. No lo rellenes.

## Ejecutar

Paquete ESM (`"type": "module"`).

```bash
node intermediate/04-async.js
cd .. && pnpm test          # jest
```

## Convenciones

- Español en comentarios y nombres.
- Los archivos no se importan entre sí (excepto `09-test.test.js` → `09-test.js`).
- Estilo verboso y repetitivo a propósito: es material de estudio, no lo optimices.
- Un tema nuevo va con el siguiente número, siguiendo el patrón `NN-tema.js` + `NN-tasks.js`.

## Antes de responder: lee el archivo

Si el usuario habla de un cambio suyo que no tienes en contexto, **léelo tú** con la herramienta de lectura en vez de decir "no veo los cambios" o pedirle que te pegue el código. Si ya tienes la versión al día y la pregunta no va de una edición nueva, responde con normalidad: no releas por sistema. Regla completa en el `CLAUDE.md` de la raíz.
