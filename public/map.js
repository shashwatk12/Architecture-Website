// Initialize and add the map
function initMap() {
    // Location coordinates
    var location = { lat: -34.397, lng: 150.644 };

    // Create a new map instance centered at the location
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location
    });

    // Define the content for the info window
    var contentString = "<div><h2>RS Architects</h2><p>123 Example Street, City, Country</p></div>";

    // Create a new info window instance with the content
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Define the marker properties
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "RS Architects"
    });

    // Add a click event listener to the marker to open the info window
    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });
}
