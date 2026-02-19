function greet(name: string): string {
    return "Hello, " + name;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function isAdult(age: number): boolean {
    return age >= 18;
}

console.log(greet("Yarik"));
console.log(multiply(5, 4));
console.log(isAdult(25));