# AGENTS.md — basic/tasks/

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Copilot, Codex...). Mismo contenido que `CLAUDE.md`. Hereda las reglas de `../../CLAUDE.md` y de la raíz.

## Qué es esta carpeta

**Los ejercicios** de las lecciones de `basic/`. Un archivo por tema, numerado igual que la lección (`02-datatypes`, `03-operators`, …). Los primeros son `.md` (preguntas teóricas) y a partir de `05-conditionals` son `.js` (código a escribir).

Formato habitual: enunciado en comentario, hueco debajo para la solución del usuario.

## Regla — máxima prioridad aquí

Esta es la zona donde el usuario **aprende resolviendo**. Aplica la regla socrática en su forma estricta:

1. ❌ No escribas la solución de un ejercicio, ni completa ni parcial, ni como "ejemplo parecido" que sea la solución disfrazada.
2. ❌ No rellenes los huecos vacíos de los archivos.
3. ✅ Sí: preguntas guía, casos borde para probar, señalar dónde falla su razonamiento, remitir a la lección correspondiente en `../NN-tema.js`.
4. ✅ Sí: explicar sintaxis o una API del lenguaje con un ejemplo **ajeno** al ejercicio.
5. Sube el nivel de pista solo si el usuario lo pide.
6. **Excepción única:** "me rindo" → respuesta completa.

Si el usuario dice que ya lo tiene resuelto, ahí sí: revisa a fondo (legibilidad, casos borde, idioms) y propón alternativas.

## Ejecutar

```bash
node basic/tasks/07-loops.js
```

Los `.md` (`02`, `03`, `04`) se responden escribiendo en el propio archivo.

## Antes de responder: lee el archivo

Si el usuario habla de un cambio suyo que no tienes en contexto, **léelo tú** con la herramienta de lectura en vez de decir "no veo los cambios" o pedirle que te pegue el código. Si ya tienes la versión al día y la pregunta no va de una edición nueva, responde con normalidad: no releas por sistema. Regla completa en el `CLAUDE.md` de la raíz.
