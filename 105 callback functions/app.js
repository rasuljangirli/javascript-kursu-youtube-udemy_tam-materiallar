



function logFirstName(cb) {
    setTimeout(() => {
        console.log("Alisa")

        cb()
    }, 3000)
}

function logAge(cb) {
    setTimeout(() => {
        console.log(23)
        cb()
    }, 1000)
}

function logLastName(cb) {
    setTimeout(() => {
        console.log("Aloso")
        cb()
    }, 2000)
}

function logHobby() {
    setTimeout(() => {
        console.log("Oyun")
    }, 1500)
}



logFirstName(() => {
    logAge(() => {
        logLastName(() => {
            logHobby();
        });
    });
})




// logFirstName();
// logAge();
// logLastName();

// logFirstName(logAge);

