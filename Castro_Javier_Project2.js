//alert("JavaScript works!");

//Author: Javier Castro
//Date: April 10th 2014
//SDI 1404 Project 2


var strGreetDog = function (dogName, timeOfDay) {
    greeting = "Hello " + dogName + " it's a wonderful " + timeOfDay + "!!!"; 
    return greeting;

}; // string function

var greetingDog = strGreetDog("Bobby", "afternoon");
console.log(greetingDog);
