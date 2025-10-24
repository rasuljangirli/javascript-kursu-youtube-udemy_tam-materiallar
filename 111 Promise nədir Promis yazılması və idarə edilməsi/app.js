

const a = 3;

function getData() {
    return new Promise((resolve, reject) => {

        if (a > 20) {
            resolve("Ugurlu netice")
        } else {
            reject("Ugursuz netice")
        }
    })
}

getData()
    .then((data) => {
        console.log("THEN", data);
    })
    .catch((err) => {
        console.log("CATCH", err)
    })
    .finally(() => {
        console.log("Bura her zaman isleyir")
    })