//bussines logic
function arrayNumber(arrayInput);
let newArray = []
for(let index = 0; index <= arrayInput; index++) {
    newArray.push(index);
  }     
  return newArray;
}



//user logic
$(document).ready(function() { 
  $("form#input").submit(function(event) {
    event.preventDefault();
    
    let InputNum = parseInt($("input#numInput").val());
    
    $("#output").text(output);
  });
});

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
