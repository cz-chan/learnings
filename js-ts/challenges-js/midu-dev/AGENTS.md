# AGENTS.md — midu-dev/

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Copilot, Codex...). Mismo contenido que `CLAUDE.md`. **Hereda íntegramente `../CLAUDE.md`** (regla de no dar la respuesta + escalado de pistas 1→4). Aquí solo van las particularidades.

## Qué es esta carpeta

Retos de [midu.dev](https://midu.dev) resueltos en **TypeScript**.

```
NN-nombre.ts        → Versión buena y final del reto (la que el usuario da por válida)
reasoning-files/    → Primer intento del mismo reto, con los bugs y el porqué documentados
```

Formato de cada archivo: enunciado completo en un `/** ... */` arriba, implementación debajo. Retos actuales: `01-arkan`, `02-compress-files`, `03-detected-phrases`, `04-packaged-fruits`, `05-compatible-skills`.

## Reglas específicas

- **Dos versiones por reto, a propósito.** Nunca "limpies", sincronices ni borres `reasoning-files/`: los errores que contiene son el material de estudio. Ver su `CLAUDE.md`.
- Al revisar, distingue si el usuario habla de la versión final o del intento antiguo.
- Aquí también se aprende **tipado**: cuenta como parte del reto. No entregues la firma genérica ni el tipo condicional resueltos; pregunta ("¿qué tiene que saber la función sobre la forma de la entrada?").
- No hay `tsconfig.json` ni runner. No hace falta: Node ejecuta `.ts` nativamente desde v22.18 / v23.6+ (`node NN-nombre.ts`), solo borrando los tipos. Eso implica que **no hay type checking**: si el usuario quiere verificar tipos, `npx tsc --noEmit`.
- Los errores de tipos del editor que no sean parte del reto (imports, config) se arreglan directamente.

## Revisión

Cuando el usuario diga que ya funciona, revisa a fondo: casos borde, complejidad, idioms de TS, precisión del tipado. Ahí sí puedes proponer código alternativo.
