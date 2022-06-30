const regionFilter = document.getElementById("regionFilter");
const regions = document.getElementById("regions");
const regionlistDiv = document.getElementById("regionlistDiv");
const regionsName = [
    "africa",
    "america",
    "asia",
    "europa",
    "oceania"
];
function showRegionsList() {
    regionlistDiv.classList.toggle("regionlist-off");
    regionlistDiv.classList.toggle("regionlist-on");
}
regions.addEventListener("click", showRegionsList);

//# sourceMappingURL=index.579125c3.js.map
