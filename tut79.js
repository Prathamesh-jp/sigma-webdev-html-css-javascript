let a = prompt("enter the value of a:")

let b = prompt("enter the value of b:")

let sum = parseInt(a) + parseInt(b);

if (isNaN(a) || isNaN(b)) {
    throw TypeError("value is not in integer type")
}

function main() {

    try {
        console.log("the sum of two number is", sum);
        return true

    } catch (error) {
        console.log("we got an error");
        return false

    }

    finally {
        console.log("the files has been closed")
    }
}

let c = main()