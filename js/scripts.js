//business logic


//user interface logic
$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();

    let numInput = parseInt($("input#numInput"));
    let arrayNum = []
    for (index = 0; index < arrayNum.length; index++) {
      if (index === 1) {
        alert = "Beep!"
      }
    }
    
    //const numInput = parseInt($("input#numInput").val());
    
    
    $("#output").show();
  });
});