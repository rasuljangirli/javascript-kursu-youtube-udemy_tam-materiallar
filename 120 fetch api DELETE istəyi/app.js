//?

const button = document.querySelector("#btn");

const id = 1;

button.addEventListener("click", async () => {
  await fetch(`http://localhost:5000/users/1`, {
    method: "DELETE",
  });
});
