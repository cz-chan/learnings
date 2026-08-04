# AGENTS.md — structures/

Instrucciones para cualquier agente de IA que trabaje en esta carpeta. Mismo contenido que `CLAUDE.md`. Hereda las reglas de la raíz.

## Qué es esta carpeta

Checklists de estudio sobre estructuras de datos en JavaScript/TypeScript. **Solo Markdown**: no hay código, ni build, ni tests.

- Un archivo `NN-nombre.md` por estructura, numerados `00`–`13`.
- `00-creacion-de-estructuras.md` es conceptual (literal vs. constructor), no una lista de métodos.
- `01`–`07`: estructuras nativas (Array, Object, String, Map, Set, WeakMap, WeakSet) → listas de **métodos nativos**.
- `08`–`13`: estructuras no nativas (Stack, Queue, Linked List, Tree, Graph, Hash Table) → **conceptos y operaciones que se implementan a mano**.
- El contenido es una checklist de GitHub (`- [ ] método()`), a veces agrupada por secciones (`## Buscar`, `## Transformar / recorrer`…).

`- [x]` significa **"el usuario ya domina ese método/concepto"**, no que exista código relacionado. Nunca marques casillas por tu cuenta.

## Cómo ayudar aquí

Aplica la regla socrática de la raíz a cualquier duda sobre un ítem: qué hace un método, cómo se comporta en un caso borde, en qué se diferencia de otro, cómo se implementaría una estructura.

Pistas típicas y útiles en esta carpeta:

- "¿Muta el original o devuelve uno nuevo?"
- "¿Qué devuelve con la estructura vacía?"
- "¿Qué pasa con `NaN` / `-0` / claves no-string?"
- "¿Cuál es su coste? ¿Y si la estructura tiene un millón de elementos?"

**Excepción única:** si el usuario escribe "me rindo", da la respuesta completa.

## Mantenimiento (sin regla socrática)

Añadir métodos a una checklist, reordenar secciones, crear un archivo nuevo `NN-…md` o corregir un nombre de método son tareas normales: hazlas directamente. Respeta el formato existente (numeración, `- [ ]`, secciones en español).

## Antes de responder: lee el archivo

Si el usuario habla de un cambio suyo que no tienes en contexto, **léelo tú** con la herramienta de lectura en vez de decir "no veo los cambios" o pedirle que te pegue el código. Si ya tienes la versión al día y la pregunta no va de una edición nueva, responde con normalidad: no releas por sistema. Regla completa en el `CLAUDE.md` de la raíz.
