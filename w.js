let API_key = "784b7496b9f2a045dcf039b7390c321e";
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let type = document.getElementById("type");
let input = document.getElementById("inp");
let speed= document.getElementById("speed");

let API =" https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    let jsonData =await getData.json();
    console.log(getData);
     
    console.log(jsonData);
    if(jsonData.cod == 400){
        alert("Please Enter Location")
        image.src="error1.png"
        temp.innerHTML=""
    type.innerHTML=""
    speed.innerHTML=""
    }
    if(jsonData.cod == 404){
        alert("Please Enter the correct Location");
        image.src="error2.png";
        temp.innerHTML=""
    type.innerHTML=""
    speed.innerHTML=""
    }

    
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main; 
    speed.innerHTML= jsonData.wind.speed + "m/s"; 
   
    if(type.innerHTML == "Clouds"){
        image.src="clouds.png"
    }else if(type.innerHTML == "Haze"){
        image.src="haze.png"
    }
    else if(type.innerHTML == "Rain"){
        image.src="rain.png"
    }
    else if(type.innerHTML == "Snow"){
        image.src="rain.png"
    }
    else if(type.innerHTML == "Clear"){
        image.src="clears.png"
    }
    else if(type.innerHTML == "Strom"){
        image.src="strom.png"
    }else{
        image.src="clouds.png"

    }
    
    input.value=""

}

function myFun(){
 search = input.value;
data(search)
}