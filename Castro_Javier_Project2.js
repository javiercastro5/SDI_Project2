
//Author: Javier Castro
//Date: April 10th 2014
//SDI 1404 Project 2

//These are the Global Variables
var strGreetDog,
    numWakeUpTime,
    bolIsItRaining,
    breakfastItem
;
breakfastItem = prompt ("What should I have for for Breakfast?","Cereal");

//bolIsItRaining = confirm ("Is it raining?");

//This section includes the String Function
strGreetDog = function (dogName, timeOfDay) {
    greeting = "Hello " + dogName + " it's a rainy " + timeOfDay + "!!!"; 
    return greeting;

}; 

//This section includes the Number Function
numWakeUpTime = function (wakingTime) {
    var timeCount
    for (timeCount=1; timeCount < 3; timeCount++) {
        if (wakingTime < 6) {
            wakingTime = wakingTime +1;
            console.log("The waking time is " + wakingTime);
    } 
    return wakingTime;
    }
};

//This section includes the Boolean Function
bolIsItRaining = function (raining, sunny) {
    var weather=raining;
    while (weather===true) {
    weather = confirm("Is it still raining?");
    if (weather===false) {
        console.log("Still raining");
       } else {
        console.log("It is not sunny.");
    }
    return weather;
    }
};
//This section includes the returned values and the output
var greetingDog = strGreetDog("Bobby", "morning");
var isItRaining = bolIsItRaining(true, false);
var wakeUpTime = numWakeUpTime (5);    
console.log(greetingDog + "We woke up at " + wakeUpTime + " let's go eat while it is " + isItRaining + " that it is raining. And I will have " + breakfastItem + " for breakfast.");
