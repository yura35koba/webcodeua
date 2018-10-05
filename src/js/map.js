function initMap() {
    var odessa = {lat: 46.485610, lng: 30.741144};

    myMap = new google.maps.Map (document.getElementById('map'),{
        center: odessa,
        zoom: 11
    });

    var marker = new google.maps.Marker({
        position: odessa,
        map: myMap
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<p>Одесский национальный<br>академический театр<br> оперы и балета</p>'
    });

    marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
    });
}
initMap();

