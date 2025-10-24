//?

const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
  const response = await fetch("http://localhost:5000/users/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify({
      id: "3",
      firstName: "Ali",
      lastName: "Alo",
      age: 20,
      salary: 4000,
    }),
  });
  const data = await response.json();
  console.log(data);
});
