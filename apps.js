var number1=prompt("Enter the first number:");
var number2=prompt("Enter the second number:");
var operator=prompt("Enter the operator (+, -, *, /):");
if(operator=="+"){
    var result=parseInt(number1)+parseInt(number2);
    alert("first number: "+number1+"\nsecond number: "+number2+"\noperator: "+operator+"\nresult: "+result);
}
if(operator=="-"){
    var result=parseInt(number1)-parseInt(number2);
    alert("first number: "+number1+"\nsecond number: "+number2+"\noperator: "+operator+"\nresult: "+result);
}
if(operator=="*"){
    var result=parseInt(number1)*parseInt(number2);
    alert("first number: "+number1+"\nsecond number: "+number2+"\noperator: "+operator+"\nresult: "+result);
}
if(operator=="/"){
    var result=parseInt(number1)/parseInt(number2);
    alert("first number: "+number1+"\nsecond number: "+number2+"\noperator: "+operator+"\nresult: "+result);
}