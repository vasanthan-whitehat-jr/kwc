var firebaseConfig = {
    apiKey: "AIzaSyCfgETYf7goxbuacQHTWJQ0H8C4kYVMzb0",
    authDomain: "classtest-f3711.firebaseapp.com",
    projectId: "classtest-f3711",
    storageBucket: "classtest-f3711.appspot.com",
    messagingSenderId: "164547861928",
    appId: "1:164547861928:web:bcc4d316992aecd4ea119d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(room_name).update({
    purpase:"adding user"
    });
}