function loguim(){
    player_name = document.getElementById("playername").Value;
    localStorage.setItem("player_name",player_name);

    window.location = "gamepage.html";
}