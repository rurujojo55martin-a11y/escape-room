// HIER DIE EIGENEN FIREBASE CONFIG-DATEN EINTRAGEN!
// Im Firebase Console Web-Projekt erstellen und die Config hier reinkopieren.

const firebaseConfig = {
    apiKey: "DEIN_API_KEY_HIER",
    authDomain: "DEIN_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://DEIN_PROJECT_ID-default-rtdb.firebaseio.com", // Wichtig: Realtime DB URL
    projectId: "DEIN_PROJECT_ID",
    storageBucket: "DEIN_PROJECT_ID.appspot.com",
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
