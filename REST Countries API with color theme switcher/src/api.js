
const axios = require('axios');
let response;
let index = 0;
const contentbox = document.getElementById('content');




async function getData() {
    try {
        response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,continents');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    readData(12);
}


getData();

function readData(k) {
    for (var i = 0; i < k; i++) {
        window.addEventListener('scroll', infinityScroll);
        const newArticle = document.createElement('article');
        newArticle.dataset.index = index;
        newArticle.dataset.continent = response.data[i].continents;
        newArticle.dataset.country = response.data[i].name.common;


        contentbox.appendChild(newArticle);
        newArticle.innerHTML = "<div class='imgflag' style='background-image: url(" + response.data[index].flags.svg + ")'> </div><div class='headers'><h2>" + response.data[index].name.common +
            "</h2><h3>Population: <span>" + response.data[index].population + "</span></h3><h3>Region: <span>" + response.data[index].region + "</span></h3><h3>Capital: <span>" +
            response.data[index].capital + "</span></h3>";
        index++;
    }
}

function infinityScroll() {
    if (index > 249) {
        window.removeEventListener('scroll', infinityScroll);
        readData(1);
        return 0;
    }
    var top = window.scrollY;
    var height = document.body.offsetHeight - window.innerHeight;
    var diffrent = Number(height) / Number(top);
    console.log(top, height);
    if (Number(top) > Number(height)) {
        readData(12);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let marks = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ' ']
let upMarks = [];
marks.forEach((element) => {upMarks.push(element.toUpperCase())});

function searchCountry() {
    regiontext.innerText = "Filter by Region";
    let value = input.value;
    if (value == "") { return contentbox.innerHTML="" , index = 0 , readData(12);};
    marks.forEach((element) => {
        if(element == value[0]) return contentbox.innerHTML = "";
    })
    upMarks.forEach((element) => {
        if(element == value[0]) return contentbox.innerHTML = "";
    })
    let name = capitalize(value);
    console.log(name);
    let length = name.length;
    let country = [];
    response.data.forEach((element) => {
        for (var i = 0; i < length; i++) {
            if (element.name.common[i] != name[i]) {
                return 0;
            }
            
        }
        return country.push(element);
    })
    console.log(country);
    showResult(country);
}

function showResult(country)
{
    window.removeEventListener('scroll', infinityScroll);
    for (var i = 0; i < country.length; i++) {
        const newArticle = document.createElement('article');
        newArticle.dataset.continent = response.data[i].continents;
        newArticle.dataset.country = response.data[i].name.common;


        contentbox.appendChild(newArticle);
        newArticle.innerHTML = "<div class='imgflag' style='background-image: url(" + country[i].flags.svg + ")'> </div><div class='headers'><h2>" + country[i].name.common +
            "</h2><h3>Population: <span>" + country[i].population + "</span></h3><h3>Region: <span>" + country[i].region + "</span></h3><h3>Capital: <span>" +
            country[i].capital + "</span></h3>";
    }
}


const regionBtns = document.getElementsByName('region');
const regiontext = document.getElementById('regiontext');
function filterByRegion(e)
{
    let target = e.target;
    let continent = target.textContent;
    let country = [];
    response.data.forEach((element) => {
       
            if(element.region == continent) return country.push(element);
               
        }
    )
    
    contentbox.innerHTML = "";
    regiontext.innerText = continent;
    showResult(country);
    
}
    for(var i=0;i<regionBtns.length;i++)
    {
        regionBtns[i].addEventListener('click',(e) => {
            filterByRegion(e);
        })
        
    }

const input = document.getElementById('input');
input.addEventListener('keyup', searchCountry);


/* <article>
            <div class="imgflag"></div>
            <div class="headers">
                <h2>Germany</h2>
                <h3>Population: <span>81.770.900</span></h3>
                <h3>Region: <span>Europe</span></h3>
                <h3>Capital: <span>Berlin</span></h3>
            </div>
            https://restcountries.com/v2/all?fields=name,capital,flags,population,region,continents,car
            https://restcountries.com/v3.1/alpha?codes=col,pe,at
        </article> */