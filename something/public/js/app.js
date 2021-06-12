
  


var firebaseConfig = {
    apiKey: "AIzaSyDMWhF0IKzZhpzrBZ-FqHRpGyxFiMQebYc",
    authDomain: "my-wallpaper-app-7c5c9.firebaseapp.com",
    databaseURL: "https://my-wallpaper-app-7c5c9.firebaseio.com",
    projectId: "my-wallpaper-app-7c5c9",
    storageBucket: "my-wallpaper-app-7c5c9.appspot.com",
    messagingSenderId: "686811147575",
    appId: "1:686811147575:web:d9ba7eb1bac3e76f47beb2",
    measurementId: "G-M2E0JWW9YE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //let auth = firebase.auth()
  //console.log(auth);

  //console.log(firebase)
  

  firebase.auth.Auth.Persistence.LOCAL;

    $("#btn-login").click(function(){
        // console.log('button clicked');



        var email = $("#email").val();
        var password = $("#password").val();

        var result = firebase.auth().signInWithEmailAndPassword(email,password);

        console.log(result)

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });
    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });


   function switchView(view){
       $.get({
           url:view,
           cache: false,
       }).then(function(data){
           $("#container").html(data);
       });
   }

   // for saving images..

