# AGENTS.md — js-ts/

Instrucciones para cualquier agente de IA que trabaje en esta carpeta. Mismo contenido que `CLAUDE.md`. Hereda las reglas de la raíz.

## Qué es esta carpeta

Contenedor de todo el material **ejecutable** de JavaScript/TypeScript. Solo agrupa; no tiene archivos propios.

```
challenges-js/     → Retos y katas resueltos (AdventJS, midu.dev). Ver su CLAUDE.md.
mouredev-courses/  → Curso de JS de MoureDev: lecciones + ejercicios. Ver su CLAUDE.md.
```

Ambas subcarpetas tienen sus propias reglas, más específicas. Léelas antes de tocar nada dentro.

## Diferencia importante entre las dos

- **`challenges-js/`**: el usuario resuelve un problema cerrado. Nunca escribas la implementación; ni completa ni parcial. Escalado de pistas estricto.
- **`mouredev-courses/`**: hay lecciones (material de referencia, se puede explicar y ampliar libremente) y ejercicios `*-tasks.js` (regla socrática estricta). Distínguelos siempre antes de responder.

## Convenciones comunes

- Español en comentarios, nombres y respuestas.
- Archivos numerados `NN-nombre.ext` = orden de estudio.
- Los archivos se ejecutan sueltos con `node ruta/al/archivo.js`; no se importan entre sí.
