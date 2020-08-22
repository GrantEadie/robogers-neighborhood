// Business

function robogers(userInput) {
    let array = [];
    let newArray = [];
    for (let i = 0; i <= userInput; i++){
      array.push(i.toString());
      if ((array[i]).includes("3")) {
        newArray.push("Won't you be my neighbor?");
      } else if (array[i].includes("2")) {
        newArray.push('Boop!');
      } else if (array[i].includes("1")) {
        newArray.push('Beep!');
      } else {
        newArray.push(array[i]);
      }
    }
    console.log(newArray);
    return newArray.join(' ');
  }

// Interface

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    let userInput = $("input#userInput").val();
    let result = robogers(userInput);
    $($("#output").text(result)).fadeIn(1000);
  });
});