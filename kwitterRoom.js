var firebaseConfig = {
      apiKey: "AIzaSyADC1f6i2udmQmTZ6dA8NISg-dFvrUKRyg",
      authDomain: "sap-chat-b174e.firebaseapp.com",
      databaseURL: "https://sap-chat-b174e-default-rtdb.firebaseio.com",
      projectId: "sap-chat-b174e",
      storageBucket: "sap-chat-b174e.appspot.com",
      messagingSenderId: "235315391863",
      appId: "1:235315391863:web:b9fcfaa2e8216750da0572"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +" !";

    function addRoom() {
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
        });
        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+ room_name);
       row="<div class='room name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML=row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location("kwitter_page.html");
}