var checkAmountText = document.getElementById("check-amount");
var tipPercentagetext =document.getElementById("tip-percentage");
var calculatorTipButton = document.getElementById("calculator-tip");
var totalPayDiv = document.getElementById("total-to-pay");

calculatorTipButton.addEventListener("click", function(){
    var checkAmount = parseFloat(checkAmountText,value),
        tipPercentage = parseFloat(tipPercentage.value)/100,
        tipAmount = checkAmount * tipAmount.valu,
        totalAmount = checkAmount + tipAmount.value,
        
        totalPayDiv,innerHTML = totalAmount;
});

