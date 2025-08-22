const switchBtn = document.querySelector('.switch'); 
const body = document.body;

if (switchBtn) {
    switchBtn.addEventListener('click', function () {
        body.classList.toggle('on');   
    });
} else {
    console.error(" No element with class 'switch' found in HTML.");
}
