"use strict";
var testArray = [{
        id: 1,
        name: "Children's Palace-Palacio de los niños",
        type: "Amusement",
        lat: 43.3542653,
        lng: -5.8511267,
        address: "Parque de Invierno, Pedro Masaveu, s/n, 33007 Oviedo, Asturias, Spain",
        tel: "+34 984 08 40 45"
    },
    {
        id: 2,
        name: "Archaeological Museum of Asturias",
        type: "Museum",
        lat: 43.3628378,
        lng: -5.8450027,
        address: "Calle San Vicente, 3, 33003 Oviedo, Asturias, Spain",
        tel: "+34 985 20 89 77"
    },
    {
        id: 3,
        name: "Restaurant Sidrería Tierra Astur Gascona",
        type: "Restaurant",
        lat: 43.3628378,
        lng: -5.8450027,
        address: "Calle Gascona, 1, 33001 Oviedo, Asturias, Spain",
        tel: "+34 985 20 25 02"
    },
    {
        id: 4,
        name: "Monastery of Saint Pelagius",
        type: "Place of Worship",
        lat: 43.3628378,
        lng: -5.8450027,
        address: "Calle San Vicente, 11, 33003 Oviedo, Asturias, Spain",
        tel: "+34 985 21 89 81"
    },
    {
        id: 5,
        name: "Parrilla restaurante Buenos Aires",
        type: "Restaurant",
        lat: 43.3820506,
        lng: -5.8555167,
        address: "Carretera del Naranco, s/n, 33012 Oviedo, Asturias, Asturias, Spain",
        tel: "+34 985 29 59 07"
    },
    {
        id: 6,
        name: "Oviedo Cathedral",
        type: "Place of Worship",
        lat: 43.362838,
        lng: -5.8432524,
        address: "Plaza Alfonso II el Casto, s/n, 33003 Oviedo, Asturias, Spain",
        tel: "+34 985 21 96 42"
    },
    {
        id: 7,
        name: "Los Prados Shopping Mall",
        type: "Shop",
        lat: 43.3721517,
        lng: -5.8331534,
        address: "Calle Joaquín Costa, s/n, 33011 Oviedo, Asturias, Spain",
        tel: "+34 985 11 23 17"
    },
    {
        id: 8,
        name: "University of Oviedo",
        type: "Education",
        lat: 43.3608852,
        lng: -5.8512674,
        address: "Calle San Francisco, 1, 33003 Oviedo, Asturias, Spain",
        tel: "+34 985 10 30 00"
    },
    {
        id: 9,
        name: "San Miguel de Lillo",
        type: "Archaeological",
        lat: 43.3688247,
        lng: -5.8708653,
        address: "Lugar Lillo, 1, 33194 Oviedo, Asturias, Spain",
        tel: "+34 985 11 49 01"
    },
    {
        id: 10,
        name: "Museo Fernando Alonso",
        type: "Museum",
        lat: 43.4023094,
        lng: -5.8622585,
        address: "33690, Asturias, Spain",
        tel: "+34 984 18 08 08"
    },
    {
        id: 11,
        name: "Santa María del Naranco",
        type: "Archaeological",
        lat: 43.3806257,
        lng: -5.8666037,
        address: "Monte Naranco, s/n, 33012 Oviedo, Asturias, Spain",
        tel: "+34 638 26 01 63"
    },
    {
        id: 12,
        name: "Monte Naranco",
        type: "Park",
        lat: 43.3709191,
        lng: -5.8718809,
        address: "33194, Asturias, Spain",
        tel: ""
    },
    {
        id: 13,
        name: "Ciclos Fran",
        type: "Shop",
        lat: 43.3701542,
        lng: -5.8244384,
        address: "Calle Juan M Sánchez-Ocaña S, 33010 Oviedo, Asturias, Spain",
        tel: "+34 985 21 43 84"
    },
    {
        id: 14,
        name: "El Fartuquín",
        type: "Restaurant",
        lat: 43.3585869,
        lng: -5.8473483,
        address: "Calle Carpio, 19, 33009 Oviedo, Asturias, Spain",
        tel: "+34 985 22 99 71"
    },
    {
        id: 15,
        name: "Parque de Invierno",
        type: "Park",
        lat: 43.352919,
        lng: -5.85207,
        address: "Barrio Campiello, s/n, 33007 Oviedo, Asturias, Spain",
        tel: "+34 984 08 38 00"
    },
    {
        id: 16,
        name: "Alimerka Supermarket",
        type: "Supermarket",
        lat: 43.3690108,
        lng: -5.8236416,
        address: "Calle Tenderina Baja, 205, 33010 Oviedo, Asturias, Spain",
        tel: "+34 985 76 08 86"
    },
    {
        id: 17,
        name: "Club de Natación Ciudad de Oviedo",
        type: "Sport",
        lat: 43.3637023,
        lng: -5.8749445,
        address: "Calle José María Martínez Cachero, s/n, 33013 Oviedo, Asturias, Spain",
        tel: "+34 985 27 31 55"
    },
    {
        id: 18,
        name: "Biblioteca Municipal Villa Magdalena",
        type: "Library",
        lat: 43.3616328,
        lng: -5.8584902,
        address: "Av. de Galicia, 0, 33005 Oviedo, Asturias, Spain",
        tel: "+34 985 27 06 01"
    },
    {
        id: 19,
        name: "I.E.S Doctor Fleming",
        type: "Education",
        lat: 43.3574866,
        lng: -5.8553966,
        address: "Calle Dr. Fleming, 7, 33005 Oviedo, Asturias, Spain",
        tel: "+34 985 23 08 99"
    },
    {
        id: 20,
        name: "Pistas de Tenis y Padel del Parque del Oeste",
        type: "Sport",
        lat: 43.3618119,
        lng: -5.8746394,
        address: "Calle Antón Sanchez, s/n, 33013 Oviedo, Asturias, Spain",
        tel: "+34 985 27 37 21"
    }
];
//start position
const OVIEDO_LAT_LNG = {
    lat: 43.36029,
    lng: -5.84476
};
//global variables
var map;

