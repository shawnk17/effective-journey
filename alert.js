var textBox = document.getElementById("text-to-display");
var printButton =document.getElementById("print-button");
var clearButton = document.getElementById("clear-button");
var printArea =document.getElementById("printarea");

printButton.addEventListener("click", function(){
    var text = text.value;
    printArea.innerText = printArea.innerText + text;
});

clearButton.addEventListener("click", function(){

});

clearButton.addEventListener("click", function(){
    printArea.innerText = "";
});

