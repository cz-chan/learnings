// 1. Crea una funciÃ³n para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse despuÃ©s de 2 segundos y mostrar en consola "Hola, [nombre]".

function greet ( name, callback ) {
  setTimeout( () => {
    console.log( `Hola, ${ name }` );
    callback()
  }, 2000 )
}

let end = () => {
  console.log( `END PROGRAM` );
}

greet( "chema", end )


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada funciÃ³n debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1 ( callback ) {
  setTimeout( () => {
    console.log( "task 1" );

    callback()
  }, 1000 )
}
function task2 ( callback ) {
  setTimeout( () => {
    console.log( "task 2" );

    callback()
  }, 1000 )
}
function task3 ( callback ) {
  setTimeout( () => {
    console.log( "task 3" );

    callback()
  }, 1000 )
}

// puedo no pasarle el primer parámetros. alas funciones como callback pero al llamarlas necesito que dentro de ellas haya una función (esta forma es el callback_hell)
task1(
  () => {
    task2( () => {
      task3( () => {
        end
      } )
    } )
  }
)

// 3. Crea una funciÃ³n para verificar un nÃºmero que retorne una Promesa. 
//    Si el nÃºmero es par, la promesa se resuelve con el mensaje "NÃºmero par". 
//    Si el nÃºmero es impar, la promesa se rechaza con el mensaje "NÃºmero impar".

// ESTA FORMA ME IMPRIME DENTRO DE LA FUNCIÓN LO QEU VA A DAR pero el enunciado me pide que resuelva o rechace
// function oddEvenNum ( number ) {
//   return new Promise( ( resolve, reject ) => {
//     if ( number % 2 === 0 ) {
//       console.log( `El ${ number } es un número par` );
//       resolve()
//     } else {
//       console.log( `El ${ number } es un número inpar` );
//       reject()
//     }
//   } )
// }
// oddEvenNum( 6473829012032 )

function oddEvenNum ( number ) {
  return new Promise( ( resolve, reject ) => {
    if ( number % 2 === 0 ) {
      resolve( "Numero par" )
    } else {
      reject( "Numero impar" )
    }
  } )
}
oddEvenNum( 647382901203212 )
  .then( ( result ) => {
    // console.log( `Es un número par` );
    console.log( result );
  } )
  .catch( ( error ) => {
    // console.log( `Es un número inpar.` );
    console.log( error );
  } )

/*
Diferencia clave entre poner el console.log dentro de la funcion de la promesa o fuera (en .then/.catch):
 - DENTRO (en la funcion de la promesa, junto al resolve/reject):
     resolve(); console.log("par")      → la promesa imprime y resuelve. El .then no recibe el mensaje, solo una notificacion vacia.
 - FUERA (en el .then/.catch, recibiendo el valor del resolve/reject):
     resolve("par")                     → la promesa solo pasa el valor. El .then recibe "par" y decide que hacer: imprimirlo, guardarlo, etc.
 Separa la responsabilidad: la promesa calcula/produce, el consumidor (.then) actua.
*/

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

let firstTask = () => {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( "First task completed" )
    }, 1000 )
  } )
}
let seconTask = () => {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( "Second task completed" )
    }, 2000 )
  } )
}
let thirdTask = () => { // -> esta se resuelve la última aunque tenga un timeout inferior al secondTask pq al estar dentro del secondTask lo que hace es resolver la segunda y después de 1,5s resuelve la tercera
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( "Third task completed" )
    }, 1500 )
  } )
}

// esta puede ser una solución
// firstTask()
//   .then( ( resolve ) => {
//     console.log( resolve );
//     seconTask()
//       .then( ( resolve ) => {
//         console.log( resolve );
//         thirdTask()
//           .then( ( resolve ) => {
//             console.log( resolve );
//           } )
//       } )
//   } )

// esta puede ser otra solución
// firstTask()
//   .then( ( resolve ) => console.log( resolve ) )
// seconTask()
//   .then( ( resolve ) => console.log( resolve ) )
// thirdTask()
//   .then( ( resolve ) => console.log( resolve ) )

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

let executeTasks = async () => { // sin el async el await no funciona pero al revés sí aunque no serviría de nada el async
  await seconTask()
    .then( ( resolve ) => console.log( resolve ) )
  await thirdTask()
    .then( ( resolve ) => console.log( resolve ) )
  await firstTask()
    .then( ( resolve ) => console.log( resolve ) )
}
executeTasks()

