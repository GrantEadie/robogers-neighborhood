function crypto(userInput) {
  userInput = userInput.replace(/\s/g, "");
  let sideLength = Math.ceil(Math.sqrt(userInput.length));
  let arrayInput = []
  let arrayInput2 = []

  let i = 0;
  let e = 0;

  console.log(sideLength);
  for (const letter of userInput) {
    //console.log("in");
    if (i < sideLength) {
      arrayInput.push(letter);
      i++; 
      console.log(arrayInput);
    } else if (e < sideLength) {
      arrayInput2.push(arrayInput);
      arrayInput = [];
      e++;
      i = 0;
      console.log(arrayInput2);
      console.log(e);
    } else {
      console.log("out");
      break;
    }
    console.log("out");
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