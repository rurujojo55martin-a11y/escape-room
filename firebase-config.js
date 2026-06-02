// ==================== FIREBASE CONFIG ====================

const firebaseConfig = {
    apiKey: "AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",           // ← DEIN API KEY
    authDomain: "escape-room-ed686.firebaseapp.com",
    databaseURL: "https://escape-room-ed686-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "escape-room-ed686",
    storageBucket: "escape-room-ed686.appspot.com",
    messagingSenderId: "123456789012",                       // ← deine Sender ID
    appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxxxxxx"     // ← deine App ID
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
window.database = firebase.database();

console.log("✅ Firebase erfolgreich verbunden!");
