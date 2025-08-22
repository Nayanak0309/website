


const switchBtn = document.querySelector('.switch'); 
const bodyElement = document.body;

switchBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-theme');
});


