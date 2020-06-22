$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();
    
    let numInput = parseInt($("input#numInput").val());
    let arrayNum = [0,"Beep","Boop","Won't you be my neighbor",4,5,6,7,9];
    

    

/*$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();
    
    let numInput = parseInt($("input#numInput").val());
    let arrayInput = [0,1,2,3,4,5,6,7,9]
    arrayInput[1] = "Beep"
    arrayInput[2] = "Boop"
    arrayInput [3] = "Won't you be my neighbor"

    $("#output").text(result);
  });
});
    $("input#number").val("");


    const arrayNum = [0,"Beep","Boop","Won't you be my neighbor",4,5,6,7,9];
