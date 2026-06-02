// ================= GLOBALE VARIABLEN & GAME STATE =================
let isMultiplayer = false;
let isHost = false;
let myName = "Anonym";
let roomCode = "";
let currentRoomQuestions = []; // Array für die 8 zufälligen Fragen dieser Runde
let currentQuestionIndex = 0;
let selectedAnswer = "";

// Timer Variablen
let timerInterval = null;
let totalSeconds = 0;

// Firebase Referenzen
let roomRef = null;

// ================= UI ELEMENTE DOM =================
const lobbyScreen = document.getElementById("lobby-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

// --- Init & Event Listeners ---
document.getElementById("btn-singleplayer").addEventListener("click", startSingleplayer);
document.getElementById("btn-create-host").addEventListener("click", createMultiplayerRoom);
document.getElementById("btn-join").addEventListener("click", joinMultiplayerRoom);
document.getElementById("btn-submit-answer").addEventListener("click", checkAnswer);
document.getElementById("btn-next-question").addEventListener("click", nextQuestion);
document.getElementById("btn-send-chat").addEventListener("click", sendChatMessage);
document.getElementById("chat-input").addEventListener("keypress", (e) => { if(e.key === 'Enter') sendChatMessage(); });

// Checken, ob Name ausgefüllt ist
function getUsername() {
    let inputName = document.getElementById("username").value.trim();
    if(!inputName) {
        alert("Bitte gib zuerst einen Namen ein! 📛");
        return null;
    }
    myName = inputName;
    return myName;
}

// 8 zufällige Fragen aus der questions.js ziehen
function pickRandomQuestions() {
    let shuffled = [...infoQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8); // Wir spielen immer genau 8 Räume
}

// ================= MODUS 1: SINGLEPLAYER =================
function startSingleplayer() {
    if (!getUsername()) return;
    isMultiplayer = false;
    isHost = true; // Im Singleplayer bist du dein eigener Host
    
    currentRoomQuestions = pickRandomQuestions();
    currentQuestionIndex = 0;
    
    lobbyScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    
    document.getElementById("game-room-code-display").innerText = "LOCAL";
    document.getElementById("game-player-list").innerHTML = `<span class="chip host">${myName}</span>`;
    
    startTimer();
    renderQuestion();
}

// ================= MODUS 2: MULTIPLAYER (FIREBASE) =================
function createMultiplayerRoom() {
    if (!window.database) {
        alert("Firebase ist nicht konfiguriert! Schau in die firebase-config.js.");
        return;
    }
    if (!getUsername()) return;

    isMultiplayer = true;
    isHost = true;
    // Generiere 6-stelligen Zahlencode
    roomCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 8 zufällige Fragen für das Spiel aussuchen
    currentRoomQuestions = pickRandomQuestions();

    roomRef = database.ref('rooms/' + roomCode);
    
    // Raum in Firebase anlegen
    roomRef.set({
        gameState: "lobby", // lobby, playing, finished
        currentQuestionIndex: 0,
        questions: currentRoomQuestions, // Speichert die ausgewählten Fragen für alle
        host: myName
    });

    // Mich selbst als Spieler eintragen
    roomRef.child('players').child(myName).set({
        name: myName,
        isHost: true
    });

    setupMultiplayerLobby();
}

function joinMultiplayerRoom() {
    if (!window.database) {
        alert("Firebase ist nicht konfiguriert!");
        return;
    }
    if (!getUsername()) return;
    
    let codeInput = document.getElementById("join-code").value.trim();
    if(codeInput.length !== 6) {
        alert("Der Code muss genau 6-stellig sein!");
        return;
    }
    roomCode = codeInput;
    isMultiplayer = true;
    isHost = false;

    roomRef = database.ref('rooms/' + roomCode);
    
    // Prüfen ob Raum existiert
    roomRef.once('value', (snapshot) => {
        if(!snapshot.exists()) {
            alert("Raum nicht gefunden! Code falsch?");
            return;
        }
        
        let data = snapshot.val();
        if(data.gameState !== "lobby") {
            alert("Das Spiel hat leider schon begonnen!");
            return;
        }

        // Als Spieler eintragen
        roomRef.child('players').child(myName).set({
            name: myName,
            isHost: false
        });

        setupMultiplayerLobby();
    });
}

// Lobby-Anzeige + Listener
function setupMultiplayerLobby() {
    document.getElementById("display-code").innerText = roomCode;
    document.getElementById("waiting-area").classList.remove("hidden");

    if (isHost) {
        document.getElementById("btn-start-game").classList.remove("hidden");
        document.getElementById("btn-start-game").onclick = startMultiplayerGame;
    } else {
        document.getElementById("wait-message").classList.remove("hidden");
    }

    // Spielerliste live updaten
    roomRef.child('players').on('value', (snapshot) => {
        let players = snapshot.val() || {};
        let listHtml = "";
        let chipHtml = "";

        for(let key in players) {
            let p = players[key];
            let extra = p.isHost ? " (Host)" : "";
            listHtml += `<li>💻 ${p.name}${extra}</li>`;
            chipHtml += `<span class="chip ${p.isHost ? 'host' : ''}">${p.name}</span>`;
        }
        document.getElementById("lobby-player-list").innerHTML = listHtml;
        document.getElementById("game-player-list").innerHTML = chipHtml;
    });

    // Auf Spielstart hören (sehr wichtig!)
    roomRef.child('gameState').on('value', (snapshot) => {
        if(snapshot.val() === "playing") {
            console.log("✅ Spielstart erkannt auf Handy!");

            roomRef.child('questions').once('value', (qSnap) => {
                if(qSnap.exists()) {
                    currentRoomQuestions = qSnap.val();
                    lobbyScreen.classList.add("hidden");
                    gameScreen.classList.remove("hidden");
                    document.getElementById("game-room-code-display").innerText = roomCode;
                    
                    startTimer();
                    listenToGameSync();
                }
            });
        }
    });
}
function startMultiplayerGame() {
    if (!roomRef) return;
    
    roomRef.update({
        gameState: "playing",
        currentQuestionIndex: 0
    }).then(() => {
        console.log("🚀 Spiel wurde an alle gesendet!");
    }).catch((error) => {
        console.error("Fehler beim Starten:", error);
    });
}

// Sync während des laufenden Spiels (Kahoot-Style)
function listenToGameSync() {
    // Hören welche Frage gerade aktiv ist
    roomRef.child('currentQuestionIndex').on('value', (snapshot) => {
        currentQuestionIndex = snapshot.val();
        
        // Wenn Index über die Fragenanzahl geht -> Ende für alle
        if(currentQuestionIndex >= currentRoomQuestions.length) {
            endGame();
        } else {
            renderQuestion();
        }
    });

    // Chat Sync aktivieren
    roomRef.child('chat').on('childAdded', (snapshot) => {
        let msg = snapshot.val();
        addMessageToChatUi(msg.sender, msg.text);
    });
}

// ================= CORE GAME LOGIC =================

function renderQuestion() {
    let q = currentRoomQuestions[currentQuestionIndex];
    document.getElementById("current-room-num").innerText = currentQuestionIndex + 1;
    document.getElementById("question-text").innerText = q.text;
    document.getElementById("question-hint").innerText = "Hinweis: " + q.hint;
    
    // UI zurücksetzen
    document.getElementById("feedback-text").innerText = "";
    document.getElementById("btn-submit-answer").classList.remove("hidden");
    document.getElementById("btn-next-question").classList.add("hidden");
    selectedAnswer = "";

    let container = document.getElementById("answer-container");
    container.innerHTML = "";

    if(q.type === "multiple") {
        // Multiple Choice Buttons bauen
        q.options.forEach(opt => {
            let btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.onclick = function() {
                // Alle anderen abwählen
                let buttons = container.getElementsByClassName("option-btn");
                for(let b of buttons) b.classList.remove("selected");
                
                btn.classList.add("selected");
                selectedAnswer = opt;
            };
            container.appendChild(btn);
        });
    } else if(q.type === "input") {
        // Text-Eingabefeld bauen
        let input = document.createElement("input");
        input.type = "text";
        input.id = "typed-answer";
        input.placeholder = "Antwort hier eintippen...";
        container.appendChild(input);
    }
}

function checkAnswer() {
    let q = currentRoomQuestions[currentQuestionIndex];
    let feedback = document.getElementById("feedback-text");
    let isCorrect = false;

    if(q.type === "multiple") {
        if(!selectedAnswer) { alert("Wähle eine Antwort aus!"); return; }
        if(selectedAnswer === q.answer) isCorrect = true;
    } else if(q.type === "input") {
        let userTyped = document.getElementById("typed-answer").value.trim();
        if(!userTyped) { alert("Tippe zuerst etwas ein!"); return; }
        // Kleiner Case-Insensitive Check, damit Groß-/Kleinschreibung egal ist
        if(userTyped.toLowerCase() === q.answer.toLowerCase()) isCorrect = true;
    }

    if(isCorrect) {
        feedback.innerText = "🔒 KLICK... Das Schloss öffnet sich! Richtig!";
        feedback.className = "correct";
        document.getElementById("btn-submit-answer").classList.add("hidden");
        
        // Nur der Host darf weiterdrücken im Multiplayer. Im Singleplayer ist man eh Host.
        if(isHost) {
            document.getElementById("btn-next-question").classList.remove("hidden");
        } else {
            feedback.innerText += " Warte auf den Host für den nächsten Raum...";
        }
    } else {
        feedback.innerText = "❌ Falscher Code! Alarm schlägt an. Versuch es nochmal!";
        feedback.className = "wrong";
    }
}

function nextQuestion() {
    let nextIndex = currentQuestionIndex + 1;
    
    if(isMultiplayer) {
        // Über Firebase hochzählen -> triggert alle Clients
        roomRef.update({ currentQuestionIndex: nextIndex });
    } else {
        // Lokal hochzählen
        currentQuestionIndex = nextIndex;
        if(currentQuestionIndex >= currentRoomQuestions.length) {
            endGame();
        } else {
            renderQuestion();
        }
    }
}

// ================= TIMER & CHAT & ENDE =================

function startTimer() {
    timerInterval = setInterval(() => {
        totalSeconds++;
        let mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        let secs = (totalSeconds % 60).toString().padStart(2, '0');
        document.getElementById("game-timer").innerText = `${mins}:${secs}`;
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    
    let finalTimeStr = document.getElementById("game-timer").innerText;
    document.getElementById("final-time").innerText = finalTimeStr;
    
    if(isMultiplayer && isHost) {
        roomRef.update({ gameState: "finished" });
    }
}

// Chat Funktionen
function sendChatMessage() {
    let input = document.getElementById("chat-input");
    let text = input.value.trim();
    if(!text) return;

    if(isMultiplayer) {
        // In Firebase pushen
        roomRef.child('chat').push({
            sender: myName,
            text: text
        });
    } else {
        // Lokal anzeigen (Singleplayer führt Selbstgespräche 🤓)
        addMessageToChatUi(myName, text);
    }
    input.value = "";
}

function addMessageToChatUi(sender, text) {
    let box = document.getElementById("chat-messages");
    let p = document.createElement("p");
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    box.appendChild(p);
    box.scrollTop = box.scrollHeight; // Automatisch nach unten scrollen
}
