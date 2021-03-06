$(function () {

    function initMap() {

        var location = new google.maps.LatLng(10.346349,-67.074454);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
        var markerImage = 'marker.png';

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});