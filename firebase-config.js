// HIER DIE EIGENEN FIREBASE CONFIG-DATEN EINTRAGEN!
// Im Firebase Console Web-Projekt erstellen und die Config hier reinkopieren.

const firebaseConfig = {
    apiKey: "DEIN_API_KEY_HIER",
    authDomain: "escape-room-ed686.firebaseapp.com",
    databaseURL: "https://escape-room-ed686-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "escape-room-ed686",
    storageBucket: "escape-room-ed686.appspot.com",
    messagingSenderId: "DEINE_SENDER_ID",
    appId: "DEINE_APP_ID"
};

// Firebase initialisieren (Nur wenn Config eingetragen wurde)
if (firebaseConfig.apiKey !== "DEIN_API_KEY_HIER") {
    firebase.initializeApp(firebaseConfig);
    window.database = firebase.database();
    console.log("Firebase erfolgreich verbunden! 🔥");
} else {
    console.log("Firebase läuft im Offline-Modus (Keine Config hinterlegt).");
}
{
