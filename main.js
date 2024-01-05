function adduser(){
    localStorage.setItem("player1name",document.getElementById("player1").value);
    localStorage.setItem("player2name",document.getElementById("player2").value);
    window.location="gamepage.html";
}

