// ==================== FIREBASE CONFIG - InfoEscape ====================
// Für Firebase SDK Version 8 (passt zum Projekt)

const firebaseConfig = {
    apiKey: "AIzaSyC2JaI5qdHBuPMkdJuxVfb0DaIfJRbWtf4",
    authDomain: "escape-room-ed686.firebaseapp.com",
    databaseURL: "https://escape-room-ed686-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "escape-room-ed686",
    storageBucket: "escape-room-ed686.firebasestorage.app",
    messagingSenderId: "1065510089327",
    appId: "1:1065510089327:web:10443cb46c1b761463939a"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
window.database = firebase.database();

console.log("✅ Firebase erfolgreich verbunden! 🔥");
