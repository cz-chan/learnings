/**
 * DOM: Document object model
 *
 * es una representación del contenido de una página web que permite acceder, modificar y
 * manipular elementos HTML de esa página
 *
 * El uso del DOM está específicamente diseñado para el frontend
 */

/**
 *
 * PRINCIPALES OPERACIONES
 *
 *  - Métodos básicos para la selección de los elementos:
 *  (selectores enfocados más en HTML)
 *    - getElementById -> para acceder al documento primero necesitas hacerle referencia hacia
 * dicho doc con el document. Este solo hace referencia a un único elemento en el DOM y tiene
 * que ser único
 *    
 *    - getElementByClassName -> este hace referencia a todos los elementos que compartan el 
 * identificador que le hayas puesto
 * 
 *    - getElementByTagName -> esto hace referencia a una colección dependiendo de la etiqueta que
 * sea dicho elemento. div, section, header...
 * 
 * Métodos más modernos de manipulación del DOM (selectores más enfocados en css)
 * 
 *    - querySelector() -> 
 *    - querySelectorAll() ->
 */

// getElementById
const myElement = document.getElementById( "id" )

// getElementByClassName
const elements = document.getElementByClassName( "classNames" )

/**
 * MANIPULACIÓN DE ELEMENTOS
 * 
 * 
 */

const title = document.getElementById( "title" )
title.textContent = "Hola Mundo"; // esto modifica el texto a atrvaés del textContent

const container = document.querySelector( ".container" )
container.innerHTML =
  `
    <p>
      Esto es un parráfo introducido dentro del container
    </p>
  `

/**
 * 
 * MODIFICACION DE ATRIBUTOS
 * 
 * 
 */

const modifyLink = document.querySelector( "a" ) // selecciona todos los anchors
const url = modifyLink.getAttribute( "href" ) // con esto obtienes el atributo url, el valor de este
modifyLink.setAttribute( "href", "https://nuevapagina.com" ) // setteas el valor del href

// comprobación del atributo
modifyLink.hasAttribute( "target" ) // comprueba si lo tiene o no ya que devuelve un boolean

// eliminación de atributos
modifyLink.removeAttribute( "target" )

/**
 *
 * INTERACCIÓN CON CLASES CSS
 */

// los selectores de querys con el " . " hacen referencia al atributo class mientras que los que contienen el " # " hacen referencia al atributo id

const newBox = document.querySelector( ".box" )
newBox.classList.add( "selected" ) // esto le añade al elemento .box la clase selected y que puede estar asociada a algún tipo de css
newBox.classList.remove( "selected" ) // lo elimina

newBox.classList.toggle( "selected" ) // te olvidas de add y remove y simplemente la añade o la quita dependiendo de sí la tiene o no

const btn = document.querySelector( "button" )
btn.style.backgroundColor = "#333" // cambia el color de fondo a través de estilos en linea

/**
 * CREAR Y ELIMINAR ELEMENTOS COMPLETOS AL HTML
 * 
 * 
 */

const newP = document.createElement( "p" ) // creo el p
newBox.textContent = "este es un nuevo p creado desde js" // le doy texto al p
newP.style.padding = "2rem"

container.appendChild( newP ) // CREACIÓN DEL P DENTRO DEL CONTAINER

const newUl = document.querySelector( "ul" )
const newLi = document.createElement( "li" )

newLi.textContent = "nuevo li"

// inserción al segundo elemento (o elemetno concreto)
const sencondLi = newUl.children[ 1 ] // le dices la posición del secondElement. en el children en la posición [1] que es la segunda en los arrays
newUl.insertBefore( newLi, sencondLi ) // inserto delante del sencondLi el newLi

newUl.prepend() // lo inserta al inicio de todo el listado
newUl.append() // lo inserta al final de todo el listado

// eliminar elementos (moderna)

newP.remove() // eleimina el p

// eliminación antigua

const parent = newP.parentElement
parent.removeChild( newP )

/**
 * ELEMENTOS Y EVENTOS DEL DOM
 * 
 * Los elementos del dom es eso que te permite responder a las acciones del usuario en el propio DOM
 * 
 *  - addEventListener
 *    - click -> salta cuando el usuario haga clicj en el elemento que tiene el listeneer
 *    - DOMContentLoader -> salta cuando la página esté cargada
 *    - mouseenter -> cuando el mause pasa por encima del elemento
 */

const sendBtn = document.querySelector( "#send" )
sendBtn.addEventListener( "click", () => {
  console.log( "Show click" )
} )
document.addEventListener( "DOMContentLoaded", () => console.log( "DOM cargado" ) )

btn.addEventListener( "mouseenter", () => {
  btn.style.backgroundColor = "green"
} )
btn.addEventListener( "mouseleave", () => {
  btn.style.backgroundColor = "green"
} )

const form = document.querySelector( "form" )
form.addEventListener( "submit", ( event ) => {
  //code
} )

// command + k event
document.addEventListener( 'keydown', event => {
  if (
    ( event.metaKey || event.ctrlKey ) // si pulsas la tecla meta (command en mac) o control (windows/linux)
    &&
    event.key === 'k' ) // y además la K se abre el modal
  {
    event.preventDefault();
    openModal();
  }
}
)

/**
 * EJEMPLOS: ACCESO AL DOM -> 06-DOM.example.html/.js
 * 
 * EJEMPLO: TASKLIST -> 06-DOM.tasklist.html/.js
 */

