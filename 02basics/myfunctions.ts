function addTwo(num: number): number {
    return num + 2;
}

addTwo(5)

function getUpper(name: string) {
    return name.toUpperCase();
}

getUpper("onur")


function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

signUpUser("onur", "onur@itenium.be", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("o", "o@o.b")

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "";
}


const heros = ["thor", "spiderman", "ironman"];

heros.map(hero => {
    return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
    console.log(errMsg)
}

function handleError(errMsg: string): never { // good for handling errors, checks documentation
    throw new Error(errMsg);
}




export {}