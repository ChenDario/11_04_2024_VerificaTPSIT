import {comuni} from "./comuni.js";

function buildMap(){
    const map = L.map('map').setView([43.796418592563114, 11.27655940285674], 6);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return map
}

function buildMarker(map){
    for(let comune of comuni){
        const marker = L.marker([comune.coordinate.lat, comune.coordinate.lon]).addTo(map);
        marker.bindPopup("<b>" + comune.nome + "</b><br>" + comune.abitanti).openPopup();
    }
}

function main(){
    const map = buildMap();
    buildMarker(map);
}

document.addEventListener("DOMContentLoaded", main);

//Chart.js grafico 
const container = document.querySelector('.container')
const chartJs = document.querySelector('#chartJs')

const abitanti = [2751325,1370050,911962,843514,629476,560455,389772,362247,316169,298200];
const nome = ["Roma","Milano","Napoli","Torino","Palermo","Genova","Bologna","Firenze","Bari","Catania"]

const config = {
    type: 'bar',
    data: {
      labels: nome,
      datasets: [{
        label: 'Numero di abitanti',
        data: abitanti,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
};

const myCanvas = document.createElement('canvas');

new Chart(myCanvas, config);

chartJs.appendChild(myCanvas)




