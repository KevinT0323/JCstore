function initialize(){
			var mapOptions = {
				center: { lat: 24.002223, lng: 120.577614},
				zoom: 20
			};
			var map = new google.maps.Map(
					document.getElementById("map-canvas"),
					mapOptions
					);
		}
		google.maps.event.addDomListener(
				window, 'load', initialize
			);