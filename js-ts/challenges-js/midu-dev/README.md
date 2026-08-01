# midu-dev

Retos de [midu.dev](https://midu.dev) resueltos en **TypeScript**. Aquí no solo practico algoritmia: también el tipado.

## Retos

| Archivo                                              | Reto                                                                                                                                                 |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`01-arkan.ts`](01-arkan.ts)                         | Descifrar un conjuro: símbolos arcanos con valor numérico, restando cuando uno menor precede a uno mayor. Devuelve `NaN` si hay símbolo desconocido. |
| [`02-compress-files.ts`](02-compress-files.ts)       | Compresión de archivos.                                                                                                                              |
| [`03-detected-phrases.ts`](03-detected-phrases.ts)   | Detección de frases.                                                                                                                                 |
| [`04-packaged-fruits.ts`](04-packaged-fruits.ts)     | Empaquetado de fruta.                                                                                                                                |
| [`05-compatible-skills.ts`](05-compatible-skills.ts) | Habilidades compatibles.                                                                                                                             |

Cada archivo lleva el enunciado completo arriba, en un bloque de comentario.

## `reasoning-files/`

Mis **primeros intentos** de los mismos retos, con los bugs que cometí y una explicación de por qué fallaban. No los borro: repasarlos vale más que la solución limpia. Ver [`reasoning-files/README.md`](reasoning-files/README.md).

## Ejecutar

No hay `tsconfig.json`. Node ejecuta `.ts` de forma nativa desde **v22.18 / v23.6+** (sin flags):

```bash
node 01-arkan.ts
node --watch 01-arkan.ts
```

Ojo: Node solo **borra los tipos**, no compila ni comprueba nada. No hay type checking, y falla con `enum`, `namespace` o parámetros-propiedad (para eso, `--experimental-transform-types`). Para verificar tipos: `npx tsc --noEmit 01-arkan.ts`.

Con Node anterior a 22.18: `npx tsx 01-arkan.ts`.
