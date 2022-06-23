import data from "../src/data.json";


const categories = ['work', 'play', 'study', 'exercise', 'social', 'selfcare'];

const timeBnts = document.getElementsByName("timebutton");


function SetTimes(timeButton) {
    for (var i = 0; i < 6; i++) {
        // Download time data from data.json
        let currenttime = data[i].timeframes[timeButton].current;
        let lasttime = data[i].timeframes[timeButton].previous;

        //Load divs
        let currenttimeDiv = document.getElementById(categories[i] + "-currenttime");
        let lasttimeDiv = document.getElementById(categories[i] + "-lasttime");

        //Change time
        currenttimeDiv.textContent = currenttime + "hrs";
        lasttimeDiv.textContent = "Last week - " + lasttime + "hrs";
    }
}


timeBnts[0].addEventListener("click", function () {
    SetTimes('daily')
});
timeBnts[1].addEventListener("click", function () {
    SetTimes('weekly')
});
timeBnts[2].addEventListener("click", function () {
    SetTimes('monthly')
});
//First load
window.onload = SetTimes('weekly');

