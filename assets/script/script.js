
var activityLevel = {
    light: 1.375,
    moderate: 1.55,
    veryActive : 1.725,
    heavy: 1.9,
}

function maleBmrEquation(x, y, z) {
    return (x  * 10) + (6.25 * y) - (5 * z) + 5;
}

function maleBmrCalculator() {
    let kg = document.getElementById("weight").value;
    let cm = document.getElementById("height").value;
    let yrs = document.getElementById("age").value;
    alert(maleBmrEquation(kg, cm, yrs)) 
}

// (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yrs) + 5 = BMR for Males x Activity level = TDEE or Calories Out
