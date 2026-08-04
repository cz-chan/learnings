# CLAUDE.md — midu-dev/

Guía para agentes. Mismo contenido que `AGENTS.md`. **Hereda íntegramente `../CLAUDE.md`** (regla de no dar la respuesta + escalado de pistas 1→4). Aquí solo van las particularidades.

## Qué es esta carpeta

Retos de [midu.dev](https://midu.dev) resueltos en **TypeScript**.

```
NN-nombre.ts        → Versión buena y final del reto (la que el usuario da por válida)
reasoning-files/    → Primer intento del mismo reto, con los bugs y el porqué documentados
```

Formato de cada archivo: enunciado completo en un `/** ... */` arriba, implementación debajo. Los retos van numerados `NN-nombre.ts` y crecen con el tiempo: haz `ls` en vez de asumir cuáles hay.

Un reto puede existir solo en `reasoning-files/` (intento en curso) y todavía no tener versión final arriba. Si el nombre difiere entre las dos carpetas, es un typo, no dos retos distintos.

## Reglas específicas

- **Dos versiones por reto, a propósito.** Nunca "limpies", sincronices ni borres `reasoning-files/`: los errores que contiene son el material de estudio. Ver su `CLAUDE.md`.
- Al revisar, distingue si el usuario habla de la versión final o del intento antiguo.
- Aquí también se aprende **tipado**: cuenta como parte del reto. No entregues la firma genérica ni el tipo condicional resueltos; pregunta ("¿qué tiene que saber la función sobre la forma de la entrada?").
- No hay `tsconfig.json` ni runner. No hace falta: Node ejecuta `.ts` nativamente desde v22.18 / v23.6+ (`node NN-nombre.ts`), solo borrando los tipos. Eso implica que **no hay type checking**: si el usuario quiere verificar tipos, `npx tsc --noEmit`.
- Los errores de tipos del editor que no sean parte del reto (imports, config) se arreglan directamente.

## Revisión

Cuando el usuario diga que ya funciona, revisa a fondo: casos borde, complejidad, idioms de TS, precisión del tipado. Ahí sí puedes proponer código alternativo.

## Antes de responder: lee el archivo

Si el usuario habla de un cambio suyo que no tienes en contexto, **léelo tú** con la herramienta de lectura en vez de decir "no veo los cambios" o pedirle que te pegue el código. Si ya tienes la versión al día y la pregunta no va de una edición nueva, responde con normalidad: no releas por sistema. Regla completa en el `CLAUDE.md` de la raíz.
