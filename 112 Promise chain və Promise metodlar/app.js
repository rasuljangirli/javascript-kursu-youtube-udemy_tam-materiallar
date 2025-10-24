//? all allSettled any race

// const p1 = Promise.resolve("p1");
// const p2 = Promise.resolve("p2");
// const p3 = Promise.resolve("p3");

// Promise.race([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Promise.any([p2, p1, p3]).then((data) => {
//   console.log(data);
// });

// Promise.all([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Promise.allSettled([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// function getUserİd() {
//   return new Promise((resolve, reject) => {
//     reject("Xeta userId");
//   });
// }

// function getUserName(userId) {
//   return new Promise((resolve, reject) => {
//     if (userId == 2) {
//       resolve("Alisa");
//     } else {
//       reject("User tapilmadi");
//     }
//   });
// }

// getUserİd()
//   .then((id) => {
//     return getUserName(id);
//   })
//   .catch((err) => {
//     console.log("Xeta 1 " + err);
//     throw "Salam";
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((err) => {
//     console.log("Xeta 2 " + err);
//   });

// getUserİd()
//   .then((id) => {
//     getUserName(id)
//       .then((userName) => {
//         console.log(userName);

//       })
//       .catch((error) => {
//         console.log("Xeta " + error);
//       });
//   })
//   .catch((err) => {
//     console.log("Xeta 1 " + err);
//   });
