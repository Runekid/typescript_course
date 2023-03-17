let greetings: string = "Hello Onur";

greetings.toLowerCase();

console.log(greetings);

// number + type inference (type is decided by the value that's being assigned)
let userid = 3344.45;

userid.toFixed();

let isLoggedIn: boolean = false;

let hero: string;

function getHero() {
    return "spiderman";
}

hero = getHero();

export {}