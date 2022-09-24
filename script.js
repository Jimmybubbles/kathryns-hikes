//const apiKey = 'pk.eyJ1IjoiamltbXlkZXYiLCJhIjoiY2w4ZTd4ZzdxMDNkbDNvbDgxMXFwZ2ZreCJ9.G_1A1hhq9qUgepvJ7ltbvQ';

const destination = ([-37.21255068945561, 142.39814979780982]);
const beach = ([-38.22562590485055, 147.3822653262942]);
const btn1 = document.getElementById('btn1');


const map = L.map('map').setView(destination, 12);
const map2 = L.map('mapbeach').setView(beach, 12);
L.control.scale().addTo(map);
L.control.scale().addTo(map2);


L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7700dcb74dc54207b756a25da4729817', {
    maxZoom: 19,
    attribution: '© Thunderforest',
}).addTo(map);

L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7700dcb74dc54207b756a25da4729817', {
    maxZoom: 19,
    attribution: '© Thunderforest',
}).addTo(map2);


var marker1 = L.marker(destination).addTo(map);
var marker2 = L.marker(beach).addTo(map2);

var latlngs = [
    [-37.21255068945561, 142.39814979780982],
    [-37.227705423132925, 142.40411562055428],
    [-37.24834176475045, 142.43226808595017],
    [-37.2354583722141, 142.44979069658905],
    [-37.20757270772265, 142.4291913317434],
    [-37.21255068945561, 142.39814979780982],
];

var nineMileBeach = [
    [-38.22562590485055, 147.3822653262942],
    [-38.23485878188803, 147.37282384107368],
    [-38.24522545157238, 147.35789087975553],
    [-38.24757098926865, 147.35528965423558],
    [-38.25218618115657, 147.34854573622093],
];

var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
var mapbeach = L.polyline(nineMileBeach, {color: 'blue'}).addTo(map2)


// zoom the map to the polyline
//map.fitBounds(polyline.getBounds());

marker1.bindPopup("<b>start point</b>").openPopup();
marker2.bindPopup("<b>start point</b>").openPopup();
polyline.bindPopup();
mapbeach.bindPopup();






function changeMaps() {

    btn1.addEventListener('click', function handleClick() {
        const initialText = 'Click me';
      
        btn1.innerHTML = `<span><span>`;
      });

}
changeMaps()