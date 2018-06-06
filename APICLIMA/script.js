var clima = angular.module("clima",[]);
//controler creation
clima.controller("ListadoClima", function($scope,$http) {
	
	$scope.Countries = ["Guatemala City","Villa Nueva","Chimaltenango","Jalapa","Jutiapa","Sanarate","Escuintla","Jalpatagua","Chiquimulilla","La Gomera","Nueva Concepcion","San Jeronimo","Chichicastenango","Joyabaj","Santa Cruz del Quiche","San Miguel Chicaj","Esquipulas","La Union","Zacapa","Panzos","Tikal","San Jose","San Benito","Sayaxche","Poptun","San Luis","Chahal","Chisec","Quetzaltenango","Coatepeque","Huehuetenango","Nebaj","La Libertad","Champerico","Chicacao","Barillas","Coban","San Pedro Carcha","El Estor"]
	
	$scope.ListaClima = [];

	//Funcion del Clima
	$scope.Weather = function(a) {
		// LLamada del Api de Weather Forecast
		$http({
			method:"POST",
			url:"http://api.openweathermap.org/data/2.5/weather?q="+$scope.a+",GT&APPID=c53467779aeb05f0263c285b8e91fb41"
			//exitoa la funcion en la consola
		}).then(function successcallback(objeto){
			console.log(objeto.data)
			$scope.Humedad = objeto.data.main.humidity;
			$scope.TMax = objeto.data.main.temp_max - 273;
			$scope.TMin = objeto.data.main.temp_min - 273;


			$scope.latitud = objeto.data.coord.lat;
			$scope.longitud = objeto.data.coord.lon;
			
			


	      
		})
	}

	
})

