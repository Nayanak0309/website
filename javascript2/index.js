const username = document.getElementById("username");
const button = document.getElementById("buttoni");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    const value = text.value;
    console.log(value);
    localStorage.setItem("name", value);
    location.reload(); // FIXED
});

window.addEventListener("load", () => {
    const value = localStorage.getItem("name");
    
        username.innerHTML = value;
    
});
