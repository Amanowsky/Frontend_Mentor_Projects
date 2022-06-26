const axios = require('axios');
const apiKey = 'at_Ra01PWZMXAn9vPlnTQTYZSjFkyz56';
const button = document.getElementById('submit');
const ipadressDiv = document.getElementById('ip');
const locationDiv = document.getElementById('location');
const timezoneDiv = document.getElementById('timezone')
const ispDiv = document.getElementById('isp');
let response;

// Download ip from input form
function getIp() {
    const ip = document.getElementById('input').value;
    return ip;
}

//Sens ip to Api and get response, Set new data in span, Generate new map
async function getLocation() {
    var ip = getIp()
    try {
        response = await axios.get('https://geo.ipify.org/api/v2/country,city,vpn?apiKey=' + apiKey + '&ipAddress=' + ip);
    } catch (error) {
        //Wrong Ip adress
        alert('Wrong Ip address!');
        return 0;
    }
    setData(ip);
    document.getElementById('map').innerHTML = "";
    setMap(Number(response.data.location.lat),Number(response.data.location.lng));
}

//Set new data in span
function setData(ip) {
    ipadressDiv.textContent = ip;
    locationDiv.textContent = response.data.location.city + ',' + response.data.location.country;
    timezoneDiv.textContent = response.data.location.timezone;
    ispDiv.textContent = response.data.isp;
}
//Generate new map(x and y are co-ordinates)
function setMap(x,y) {
    //Reset div with map
    document.getElementById('weatermap').innerHTML = "<div id='map'></div>"
    //Set new map
    var map = L.map('map').setView([x,y], 13);
    //Set background
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    //Set custom icon on marker
    var myIcon = L.icon({
        iconUrl: 'http://localhost:1234/icon-location.c3032bc6.svg',
        iconSize: [35, 45],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });
    //Set marker on map
    L.marker([x,y], { icon: myIcon }).addTo(map);
}



button.addEventListener("click", getLocation);
//set Temple map
window.onload = setMap(34.04915,-118.09462);