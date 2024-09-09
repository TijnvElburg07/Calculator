var firstNumber = "0";
var secondNumber = "";
var typeButton = "none";
var dotUsed = false;
var isDarkmode = false;

function sendAlert() {
    const button = document.getElementById("ac");
    button.addEventListener("click", function() {
        alert("Je hebt op ac geklikt");
    });
}

function changeValue(number) {
    const input = document.getElementById("display");

    
    if (number === "." && dotUsed) {
        return; 
    }

    if (typeButton !== "none") {
        if (secondNumber === "" && number === ".") {
            secondNumber = "0" + number.toString();
        } else {
            secondNumber += number.toString();
        }
    } else {
        if (firstNumber === "0" && number !== ".") {
            firstNumber = number.toString();
        } else {
            firstNumber += number.toString();
        }
    }

    dots(number);

    input.value = firstNumber + (typeButton !== "none" ? " " + typeButton + " " : "") + secondNumber;
}

function clearNumber() {
    const input = document.getElementById("display");

    firstNumber = "0";
    secondNumber = "";
    typeButton = "none";
    dotUsed = false; 
    input.value = firstNumber;
    activeButton();
    input.style.fontSize = "12px";
}

function setButton(type) {
    const input = document.getElementById("display");

    if (typeButton === "none") {
        typeButton = type;
    } else if (secondNumber !== "") {
        const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber), typeButton);

        firstNumber = result.toString();
        secondNumber = "";
        typeButton = type;
    }

    dotUsed = false; 
    input.value = firstNumber + " " + typeButton + " " + secondNumber;
    activeButton();
}

function calculate() {
    const input = document.getElementById("display");

    if (secondNumber === 0){
        return;
    }

    let sum;

    if (typeButton === "+"){
        sum = +firstNumber + +secondNumber;
        input.value = sum;
    }

    if (typeButton === "-"){
        sum = firstNumber - secondNumber;
        input.value = sum;
    }

    if (typeButton === "/"){
        sum = firstNumber / secondNumber;
        input.value = sum;
    }

    if (typeButton === "*"){
        sum = firstNumber * secondNumber;
        input.value = sum;
    }

    firstNumber = sum.toString();
    secondNumber = "";
    typeButton = "none";
    dotUsed = false; 
    activeButton();
}

function activeButton() {
    var minus = document.getElementById("-");
    var plus = document.getElementById("+");
    var devide = document.getElementById("/");
    var multi = document.getElementById("*");

    minus.style.backgroundColor = "rgb(255, 231, 255)";
    plus.style.backgroundColor = "rgb(255, 231, 255)";
    devide.style.backgroundColor = "rgb(255, 231, 255)";
    multi.style.backgroundColor = "rgb(255, 231, 255)";

    if (typeButton === "-") {
        minus.style.backgroundColor = "green";
    }

    if (typeButton === "+") {
        plus.style.backgroundColor = "green";
    }

    if (typeButton === "/") {
        devide.style.backgroundColor = "green";
    }

    if (typeButton === "*") {
        multi.style.backgroundColor = "green";
    }
}

function switchNumber() {
    const input = document.getElementById("display");

    if (firstNumber === "0") {
        return;
    }

    let switchSom = firstNumber - firstNumber - firstNumber;
    input.value = switchSom;
    firstNumber = switchSom.toString();
}

function delenDoor() {
    const input = document.getElementById("display");

    if (firstNumber === "0") {
        return;
    }

    var result = firstNumber / 100;

    input.value = result;
    firstNumber = result.toString();
}

function dots(number) {
    if (number === ".") {
        dotUsed = true;
    }
}

function del() {
    const input = document.getElementById("display")

    if (firstNumber === "0") {      
        return
    }

    const str = firstNumber.slice(0, -1)
    firstNumber = str

    input.value = firstNumber
}

function copy() {
    input = document.getElementById("display")

    input.value = "Copyright | Owned by Tijn van Elburg"
    input.style.fontSize = "9px"
}

function darkmode() {
    const dm = document.getElementById("darkmode");
    const body = document.body;
    const calc = document.getElementById("calc");
    
    if (isDarkmode === false) {
        dm.style.backgroundColor = "rgb(152, 98, 152)";
        dm.style.color = "black";
        dm.innerText = "Disable Darkmode";  
        body.style.backgroundColor = "black";
        calc.style.border = "2px solid white"
        isDarkmode = true;
    } else {
        dm.style.backgroundColor = "black";
        dm.style.color = "white";
        dm.innerText = "Enable Darkmode";  
        body.style.backgroundColor = "white";
        calc.style.border = "2px solid black"
        isDarkmode = false;
    }
}