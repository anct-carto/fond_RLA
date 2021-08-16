
	var listCoop = [];
	var searchField = document.getElementById('searchField');
	
	//réinitialiser la liste des possibilités de recherche par nom lorsque les filtres sont appliqués
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
		
	
