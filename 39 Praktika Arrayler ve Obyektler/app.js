//! 25 dekabr 2024 - unutmaq olmaz.


//! Praktika - Arrays and Objects

//? 1 Array içərisində obj axtarmaq və onu geri qaytarmaq

// let users = [
//     {
//         firstName: "Firuz",
//         age: 23
//     },
//     {
//         firstName: "Cemil",
//         age: 21
//     },
//     {
//         firstName: "Cemsid",
//         age: 32
//     },
//     {
//         firstName: "Ceyhun",
//         age: 34
//     },
//     {
//         firstName: "Orxan",
//         age: 12
//     },
// ]

// function findUser(arr, person) {

//     let newUser;

//     arr.forEach(function (user) {

//         if (person == user.firstName) {
//             newUser = user;
//         }
//     })
//     return newUser;
// }
// console.log(findUser(users, "Cemil"));
// console.log(findUser(users, "Orxan"));






//? 2 İşçilərin ortalama yaşını hesablamaq

// function ageCalculate(arr) {

//     let totalAge = 0;

//     arr.forEach(function (user) {

//         totalAge += user.age;
//     })

//     return totalAge / arr.length;
// }

// console.log(ageCalculate(users));


//? 3 Gələn məlumatlardan tək və cüt ədədləri ayrı ayrı arreylərə bölün və orada saxlayın


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function calculateNumber(arr) {
//     let even = [];
//     let odd = [];

//     arr.forEach(function (number) {
//         if (number % 2 == 0) {

//             even.push(number);

//         } else {
//             odd.push(number);
//         }
//     })

//     // return {
//     //     even, odd
//     // }

//     console.log(even)
//     console.log(odd)

// }

// console.log(calculateNumber(numbers))

// calculateNumber(numbers);

//? 4 Arrayin elementlərini sil ve array daxilinə bir cümlə əlavə et.

// let numbers = [1, 2, 3, 4];
// numbers.splice(0, numbers.length, "Hər şey yaxşı olacaq");

// console.log(numbers);





















