
//! Dövürlər   Loops
//!  Praktika While


//todo 1 Istifadəçidən alınan ədədləri toplasin. eger gelen reqem 0 olarsa umumi neticeni ekranda gostersin
// 0 olarsa dovur biter


// let userNum = null;

// let total = 0;

// while (userNum !== 0) {

//     userNum = parseInt(prompt("Bir eded daxil edin ( Dovurden cixmaq ucun 0 daxil edin)"), 10);

//     total = total + userNum;
// }
// alert(`Daxil edilen ededlerin cemi ${total} edir`);




//todo 2 Kompyuterin fikrində tutduğu ədədi istifadəçi təxmin etsin. Hemde istifadecdiye ip ucalri verilsin.

// Fikirde tutulan eded 1 ile 50 arasindadir

let compNum = 21;

let guess = null;

let attempts = 0;

while (compNum !== guess) {

    attempts++;

    guess = Number(prompt("Ededi texmin edin"));

    if (guess < compNum) {
        alert(`Fikrimde tutdugum eded ${guess}-den boyukdur`);

    } else if (guess > compNum) {
        alert(`Fikrimde tutdugum eded ${guess}-den Kiciydir`);

    } else {
        alert(`Tebrikler fikrimde tutduqum ededi dogru tapdiniz
            Eded: ${guess} idi
            Sizin Umumi cehd sayi ${attempts};
            `);
    }
}








