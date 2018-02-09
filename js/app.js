
/* Función para eñ menú desplegable
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});


// Función para eñ menú desplegable
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});*/

$(function(){
  $("#btnadd").click(function(e){
    //e.preventDefault();
    let a=$("#addform").serializeArray();
    console.log(a);
    //localStorage.setItem('id1',a);
    //validar el consecutivo de id antes de insertar
    localStorage.setItem('id1',JSON.stringify(a));
    console.log("ADD",JSON.stringify(a));
    //alert();
  });
  console.log("IMPRIMIR");
  console.log(JSON.parse(localStorage.getItem('id1')));
  console.log("IMPRIMIR");
  console.log(JSON.parse(localStorage.getItem('id2')));

  //recorrer el storage, guardarlo en un arreglo y pintar en html

  $.ajax({url: "http://untrampolin.com/development/done4you/API/servicios/get_promo",
        success: function(r){
          console.log('=>',r);
        $("#div1").html(r);

    }});
});
