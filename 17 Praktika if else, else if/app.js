

// ! Praktika if else, else if çoxlu if istifadəsi

//hər gün hədəfə daha da yaxınlaşırsan. DAVAM DAVAM DAVAM 

// ? if else
// todo 1 cüt və tək ədəd yoxlaması
// let number = ;

// if (number % 2 === 0) {

//     console.log(`${number} cut ededdir`);

// } else {
//     console.log(`${number} tek ededdir`);
// }


// todo 2 Hesaba giriş məlumatlarının yoxlanması
// let userName = "rasul_jangirl";
// let password = "123456seven";

// if (userName === "rasul_jangirli" && password === "123456seven") {

//     console.log("Girise icaze verildi");

// } else {

//     console.log("ya userName yada password yalnisdir");

// }


// ? if, else if, else
// todo 1 Temperaturu yoxlama

// let temp = 30;

// if (temp > 30) {

//     console.log("Hava istidir"); 

// } else if (temp >= 20 && temp < 30) {

//     console.log("Hava yaxsidi");

// } else if (temp < 20) {
//     console.log("Hava Soyuqdur");

// } else {
//     console.log("Hec bir sert odenmedi")
// }


// todo 2 İmtahandan keçib-keçməmək

// let score = 80;

// if (score > 91) {

//     console.log(`Sizin netice Eladir`);

// } else if (score < 91 && score > 71) {

//     console.log("sizin netice yaxsidir")

// } else if (score < 51) {
//     console.log("sizin netice cox zeifdir");
// }




// ? Çoxlu if (else olmadan)
// todo 1 Bir neçə şərti ayrıca yoxlama ( fərdin yetgin, yaşlı, uşağ olmasını yoxlamaq )


// let age = 70;

// if (age < 18) {
//     console.log("Siz xosbextsiz");
// }

// if (age > 18) {
//     console.log("Siz gencsiz")
// }

// if (age > 65) {
//     console.log("Siz pensiya yaşındasız");
// }



// ? Çoxlu if iç-içə (else ilə bərabər)
// todo 1 Rəqəmin müsbət, mənfi və ya sıfır olmasını yoxlamaq və gələn dəyərin Number olub olmadigini yoxlamaq;

let number = 12;


if (typeof number === "number") {

    if (number < 0) {
        console.log("Eded menfidir");
    }

    if (number === 0) {
        console.log("Eded 0-a beraberdir");
    }

    if (number > 0) {

        console.log("Eded musbetdir");
    }

} else {
    console.log("Eded daxil etmemisiz");
}









