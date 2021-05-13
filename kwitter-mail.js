function AddUser() {
    email_name= document.getElementById("email_name").value;
    localStorage.setItem("email_name", email_name);

    window.location="indexUser.html";
}