// Fragen-Datenbank für den Informatik Escape Room (7. Klasse Niveau)
const infoQuestions = [
    {
        id: 1,
        type: "multiple",
        text: "Was bedeutet die Abkürzung 'HTML'?",
        options: [
            "Hypertext Markup Language",
            "High Tech Modern Language",
            "Home Tool Multi Language",
            "Hyperlinks and Text Management"
        ],
        answer: "Hypertext Markup Language",
        hint: "Es ist die Sprache, mit der man die Struktur von Webseiten baut."
    },
    {
        id: 2,
        type: "multiple",
        text: "Welches HTML-Tag erzeugt die größte Überschrift?",
        options: ["<h6>", "<head>", "<heading>", "<h1>"],
        answer: "<h1>",
        hint: "Die Nummer 1 ist immer die Wichtigste!"
    },
    {
        id: 3,
        type: "input",
        text: "Wie lautet die Binärzahl 0101 als normale Dezimalzahl (Zahlensystem von 0-9)?",
        answer: "5",
        hint: "Die Stellenwertigkeiten von rechts nach links sind: 1, 2, 4, 8."
    },
    {
        id: 4,
        type: "multiple",
        text: "Wofür ist 'CSS' in einer Webseite zuständig?",
        options: [
            "Für die Speicherung von Daten in einer Datenbank.",
            "Für das Aussehen, Design und Farben der Webseite.",
            "Für die Berechnungen und Logik.",
            "Um den Internetprovider zu kontaktieren."
        ],
        answer: "Für das Aussehen, Design und Farben der Webseite.",
        hint: "Cascading Style Sheets machen Webseiten hübsch."
    },
    {
        id: 5,
        type: "input",
        text: "Rechne das Binär-Byte 00001010 in eine Dezimalzahl um.",
        answer: "10",
        hint: "Die vierte Stelle von rechts zählt 8, die zweite Stelle zählt 2. Addiere sie!"
    },
    {
        id: 6,
        type: "multiple",
        text: "Welches Bauteil gilt als das 'Gehirn' des Computers?",
        options: ["Die Festplatte (HDD/SSD)", "Die Grafikkarte (GPU)", "Der Hauptprozessor (CPU)", "Das Netzteil"],
        answer: "Der Hauptprozessor (CPU)",
        hint: "Central Processing Unit führt alle Befehle aus."
    },
    {
        id: 7,
        type: "multiple",
        text: "Was passiert mit Daten im Arbeitsspeicher (RAM), wenn der PC ausgeschaltet wird?",
        options: [
            "Sie werden dauerhaft auf dem Mainboard eingebrannt.",
            "Sie werden gelöscht.",
            "Sie werden automatisch ins Internet hochgeladen.",
            "Nichts, sie bleiben für immer dort gespeichert."
        ],
        answer: "Sie werden gelöscht.",
        hint: "RAM ist ein flüchtiger Speicher."
    },
    {
        id: 8,
        type: "input",
        text: "Welches Zeichen leitet in CSS eine ID-Auswahl (Selektor) ein? (z.B. für ein Element mit id='start')",
        answer: "#",
        hint: "Man nennt es auch Raute-Zeichen oder Hashtag."
    },
    {
        id: 9,
        type: "multiple",
        text: "Was macht ein 'Algorithmus'?",
        options: [
            "Er reinigt den PC von Staub.",
            "Es ist ein Programmierfehler.",
            "Eine eindeutige Schritt-für-Schritt-Anleitung zur Lösung eines Problems.",
            "Ein Bauteil, das die Internetgeschwindigkeit erhöht."
        ],
        answer: "Eine eindeutige Schritt-für-Schritt-Anleitung zur Lösung eines Problems.",
        hint: "Wie ein Kochrezept: Erstens, zweitens, drittens..."
    },
    {
        id: 10,
        type: "input",
        text: "Wie viele Bits ergeben genau ein Byte?",
        answer: "8",
        hint: "Eine magische Zahl in der Informatik. Ein Zeichen hat meistens so viele Bits."
    },
    {
        id: 11,
        type: "multiple",
        text: "Welche IP-Adresse ist für ein lokales Netzwerk typisch?",
        options: ["192.168.1.1", "999.888.777.666", "www.google.com", "ftp://localhost"],
        answer: "192.168.1.1",
        hint: "IP-Adressen bestehen aus vier Zahlenblöcken von 0 bis 255."
    },
    {
        id: 12,
        type: "multiple",
        text: "Was bedeutet das 'S' in HTTPS am Anfang einer Web-Adresse?",
        options: ["Super", "Secure (Sicher)", "Speed (Schnell)", "Server"],
        answer: "Secure (Sicher)",
        hint: "Es bedeutet, dass die Verbindung verschlüsselt ist."
    },
    {
        id: 13,
        type: "input",
        text: "Wenn in JavaScript 'x = 5' und 'y = 10' ist. Was kommt bei 'x + y' heraus?",
        answer: "15",
        hint: "Ganz einfaches Plusrechnen mit Variablen!"
    },
    {
        id: 14,
        type: "multiple",
        text: "Was ist ein 'Pixel'?",
        options: [
            "Ein kleiner Fehler im Programmcode.",
            "Ein einzelner Bildpunkt auf einem Bildschirm.",
            "Ein Kabel für die Internetübertragung.",
            "Der Name des ersten Computers."
        ],
        answer: "Ein einzelner Bildpunkt auf einem Bildschirm.",
        hint: "Aus Millionen davon setzt sich dein Monitorbild zusammen."
    },
    {
        id: 15,
        type: "multiple",
        text: "Welche Dateiendung gehört typischerweise zu einem ausführbaren Programm unter Windows?",
        options: [".txt", ".png", ".exe", ".mp3"],
        answer: ".exe",
        hint: "Steht für 'executable'."
    },
    {
        id: 16,
        type: "input",
        text: "Schreibe die Dezimalzahl 4 als 4-stellige Binärzahl (z.B. 0000).",
        answer: "0100",
        hint: "Die Stellen von rechts: 1er, 2er, 4er, 8er."
    },
    {
        id: 17,
        type: "multiple",
        text: "Was ist Scratch?",
        options: [
            "Ein Computervirus, der Daten zerkratzt.",
            "Eine visuelle, blockbasierte Programmiersprache für Einsteiger.",
            "Ein Tool zum Hacken von Passwörtern.",
            "Ein Texteditor von Microsoft."
        ],
        answer: "Eine visuelle, blockbasierte Programmiersprache für Einsteiger.",
        hint: "Da schiebt man bunte Code-Blöcke mit einer Katze zusammen."
    },
    {
        id: 18,
        type: "multiple",
        text: "Welches dieser Geräte ist ein REINES Eingabegerät?",
        options: ["Monitor", "Drucker", "Tastatur", "Lautsprecher"],
        answer: "Tastatur",
        hint: "Damit schickst du Befehle / Buchstaben IN den Computer hinein."
    },
    {
        id: 19,
        type: "multiple",
        text: "Was macht ein Router im Internet?",
        options: [
            "Er speichert alle Passwörter der Benutzer.",
            "Er leitet Datenpakete zwischen verschiedenen Netzwerken weiter.",
            "Er übersetzt Programmiercode in Maschinensprache.",
            "Er kühlt den Serverraum."
        ],
        answer: "Er leitet Datenpakete zwischen verschiedenen Netzwerken weiter.",
        hint: "Er steht meistens zu Hause und blinkt. Er vermittelt den Weg ins Internet."
    },
    {
        id: 20,
        type: "input",
        text: "Wie nennt man die Suche nach Fehlern in einem Programmcode auf Englisch?",
        answer: "Debugging",
        hint: "Es hat etwas mit Wanzen oder Käfern (Bugs) zu tun."
    },
    {
        id: 21,
        type: "multiple",
        text: "Was ist ein 'Browser'?",
        options: [
            "Ein Programm zum Anschauen von Webseiten (z.B. Chrome, Firefox).",
            "Ein Antivirenprogramm.",
            "Ein Betriebssystem.",
            "Das Programmier-Tool für HTML."
        ],
        answer: "Ein Programm zum Anschauen von Webseiten (z.B. Chrome, Firefox).",
        hint: "Du benutzt gerade einen, um dieses Spiel zu spielen!"
    },
    {
        id: 22,
        type: "multiple",
        text: "Mit welchem HTML-Tag erstellt man einen klickbaren Link?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        answer: "<a>",
        hint: "Steht für Anchor (Anker)."
    },
    {
        id: 23,
        type: "input",
        text: "Welches Zeichen leitet in CSS eine Klasse (Class) ein?",
        answer: ".",
        hint: "Ein ganz einfacher Punkt."
    },
    {
        id: 24,
        type: "multiple",
        text: "Warum nutzt ein Computer das Binärsystem (0 und 1)?",
        options: [
            "Weil es für Menschen unhackbar ist.",
            "Weil Strom fließen (1) oder nicht fließen (0) kann. Das ist technisch einfach.",
            "Weil alte Monitore keine anderen Zahlen anzeigen konnten.",
            "Weil die Mathematiker damals faul waren."
        ],
        answer: "Weil Strom fließen (1) oder nicht fließen (0) kann. Das ist technisch einfach.",
        hint: "An oder Aus. Mehr kennt ein Transistor nicht."
    },
    {
        id: 25,
        type: "multiple",
        text: "Was ist eine 'Schleife' (Loop) beim Programmieren?",
        options: [
            "Ein Designelement für die Webseite.",
            "Ein Code-Abschnitt, der sich mehrmals wiederholt.",
            "Ein schwerer Programmierfehler, der den PC abstürzen lässt.",
            "Ein Kabelbinder für Serverkabel."
        ],
        answer: "Ein Code-Abschnitt, der sich mehrmals wiederholt.",
        hint: "Wiederhole solange, bis ein Ziel erreicht ist."
    },
    {
        id: 26,
        type: "input",
        text: "Ergänze die logische Reihe: 1, 2, 4, 8, 16, ...?",
        answer: "32",
        hint: "Verdopple die letzte Zahl!"
    },
    {
        id: 27,
        type: "multiple",
        text: "Was ist ein 'Phishing-Angriff'?",
        options: [
            "Ein Versuch, über gefälschte E-Mails oder Webseiten an Passwörter zu kommen.",
            "Ein physikalischer Angriff auf Unterseekabel.",
            "Ein Spiel auf dem Computer.",
            "Das automatische Herunterladen von Updates."
        ],
        answer: "Ein Versuch, über gefälschte E-Mails oder Webseiten an Passwörter zu kommen.",
        hint: "Klingt wie das englische Wort fürs Angeln (Fishing)."
    },
    {
        id: 28,
        type: "multiple",
        text: "Welches dieser Speichermedien ist in der Regel das SCHNELLSTE?",
        options: ["CD-ROM", "SSD-Festplatte", "USB-Stick 2.0", "Magnetband"],
        answer: "SSD-Festplatte",
        hint: "Solid State Drives haben keine beweglichen Teile und sind rasend schnell."
    },
    {
        id: 29,
        type: "input",
        text: "Wie nennt man die geheime Umwandlung von Text in unleserlichen Code, damit niemand mitlesen kann? (Hauptwort)",
        answer: "Verschlüsselung",
        hint: "Man braucht einen Schlüssel, um es wieder lesbar zu machen. Kryptographie."
    },
    {
        id: 30,
        type: "multiple",
        text: "Was macht der Befehl 'console.log()' in JavaScript?",
        options: [
            "Er fährt den Computer herunter.",
            "Er gibt einen Text in den Entwickler-Tools (Konsole) des Browsers aus.",
            "Er öffnet ein Popup-Fenster für den User.",
            "Er speichert das Spiel auf GitHub."
        ],
        answer: "Er gibt einen Text in den Entwickler-Tools (Konsole) des Browsers aus.",
        hint: "Super wichtig für Entwickler, um Fehler zu finden."
    },
    {
        id: 31,
        type: "multiple",
        text: "Was ist Linux?",
        options: ["Ein kostenloses, quelloffenes Betriebssystem.", "Ein berühmtes Browserspiel.", "Ein Antiviren-Programm.", "Ein spezielles Netzwerkkabel."],
        answer: "Ein kostenloses, quelloffenes Betriebssystem.",
        hint: "Das Maskottchen ist ein Pinguin namens Tux."
    },
    {
        id: 32,
        type: "input",
        text: "Welches Protokoll sorgt im Browser dafür, dass Domainnamen (z.B. google.com) in IP-Adressen übersetzt werden? (3 Buchstaben)",
        answer: "DNS",
        hint: "Domain Name System. Das Telefonbuch des Internets."
    },
    {
        id: 33,
        type: "multiple",
        text: "Welches HTML-Element bindet ein Bild ein?",
        options: ["<picture>", "<img>", "<src>", "<image>"],
        answer: "<img>",
        hint: "Kurzform für Image."
    },
    {
        id: 34,
        type: "multiple",
        text: "Was ist ein 'Cookie' im Internet-Kontext?",
        options: [
            "Ein kleiner Snack für Informatiker.",
            "Eine kleine Textdatei, die Webseiten auf deinem PC speichern, um dich wiederzuerkennen.",
            "Ein bösartiger Virus, der Passwörter klaut.",
            "Ein spezieller Pixelfehler."
        ],
        answer: "Eine kleine Textdatei, die Webseiten auf deinem PC speichern, um dich wiederzuerkennen.",
        hint: "Es heißt übersetzt Keks, speichert aber z.B. deinen Warenkorb."
    },
    {
        id: 35,
        type: "input",
        text: "Wie viel ist 2 hoch 3 (2³)?",
        answer: "8",
        hint: "Rechne: 2 * 2 * 2"
    }
];