/*
 sin el await, la thirdTask acaba antes que la second por el 1500 y 2000 respec. pero conel await lo que hace es esperar a que acabe esa tarea y seguidamente, que haga la siguiente. si no acaba, no pasa a la siguiente. si cambio de orden el fristTask y lo pongo el último con el await, será el último que se ejecute


let executeTasks = async () => {
  await seconTask() //1a
    .then( ( resolve ) => console.log( resolve ) )
  await thirdTask() //2a
    .then( ( resolve ) => console.log( resolve ) )
  await firstTask() //3a
    .then( ( resolve ) => console.log( resolve ) )
}
executeTasks()

let executeTasks = async () => {
  seconTask() //3a
    .then( ( resolve ) => console.log( resolve ) )
  thirdTask() //1a
    .then( ( resolve ) => console.log( resolve ) )
  firstTask() //2a
    .then( ( resolve ) => console.log( resolve ) )
}
executeTasks()

*/

// 6. Crea una funciÃ³n getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

let getUser = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    console.log( "Revisando ID" );
    setTimeout( () => {
      if ( id < 5 && id > 0 ) {
        resolve( { id, nombre: "Usuario " + id } )
      } else {
        reject( `El usuario con el id ${ id } no se ha encontrado` )
      }
    }, 2000 )
  } )
}

// then and catch
getUser( 2 )
  .then( ( result ) => {
    console.log( result );
  } )
  .catch( ( err ) => console.log( err ) )

// try and catch
let getData = async ( id ) => {
  try {
    // no hace falta el .then ni ningún parámetros más para el trycatch ya que esto mismo es lo que hace esta función. el async va en la función y el await es el user que va a la DB y espera 
    let user = await getUser( id )
    console.log( user );
  } catch ( err ) {
    console.log( err );
  }
}
getData( 9 )


// 7. Intenta predecir el resultado de este cÃ³digo antes de ejecutarlo en la consola:


console.log( "Inicio" ) // 1º - Call Stack
setTimeout( () => console.log( "setTimeout ejecutado" ), 0 ) // 4º - Macrotask Queue (se ejecuta último, incluso con delay=0)
Promise.resolve().then( () => console.log( "Promesa resuelta" ) ) // 3º - Microtask Queue
console.log( "Fin" ) // 2º - Call Stack

/*
 KEY INSIGHT:
 - setTimeout con 0ms NO significa "ejecutar inmediatamente"
 - Las Promesas SIEMPRE se ejecutan antes que setTimeout
 - El evento loop prioriza: Sync → Microtasks → Macrotasks

 CASOS DE USO REALES EN PRODUCTOS:

 PROMESAS (Microtasks) — Garantizar orden de datos:
 ✓ Gmail: fetch emails → validar credenciales → renderizar inbox
 ✓ Netflix: fetch datos película → descargar subtítulos → mostrar player
 ✓ Slack: cargar mensajes → procesar markdown → pintar UI
 → Se ejecutan YA, sin lag, en orden garantizado

 setTimeout (Macrotasks) — Ceder UI, no bloquear:
 ✓ Google Search: escribes → [500ms delay] → busca (debounce)
 ✓ WhatsApp Web: envías mensaje → [0ms timeout] → anima entrada
 ✓ Discord: Alguien escribe 1000 mensajes → setTimeout distribuye el render
 → Permite que el navegador responda a clicks, scrolls, mientras JS trabaja

 requestAnimationFrame — Animaciones 60fps:
 ✓ Instagram feed: scroll suave sin jank
 ✓ Figma canvas: mover objetos sin lag
 ✓ Twitter: parallax, transiciones smooth
 → Se sincroniza con refresh rate del monitor (60Hz/120Hz)
*/

/*
 EVENT LOOP — MICROTASKS vs MACROTASKS

 JavaScript usa 3 colas de ejecución:

 1. CALL STACK (Síncrono) — Se ejecuta primero. Bloquea todo. Todo código normal (sin Promesas, sin setTimeout) se ejecuta inmediatamente en el Call Stack. Es bloqueante: si hay una operación pesada, bloquea todo.

 2. MICROTASK QUEUE — Promesas (.then, .catch, .finally). Se ejecuta después del stack, antes de macrotasks. Cuando el Call Stack termina completamente, JS revisa la Microtask Queue. Se ejecutan todas las Promesas pendientes antes de pasar a las macrotasks.
 Por qué existe: Las Promesas necesitan garantizar que se ejecuten después del código síncrono pero antes de cualquier otra cosa asincrónica. Así evitas condiciones de carrera.

 3. MACROTASK QUEUE — setTimeout, setInterval, I/O. Se ejecuta al último. Aquí va todo lo que necesita ceder el control al navegador. Incluso con delay=0, se ejecuta al final.
  Por qué existe: setTimeout con 0ms te permite decir "ejecuta esto, pero DESPUÉS de que el navegador maneje eventos y haga render". Si no existiera, bloquearías la UI.

 ORDEN REAL DE EJECUCIÓN:

 ┌─────────────────────────────┐
 │ 1º Call Stack (bloqueante)  │
 │ - console.log("Inicio")     │
 │ - console.log("Fin")        │
 └─────────────────────────────┘
         ↓
 ┌─────────────────────────────┐
 │ 2º Microtask Queue          │
 │ - Promise.resolve().then()  │
 └─────────────────────────────┘
         ↓
 ┌─────────────────────────────┐
 │ 3º Macrotask Queue          │
 │ - setTimeout (incluso con 0)│
 └─────────────────────────────┘

 SALIDA:
 Inicio
 Fin
 Promesa resuelta
 setTimeout ejecutado
*/

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuaciÃ³n, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

