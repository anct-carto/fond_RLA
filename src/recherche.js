
	var listCoop = [];
	var searchField = document.getElementById('searchField');
	
	//r�initialiser la liste des possibilit�s de recherche par nom lorsque les filtres sont appliqu�s
	document.getElementById("searchField").addEventListener("click", function(event){
		reinitListCoop();
	});
	
	function reinitListCoop() {
		alert('reinitListCoop');
		listCoop = [];
		operations.eachLayer(function(layer){
			listCoop.push({ label: layer.feature.properties.nom_operation, value: layer.feature.properties.id_operation });
		});	
		awesomplete.list = listCoop;
		
	}
	
	// liste de recherche par nom
	operations.eachLayer(function(layer){
			listCoop.push({ label: layer.feature.properties.nom_operation, value: layer.feature.properties.id_operation });
		});	
	
	// outil d'autocompletion
	var awesomplete = new Awesomplete(searchField,{ 
		  minChars: 1,
		  list: listCoop,
		  replace: function(suggestion) {
			this.input.value = suggestion.label;
			}
		});
		
	
