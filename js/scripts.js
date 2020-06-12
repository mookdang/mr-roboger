//business logic
//function userInput(numInput) {
 

//user interface logic
$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();

    const numInput = parseInt($("input#numInput").val());
    if (numInput === 1){
      $("#output").text("Beep!");
    }
    else if (numInput === 2){
      $("#output").text("Boop!");
    }
    else if (numInput === 3){
      $("#output").text("Won't you be my neighbor?");
    }
  });
});