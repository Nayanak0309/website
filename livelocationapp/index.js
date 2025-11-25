const button=document.getElementById("button");

async function getData(lot,long){
   const promise=await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5859e6fba1cc493d94b155831252411&q=${lot},${long}&aqi=yes`);
 return await promise.json();
}

async function getLocation(position){
    const result=await getData(position.coords.latitude,position.coords.longitude);

console.log(result)
};
function failToGet(){
    console.log("some issue is there")
};

button.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(getLocation,failToGet)
})