
	var listCoop = [];
	var searchField = document.getElementById('searchField');
	
	//r�initialiser la liste des possibilit�s de recherche par nom lorsque les filtres sont appliqu�e
	document.getElementById("searchField").addEventListener("click", function(event){
		reinitListCoop();
	});
	
	function reinitListCoop() {
		listCoop = [];
		coopLayer.eachLayer(function(layer){
			listCoop.push({ label: layer.feature.properties.nom, value: layer.feature.properties.id_coop });
		});	
		awesomplete.list = listCoop;
		
	}
	
	// liste de recherche par nom
	coopLayer.eachLayer(function(layer){
			listCoop.push({ label: layer.feature.properties.nom, value: layer.feature.properties.id_coop });
		});	
	
	// outil d'autocompletion
	var awesomplete = new Awesomplete(searchField,{ 
		  minChars: 1,
		  list: listCoop,
		  replace: function(suggestion) {
			this.input.value = suggestion.label;
			}
		});
