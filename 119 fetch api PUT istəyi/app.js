//?

const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:5000/users/1", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Alis",
        lastName: "Aloooooo",
        salary: 12000,
      }),
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
