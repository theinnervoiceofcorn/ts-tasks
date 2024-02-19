const str: string = "Hello, world!";
console.log(str);

const num: number = 42;
console.log(num);

const isTrue: boolean = true;
console.log(isTrue);

const obj: { name: string, age: number } = { name: "John", age: 30 };
console.log(obj);

const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

const add: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
};
console.log(add);

const firstName: string = "John";
console.log(firstName);

const age: number = 30;
console.log(age);

const isStudent: boolean = false;
console.log(isStudent);

const person: { name: string, age: number, isStudent: boolean } = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(person);

const fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits);

function multiply (x: number, y: number): number {
    return x * y;
}
multiply(2, 3)
