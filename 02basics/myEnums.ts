// enum SeatChoice {
//     AISLE = 10, //following enums are always incremental unless set otherwise
//     MIDDLE = 22,
//     WINDOW,
//     FOURTH
// }

const enum SeatChoice { // const will just assign value to variable
    AISLE = "10", // when you set a value other than number than all values need to be set manually if the order is not clear for incrementation
    MIDDLE = 22,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE;

export {}