// esta forma no funciona porque no son promesas y lo que el Promise.all necesita son promesas
// let promiseT1 = () => {
//   setTimeout( () => {
//     console.log( "primse T1" );
//   }, 2000 )
// }
// let promiseT2 = () => {
//   setTimeout( () => {
//     console.log( "primse T2" );
//   }, 4000 )
// }
// let promiseT3 = () => {
//   setTimeout( () => {
//     console.log( "primse T3" );
//   }, 6000 )
// }


let promiseT1 = new Promise( ( value ) => {
  setTimeout( () => {
    value( "primse T1" )
  }, 2000 )
} )
let promiseT2 = new Promise( ( value ) => {
  setTimeout( () => {
    value( "primse T2" )
  }, 4000 )
} )
let promiseT3 = new Promise( ( value ) => {
  setTimeout( () => {
    value( "primse T3" )
  }, 6000 )
} )

Promise.all( [ promiseT1, promiseT2, promiseT3 ] ).then( ( values ) => console.log( values ) ) // espera hasta que la última promesa esté completa (6s)

// 9. Crea una funciÃ³n waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuaciÃ³n, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

let waitSeconds = ( s ) => {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve( `Toca esperar ${ s / 1000 } segundos` )
    }, s )
  } )
}

let waiting = async ( seconds ) => {
  try {
    let funct = await waitSeconds( seconds )
    console.log( funct );
  } catch ( err ) {
    console.log( err );
  }
}
waiting( 12000 )

// 10. Crea una simulaciÃ³n de un cajero automÃ¡tico usando asincroní­a.
//     - La funciÃ³n checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La funciÃ³n withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ mÃ¡s.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     OperaciÃ³n exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let totalAmount = 500;
let balanceCheck = 0;
let ok = true

let checkBalance = ( totalBalance ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      if ( totalBalance > 0 ) {
        resolve( `Your balance is ${ totalBalance }$` )
      } else {
        reject( `Your balance is not enought: ${ totalBalance }$` )
      }
    }, 1000 );
  } )
}

// checkBalance( totalAmount ).then( ( value ) => console.log( value ) ) // Your balance is 500$

let withdrawMoney = ( withdraw ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      // let balance = checkBalance( totalAmount ); // retorna una promesa y no se puede sumar
      let balance = totalAmount; // de esta forma cojo el totalAmount de la cuenta
      let newBalance = balance - withdraw;
      if ( withdraw <= balance ) { // <= pq puedo sacar toda la cantidad
        resolve( `You have withdraw ${ withdraw }$. Your balance now is ${ newBalance }$` )
        totalAmount = newBalance
      } else {
        reject( `Your balace (${ balance }$) is not enoght for your withdraw of ${ withdraw }$` )
      }
    }, 2000 )
  } )
}

async function userWithdraw ( withdraw ) {
  try {
    // primero muestro el saldo total
    let balance = await checkBalance( totalAmount );
    console.log( balance );

    console.log( "Retirando $" + withdraw + "..." );  // ← aquí
    let money = await withdrawMoney( withdraw );
    console.log( money );

    balance = await checkBalance( totalAmount );
    console.log( balance );

    console.log( "Retirando $" + withdraw + "..." );  // ← aquí
    money = await withdrawMoney( withdraw )
    console.log( money );

  } catch ( error ) {
    console.log( error );
  }
}

// userWithdraw( 300 )

// mejora de la funcion -> numero de veces que queires retirar la cantidad x
async function userWithdrawEnhanced ( times, withdraw ) {
  try {
    // primero muestro el saldo total
    let balance = await checkBalance( totalAmount );
    console.log( balance );

    if ( balance < ( times * withdraw ) ) {
      throw new Error()
    }

    for ( let i = 0; i < times; i++ ) {
      console.log( "Retirando $" + withdraw + "..." );  // ← aquí
      let money = await withdrawMoney( withdraw );
      console.log( money );
      balance = await checkBalance( totalAmount );
      console.log( balance );
    }

  } catch ( error ) {
    console.log( error );
  }
}

userWithdrawEnhanced( 6, 100 )