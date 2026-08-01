/**
 * Sin elñ package.json que le dice que esto se teien que comportar como módulos, no funciona.
 */

import { add, Circle, pi } from "./16-modules-export.js"; // las importaciones por defecto tienes que llamarlas a través del nombre con el cual se crearon
import substract from "./16-modules-export.js" // las import por defecto puedes nombrarlas como quieras ya que lo que se va a exportar por defecto va a ser aquello que se exporta, no hay confusión de qué es

console.log( add( pi, 2 ) )

//importación por defecto
console.log( substract( pi, 1 ) )


// import de clases
let myCircle = new Circle( 10 );
console.log( myCircle.radius );
console.log( myCircle.area() );


// modulos expernos que tú no has creado.
// por ejemplo, node tiene un módulo para trabajar con el sistema operativo que es "os"

// const os = require( "os" ); // esto no funciona pq necesito una extensión .cjs