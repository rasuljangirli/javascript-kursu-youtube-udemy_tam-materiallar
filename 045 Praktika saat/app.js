
//! Praktika saat

function oclock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secods = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (secods < 10) {
        secods = "0" + secods;
    }
    console.clear();
    console.log(`${hours}:${minutes}:${secods}`)

}

// setInterval(oclock, 1000);














