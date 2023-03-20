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
    city: string = "";
    constructor(public name: string,
         public email: string,
         //private userId: string
         ) {
    }
}

const onur = new User("Onur", "onur@dev.be");
onur.city = "Zele"