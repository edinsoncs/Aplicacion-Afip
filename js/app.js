$(document).ready(function(){
	var t = "/";
	$(".previusJs").click(function(){
		window.location.href = t;
	});

	$(".compartirJs").click(function(){
		var newDocument = "<div class='documentP' style='text-decoration:none;background:#3B5998;padding: 0.5em 2em;'><a href='https://www.facebook.com/sharer/sharer.php?u=https%3A//play.google.com/store/search?q=viainti' style='margin:display:block;text-decoration:none;color:white'>Facebook</a></div>"
		$(".positionAbsolute").html(newDocument);
	});

	function apiG() {

		var API = "https://soa.afip.gob.ar/sr-padron/v2/persona/";
		
		var CUIL = window.location.search;

		var CUILDELETE = CUIL.replace("?buscar=", "");
		

		$.getJSON(API+CUILDELETE, search, false);

		function search(data) {
		 	console.log(data.data);
		 	$(".jsU").text("Obteniendo Datos...");
			setTimeout(function(){
				for(var i = 0; i < 1; i++) {
					$(".jsU").text("");
					$(".tipo").html(data.data.tipoPersona);
					$(".name").html(data.data.nombre);
					$(".dni").html(data.data.numeroDocumento);
					$(".fecha").html(data.data.fechaInscripcion);
					$(".direccion").html(data.data.domicilioFiscal.direccion);
					$(".localidad").html(data.data.domicilioFiscal.localidad);
					$(".codPostal").html(data.data.domicilioFiscal.codPostal);
				}
			}, 3500);

		}

		
	}
	apiG();

});