var firebaseConfig = {
      apiKey: "AIzaSyDvhV3I0x-rKRhuWqYDUNqc4COHpGJmljA",
      authDomain: "kwitter-623b6.firebaseapp.com",
      databaseURL: "https://kwitter-623b6-default-rtdb.firebaseio.com",
      projectId: "kwitter-623b6",
      storageBucket: "kwitter-623b6.appspot.com",
      messagingSenderId: "222605239557",
      appId: "1:222605239557:web:98ce86ddff89e6fa9a436c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
