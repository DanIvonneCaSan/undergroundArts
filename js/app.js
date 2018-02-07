<<<<<<< HEAD
=======
// Función para eñ menú desplegable
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});
>>>>>>> 8d64ad2855778b354bc91aa63b9c5881362da099
