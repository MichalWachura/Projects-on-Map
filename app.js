'use strict'
const projectsData = [
    {
        coords: [50.335149581262684, 18.625031114777066], 
        cardContent: {
            imgSrc: './img/1_img.jpg',
            title: 'Marina',
            description: 'Das Projekt umfasst die Schaffung einer Ausbildunggebäude auf einem Grundstück, das an natürlichen Wanderwegen liegt, die den Universitätscampus, die Wohnheime und einen Park verbinden. Dieser Standort führte zu der Idee, das Gebäude zu erhöhen und einen Treffpunkt und einen Durchgang zwischen den oben genannten Bereichen zu schaffen um keine künstlichen Barrieren für Anwohner und Studierende zu schaffen.'
        }
    },
    {
        coords: [50.28775541905412, 18.678656213027153], 
        cardContent: {
            imgSrc: './img/2_img.jpg',
            title: 'Center for Molecular Research',
            description: 'Das Projekt umfasst die Schaffung einer Ausbildunggebäude auf einem Grundstück, das an natürlichen Wanderwegen liegt, die den Universitätscampus, die Wohnheime und einen Park verbinden. Dieser Standort führte zu der Idee, das Gebäude zu erhöhen und einen Treffpunkt und einen Durchgang zwischen den oben genannten Bereichen zu schaffen um keine künstlichen Barrieren für Anwohner und Studierende zu schaffen.'
        }
    },
    {
        coords: [50.291203554612395, 18.78380927939491], 
        cardContent: {
            imgSrc: './img/3_img.jpg',
            title: 'Veloraum',
            description: 'Das Projekt umfasst die Schaffung einer Ausbildunggebäude auf einem Grundstück, das an natürlichen Wanderwegen liegt, die den Universitätscampus, die Wohnheime und einen Park verbinden. Dieser Standort führte zu der Idee, das Gebäude zu erhöhen und einen Treffpunkt und einen Durchgang zwischen den oben genannten Bereichen zu schaffen um keine künstlichen Barrieren für Anwohner und Studierende zu schaffen.'
        }
    }
    
];

// Funkcja do tworzenia karty dla danego projektu
function createProjectCard(content) {
    let card = document.createElement('div');
    card.classList.add('sidebar__card');

    // Dodawanie treści karty
    card.innerHTML = `
        <img src="${content.imgSrc}" alt="" class="card__img">
        <label class="card_titel">${content.title}</label>
        <p class="card_txt">${content.description}</p>
    `;

    // Dodawanie karty do sidebar
    document.querySelector('.sidebar').appendChild(card);

    return card;
}


// 'Data base'
/*
const projectCords = [[50.291203554612395, 18.78380927939491],[50.335149581262684, 18.625031114777066],[50.28775541905412, 18.678656213027153]]
*/


// MapsCoords
const mapCoords = [50.301701,18.6984087,12.75]

// General Map and TileLayer style
let map = L.map('map').setView(mapCoords, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let silesiaMapLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});
let silesiaMapLayer2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
silesiaMapLayer2.addTo(map);

let icon = L.icon({
    iconUrl: './map_pointer_blank.png',
    iconSize: [16, 32], // Rozmiar ikony
    iconAnchor: [16, 16], // Punkt zakotwiczenia ikony
    popupAnchor: [0, -16] // Punkt, w którym pojawi się popup
});

// Adding markes
projectsData.forEach((project) =>{
    let marker = L.marker(project.coords,{icon:icon}).addTo(map);

    marker.on('click', function () {
        // Tworzenie karty dla danego projektu
        let projectCard = createProjectCard(project.cardContent);

        // Toggle widoczności karty
        projectCard.classList.toggle('--active');
     
    
});
})