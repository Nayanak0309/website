const colorPicker = document.getElementById("colorPicker");
const village = document.getElementById("village");
const resetBtn = document.getElementById("resetBtn");

village.addEventListener("click", (e) => {
  if (e.target.tagName !== "svg") {
    e.target.setAttribute("fill", colorPicker.value);
  }
});

resetBtn.addEventListener("click", () => {
  const parts = village.querySelectorAll("rect, polygon, circle");
  parts.forEach(part => {
    if (part.id !== "") {
      part.setAttribute("fill", "#ffffff");
    }
  });
});
