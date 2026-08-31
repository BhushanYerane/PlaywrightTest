function findLargest(a:number, b:number) :number {
    return a>b ? a:b;
}
let largeNum : number = findLargest(10,30);
console.log(largeNum);

function factorial (n:number) : number {
    let fact =1;
    for(let i=0;i<n;i++)
    {
        fact = fact * i;
    }
    return fact;
}
 console.log(factorial(7));

 // Regular function 
let multiply1 = function(x: number, y: number): number {
    return x * y;
};

// Arrow function
let multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10,30));
console.log(multiply2(10,30));