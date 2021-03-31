/* String Type */
let aString = 'Hi';

//aString = 5 //Won't work
aString = 'Hi 5'; //Works

// declaring a string type variable
let anotherString: string;

// this also works but not needed
let yetAnotherString: string = 'Hello';

/* String Type */

/* *********** */

/* Number Type */

let aNum = 5;
let anotherNumber: number;

/* Number Type */

/* *********** */

/* Boolean Type */

let aBool = true;
let anotherBool: boolean;

/* Boolean Type */

/* *********** */

/* Any Type */

let anyVar: any;
let anotherAnyVar: any = 'string';
anotherAnyVar = 5;

/* Any Type */

/* *********** */

/* Union */

let year: string | number; //means can be either a string or a number
year = 2021;
year = '2021';

/* Union */

/* *********** */

/* String Array Type */

let arrString: string[] = ['a', 'b', 'c', 'd'];
arrString.push('another String'); //works
// arrString[2] = 5; //won't work
// arrString.push(5); //won't work

/* String Array Type */

/* *********** */

/* Number Array Type */

let arrNumber: number[] = [1, 2, 3, 4];

/* Number Array Type */

/* *********** */

/* Boolean Array Type */

let arrBool: boolean[] = [true, true, false, true];

/* Boolean Array Type */

/* *********** */

/* Mixed Array Type */

let arrMix: (string | number | boolean)[] = [1, 'a', true];

/* Mixed Array Type */

/* *********** */

/* Tuples */

// 1st index must be a string and 2nd index must be a number
let arrayTup: [string, number] = ['a string', 5];

/* Tuples */

/* *********** */

/* Object Type */

let person = {
	name: 'Jesse',
	age: 25,
};

person.name = 'Another Jess';
// person.name = 6 //won't work
// person.email = "fish@gish.com" //won't work

/* Object Type */

/* *********** */

/* Custom Type */

type stringOrNum = string | number;
// let month:string|number
let month: stringOrNum;

month = 11;
month = 'November';

/* Custom Type */

/* *********** */

/* Function Type */

/* 

	function FUNCTION_NAME (PARAM_1:paramType, PARAM_2:paramType): returnType{
		BODY
	}

*/

function calcSum(a: number, b: number): number {
	return a + b;
}

calcSum(2, 6);

// alternate approach

//declare the type of function first
/* 
	let FUNCTION_NAME: (PARAM_1:paramType, PARAM_2:paramType) => returnType; 
*/

let calcSum2: (a: number, b: number) => number; //return type

// "first" can be "a" as well and/or "second" can be "b" as well
calcSum2 = (first: number, second: number) => {
	return first + second;
};

calcSum2(6, 8);

// function with optional params

let calcSum3: (n1: number, n2: number, n3?: number) => number;
calcSum3 = (n1: number, n2: number) => {
	return n1 + n2;
};

/* Function Type */

/* *********** */

/* Void Type */

const sayHi = () => {
	console.log('hi');
};

/* Void Type */

/* *********** */

/* Interfaces */

interface PersonInterface {
	name: string;
	age: number;
}

let mike: PersonInterface = {
	name: 'mike', //must be string
	age: 34, // must be number
};

class Person implements PersonInterface {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet() {
		return `My Name is ${this.name} and my age is ${this.age}`;
	}
}

let john = new Person('John', 22);

console.log(john.greet());

// another way

class Person2 implements PersonInterface {
	constructor(public name: string, public age: number) {}

	greet() {
		return `My Name is ${this.name} and my age is ${this.age}`;
	}
}

let doe = new Person2('Doe', 65);
console.log(doe.greet());

/* Interfaces */

/* *********** */

/* DOM Manipulation & Type Casting */

// Continuation from Interfaces Section

const inputName = document.querySelector('#name') as HTMLInputElement; // we need the as part as typescript does not know what type of element is being selected (this is called type casting)

const inputAge = document.querySelector('#age') as HTMLInputElement;

const inputForm = document.querySelector('form'); // typescript knows that this is a form element so we do not need to type cast it

const greeting = document.querySelector('.greeting') as HTMLDivElement; //typeScript needs to know what kind of element is being selected hence the typecasting for '<div/>' element here

inputForm?.addEventListener('submit', (e) => {
	e.preventDefault();
	const person = new Person(inputName.value, inputAge.valueAsNumber);
	greeting.innerText = person.greet();

	inputForm.reset();
});

/* DOM Manipulation & Type Casting */

/* *********** */

/* Generics */

/* 

	The <T> here is just a place holder 
	We are using this because we don't know what really the params of this function is going to be

	**Note: We can use any other letter other than 'T'

*/

function doSomething<T>(arg: T): T {
	// do something
	return arg;
}

doSomething('a'); //works
doSomething(5); //works
doSomething(true); //works

doSomething<string>('hello');
// doSomething<string>(5) //won't work

interface book<T> {
	id: number;
	name: string;
	data: T;
}

const aBook: book<string> = {
	id: 1,
	name: 'Title 1',
	data: 'some random str',
};

const dBook: book<string[]> = {
	id: 2,
	name: 'Title 2',
	data: [
		'some random str 1',
		'some random str 2',
		'some random str 3',
		'some random str 4',
	],
};

/* Generics */

/* *********** */

/* Enums */

enum ManufacturerMake {
	TESLA,
	AUDI,
	MERCEDES,
	VOLVO,
	BMW,
}

const myCar = {
	year: 2021,
	//make:3 //Volvo index
	make: ManufacturerMake.VOLVO,
};

console.log(myCar.make); //will show 3

/* Enums */

/* *********** */
