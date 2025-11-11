const buttons = document.querySelectorAll(".color-btn");
const scoop = document.getElementById("scoop");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    scoop.style.backgroundColor = color;
  });
});
