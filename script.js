// Function to update the input box with the provided value
function disp(val){
    document.getElementById("inputBox").value += val;
}

// Function to handle keypress events and update the input box accordingly
function myFunc(e){
    // Check if the pressed key is a valid input and update the input box
    if (e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || 
        e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '00' || e.key == '+' || e.key == '-' 
        || e.key == '*' || e.key == '/' || e.key == '%' || e.key == '.' || e.key == '(' || e.key == ')' )
    {
        document.getElementById("inputBox").value += e.key;
    }
}

// Event listener to handle Enter key press
var cal = document.getElementById("calc");
cal.onkeyup = function (e){
    if (e.keyCode === 13){
        console.log("Enter");
        let x = document.getElementById("inputBox").value;
        solve();  // Call the solve function to evaluate and display the result
        console.log(x);
    }
}

// Function to evaluate the mathematical expression and update the input box
function solve()
{
    let x = document.getElementById("inputBox").value;
    let y = math.evaluate(x);  // Use math.js to evaluate the expression
    document.getElementById("inputBox").value = y;
}

// Function to clear the input box
function clr()
{
    document.getElementById("inputBox").value = "";
}

// Function to delete the last character from the input box
function dlt() {
    var d = document.getElementById('inputBox');
    d.value = d.value.slice(0,-1);
}
