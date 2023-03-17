"use strict";
exports.__esModule = true;
var score = 33;
var onur = {
    name: "Onur",
    id: 3365
};
onur = {
    username: "ob",
    id: 56
};
// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    //making some API calls
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3, "4"];
var seatAllotment;
seatAllotment = "aisle";
