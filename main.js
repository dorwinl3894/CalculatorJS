function calculate() {
    var num1 = parseInt(document.querySelector("#value1").value);
    var num2 = parseInt(document.querySelector("#value2").value);
    var operator = (document.querySelector("#operation").value);
    var answer;

    if (operator == "add") {
        answer = num1 + num2;
    }
    else if (operator =="minus") {
        answer = num1 - num2;
    }
    else if (operator =="multiply") {
        answer = num1 * num2;
    }
    else if (operator =="divide") {
        answer = num1 / num2;
    }

    document.querySelector("#result").innerHTML = answer;

    console.log("hello");
}
