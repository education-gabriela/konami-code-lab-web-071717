const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//↑↑↓↓←→←→BA

function init() {
  // Write your JavaScript code inside the init() function

}

let index = 0;
function onKeyPress(e) {
  const key = parseInt(e.detail || e.which);
  
  if(key === code[index]) {
    index++;

    if(index === code.length) {
      alert("yay!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

window.addEventListener("keydown", onKeyPress);
