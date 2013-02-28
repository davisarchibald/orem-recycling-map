/* Map */
var map = L.map('recyclingMap').setView([40.298753, -111.696486], 13);
/* Map Tile Layer*/
L.tileLayer('http://{s}.tile.cloudmade.com/ef14c18343234773af86eb0bc3882836/997/256/{z}/{x}/{y}.png', {
	maxZoom: 18,
	minZoom : 12
}).addTo(map);
/* Recycling Region Layers*/
var monday = L.geoJson(recyclingfive, {
	style : {
		fillColor: "red",
		color: "red",
		weight: 1,
		opacity:0,
		fillOpacity:0.4
	}
}).addTo(map).addEventListener('mouseover', function () {
	this.setStyle({
		fillOpacity : 0.6
	});
}).addEventListener('mouseout', function () {
	this.setStyle({
		fillOpacity : 0.4
	});
}),
tuesday = L.geoJson(recyclingtwo, {
	style : {
		fillColor: "green",
		color: "green",
		weight: 1,
		opacity:0,
		fillOpacity:0.4
	}
}).addTo(map).addEventListener('mouseover', function () {
	this.setStyle({
		fillOpacity : 0.6
	});
}).addEventListener('mouseout', function () {
	this.setStyle({
		fillOpacity : 0.4
	});
}),
wednesday = L.geoJson(recyclingone, {
	style : {
		fillColor: "blue",
		color: "blue",
		weight: 1,
		opacity:0,
		fillOpacity:0.4
	}
}).addTo(map).addEventListener('mouseover', function () {
	this.setStyle({
		fillOpacity : 0.6
	});
}).addEventListener('mouseout', function () {
	this.setStyle({
		fillOpacity : 0.4
	});
}),
thursday = L.geoJson(recyclingthree, {
	style : {
		fillColor: "orange",
		color: "orange",
		weight: 1,
		opacity:0,
		fillOpacity:0.4
	}
}).addTo(map).addEventListener('mouseover', function () {
	this.setStyle({
		fillOpacity : 0.6
	});
}).addEventListener('mouseout', function () {
	this.setStyle({
		fillOpacity : 0.4
	});
}),
friday = L.geoJson(recyclingfour, {
	style : {
		fillColor: "yellow",
		color: "yellow",
		weight: 1,
		opacity:0,
		fillOpacity:0.4
	}
}).addTo(map).addEventListener('mouseover', function () {
	this.setStyle({
		fillOpacity : 0.6
	});
}).addEventListener('mouseout', function () {
	this.setStyle({
		fillOpacity : 0.4
	});
});

/*Labels*/
var mondayIcon = L.divIcon({html: 'MONDAY', className : 'label'});
centerMonday = monday.getBounds().getCenter();
L.marker(centerMonday, {icon: mondayIcon}).addTo(map);

var tuesdayIcon = L.divIcon({html: 'TUESDAY', className : 'label'});
centerTuesday = tuesday.getBounds().getCenter();
L.marker(centerTuesday, {icon: tuesdayIcon}).addTo(map);

var wednesdayIcon = L.divIcon({html: 'WEDNESDAY', className : 'label'});
centerWednesday = wednesday.getBounds().getCenter();
L.marker(centerWednesday, {icon: wednesdayIcon}).addTo(map);

var thursdayIcon = L.divIcon({html: 'THURSDAY', className : 'label'});
centerThursday = thursday.getBounds().getCenter();
L.marker(centerThursday, {icon: thursdayIcon}).addTo(map);

var fridayIcon = L.divIcon({html: 'FRIDAY', className : 'label'});
centerFriday = friday.getBounds().getCenter();
L.marker(centerFriday, {icon: fridayIcon}).addTo(map);

