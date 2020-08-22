// Business

function robogers(userInput) {
    let array = [];
    let newArray = [];
    let lastArray = [];
    for (let i = 0; i <= userInput; i++){
      array.push(i.toString());
    }
    for (let e = 0; e < array.length; e++) {
      if ((array[e]).includes("3")) {
        newArray.push("Won't you be my neighbor?");
      } else if (array[e].includes("2")) {
        newArray.push('Boop!');
      } else if (array[e].includes("1")) {
        newArray.push('Beep!');
      } else {
        newArray.push(array[e]);
      }
    }
    console.log(newArray);
    return newArray.join(' ');
  }
      
  //     newArray.push(((array[i]).split(''))[0]);
  //     alert(newArray[i]);
  //     if (newArray[i] === "3") {
  //       lastArray.push("Beep!");
  //     } else if (newArray[i] === "2") {
  //       lastArray.push("Boop!");
  //     } else if (newArray[i] === "1") {
  //       lastArray.push("Won't you be my neighbor?");
  //     } else {
  //       lastArray.push(array[i]);
  //     }
  //   }
  //   return lastArray.join(' ');
  // }

// Interface

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    let userInput = $("input#userInput").val();
    let result = robogers(userInput);
    $($("#output").text(result)).fadeIn(1000);
  });
});