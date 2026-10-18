const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const message = document.getElementById("message");

const error = document.getElementById("error");


calculateBtn.addEventListener("click", function () {

    const weight = Number(weightInput.value);
    const heightCm = Number(heightInput.value);


    // Validation

    if (
        weight <= 0 ||
        heightCm <= 0 ||
        !weightInput.value ||
        !heightInput.value
    ) {

        error.textContent =
            "Please enter a valid weight and height.";

        return;
    }


    // Convert cm to meters

    const heightMeter = heightCm / 100;


    // BMI Formula

    const bmi = weight / (heightMeter * heightMeter);


    const roundedBMI = bmi.toFixed(1);


    // Display BMI

    bmiValue.textContent = roundedBMI;


    // Determine category

    if (bmi < 18.5) {

        bmiCategory.textContent = "Underweight";

        message.textContent =
            "Your BMI is below the normal range.";

        bmiCategory.style.color = "#38bdf8";

    }

    else if (bmi >= 18.5 && bmi < 25) {

        bmiCategory.textContent = "Normal Weight";

        message.textContent =
            "Your BMI is within the normal range.";

        bmiCategory.style.color = "#22c55e";

    }

    else if (bmi >= 25 && bmi < 30) {

        bmiCategory.textContent = "Overweight";

        message.textContent =
            "Your BMI is above the normal range.";

        bmiCategory.style.color = "#facc15";

    }

    else {

        bmiCategory.textContent = "Obesity";

        message.textContent =
            "Your BMI is in the obesity range.";

        bmiCategory.style.color = "#ef4444";

    }


    error.textContent = "";

});


/* Reset */

resetBtn.addEventListener("click", function () {

    weightInput.value = "";
    heightInput.value = "";

    bmiValue.textContent = "--";

    bmiCategory.textContent =
        "Enter your details";

    bmiCategory.style.color = "";

    message.textContent =
        "Your BMI result will appear here.";

    error.textContent = "";

});