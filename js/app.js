'use strict';
// ask for users name

var username = prompt('Hi what is your name?');


// Greet the user by name in alert

alert('Hi, ' + username + ', thanks for stopping by!');

// log name to console
console.log('The user said their username was '+ username);

// ask first guessing game question
var firstAnswer = prompt('Are the Giants the greatest yes or no?').toLocaleLowerCase;


// user guesses "yes/no" or "Y/N"
if (answer1 === 'yes'|| answer1 ==='y'){
//right answer
alert('You got it right!!')
console.log('The user got the answer (yes)')
} else {

    // wrong answer
    alert('sorry try again')
    console.log('The user got the answer #1 (no)')
}


// tell user if they are wrong or right


//Next question
