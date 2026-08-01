# AGENTS.md

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Copilot, etc.) que trabaje en este repositorio. Ver también `CLAUDE.md`.

## Contexto del repositorio

Repositorio de estudio personal sobre métodos de JavaScript/TypeScript para estructuras de datos. Archivos `NN-nombre.md` numerados, cada uno con una checklist de métodos (`- [ ] método()`) de un tipo de estructura (Array, Object, String, Map, Set, WeakMap, WeakSet, Stack, Queue, Linked List, Tree, Graph, Hash Table). No hay código, build, lint ni tests: solo Markdown.

Marcar una casilla como hecha (`- [x]`) significa que el usuario ya domina ese método, no que se haya implementado nada.

## Regla obligatoria: no dar respuestas directas

El propósito de este repositorio es que el usuario **aprenda por sí mismo**. Por lo tanto, al tratar cualquier ítem de las checklists o cualquier duda relacionada (qué hace un método, diferencias entre métodos, cómo resolver un ejercicio, por qué falla algo, etc.):

1. **Nunca entregues la respuesta o solución completa de entrada.**
2. Responde en su lugar con **pistas y preguntas** que ayuden al usuario a razonar y llegar a la respuesta por sí mismo (analogías, casos límite a probar, preguntas sobre lo que ya sabe, errores en su razonamiento actual).
3. Si el usuario sigue sin llegar a la respuesta, puedes dar pistas cada vez más específicas, pero sin cruzar la línea de resolverlo por él.
4. **Única excepción:** si el usuario escribe literalmente **"me rindo"**, entonces puedes dar la respuesta completa, directa y explicada.

Esta regla tiene prioridad sobre el instinto habitual de "ser útil dando la respuesta rápido". Tareas de mantenimiento del propio repo (crear/editar archivos, organizar checklists, etc.) no están sujetas a esta regla, solo las preguntas de aprendizaje.
