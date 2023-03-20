"use strict";
// class User {
//     name: string;
//     email: string;
//     city: string = "";
//     constructor(name: string, email: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= ) {
            throw new Error("course count should be more than ");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("token deleted");
    }
}
const onur = new User("Onur", "onur@dev.be");
onur.city = "Zele";
