
//! Obyektlər, methodları və this açar sözü


let userInfo = {
    firstName: "Alisa",
    lastName: "Aloso",
    age: 23,
    accountInfo: {
        userName: "alisa_aloso",
        password: "123456seven"
    },
    fullName: function () {
        let result = "Full Name : " + this.firstName + " " + this.lastName;
        console.log(result);
    },
    premium: true
};

// console.log(userInfo.firstName);
// console.log(userInfo.age);
// console.log(userInfo.accountInfo.password);
// console.log(userInfo["accountInfo"].userName);

// console.log(Object.keys(userInfo));
// console.log(Object.values(userInfo));

// userInfo.fullName();





















