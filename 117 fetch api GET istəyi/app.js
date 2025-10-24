//?

// const BASE_URL = "http://localhost:5000";

// async function getAllData(url, userId) {
//   const respons = await fetch(`${BASE_URL}/${url}/${userId}`);

//   const data = await respons.json();
//   console.log(data);

//   //   const data = await (await fetch(url)).json();
//   //   console.log(data);
// }

// getAllData("users", 2);

// async function getAllUsers() {
//   try {
//     const respons = await fetch("http://localhost:5000/users/");
//     const data = await respons.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error oldu");
//   }
// }

// getAllUsers();

// fetch("http://localhost:5000/users/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
