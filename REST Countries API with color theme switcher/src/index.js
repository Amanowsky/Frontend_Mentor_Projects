const regionFilter = document.getElementById('regionFilter');
const regions = document.getElementsByName('region');
const regionlistDiv = document.getElementById('regionlistDiv');
const regionsName = ['africa','america','asia','europa','oceania'];

function showRegionsList(){
    regionlistDiv.classList.toggle('regionlist-off');
    regionlistDiv.classList.toggle('regionlist-on');
}

regionFilter.addEventListener("click",showRegionsList);
regionFilter.addEventListener('blur',showRegionsList);
