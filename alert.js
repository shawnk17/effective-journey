var textBox = document.getElementById("text-to-display");
var printButton =document.getElementById("print button");
var clearButton = document.getElementById("");
var printArea =document.getElementById("print arear");

printButton.addEventListener("click", function(){
    var text = text.value;
    printArea.innerText = printArea.innerText + text;
});

