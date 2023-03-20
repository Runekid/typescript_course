// const user: (string | number | boolean) = [5, "je", true] --- order not important when it's a union type
//tuple -> order and size set
let user: [string, number, boolean];

user = ["hey", 1, true];

let rgb: [number, number, number] = [255, 255, 255];


type User = [number, string];

const newUser: User = [112, "h@h.c"];

newUser[1] = "yee@c.c" // value can be changed when it's a tuple const
//newUser.push(true) // because a tuple is an array, you can use array functions but ot anymore it seems  




export {}