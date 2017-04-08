function initialize(){
			var mapOptions = {				
				center: { lat: 24.002223, lng: 120.577614},
				zoom: 20
			};
			var map = new google.maps.Map(
					document.getElementById("map-canvas"),
					mapOptions
					);
			var iconBase = "https://maps.google.com/mapfiles/kml/shapes";
			var marker = new google.maps.Marker({
				position: {lat: 24.002223, lng: 120.577614},
				icon: {name: 'info', icon: iconBase + 'info-i_maps.png'},
				map: map
			})
			var infowindow = new google.maps.InfoWindow();
			infowindow.setContent('<b>JCstore</b>');
			google.maps.event.addListener(marker, 'click', function(){
				infowindow.open(map, marker);
			});
		}
		google.maps.event.addDomListener(
				window, 'load', initialize
			);