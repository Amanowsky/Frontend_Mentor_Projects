var map = L.map("map").setView([
    51.505,
    -0.09
], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
}).addTo(map);
var myIcon = L.icon({
    iconUrl: "http://localhost:1234/icon-location.c3032bc6.svg",
    iconSize: [
        35,
        45
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

//# sourceMappingURL=index.0a57cef4.js.map
