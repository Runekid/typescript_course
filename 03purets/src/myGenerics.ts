const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val;
}

//T is a Type generic
function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree("3")

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: "Coke", type: 1 })

function getSearchProducts<T>(products: T[]): T {
    return products[3];
}

const getMoreSearchProducts = <T,/*not jsx syntax but generics syntax*/>(products: T[]): T => {
    return products[3]
}


interface Database {
    connection: string,
    username: string,
    password: string
}


function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

//anotherFunction(3, {})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product)
    }
}