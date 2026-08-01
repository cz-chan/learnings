// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "Â¡Hola Mundo!"" al cargar la pÃ¡gina

const container = document.getElementById( "container" )
const h1 = document.createElement( "h1" )
h1.innerText = "Hola mundo"
h1.id = "title"
container.style.position = "relative"

container.appendChild( h1 )

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const skull = document.createElement( "img" );
skull.src = "./pngs/skull.png" // dentro de una carpeta
skull.alt = "skull cz"
skull.id = "myImage"
skull.style.width = "100px"

// container.appendChild( skull ) // solo acepta un Node, retorna el nodo insertado
container.append( skull ) // acepta múltiples Nodes o strings (texto directo), no retorna nada, más moderno/flexible.

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la pÃ¡gina
const newDiv = document.createElement( "div" )
newDiv.id = "box"

document.addEventListener( "DOMContentLoaded", () => {
  newDiv.style.backgroundColor = "red"
  newDiv.style.width = "auto"
  newDiv.style.height = "30px"
  newDiv.style.marginBlock = "1rem"
  newDiv.innerText = "hOLA DeSdE UN diV"

  container.append( newDiv )
} )

// 4. Crea un pÃ¡rrafo con id="paragraph" y cambia su color de texto a azul

const newP = document.createElement( "p" )
newP.style.color = "blue"
newP.innerText = "Hola Mundo desde un Paragraph"

container.append( newP ) // este new p se ejecuta antes pq es código no async por lo que primero se ejecuta y pinta todo el DOM y después salte el evento DOMContentLoaded y ahí es donde se crea el div rojo

// 5. Agrega un botÃ³n que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const newSecInputPlusBtn = document.createElement( "section" )
const newUl = document.createElement( "ul" )
const newInput = document.createElement( "input" )
const createLiBtn = document.createElement( "button" )

// estilos al contenedor
newSecInputPlusBtn.style.display = "flex"
newSecInputPlusBtn.style.alignItems = "center"
newSecInputPlusBtn.style.justifyContent = "center"
newSecInputPlusBtn.style.columnGap = "1rem"

// estilos para el contenedor de los lis
newUl.style.display = "flex"
newUl.style.flexDirection = "column"
newUl.style.alignItems = "center"
newUl.style.justifyContent = "center"
newUl.style.border = "1px"
newUl.style.borderColor = "black"

// input and btn styles
newInput.placeholder = "escribe una tarea"
createLiBtn.innerText = "crear tarea"

container.append( newSecInputPlusBtn )
newSecInputPlusBtn.append( newInput, createLiBtn )
container.append( newUl )

createLiBtn.addEventListener( "click", () => { // escucho el evento click
  if ( newInput.value === "" ) return;
  const newLis = document.createElement( "li" ) // creo los elementos
  const textInInput = newInput.value // cojo el valor del input y lo guardo en una variable

  newLis.innerText = textInInput
  // console.log( textInInput );
  newUl.append( newLis )
  newInput.value = ""
} )

// para hacer el keydow con el enter necesito crear una funcion que haya lo que hay dentro addEvent...

const createItemListByKeyPress = () => {
  if ( newInput.value === "" ) return;
  const newLis = document.createElement( "li" ) // creo los elementos
  const textInInput = newInput.value // cojo el valor del input y lo guardo en una variable

  newLis.innerText = textInInput
  newUl.append( newLis )
  newInput.value = ""
}
newInput.addEventListener( "keydown", ( event ) => { // escucho el evento click
  // event.preventDefault() // si hay esto el teclado deja de funcionar pq evito que el elemento escuche al teclado (keydown) ya que el comportamiento por defecto es escuchar al teclado
  if ( event.key === "Enter" )
    createItemListByKeyPress()
} )

const deleteTasksBtn = document.createElement( "button" )
deleteTasksBtn.style.backgroundColor = "red"
deleteTasksBtn.style.fontSize = "bold"
deleteTasksBtn.innerText = "Delete Task"

newSecInputPlusBtn.prepend( deleteTasksBtn )

