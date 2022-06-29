const div = document.getElementById('one');


const axios = require('axios');
let response;
async function getData()
{
    try{
        response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response);
    } catch(error){
        console.log(error);
    }
    readData();
}

getData();

function readData()
{
    const newImg =  document.createElement('img')
    let img = response.data[0].flags.svg;
    div.appendChild(newImg);
    newImg.src = img;
}
