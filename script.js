document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const resultElement = document.getElementById("result");
  
    convertButton.addEventListener("click", function () {
      const temperatureValue = parseFloat(temperatureInput.value);
      const selectedUnit = unitSelect.value;
  
      if (!isNaN(temperatureValue)) {
        if (selectedUnit === "celsius") {
          const fahrenheitValue = (temperatureValue * 9/5) + 32;
          resultElement.textContent = `${temperatureValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
        } else if (selectedUnit === "fahrenheit") {
          const celsiusValue = (temperatureValue - 32) * 5/9;
          resultElement.textContent = `${temperatureValue}°F is ${celsiusValue.toFixed(2)}°C`;
        }
      }
    });
  });
  
