# Package Overview

1. ### **Which package/library did you select?**
	- I selected the JavaScript Leaflet package [Found at the Leaflet website.](https://leafletjs.com/index.html "Leaflet package found at the Leaflet web")

2. ### **What is the package/library?**
	- This package allows you to use an accurate world map, you can add markers using the latitude and longitude.
	- I used this package to create a small program where you can add a latitude and longitude in the top right corner. After pressing the update marker button, you will be brought to your new location (using the *setLatLng()* function). I create a popup using *bindPopup()* on the marker to show your current co-ordinates. I used very little HTML code to make this functional and I added some CSS to make the user interface a bit more pleasing.


3. ### **What are the functionalities of the package/library?**
	- Different Leaflet functionalities include:
		- **Mobile usage**
			Create fullscreen maps for mobile devices, supported on iOS and Android devices. Ability to access devices current location too.
			**Example code:**
			```
			function onLocationFound(e) {
			    var radius = e.accuracy;

			    L.marker(e.latlng).addTo(map)
			        .bindPopup("You are within " + radius + " meters from this point").openPopup();

			    L.circle(e.latlng, radius).addTo(map);
			}

			map.on('locationfound', onLocationFound);
			```
			Sample Code: [Leaflet examples.](https://leafletjs.com/examples/mobile/ "Leaflet examples")
		- **Layer Control**
			Managing layers and the using the layer switching control. Add several layers into one map. Code found at [Leaflet examples.](https://leafletjs.com/examples/layers-control/ "Leaflet examples")
		- **Accessible maps**
			Leaflet comes with many useful defaults for easy accessibility for a wide range of users, this includes marker customization, marker labels, marker popups and zoom levels.
			**Example code:**
			```
			var marker = L.marker([50.4501, 30.5234],
			  {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
			  .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');
			```
			Sample Code: [Leaflet examples.](https://leafletjs.com/examples/accessibility/ "Leaflet examples")
		- **Interactive Choropleth Map**
			A colourful interactive *choropleth map* [Details on Choropleth map.](https://en.wikipedia.org/wiki/Choropleth_map "Wikipedia article on Choropleth maps").
			**Example code:**
			```
			var info = L.control();

			info.onAdd = function (map) {
			    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
			    this.update();
			    return this._div;
			};

			// method that we will use to update the control based on feature properties passed
			info.update = function (props) {
			    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
			        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
			        : 'Hover over a state');
			};

			info.addTo(map);
			```
			Sample Code: [Leaflet examples.](https://leafletjs.com/examples/choropleth/ "Leaflet examples")
		- **Overlays: Image and Videos**
			It is also possible to display images and videos over the maps. This can be used to represent weather patterns and highlighting sections of the map.
			**Example code:**
			```
			var videoUrls = [
			    'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
			    'https://www.mapbox.com/bites/00188/patricia_nasa.mp4'
			];
			var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
			var latLngBounds = L.latLngBounds([[32, -130], [13, -100]]);

			var videoOverlay = L.videoOverlay(videoUrls, latLngBounds, {
			    opacity: 0.8,
			    errorOverlayUrl: errorOverlayUrl,
			    interactive: true,
			    autoplay: true,
			    muted: true,
			    playsInline: true
			}).addTo(map);
			```
			Sample Code: [Leaflet examples.](https://leafletjs.com/examples/overlays/ "Leaflet examples")
			

4. ### **When was it created?**
	- The package was created in **2011**. Found: [Source Leaflet.](https://leafletjs.com/index.html#features "The Leaflet web page").

5. ### **Why did you select this package/library?**
	- Again I did not want to use a python package because even though python have a wide selection of packages, I felt many of the popular ones had already been covered in the previous Exploration Activity. I have also been having the most difficulty with JavaScript and this made for some good practice. I was also able to brush up on my HTML and CSS.
	- When I was looking through an online list of "cool JavaScript packages", I noticed that Leaflet worked with maps. I originally wanted to find an Octave package in the last Exploration Activity that worked with maps. I didn't find one in Octave I wanted to work with, but since Leaflet did I decided to go with that.

6. ### **How did learning the package/library influence your learning of the language?** 
	- There was not very much JavaScript in my code, I only had about 15 lines. Most of that code was just creating the map and the rest was creating a basic functing that would grab the latitude and longitude from the HTML input field and convert it to a float. Then using a premade function to move the marker to those co-ordinates.

7. ### **How was your overall experience with the package/library?**
	- It was very easy to use and I would definetly recommend this package to anyone looking to work with an accurate and detailed real world map. There is also many free tutorials offered in the Leaflet website that I found very helpful. [Leaflet tutorial.](https://leafletjs.com/examples.html "The Leaflet tutorials").
	- Yes I would use this program again, easy to use and it works great with HTML. I was able to add a small bit of user interface on top of the map without too much trouble. There are also lots of good resources for using Leaflet if ever I run into other problems.
