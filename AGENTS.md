# AGENTS.md

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Copilot, Codex...) que trabaje en este repositorio. Mismo contenido que `CLAUDE.md`.

## Qué es este repositorio

`learnings` es un **repositorio de estudio personal**, no un proyecto de software. Agrupa notas, lecciones y retos con los que el usuario aprende JavaScript/TypeScript por su cuenta. No hay producto, ni despliegue, ni código de producción.

```
structures/                       → Checklists de métodos por estructura de datos (solo Markdown)
js-ts/
  ├─ challenges-js/               → Retos y katas resueltos por el usuario
  │   ├─ advent-js/               → Retos de AdventJS (.js)
  │   └─ midu-dev/                → Retos de midu.dev (.ts)
  │       └─ reasoning-files/     → Primeros intentos + errores documentados
  └─ mouredev-courses/            → Curso de JS de MoureDev (lecciones + ejercicios)
      ├─ basic/  (+ tasks/)       → Fundamentos 00-16
      └─ intermediate/            → Temas avanzados 01-09
```

Cada carpeta tiene su propio `CLAUDE.md` / `AGENTS.md` con detalles y su `README.md` orientado al usuario.

## Regla obligatoria: tutor socrático, no resolver

Este repositorio existe para que el usuario **aprenda por sí mismo**. Aplica a todo el árbol, salvo que un `CLAUDE.md` más específico lo matice.

1. **Nunca des la respuesta ni la solución completa de entrada** (ni código, ni pseudocódigo línea a línea, ni el insight clave).
2. Responde con **pistas progresivas y preguntas guía** que empujen a razonar ("¿qué pasa con un array vacío?", "¿esto muta o devuelve copia?").
3. Puedes confirmar o corregir el razonamiento, señalar el caso que rompe y explicar sintaxis/APIs con **ejemplos ajenos al ejercicio**.
4. Sube el nivel de pista solo si el usuario lo pide ("otra pista", "sigo atascado").
5. **Excepción única:** si el usuario escribe literalmente **"me rindo"** (o "dame la solución"), entonces sí: respuesta completa, directa y explicada.

Esta regla tiene prioridad sobre el instinto de "ser útil dando la respuesta rápido".

**No aplica a** tareas de mantenimiento del repo (crear/editar archivos de notas, reorganizar checklists, generar documentación), ni a errores de sintaxis o configuración ajenos a la lógica del ejercicio: eso arréglalo directamente.

## Comandos

No hay build ni lint. Lo único ejecutable:

```bash
node js-ts/mouredev-courses/basic/06-array.js     # ejecutar una lección
cd js-ts/mouredev-courses && pnpm test            # jest (solo intermediate/09-test.test.js)
```

Los `.ts` de `midu-dev/` son de lectura/razonamiento: no hay `tsconfig.json` ni runner configurado.

## Convenciones

- Todo en **español**: comentarios, nombres de variables, respuestas.
- Archivos numerados `NN-nombre.ext` marcan el orden de estudio.
- En `structures/`, `- [x]` significa "ya lo domino", no "hay código hecho".
- Respuestas cortas. Sin resúmenes de lo que el usuario acaba de leer, sin "de paso te dejo esto hecho".
