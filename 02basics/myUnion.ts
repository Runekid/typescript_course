let score: number | string | boolean = 33;

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let onur: User | Admin = {
    name: "Onur",
    id: 3365
}

onur = {
    username: "ob",
    id:56
}

// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
    //making some API calls
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

//array

const data: (string | number)[] = [1, 2, 3, "4"]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle" 

export {}