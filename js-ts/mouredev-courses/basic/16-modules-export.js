/**
 * Los modulos son ficheros que permiten organizar el código en archivos más pequeñis y reutilizables.
 * Sirve para importar y exportar y no tenerlo todo en un mismo archivo
 * 
 * Para que los exports e imports funciones sin tener que poner la extensión " .mjs " que es de módulo
 * necesitas decirle al programa (fuera del navegador) que vas a usar módulos. En este caso, al estar
 * en VSCode, el empaquetador es Node, por lo que el proyecto necesita un "package.json" que le diga
 * al proyecto que esto se va a comportar como un empaquetador / modulos añadiendo la directiva
 * "  {
 *      "type": "module"
 * "  }
 */

// funciones
export function add ( a, b ) {
  return a + b;
}

// variables
export const pi = 3.1416;

// exportación por defecto
export default function sub ( a, b ) {
  return a - b;
}
// las expoertaciones por default solo pueden haber 1 POR FICHERO pero las no default pueden ser tantas como quieras
// tp las variables son exportables pro defecto, solo las funciones lo son. son las funcionalidades 


// clases
export class Circle {
  constructor ( radius ) {
    this.radius = radius
  }

  area () {
    return Math.PI * ( Math.pow( this.radius, 2 ) )
  }
}
