
 const API_KEY=`59dae2e6fb807908e7ff1cc88a9983ed`;
const setTempra = ()=>{
 const city= document.getElementById("city-name").value
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

 
fetch(url)
.then((response) => response.json())
.then((json) => setINNERtext(json))
 
}
const setText = (id,text) =>
{
 const doSome= document.getElementById(id).innerText=text

}

const setINNERtext =  temperature =>{
setText("city",temperature.name)
setText('temperature',temperature.main.temp)
setText('condition',temperature.temperature.weather[0].main)
}