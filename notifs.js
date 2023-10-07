var notfed = false;

const tips = [
    "Joe Mama, not Joe Biden",
    "It's not a trap. It's a Standoff",
    "It's one of those kind of nights",
    "Sometimes you're gay. Sometimes you're not",
    "I am Asif",
    "Now I am become death. Destroyer of Worlds",
    "Did ya watch Oppenheimer?",
    "Watcha know bout rolling down in the Deep?"
];

function showRandomNotification() {
    var tip = Math.floor(Math.random() * tips.length);
    new Notification(tips[tip]);
}

function checkTime() {
    var d = new Date();
    var tm = d.getMinutes();
    var ts = d.getSeconds();

    if (tm === 0 && ts === 0 && !notfed) {
        showRandomNotification();
        notfed = true;
    }

    if (tm !== 0 && ts !== 0 && notfed) {
        notfed = false;
    }
}

// Request permission for desktop notifications
if (Notification.permission !== 'granted') {
    Notification.requestPermission();
}

// Check the time every second
setInterval(checkTime, 1000);
setInterval(showRandomNotification, 1200000);