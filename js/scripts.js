//business logic
//function userInput(numInput) {
  
}

//user interface logic
$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();
    
    const numInput = parseInt($("input#numInput").val());
    if($(this).val() === "1"){
      output = "Beep"
    }
    

  }
}