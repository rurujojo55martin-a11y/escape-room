// ==================== FIREBASE CONFIG - SCHULPROJEKT ====================

const firebaseConfig = {
    apiKey: "HIER_DEIN_API_KEY_EINFÜGEN",
    authDomain: "escape-room-ed686.firebaseapp.com",
    databaseURL: "https://escape-room-ed686-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "escape-room-ed686",
    storageBucket: "escape-room-ed686.appspot.com",
    messagingSenderId: "HIER_SENDER_ID_EINFÜGEN",
    appId: "HIER_APP_ID_EINFÜGEN"
};

// Firebase starten
if (firebaseConfig.apiKey !== "HIER_DEIN_API_KEY_EINFÜGEN") {
    firebase.initializeApp(firebaseConfig);
    window.database = firebase.database();
    console.log("✅ Firebase erfolgreich verbunden!");
} else {
    console.error("❌ Firebase Config noch nicht ausgefüllt!");
    alert("Firebase ist noch nicht konfiguriert! Schau in firebase-config.js");
}
