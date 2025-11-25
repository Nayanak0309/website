const myname=document.getElementById("name");
const button = document.getElementById("clickme");

function sizeOfLetter(size){

    function sizeOf(){
        myname.style.fontSize=`${size}px`

    }
    return sizeOf
}

let change20=sizeOfLetter(20);

button.addEventListener("click",change20)