function crypto(userInput) {
  userInput = userInput.replace(/\s/g, "");
  let sideLength = Math.ceil(Math.sqrt(userInput.length));
  let arrayInput = []
  let arrayInput2 = []

  let i = 0;
  let e = 0;

  for (const letter of userInput) {
    if (i < sideLength) {
      arrayInput[i] = letter;
      i++; 
    } else if (e < sideLength) {
      arrayInput2[e] = arrayInput;
      arrayInput = [];
      e++;
      i = 0;
    } else {
      break;
    }
    console.log(arrayInput2);
  }

  // Length i = 0 
  // Depth e = 0
  // array[e, i] = letter
  // array = [[H, e , l , l, o ], [w, o, r, l, d]]

  // array[0, 0]
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    let userInput = $("input#userInput").val();
    
    let result = crypto(userInput);
  });
});