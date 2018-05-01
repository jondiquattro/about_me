'use strict';
// ask for users name

var username = prompt('Hi what is your name?');


// Greet the user by name in alert

alert('Hi ' + username + ', thanks for stopping by!');

// log name to console
console.log('The user said their username was '+ username);

// ask first guessing game question
var firstAnswer = prompt('Do I have 12 siblings?').toLowerCase();
console.log('the first answer is '+firstAnswer);



// user guesses "yes/no" or "Y/N"
if (firstAnswer === 'yes'|| firstAnswer ==='y'){
//right answer
alert('You got it right!!');
console.log('The user got the answer (yes)');
} else {
    
    // wrong answer
    alert('Incorrect, pretty crazy I know!');
    console.log('The user got the answer #1 (no)');
}

//Next question

var secondAnswer = prompt('Am I from New York?').toLocaleLowerCase();
console.log('the secondAnswer is ' + secondAnswer);

//no = correct
if (secondAnswer === 'no' || 'n'){
    alert('You guessed correctly!');
}
else {
    //wrong answer
    alert('I am actually from Alabama');
    console.log('The user got the secondAnswer wrong');
}