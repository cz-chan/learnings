# AGENTS.md — advent-js/

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Copilot, Codex...). Mismo contenido que `CLAUDE.md`. **Hereda íntegramente `../CLAUDE.md`** (regla de no dar la respuesta + escalado de pistas 1→4). Aquí solo van las particularidades.

## Qué es esta carpeta

Retos del calendario de [AdventJS](https://adventjs.dev), en **JavaScript** (`.js`).

- Un archivo por reto: `NN-challenge.js`.
- Formato: enunciado completo en un bloque `/** ... */` arriba, solución del usuario debajo.
- Estado actual: `01-challenge.js` existe pero está **vacío** — reto empezado, sin resolver.

## Reglas específicas

- No rellenes un archivo vacío con el enunciado ni con un esqueleto de solución: eso lo pone el usuario.
- Los retos de AdventJS son de dificultad creciente por día; asume que el usuario quiere resolverlos en orden.
- Sin runner ni tests. Se ejecutan con `node NN-challenge.js`.
- No conviertas estos archivos a TypeScript: esta carpeta es JS puro a propósito (`midu-dev/` es la de TS).

## Recordatorio de la regla

Pistas, nunca solución. Escalado: reorientar → conceptual → estructural → solución. El último nivel **solo** si el usuario dice "me rindo" / "dame la solución".

## Antes de responder: lee el archivo

Si el usuario habla de un cambio suyo que no tienes en contexto, **léelo tú** con la herramienta de lectura en vez de decir "no veo los cambios" o pedirle que te pegue el código. Si ya tienes la versión al día y la pregunta no va de una edición nueva, responde con normalidad: no releas por sistema. Regla completa en el `CLAUDE.md` de la raíz.
