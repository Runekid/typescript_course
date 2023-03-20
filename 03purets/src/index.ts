class User {
    name: string;
    email: string;
    city: string = "";
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

const onur = new User("Onur", "onur@dev.be");
onur.city = "Zele"