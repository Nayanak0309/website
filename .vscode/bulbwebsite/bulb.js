


const tn = document.querySelector('.switch'); // must match your HTML element
const ment = document.body;

if (tn) {   // ✅ check if element exists
    tn.addEventListener('click', function () {
        ment.classList.toggle('dark-theme');
    });
} else {
    console.error("❌ No element with class 'switch' found in HTML.");
}

