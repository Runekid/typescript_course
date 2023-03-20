interface User {
    readonly dbId: number,
    userId: number,
    email: string,
    googleId?: string,
    //startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number 
}

const onur: User = {dbId: 12, userId: 45, email: "onur@de.b", startTrial: () => {
    return "trial started"
},
getCoupon(couponName: "cou", val: 1) {
    return val
},
}
//onur.dbId = 56;
onur.email = "test@g.n"
