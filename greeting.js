var whoToGreet= document.getElementById ("who-to-greet");
var greetingArea =  document.getElementById("greeting-area");
var greetingButton = document.getElementById("greeting-button");
var helloButton = document.getElementById("hello-button");
var howdyButton = document.getElementById("howdy-button");
var backAtYouButton = document.getElementById("back-at-you-button");

greetingButton.addEventListener("click", function(){
    var text = whoToGreet.value;

    greetingArea.innerHTML = greetingButton.value + " " + text;
});

helloButton.addEventListener("click", function(){
    var text = whoToGreet.value;
    
    greetingArea.innerHTML = helloButton.value + " " + text;
});

howdyButton.addEventListener("click", function(){
    var text = whoToGreet.value;
    
    greetingArea.innerHTML = howdyButton.value + " " + text;
});

backAtYouButton.addEventListener("click", function(){
    var text = whoToGreet.value;
    
    greetingArea.innerHTML = backAtYouButton.value + " " + text;
});