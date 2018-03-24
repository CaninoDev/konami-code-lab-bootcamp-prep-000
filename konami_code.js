const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function konamiCodeHandler(e) { 
  var key = e.keyCode
  console.log(code)
  console.log("KeyPress: " + key)
  
  if(key === 16) {
    e.preventDefault()
  }
  

  
  if (key === code[index]) {
    console.log("Index: " + index)
    
    if (index === (code.length - 1)) {
      alert("Hurray")
      index = 0
    }
    index++
  } else {
    index = 0
  }
}

function init() {
  document.body.addEventListener("keydown", konamiCodeHandler)
}
httpserv