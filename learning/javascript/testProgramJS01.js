function add(a, b) {
    return a + b;
}

function pow1(a, b) {
    let square = a ** b;
    console.log(square);
}

function primeNum() {
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

console.log("-----------------");

function primeNum2() {
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}
function printBreak() {
    console.log("-----");
}
function main() {
    console.log(add(5, 3));
    primeNum();
    printBreak();
    pow1(2, 4);
    printBreak();
    primeNum2();
}
main();
