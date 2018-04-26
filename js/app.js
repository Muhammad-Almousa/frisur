//Contact Map

if ($("#googleMap").length > 0)
{
    // These are the values for your desired longitude and latitude
    var lat=50.085893;
    var long=8.442430;
    
    var myCenter = new google.maps.LatLng(
        lat, long 
    );
    function changeMarker(newLogo) {
        "use strict";
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: newLogo
        });
        var map = new google.maps.Map(document.getElementById("googleMap"), {
            center: myCenter,
            zoom: 12,
        });
        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, "load", function () {
        changeMarker("images/pin.jpg");
    });
}

