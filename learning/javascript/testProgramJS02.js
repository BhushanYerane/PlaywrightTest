// Main Function
function main() {
    let num = 1234567;
    let num1 = 12301321;
    let num2 = 10;

    letterConvert();
    countDigit(num);
    sumDigit(num);
    reverseNum(num);
    palindromeNum(num1);
    palindromeStack();
    palindromeWhile();
    swapNumbers(num, num1);
    factorialNum(num2);

    let fact = getFactorial(num2);
    console.log("2->-> " + fact);

    fibonacciSeries(7);
    checkPrimeNum();
    primeNumbers();
    console.log();
    gcdBigNum();
    gcdNum();

    console.log("--------------------------");

    let str =
        "AzoPRsqbkoxserAKUDOnjsoSyusSlkdsmSOSmxlsASkjioqlmnHs";

    let chars = str.toLowerCase().split("").sort();

    let count = 1;

    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            if (count > 1) {
                console.log(`${chars[i]} : ${count}`);
            }
            count = 1;
        }
    }

    if (count > 1) {
        console.log(`${chars[chars.length - 1]} : ${count}`);
    }
}

function letterConvert() {
    let str = "AzoPRsqbkoxserAKUDOnjsoSyusSlkdsmSOSmxlsASk";

    let result = "";

    for (let ch of str) {
        if (ch >= "A" && ch <= "Z") {
            result += ch.toLowerCase();
        } else {
            result += ch.toUpperCase();
        }
    }

    console.log(result);
}

function countDigit(num) {
    let count = 0;

    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }

    console.log(count);
}

function sumDigit(num) {
    let sum = 0;

    while (num !== 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

function reverseNum(num) {
    let reverse = 0;

    while (num !== 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    console.log(reverse);
}

function palindromeNum(num1) {
    let original = num1;
    let rev = 0;

    while (num1 !== 0) {
        let digit = num1 % 10;
        rev = rev * 10 + digit;
        num1 = Math.floor(num1 / 10);
    }

    console.log(
        rev === original ? "Palindrome" : "Not Palindrome"
    );
}

function palindromeStack() {
    console.log("Using Stack:");

    let str = "ALQPZMXXMZPQLA";
    let stack = [];

    for (let ch of str.toLowerCase()) {
        stack.push(ch);
    }

    console.log(stack);

    let result = "";

    while (stack.length > 0) {
        result += stack.pop();
    }

    console.log(
        str.toLowerCase() === result
            ? "Palindrome"
            : "Not Palindrome"
    );
}

function palindromeWhile() {
    let str = "ALQPZMXXMZPQLA";

    let i = 0;
    let j = str.length - 1;
    let isPal = true;

    while (i < j) {
        if (str[i] !== str[j]) {
            isPal = false;
            break;
        }
        i++;
        j--;
    }

    console.log(
        "While Loop: " +
            (isPal ? "Palindrome" : "Not Palindrome")
    );
}

function swapNumbers(a, b) {
    console.log(`${a} <-> ${b}`);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(`${a} <-> ${b}`);
}

function factorialNum(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log(fact);
}

function getFactorial(num) {
    if (num <= 1) {
        return 1;
    }

    return num * getFactorial(num - 1);
}

function fibonacciSeries(n) {
    let a = 0;
    let b = 1;

    let result = `${a} ${b}`;

    for (let i = 2; i < n; i++) {
        let sum = a + b;
        result += ` ${sum}`;
        a = b;
        b = sum;
    }

    console.log(result);
    console.log("--------------");
}

function checkPrimeNum() {
    let num = 139;
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(
        isPrime
            ? `Prime ${num}`
            : `Not Prime ${num}`
    );
}

function primeNumbers() {
    let result = [];

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result.push(i);
        }
    }

    console.log(result.join(" "));
}

function gcdBigInt(a, b) {
    while (b !== 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcdBigNum() {
    let n1 = 123456789123456789n;
    let n2 = 987654321987654321n;

    console.log("\nGCD: " + gcdBigInt(n1, n2));
}

function gcdNum() {
    let a = 48;
    let b = 18;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    console.log(a);
}

// Run Program
main();