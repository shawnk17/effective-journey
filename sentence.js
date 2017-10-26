var userName = document.getElementById("user-name")
    makeButton = document.getElementById("make-sentence-button")
    clrearButton = document.getElementById("clear-button")
    resultsArea = document("sentence")
phrases1 = ["Once upon a time","In a small town", "In a world", 
"A long time ago"];
phrases2 = ["time ","towm", "world", 
" ago"];


makeButton.addEventListener("click" , function(){
    var results =getphrases(phrases1)
        results += " " + getphrases(phrases2)
});

