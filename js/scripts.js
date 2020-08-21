// Business

function robogers(userInput) {
    let array = [];
    let newArray = [];
    let lastArray = [];
    for (let i = 0; i <= userInput; i++){
      array.push(i.toString());
      newArray.push(((array[i]).split(''))[0]);
      if (newArray[i] === "1") {
        lastArray.push("Beep!");
      } else if (newArray[i] === "2") {
        lastArray.push("Boop!");
      } else if (newArray[i] === "3") {
        lastArray.push("Won't you be my neighbor?");
      } else {
        lastArray.push(array[i]);
      }
    }
    return lastArray.join(' ');
  }

// Interface

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    let userInput = $("input#userInput").val();
    let result = robogers(userInput);
    $("#output").text(result);
  });
});