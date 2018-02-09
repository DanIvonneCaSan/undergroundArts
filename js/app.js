<<<<<<< HEAD
// Funciones de firebase
// var config = {
//     apiKey: "AIzaSyCk3NdVvpjfZfuJGX43K9-eJx4RzjEbTSQ",
//     authDomain: "undergroundarts-97345.firebaseapp.com",
//     databaseURL: "https://undergroundarts-97345.firebaseio.com",
//     projectId: "undergroundarts-97345",
//     storageBucket: "undergroundarts-97345.appspot.com",
//     messagingSenderId: "320703158132"
//   };
//   firebase.initializeApp(config);

// Función para el menú desplegable
// $(document).ready(function(e){
//     $('.search-panel .dropdown-menu').find('a').click(function(e) {
// 		e.preventDefault();
// 		var param = $(this).attr("href").replace("#","");
// 		var concept = $(this).text();
// 		$('.search-panel span#search_concept').text(concept);
// 		$('.input-group #search_param').val(param);
// 	});
// });


 function htmlbodyHeightUpdate(){
   var height3 = $( window ).height()
   var height1 = $('.nav').height()+50
   height2 = $('.main').height()
   if(height2 > height3){
     $('html').height(Math.max(height1,height3,height2)+10);
     $('body').height(Math.max(height1,height3,height2)+10);
   }
   else
   {
     $('html').height(Math.max(height1,height3,height2));
     $('body').height(Math.max(height1,height3,height2));
   }

 }
 $(document).ready(function () {
   htmlbodyHeightUpdate()
   $( window ).resize(function() {
     htmlbodyHeightUpdate()
   });
   $( window ).scroll(function() {
     height2 = $('.main').height()
       htmlbodyHeightUpdate()
   });
 });

// var database = firebase.database();
// // Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyBl1dpFBKHZ78YpLPaFHLdB79Ki1iIcEYI",
//    authDomain: "undergroundarts-378ca.firebaseapp.com",
//    databaseURL: "https://undergroundarts-378ca.firebaseio.com",
//    projectId: "undergroundarts-378ca",
//    storageBucket: "",
//    messagingSenderId: "626769935275"
//  };
//
//  firebase.initializeApp(config);
//
//  $("#btnGoogle").click(function () {
//   $("#modal-1").modal("hide");
//   authGoogle();
//
// });
//
//  function authGoogle () {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   authentication(provider);
//
// }
//
// function authentication(provider) {
//   // Se tienen permisos para acceder al correo
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     //saveData(result.user);
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//
//   //window.location.href="../views/profile.html";
//   $("#userprof").append("<img scr='"+result.user.photoURL+"'/>")
// })
// .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorMessage);
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
//
// }
// $(function(){
//   const authUser = Object.keys(window.localStorage)
//   .filter(item => item.startsWith('firebase:authUser'))[0]
//   var user=JSON.parse(localStorage.getItem(authUser));
//   $("#contentimg").html('<img src="'+user.photoURL+'" class="img-rounded" />');
//   console.log("local=>",user.photoURL);
// });


//Funcion para habilitar el bóton de pos texto
// var $eventNameInput = $("#event-name-input");

// $("#event-name-input").keyup(habilitateButton);
//
// function habilitateButton () {
// 	var $containerAddText = $("#registration");
//
// 	if($(this).val().trim().length > 0) {
// 		$containerAddText.removeAttr("disabled");
// 	} else {
// 		$containerAddText.attr("disabled", true);
// 	}
// }



