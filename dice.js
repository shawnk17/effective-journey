var rollButton = document.getElementById("roll-dice-button");
var displayArea = document.getElementById("display-area");
var startOverButton = document.getElementById("start-over-button");

rollButton.addEventListener("click", function(){
    displayArea.innerHTML += getRandomNumber(1,10) +"<br>";
});

startOverButton.addEventListener("click", function(){
    displayArea.innerHTML ="";
});

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

