const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');
btnElement.onclick= function() {
    const yourName = prompt('What is your name?');
    spanElement.textContent = `Hello, ${yourName}!`;
    spanElement.style.color = 'blue';
}