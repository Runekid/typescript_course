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
        this.city = "";
    }
}
const onur = new User("Onur", "onur@dev.be");
onur.city = "Zele";
