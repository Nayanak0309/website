const genaratebtn = document.getElementById('generator');
const numberElement = document.getElementById('updateContent');

genaratebtn.addEventListener("click", ()=> {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numberElement.textContent = randomNumber;
});