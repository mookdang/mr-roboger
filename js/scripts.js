//business logic
let userInput = [0,1,2];
    for (index = 0; index < userInput; index++) {
      console.log(index);
    }
    

//user interface logic
$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();
    let numInput = parseInt($("input#numInput").val());
    const arrayNum = ["Beep", "Boop", ""]

    
    
    $("#output").show();
  });
});