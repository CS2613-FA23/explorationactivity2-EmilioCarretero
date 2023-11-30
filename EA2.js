let map = L.map('map').setView([45.9636, -66.6431], 13);
let marker = L.marker([45.9636, -66.6431]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

function updateMarker() {
    let latitude = parseFloat(document.getElementById('latitude').value);
    let longitude = parseFloat(document.getElementById('longitude').value);
    marker.bindPopup("<b>Current location:</b><br>(" + latitude + ", " + longitude + ")").openPopup();
    marker.setLatLng([latitude, longitude]).update();
    map.setView([latitude, longitude], 13);
}