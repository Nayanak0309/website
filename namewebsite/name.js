const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');
btnElement.addEventListener("click",function() {
    const yourName = prompt('What is your name?');
    spanElement.textContent = yourName
})