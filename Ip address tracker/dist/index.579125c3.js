var map = L.map("map").setView([
    51.505,
    -0.09
], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "\xa9 OpenStreetMap"
}).addTo(map);
var myIcon = L.icon({
    iconUrl: "/icon-location.svg",
    iconSize: [
        38,
        95
    ],
    iconAnchor: [
        22,
        94
    ],
    popupAnchor: [
        -3,
        -76
    ]
});
L.marker([
    51.505,
    -0.09
], {
    icon: myIcon
}).addTo(map);

//# sourceMappingURL=index.579125c3.js.map
