document.getElementById('calculate-btn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let status = '';
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obese';
    }

    document.getElementById('bmi-value').textContent = bmi;
    document.getElementById('bmi-status').textContent = status;
    document.getElementById('result').classList.remove('hidden');
});
