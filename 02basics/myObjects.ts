const user = {
    name: "onur",
    email: "onur@dev.be",
    isActive: true
}

//function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: "onur", isPaid: false, email: "onur@dev.be" };

//createUser(newUser);

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 };
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number // optional prop
};

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.c",
    isActive: true
};

//myUser._id = "dwad"; // not possible because readonly;


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let sheesh: cardDetails = {
    cardNumber: "d",
    cardDate: "s",
    cvv: 4
}

export { }