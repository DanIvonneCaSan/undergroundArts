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

//API YT

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
 player = new YT.Player('player', {
   height: '360',
   width: '640',
   videoId: '5DtGckheF6s',
   events: {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange
   }
 });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
 event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.PLAYING && !done) {
   setTimeout(stopVideo, 6000);
   done = true;
 }
}
function stopVideo() {
 player.stopVideo();
}

var tag1 = document.createElement('script1');
tag1.src = "https://www.youtube.com/iframe_api";
var firstScriptTag1 = document.getElementsByTagName('script1')[0];
firstScriptTag1.parentNode.insertBefore(tag, firstScriptTag1);
// 3. This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
var player1;
function onYouTubeIframeAPIReady() {
 player1 = new YT.Player('player1', {
   height: '360',
   width: '640',
   videoId: '7NVaNWHchIo',
   events: {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange
   }
 });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
 event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.PLAYING && !done) {
   setTimeout(stopVideo, 6000);
   done = true;
 }
}
function stopVideo() {
 player.stopVideo();
}
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



// $(function(){
//   $("#btnadd").click(function(e){
//     //e.preventDefault();
//     let a=$("#addform").serializeArray();
//     console.log(a);
//     //localStorage.setItem('id1',a);
//     //validar el consecutivo de id antes de insertar
//     localStorage.setItem('id1',JSON.stringify(a));
//     console.log("ADD",JSON.stringify(a));
//     //alert();
//   });
//   console.log("IMPRIMIR");
//   console.log(JSON.parse(localStorage.getItem('id1')));
//   console.log("IMPRIMIR");
//   console.log(JSON.parse(localStorage.getItem('id2')));
//
//   //recorrer el storage, guardarlo en un arreglo y pintar en html
//
//   $.ajax({url: "http://untrampolin.com/development/done4you/API/servicios/get_promo",
//         success: function(r){
//           console.log('=>',r);
//         $("#div1").html(r);
//
//     }});
// });
