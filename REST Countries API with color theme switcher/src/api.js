
const axios = require('axios');
let response;
let index = 0;





async function getData() {
    try {
        response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,continents');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    window.addEventListener('scroll',test);
   readData(12);
}
    

   getData();

function readData(k) {
        const contentbox = document.getElementById('content');
    for (var i = 0; i < k; i++) {
        
        const newArticle = document.createElement('article');
        newArticle.dataset.index = index;
        newArticle.dataset.continent = response.data[i].continents;
        newArticle.dataset.country = response.data[i].name.common;
        

        contentbox.appendChild(newArticle);
        newArticle.innerHTML = "<div class='imgflag' style='background-image: url(" + response.data[index].flags.svg + ")'> </div><div class='headers'><h2>" +  response.data[index].name.common +
        "</h2><h3>Population: <span>" + response.data[index].population + "</span></h3><h3>Region: <span>"+ response.data[index].region + "</span></h3><h3>Capital: <span>" +
        response.data[index].capital + "</span></h3>";
        index++;
    }
}

function test()
{
    if(index>249)
    {
        window.removeEventListener('scroll',test);
        readData(1);
        return 0;
    }
    var top = window.scrollY;
    var height = document.body.offsetHeight - window.innerHeight;
    var diffrent = Number(height) / Number(top);
    console.log(top,height);
    if(Number(top)>Number(height))
    {
        readData(12);
    }
    
    
}





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