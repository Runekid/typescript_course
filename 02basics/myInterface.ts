interface User {
    readonly dbId: number,
    userId: number,
    email: string,
    googleId?: string,
    //startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number 
}

interface User { // this is reopening an interface -> difference with type
    ghToken: string
}

const onur: User = {dbId: 12, userId: 45, email: "onur@de.b", startTrial: () => {
    return "trial started"
},
getCoupon(couponName: "cou", val: 1) {
    return val
},
ghToken: "kl"
}
//onur.dbId = 56;
onur.email = "test@g.n"
