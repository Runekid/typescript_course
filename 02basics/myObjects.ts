const user = {
    name: "onur",
    email: "onur@dev.be",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: "onur", isPaid: false, email: "onur@dev.be" };

createUser(newUser);

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 };
}

export { }