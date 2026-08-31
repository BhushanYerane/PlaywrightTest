let num1: number = 100;
do {
    if (num1 % 5 === 0) {
        num1--;
        continue;
    } 
    if (num1 % 2 === 0) {
        console.log("Number is even", num1);
        break;
    } 
    console.log("Number is odd", num1);
    num1--;
} while (num1 > 0);
console.log("End");

//
let num4: number = 100;
do {
    if (num4 % 5 === 0) {
        console.log(`${num4} is divisible by 5`);
        num4--;
        continue;
    }
    if (num4 % 2 === 0) {
        console.log(`${num4} is even`);
        break;
    }
    num4--;
} while (num4 > 0);
console.log("End");

//
let rainbow: string[] = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"];
function shuffle(arr: string[]): string[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

shuffle(rainbow);

rainbow.forEach((color: String): void => {
    console.log(color);
});
