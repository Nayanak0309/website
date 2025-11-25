const button = document.getElementById("button-click");

function showTime(){
    const currentTime=new Date();
    const gettime=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById("timer").innerText=gettime;

}
 let interval = setInterval(showTime,1000);

button.addEventListener("click",()=>{
    clearInterval(interval);
})





