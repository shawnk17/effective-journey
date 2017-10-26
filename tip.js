var checkAmountText = document.getElementById("check-amount");
var tipPercentagetext =document.getElementById("tip-percentage");
var calculatorTipButton = document.getElementById("calculate-tip");
var totalPayDiv = document.getElementById("total-to-pay");

calculatorTipButton.addEventListener("click", function(){
    var checkAmount = parseFloat(checkAmountText.value),
    tipPercentage = parseFloat(tipPercentagetext.value)/100,
    tipAmount = checkAmount * tipPercentage,
    totalAmount = checkAmount + tipAmount;
    
    totalPayDiv.innerHTML = totalAmount;
});