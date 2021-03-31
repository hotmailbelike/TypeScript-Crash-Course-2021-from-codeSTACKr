"use strict";
/* String Type */
var aString = 'Hi';
//aString = 5 //Won't work
aString = 'Hi 5'; //Works
// declaring a string type variable
var anotherString;
// this also works but not needed
var yetAnotherString = 'Hello';
/* String Type */
/* *********** */
/* Number Type */
var aNum = 5;
var anotherNumber;
/* Number Type */
/* *********** */
/* Boolean Type */
var aBool = true;
var anotherBool;
/* Boolean Type */
/* *********** */
/* Any Type */
var anyVar;
var anotherAnyVar = 'string';
anotherAnyVar = 5;
/* Any Type */
/* *********** */
/* Union */
var year; //means can be either a string or a number
year = 2021;
year = '2021';
/* Union */
/* *********** */
/* String Array Type */
var arrString = ['a', 'b', 'c', 'd'];
arrString.push('another String'); //works
// arrString[2] = 5; //won't work
// arrString.push(5); //won't work
/* String Array Type */
/* *********** */
/* Number Array Type */
var arrNumber = [1, 2, 3, 4];
/* Number Array Type */
/* *********** */
/* Boolean Array Type */
var arrBool = [true, true, false, true];
/* Boolean Array Type */
/* *********** */
/* Mixed Array Type */
var arrMix = [1, 'a', true];
/* Mixed Array Type */
/* *********** */
/* Tuples */
// 1st index must be a string and 2nd index must be a number
var arrayTup = ['a string', 5];
/* Tuples */
/* *********** */
/* Object Type */
var person = {
    name: 'Jesse',
    age: 25,
};
person.name = 'Another Jess';
// let month:string|number
var month;
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
function calcSum(a, b) {
    return a + b;
}
calcSum(2, 6);
// alternate approach
//declare the type of function first
/*
    let FUNCTION_NAME: (PARAM_1:paramType, PARAM_2:paramType) => returnType;
*/
var calcSum2; //return type
// "first" can be "a" as well and/or "second" can be "b" as well
calcSum2 = function (first, second) {
    return first + second;
};
calcSum2(6, 8);
// function with optional params
var calcSum3;
calcSum3 = function (n1, n2) {
    return n1 + n2;
};
/* Function Type */
/* *********** */
/* Void Type */
var sayHi = function () {
    console.log('hi');
};
var mike = {
    name: 'mike',
    age: 34, // must be number
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "My Name is " + this.name + " and my age is " + this.age;
    };
    return Person;
}());
var john = new Person('John', 22);
console.log(john.greet());
// another way
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.greet = function () {
        return "My Name is " + this.name + " and my age is " + this.age;
    };
    return Person2;
}());
var doe = new Person2('Doe', 65);
console.log(doe.greet());
/* Interfaces */
/* *********** */
/* DOM Manipulation & Type Casting */
// Continuation from Interfaces Section
var inputName = document.querySelector('#name'); // we need the as part as typescript does not know what type of element is being selected (this is called type casting)
var inputAge = document.querySelector('#age');
var inputForm = document.querySelector('form'); // typescript knows that this is a form element so we do not need to type cast it
var greeting = document.querySelector('.greeting'); //typeScript needs to know what kind of element is being selected hence the typecasting for '<div/>' element here
inputForm === null || inputForm === void 0 ? void 0 : inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
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
function doSomething(arg) {
    // do something
    return arg;
}
doSomething('a'); //works
doSomething(5); //works
doSomething(true); //works
doSomething('hello');
var aBook = {
    id: 1,
    name: 'Title 1',
    data: 'some random str',
};
var dBook = {
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
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMW"] = 4] = "BMW";
})(ManufacturerMake || (ManufacturerMake = {}));
var myCar = {
    year: 2021,
    //make:3 //Volvo index
    make: ManufacturerMake.VOLVO,
};
console.log(myCar.make); //will show 3
/* Enums */
/* *********** */
