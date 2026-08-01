# AGENTS.md — basic/

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Copilot, Codex...). Mismo contenido que `CLAUDE.md`. Hereda las reglas de `../CLAUDE.md` y de la raíz.

## Qué es esta carpeta

Lecciones de **fundamentos** de JavaScript, `00`–`16`. Cada `NN-tema.js` es un guion de apuntes ejecutable: definiciones, ejemplos y muchos `console.log`. Los ejercicios correspondientes viven en [`tasks/`](tasks/) (ver su `CLAUDE.md`).

Temario: hello world, variables, tipos, operadores, strings, condicionales, arrays, Set, Map, bucles, funciones, objetos, destructuring/spread, clases, manejo de errores, métodos de consola, módulos.

## Reglas específicas

- **Estos archivos son lección, no ejercicio.** Puedes explicar, ampliar, añadir ejemplos y corregir imprecisiones conceptuales con libertad. La regla socrática estricta se aplica en `tasks/`.
- `_docs.md` está vacío: es un cajón de apuntes que el usuario irá llenando.
- El paquete es ESM (`package.json` con `"type": "module"`). La lección 16 lo demuestra a propósito con tres archivos:
  - `16-modules-export.js` / `16-modules-import.js` → ESM.
  - `16-modules-import-external.cjs` → CommonJS. **No lo conviertas a ESM**: la extensión `.cjs` es intencionada, es el punto de la lección.
- Salvo esa lección, los archivos no se importan entre sí. No los conectes ni extraigas utilidades comunes.
- No "refactorices a producción": el estilo repetitivo y verboso es didáctico.

## Ejecutar

```bash
node basic/06-array.js
```
