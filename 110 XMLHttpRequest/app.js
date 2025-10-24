
const getDataBtn = document.querySelector("#get-data-btn");

function getAllUsers() {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response))
        }
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/2");

    xhr.send();
}

getDataBtn.addEventListener("click", getAllUsers)

