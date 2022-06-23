
const buttonArray = document.getElementsByName("timebutton");

//Download clicked button
function getTarget(e) {
    return e.target
}

//Change style of button
function activEffect(e) {
    //reset style
    buttonArray.forEach(element => element.classList = "buttonOff")

    //set style
    const target = getTarget(e);
    target.classList = "buttonPush";

}

for (var i = 0; i < 3; i++) {
    buttonArray[i].addEventListener("click", function (e) {
        activEffect(e);
    })
}

window.onload = buttonArray[1].classList = "buttonPush";
