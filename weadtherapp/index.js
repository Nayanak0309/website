const  button = document.getElementById("button-click");
const input = document.getElementById("input-text")

 async function getData(cityName){
   const promise=await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5859e6fba1cc493d94b155831252411&q=${cityName}&aqi=yes`);
 return await promise.json();
}

button.addEventListener("click",async()=>{
    const value=input.value;
    const result=await getData(value);
    console.log(result)
})