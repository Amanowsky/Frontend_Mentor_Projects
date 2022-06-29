const regionFilter = document.getElementById("regionFilter");
const regions = document.getElementsByName("region");
const regionlistDiv = document.getElementById("regionlistDiv");
const regionsName = [
    "africa",
    "america",
    "asia",
    "europa",
    "oceania"
];
function showRegionsList() {
    console.log("test");
    regionlistDiv.classList.toggle("regionlist-off");
    regionlistDiv.classList.toggle("regionlist-on");
}
regionFilter.addEventListener("click", showRegionsList);

//# sourceMappingURL=index.579125c3.js.map
