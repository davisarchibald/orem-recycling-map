var map = L.map('recyclingMap').setView([40.298753, -111.696486], 13);
L.tileLayer('http://{s}.tile.cloudmade.com/ef14c18343234773af86eb0bc3882836/997/256/{z}/{x}/{y}.png', {
	maxZoom: 18,
	minZoom : 13
}).addTo(map);
/* L.geoJson(oremData, {
	style : myStyle
}).addTo(map);*/
L.geoJson(recyclingone, {
	style : {
		fillColor: "blue",
	color: "blue",
	weight: 1,
	opacity:0,
	fillOpacity:0.4
	}
}).addTo(map);
L.geoJson(recyclingtwo, {
	style : {
		fillColor: "green",
	color: "green",
	weight: 1,
	opacity:0,
	fillOpacity:0.4
	}
}).addTo(map);
L.geoJson(recyclingthree, {
	style : {
		fillColor: "orange",
	color: "orange",
	weight: 1,
	opacity:0,
	fillOpacity:0.4
	}
}).addTo(map);
L.geoJson(recyclingfour, {
	style : {
		fillColor: "yellow",
	color: "yellow",
	weight: 1,
	opacity:0,
	fillOpacity:0.4
	}
}).addTo(map);
L.geoJson(recyclingfive, {
	style : {
		fillColor: "red",
	color: "red",
	weight: 1,
	opacity:0,
	fillOpacity:0.4
	}
}).addTo(map);