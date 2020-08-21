function robogers(userInput) {
    let array = [];
    for (let i = 0; i <= userInput; i++){
      array.push(i);
    }
    return array;
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    let userInput = parseInt($("input#userInput").val());
    
    let result = robogers(userInput);
    $("#output").text(result);
  });
});