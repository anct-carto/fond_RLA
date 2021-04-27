
var searchField = document.getElementById('searchField');
var searchButton = document.getElementById('searchButton');

// prevent refresh
searchButton.addEventListener('click', function(event){
  event.preventDefault();
});

// supprimer la géométrie de la commune à chaque nouvelle recherche
//var comFound = L.vectorGrid.slicer().addTo(map);
//var codgeo;

// requête ajax sur les communes
fetch("geom/162cooperations.geojson")
  .then(res => res.json())
  .then(data => {
	console.log(data);
	var listCoop = [];
    // pour un geojson ...
    var listCoop = data.features.map((e) => {
       return e.properties.id_coop;
     });
	console.log(listCoop);
	
	
    new Awesomplete(searchField,{ //
      minChars: 1,
      list: listCoop});

    searchField.addEventListener('awesomplete-selectcomplete', e => {
      var comValue = e.text.value;
      var com = searchField.value;
	  console.log(comValue);
      for (var i in features) {
        if (features[i].properties.libgeo.toLowerCase() == com.toLowerCase()) {
          // enlève la géométrie de la commune précédemment recherchée
          //comFound.remove();
          var libCom = com.toString();
		  console.log(libCom);
          //console.log('trouvé'); // vérifier que la commune se trouve dans la liste
          //var geomCom = features[i];
          //codgeo = geomCom.properties.codgeo;
          //var lat = geomCom.properties.lat;
          //var lng = geomCom.properties.long;
          // ajout de la géométrie de la commune à la carte
          /*comFound = new L.vectorGrid.slicer(data, {
            rendererFactory: L.canvas.tile,
            vectorTileLayerStyles: {
              communes: function(feature) {
                var name = feature.libgeo;
                if (name === com) {
                  console.log("géométrie trouvée");
                  return {
                    weight:4,
                    color: '#004494',
                    fillOpacity: 1,
                  }
                } else {
                  return {
                    fillOpacity: 0,
                    stroke: false,
                    fill: false,
                    opacity: 0,
                    weight: 0
                  }
                }
              }
            }
          }).addTo(map);*/
		  

          /* nom COMMUNE
          comFound.on("load", function() {
            tooltip = L.tooltip()
                       .setContent(com+" - Code : "+codgeo)
                       .setLatLng([lat,lng])
                       .addTo(map)
          })*/

          // flyTp de la carte sur la commune trouvée
          //map.setView([lat,lng-0.25], 11.12, {animate:true, duration:1.5});

          // enlever le contour de la commune recherchée au click n'importe où
          //map.on("click", function() {
          //  comFound.remove()
          //});
        }
      }
    })
  });
