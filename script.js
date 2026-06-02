import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Vorkonfigurierte öffentliche Test-Datenbank
const firebaseConfig = {
    databaseURL: "https://escape-room-test-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Firebase starten
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const roomRef = ref(database, 'escape_room/raum1_offen');

// Auf Veränderungen in der Datenbank lauschen
onValue(roomRef, (snapshot) => {
    const istOffen = snapshot.val();
    const ausgabeFeld = document.getElementById("ausgabe");
    const gameContent = document.getElementById("game-content");

    if (istOffen === true) {
        gameContent.style.display = "none";
        ausgabeFeld.style.color = "#33ff33";
        ausgabeFeld.innerHTML = "🔓 DIE TÜR IST OFFEN!<br>Ein Spieler hat den Code geknackt. Ihr seid beide frei!";
    } else {
        gameContent.style.display = "block";
        ausgabeFeld.style.color = "#ff9900";
        ausgabeFeld.innerHTML = "🔒 Tür ist verriegelt. Findet den Code!";
    }
});

// Funktion, wenn ein Spieler auf "Code senden" klickt
window.pruefeCode = function() {
    var eingabe = document.getElementById("codeEingabe").value;
    if (eingabe === "1989") {
        set(roomRef, true);
    } else {
        alert("Falscher Code! Versucht es weiter.");
    }
}

// Funktion um das Spiel zurückzusetzen
window.resetGame = function() {
    set(roomRef, false);
}