$(function(){
 $("#registration").click(function(e){
   //e.preventDefault();

   let a=$("form").serializeArray();
   console.log(a);
   //localStorage.setItem('id1',a);
   //validar el consecutivo de id antes de insertar


   localStorage.setItem('id',JSON.stringify(a));
   console.log("ADD",JSON.stringify(a));
   //alert();
 });
 console.log("IMPRIMIR");
 console.log(JSON.parse(localStorage.getItem('id')));
 console.log("IMPRIMIR");
 console.log(JSON.parse(localStorage.getItem('id2')));

 //recorrer el storage, guardarlo en un arreglo y pintar en html

 $.ajax({url: "http://untrampolin.com/development/done4you/API/servicios/get_promo",
       success: function(r){
         console.log('=>',r);
       $("#div1").html(r);

   }});
   var numberClick = localStorage.clickcount; //guardamos el value, que contiene el precio, del checkbox que activamos

   var newValue = new Array(); // creamos un array vacío

   var getlocal = localStorage.getItem("usuarios"); //asignamos el elemento "precios" a una varible

   var cont;

   var parslocal;

   // if($(this).is(":checked")){
   //
   // //Si el item está activado guarda el valor en localStorage

   if(getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined){ //comprobamos que nuestra variable exista

   parslocal = JSON.parse(getlocal); //Transforma la variable con el contenido de nuestro elemento en localStorage a un objeto Javascript

   $.each(parslocal, function(index, value){

   cont = index;

   nuevovalor[index] = value; //llenamos nuestro array vacío con los valores que ya existen en nuestro elemento

 }); //cierre de each

   cont++;

   newValue[cont] = numberClick;

   localStorage.setItem("precios", JSON.stringify(newValue));

   } else {//en el caso que no exista el elemento en localStorage

   var saveLocal = new Array();//Creamos un nuevo array vacío

   saveLocal[0] = numberClick; //asignamos al comienzo de nuestro array, el valor de nuestro elemento

   localStorage.setItem("usuarios", JSON.stringify(saveLocal));//guardamos nuestro valor en localStorage

   }

   // }else {
   //
   // //Si el item no está activado
   //
   // if(getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined){//Comprobamos que el elemento existe en localStorage
   //
   // parslocal = JSON.parse(getlocal);
   //
   // var contador = 0;
   //
   // $.each(parslocal, function(index, value){
   //
   // cont = index;
   //
   // if(value != precio && value != null && value != undefined && value != false){//si el el valor que estamos haciendo el loop, no coincide al valor ingresado, entonces lo ingresa en el array
   //
   // newValue[contador] = value;
   //
   // contador++;
   //
   // }

   });

   if(cont == 0){//si cont es igual a 0, significa que sólo se encuentra en nuestro localStorage el precio que ingresamos, por lo tanto solo eliminamos el elemento completo

   localStorage.removeItem("usuarios");

   }else{//de lo contrario, existen más valores, pro lo que rehacemos el elemento con los valores que no coincidieron con el encontrado

   localStorage.setItem("usuarios", JSON.stringify(newValue));

   }





});
=======
 /*$(document).ready(function(e){
      $('.search-panel .dropdown-menu').find('a').click(function(e) {
  		e.preventDefault();
 		var param = $(this).attr("href").replace("#","");
 		var concept = $(this).text();
 		$('.search-panel span#search_concept').text(concept);
  		$('.input-group #search_param').val(param);
  	});
  }); */
  function htmlbodyHeightUpdate(){
		var height3 = $( window ).height()
		var height1 = $('.nav').height()+50
		height2 = $('.main').height()
		if(height2 > height3){
			$('html').height(Math.max(height1,height3,height2)+10);
			$('body').height(Math.max(height1,height3,height2)+10);
		}
		else
		{
			$('html').height(Math.max(height1,height3,height2));
			$('body').height(Math.max(height1,height3,height2));
		}
		
	}
	$(document).ready(function () {
		htmlbodyHeightUpdate()
		$( window ).resize(function() {
			htmlbodyHeightUpdate()
		});
		$( window ).scroll(function() {
			height2 = $('.main').height()
  			htmlbodyHeightUpdate()
		});
	});
  
// var database = firebase.database();
// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBl1dpFBKHZ78YpLPaFHLdB79Ki1iIcEYI",
   authDomain: "undergroundarts-378ca.firebaseapp.com",
   databaseURL: "https://undergroundarts-378ca.firebaseio.com",
   projectId: "undergroundarts-378ca",
   storageBucket: "",
   messagingSenderId: "626769935275"
 };

 firebase.initializeApp(config);

 $("#btnGoogle").click(function () {
  $("#modal-1").modal("hide");
  authGoogle();

});

 function authGoogle () {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);

}

function authentication(provider) {
  // Se tienen permisos para acceder al correo
  firebase.auth().signInWithPopup(provider).then(function(result) {
    //saveData(result.user);
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  //window.location.href="../views/profile.html";
  $("#userprof").append("<img scr='"+result.user.photoURL+"'/>")
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}
$(function(){
  const authUser = Object.keys(window.localStorage)
  .filter(item => item.startsWith('firebase:authUser'))[0]
  var user=JSON.parse(localStorage.getItem(authUser));
  $("#contentimg").html('<img src="'+user.photoURL+'" class="img-rounded" />');
  console.log("local=>",user.photoURL);
});


//Funcion para habilitar el bóton de pos texto
// var $eventNameInput = $("#event-name-input");

// $("#event-name-input").keyup(habilitateButton);
//
// function habilitateButton () {
// 	var $containerAddText = $("#registration");
//
// 	if($(this).val().trim().length > 0) {
// 		$containerAddText.removeAttr("disabled");
// 	} else {
// 		$containerAddText.attr("disabled", true);
// 	}
// }



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
>>>>>>> e714632efbc3b4897a8173f63e343424cb2e6f31
