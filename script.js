//const apiKey = 'pk.eyJ1IjoiamltbXlkZXYiLCJhIjoiY2w4ZTd4ZzdxMDNkbDNvbDgxMXFwZ2ZreCJ9.G_1A1hhq9qUgepvJ7ltbvQ';

const destination = ([-37.21255068945561, 142.39814979780982]);
const beach = ([-37.342759817139886, 144.15077580229735]);
const btn1 = document.getElementById('btn1');


const map = L.map('map').setView(destination, 12);
// const map2 = L.map('mapbeach').setView(beach, 12);
L.control.scale().addTo(map);
// L.control.scale().addTo(map2);


L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7700dcb74dc54207b756a25da4729817', {
    maxZoom: 19,
    attribution: '© Thunderforest',
}).addTo(map);

// L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7700dcb74dc54207b756a25da4729817', {
//     maxZoom: 19,
//     attribution: '© Thunderforest',
// }).addTo(map2);


var marker1 = L.marker(destination).addTo(map);
// var marker2 = L.marker(beach).addTo(map2);

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

var loveheartdalesford = [
    [-37.342759817139886, 144.15077580229735],
    [-37.34227954118986, 144.1498959134438],
    [-37.34266585034788, 144.14877963653998],
    [-37.34377256287985, 144.1491473512848],
    [-37.344576485340724, 144.1503424242053],
    [-37.34350110659868, 144.1525487126739],
    [-37.34236306766268, 144.15195774254838],
    [-37.34236306766268, 144.15115664971154],
    [-37.34277025788729, 144.1506576082722],
]

var loveheart = [
    [-37.210979324104436, 142.3976413922175],
    [-37.20024823484137, 142.38416809103606],
    [-37.20057344178285, 142.36436642111786],
    [-37.21460055067116, 142.3513202705709],
    [-37.23438731285186, 142.35701734774617],
    [-37.25681315085801, 142.3831473864011],
    [-37.26753619239122, 142.40417390188125],
    [-37.243488457490905, 142.44541036913355],
    [-37.21975817122886, 142.45990437494996],
    [-37.19829696376962, 142.43540746371096],
    [-37.21081674322758, 142.3980496740715],
]

var polyline = L.polyline(loveheart, { color: 'blue' }).addTo(map);
// var mapbeach = L.polyline(loveheartdalesford, { color: 'blue' }).addTo(map2)


// zoom the map to the polyline
//map.fitBounds(polyline.getBounds());

marker1.bindPopup("<b>couples hike</b>").openPopup();
// marker2.bindPopup("<b>start point</b>").openPopup();
polyline.bindPopup();
// mapbeach.bindPopup();

// js code for 
//

// card js

$(document).ready(function() {
    $("firstcard").hide();
});

$( document ).ready(function() {
    console.log( "document loaded" );
});




function hideMap() {
        // on page load hide the content in div
        var card = document.getElementById('firstCard'); {
            if (card.style.display === "none") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }


    }


    let genBtn = document.getElementById("Genbutton");
    // generate button to randomly pick a trail map

    function generateRandomCard() {

        genBtn.addEventListener('click', generateRandomInteger)

        function generateRandomInteger(max) {
            var rand = Math.floor(Math.random() * max) + 1;
            document.getElementById('cardGenerated').innerText = rand;

            var cardGenerated = document.createElement("div");
            cardGenerated.classList.add(".generateCard");
            cardGenerated.appendChild("cardGenerated");

        }

    } generateRandomCard(6)





