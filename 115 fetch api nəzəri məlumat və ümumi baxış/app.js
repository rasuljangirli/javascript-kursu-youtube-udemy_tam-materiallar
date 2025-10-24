//? Fetch api nəzəri məlumat və ümumi baxış

fetch("http://localhost:5000/users");

//?-------------------------

fetch("http://localhost:5000/users", {
  method: "HTTP_METODU", // məsələn: "GET", "POST", "PUT", "DELETE"
  headers: {
    "Content-Type": "application/json",
    Authorization: "TOKEN",
  },
  body: JSON.stringify({}),
});

//?-------------------------

fetch("http://localhost:5000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "abc123",
  },
  body: JSON.stringify({
    name: "alis",
    email: "alisa@mail.com",
  }),
});