const deleteTasks = () => {

  if ( newUl.firstChild === "" ) return

  // while ( newUl.firstChild ) { // como es blucle, los eleminia todos pq siempre hay un firstChild hasta que no hay ninfuno. para ir de uno en uno necesitas sin el bucle
  //   newUl.removeChild( newUl.firstChild )
  // }

  newUl.removeChild( newUl.firstChild )
}

deleteTasksBtn.addEventListener( "click", deleteTasks )


// 6. Crea un pÃ¡rrafo con id="deleteParagraph" y un botÃ³n. Al hacer clic en el botÃ³n, elimina el pÃ¡rrafo del DOM
// podría crear un toggle para remove y create

const newSecForP = document.createElement( "section" )
newSecForP.style.display = "flex"
newSecForP.style.alignItems = "center"
newSecForP.style.justifyContent = "center"
newSecForP.style.columnGap = "1rem"

const newNewP = document.createElement( "p" )
newNewP.id = "deleteParagraph"
newNewP.innerText = "Este es un párrafo que se añade y elimina"
newNewP.classList.add( "active" ) // ojo el classList. .... no se hace con un = sino con un ("")
// add/toggle son métodos, no propiedades: obj.metodo = "x" sobreescribe la función (la destruye), obj.metodo("x") la ejecuta

const newBtnForP = document.createElement( "button" )
newBtnForP.id = "toggleBtn"
newBtnForP.innerText = "Delete Paragraph"

newSecForP.append( newNewP, newBtnForP )
container.append( newSecForP )

newBtnForP.addEventListener( "click", () => {
  newNewP.classList.toggle( "active" )


  if ( !newNewP.classList.contains( "active" ) ) {
    newNewP.remove()
    newBtnForP.innerText = "Add Paragraph"

  } else {
    // newSecForP.append( newNewP ) // así me lo añade al final
    newSecForP.prepend( newNewP ) // así al inicio
    // o
    // newBtnForP.before( newNewP )
    newNewP.classList.add( "active" )
    newBtnForP.innerText = "Delete Paragraph"
  }
} )

// 7. Crea un <div id="content"> con algÃºn texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

// 8. Crea un botÃ³n con id="greetBtn" y aÃ±ade un evento que muestre una alerta con el mensaje "Â¡Hola!" al hacer clic

const alertBtn = document.createElement( "button" )
alertBtn.innerText = "ALERTA BTN"
alertBtn.style.backgroundColor = "orange"
alertBtn.style.fontSize = "black"

container.prepend( alertBtn )

alertBtn.addEventListener( "click", () => {
  alert( "ALERTA BTN" )
} )

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botÃ³n con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

// crear un evento custom con input que le pida al usuario un color hex y al darlo, cambie el bg del body

const bodyColorBtn = document.createElement( "button" )
const inputColorBody = document.createElement( 'input' )
const sectBodyColor = document.createElement( "section" )

sectBodyColor.style.display = "flex"
sectBodyColor.style.alignItems = "center"
sectBodyColor.style.justifyContent = "center"
sectBodyColor.style.columnGap = "1rem"
sectBodyColor.style.padding = "1rem"
sectBodyColor.style.border = "2px dotted orange"
sectBodyColor.style.backgroundColor = "red"
sectBodyColor.style.position = "absolute"
sectBodyColor.style.top = "0.6rem"
sectBodyColor.style.right = "0.6rem"

inputColorBody.placeholder = "escribe un color en hex"
inputColorBody.type = "color"

bodyColorBtn.innerText = "change body color"

container.prepend( sectBodyColor )
sectBodyColor.append( inputColorBody, bodyColorBtn )

bodyColorBtn.addEventListener( "click", () => {
  const color = inputColorBody.value
  let body = document.body
  // let body = document.getElementsByTagName( "body" ) // esto no funciona pq me devuelve una colección y coge el primer elemento que haya por que en colecciones el .styles no existe. necesitas un nodo único que sería dándole un id = "body" o cogerlo por el document.body
  console.log( color );

  body.style.backgroundColor = color

} )