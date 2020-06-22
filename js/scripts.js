//bussines logic
function arrayNumber(arrayInput) {
  let newArray = [];
  for(let index = 0; index <= arrayInput; index+=1) {
    if (index.toSpring().includes("3")) { 
      newArray.push("BEEP!");
    } else if (index.toSpring().includes("2")) {
      newArray.push("BOOP!");
    } else if (index.toSpring().includes("2")) {
      newArray.push("WON'T YOU BE MY NEIGHBOR!");
    }
  }
    return newArray;
  }

//user logic
$(document).ready(function() { 
  $("#inputNumber").submit(function(event) {
    event.preventDefault();
    
    let arrayInput = parseInt($("#numInput").val());
    let output = arrayNumber(arrayInput);
   
    $("#output").text(output);
  });
});
