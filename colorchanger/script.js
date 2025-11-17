const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");

// Change color from color picker
colorPicker.addEventListener("input", function() {
    const selectedColor = colorPicker.value;
    colorBox.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor;
});

// Change color from buttons
function changeColor(color) {
    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
    colorPicker.value = color;
}
