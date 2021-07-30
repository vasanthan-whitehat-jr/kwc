  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAMXKvOGr-WUUq-N349kqIPxW9m0r9ZnAA",
    authDomain: "kwitter-app-eae90.firebaseapp.com",
    databaseURL: "https://kwitter-app-eae90-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-eae90",
    storageBucket: "kwitter-app-eae90.appspot.com",
    messagingSenderId: "929839198822",
    appId: "1:929839198822:web:ad5947295876c5d68533a7",
    measurementId: "G-WSNM9L8266"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>" ;
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}