document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("button");
    btn.addEventListener("click", greet);
});

function greet() {
    const name = document.getElementById("nameField").value;
    if(name === "") alert("Witaj, Użytkowniku");
    else alert("Witaj, " + name);
}

function notificate(poz) {
    alert("Wybrano pozycję numer " + poz);
}