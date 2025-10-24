
//? Session storage

// sessionStorage.setItem("name", "Rcode");
// sessionStorage.setItem("lesson", "JavaScript");

// sessionStorage.clear();

// sessionStorage.removeItem("name")

// let sessionData = sessionStorage.getItem("name");
// console.log(typeof sessionData);

let numbers = [1, 2, 3, 4, 5];

// sessionStorage.setItem("numbers", numbers);
// console.log(sessionStorage.getItem("numbers"))

sessionStorage.setItem("numbers", JSON.stringify(numbers));

console.log(JSON.parse(sessionStorage.getItem("numbers")));



