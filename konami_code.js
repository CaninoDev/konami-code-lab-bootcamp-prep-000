const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function konamiCodeHandler(e) { 
  console.log(index)
  var key = e.which
  console.log(code)
  console.log(key)
  
  if (key === code[index]) {
    console.log(index)
    
    if (index === (code.length)) {
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
