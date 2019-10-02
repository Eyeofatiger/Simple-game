window.addEventListener("DOMContentLoaded", init);

function init(){
  var div = document.getElementById("box");
  div.style.left = 0;
  div.style.top = 0;
  div.style.background = "lime";
 
  window.addEventListener("keyup", function(eventObject){
    
    if(eventObject.keyCode == 37){
      div.style.left = (parseInt(div.style.left) -50) + "px";
    }
    if(eventObject.keyCode == 38){
      div.style.top = (parseInt(div.style.top) -50) + "px";
    }
    if(eventObject.keyCode == 39){
      div.style.left = (parseInt(div.style.left) +50) + "px";
    }
    if(eventObject.keyCode == 40){
      div.style.top = (parseInt(div.style.top) +50) + "px";
    }
  });

}


