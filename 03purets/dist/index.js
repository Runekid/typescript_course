"use strict";
class User {
    constructor(name, email) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const onur = new User("Onur", "onur@dev.be");
onur.city = "Zele";
