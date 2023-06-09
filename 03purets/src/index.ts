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

    protected _courseCount: number = 1 // also accessible in subclasses

    city: string = "";
    constructor(public name: string,
         public email: string,
         //private userId: string
         ) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) { // setters have no return type!
        if (courseNum <= ) {
            throw new Error("course count should be more than ")
        }
        this._courseCount = courseNum;
    }

    private deleteToken() {
        console.log("token deleted")
    }
}

class subUser extends User {
    private isFamily: booelan = true;
    changeCourseCount() {
        this._courseCount = 4;  
    }
}

const onur = new User("Onur", "onur@dev.be");
onur.city = "Zele"