var ViewModel = function() {
    var self = this;

    this.toggleList = ko.observable(true);
    this.toggle = function() {
        this.toggleList(!this.toggleList()); //this line coding help received from "http://jsfiddle.net/FgVxY/4/"
    };

    this.searchText = ko.observable('');
    this.locationsList = ko.observableArray([]);
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: OVIEDO_LAT_LNG,
        zoom: 13,
        mapTypeControl: true
    });

    var bounds = new google.maps.LatLngBounds();
   
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    //create an array of places to manipulate in the app
    testArray.forEach(function(newPlace) {
        self.locationsList.push(new Place(newPlace));
    });
	//filter looks for input, if no input, returns the whole list
	//returns just those that match and hides unused markers 
    this.searchFilter = ko.computed(function() {
        var filteredList = ko.observableArray([]);
        var searchInput = self.searchText();
        if (!searchInput) {
            self.locationsList().forEach(function(place) {
                place.marker.setVisible(true);
                bounds.extend(place.marker.position);
            });
            return self.locationsList();
        } else {
            self.locationsList().forEach(function(place) {
                if (place.name.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0) {
                    place.marker.setVisible(true);
                    bounds.extend(place.marker.position);
                    filteredList.push(place);
                } else {
                    place.marker.setVisible(false);
                }
            });
            map.fitBounds(bounds);
            return filteredList();
        }
    });
    //connects click on list-item text to marker event added in Place constructor
    this.listItemClicked = function(item) {
        google.maps.event.trigger(item.marker, "click");
    };
};
//constructor of all places, initialize a default list
var Place = function(newPlace) {
    var self = this;
    this.infoBox = new google.maps.InfoWindow();
    this.id = newPlace.id;
    this.name = newPlace.name;
    this.type = newPlace.type;
    this.Lat = newPlace.lat;
    this.Lng = newPlace.lng;
    this.address = newPlace.address;
    this.tel = newPlace.tel;
    this.position = new google.maps.LatLng({
        lat: this.Lat,
        lng: this.Lng
    });
    this.infoText = '<div class="infoArea"><strong>' + this.name + '</strong><br>' + this.address + '<br>' + this.tel + '<br></div>';

    //construct a new marker for each place
    this.marker = new google.maps.Marker({
        map: map,
        title: this.name,
        position: this.position,
        icon: 'img/favorites_24x24.png',
        animation: google.maps.Animation.DROP,
        clickable: true,
        id: this.id
    });
    
    //add maker click event, with bouncing marker and info box info populated
    this.marker.addListener('click', function() {
        if (self.infoBox !== self.marker) {
            self.infoBox.marker = self.marker;
            self.marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                self.marker.setAnimation(null);
            }, 1000);
            wikiLink(self.name, self.infoBox, self.infoText);
            self.infoBox.open(map, this);
        }
    });
};
//call wikipedia api and add page link to info box
var wikiLink = function(wikiSearchName, infoBox, text) {
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + wikiSearchName + '&format=json&callback=wikiCallback';
    $.ajax({
        url: wikiUrl,
        dataType: "jsonp"
    }).done(function(response) {
        var articleList = response[1];
        var link = 'http://en.wikipedia.org/wiki/' + articleList;
        if (response[1].length < 1) {
            infoBox.setContent(text + '<hr>No Wikipedia Page Available<br></a></div>');
        } else {
            infoBox.setContent(text + '<hr><a target="_blank" href="' + link + '">Wikipedia Page<br></a></div>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("No wikipedia service available");
    });
};
//kick start app
function letsGo() {
    ko.applyBindings(new ViewModel());
}
//google error
var oops = function() {
    alert("OOPs! Connection to Google Maps Error!");
};