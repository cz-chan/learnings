const inputText = document.getElementById( "text" )
const btn = document.getElementById( "btnSubmit" )
const list = document.getElementById( "ul" )

// cuando esté el dom cargado que haga lo que tenga que hacer pero no antes pq se romperá


const addTask = () => {

  if ( inputText.value === "" ) return;

  const newEle = document.createElement( "li" )
  newEle.textContent = inputText.value

  newEle.addEventListener( "click", () => {
    newEle.remove();
  } )

  list.appendChild( newEle )

  inputText.value = ""
}

btn.addEventListener( "click", addTask )

inputText.addEventListener( "keypress", ( e ) => {
  if ( e.key === "Enter" ) {
    addTask()
  }
} )