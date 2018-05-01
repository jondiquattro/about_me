'use strict';
// ask for users name

var username = prompt('Hi what is your name?');


// Greet the user by name in alert

alert('Hi ' + username + ', thanks for stopping by!');

// log name to console
console.log('The user said their username was '+ username);

// ask first guessing game question
var firstAnswer = prompt('Does Jon have 12 siblings?').toLowerCase();
console.log('the first answer is '+firstAnswer);



// user guesses "yes/no" or "Y/N"
if (firstAnswer === 'yes'|| firstAnswer ==='y'){
//right answer
alert('You got it right!!');
console.log('The user got the FirstAnswer correct (yes)');
} else {
    
    // wrong answer
    alert('Incorrect, pretty crazy I know!');
    console.log('The user got the Firstnswer wrong (no)');
}

//Next question

var secondAnswer = prompt('Is Jon from New York?').toLocaleLowerCase();
console.log('the secondAnswer is ' + secondAnswer);

//no = correct
if (secondAnswer === 'no' || secondAnswer === 'n'){
    alert('You guessed correctly! Jon is from Alabama!');
    console.log('The user got secondAnswer correct (no) ');
}
else {
    //wrong answer
    alert('I am actually from Alabama');
    console.log('The user got the secondAnswer wrong (yes)');
}

var thirdAnswer = prompt('Does Jon play the saxaphone?').toLocaleLowerCase();
console.log('the secondAnswer is ' + thirdAnswer);

if (thirdAnswer === 'no' || thirdAnswer === 'n'){
    alert('You guessed correctly! He does however play the guitar.');
    console.log('The user got the thirdAnswer correct (no)');
}
else {
    //wrong answer
    alert('Sorry, he doesnt play the sax, but he does play guitar');
    console.log('The user got the thirdAnswer wrong (yes)');
}

// fourth question
var fourthAnswer = prompt('Does Jon like the Giants?').toLocaleLowerCase();
console.log('the secondAnswer is ' + fourthAnswer);

if (fourthAnswer === 'yes' || fourthAnswer === 'Y'){
    alert('Go big BLUE!');
    console.log('The user got the thirdAnswer correct (no)');
}
else {
    //wrong answer
    alert('Go big BLUE!');
    console.log('The user got the thirdAnswer wrong (no)');
}
//Fifth question
var fifthAnswer = prompt('Is this my spawn?').toLocaleLowerCase();
console.log('the secondAnswer is ' + fifthAnswer);

if (fifthAnswer === 'yes' || fifthAnswer === 'Y'){
    alert('Believe it or not this munchikin is his son');
    console.log('The user got the fifthAnswer correct (no)');
}
else {
    //wrong answer
    alert('Go big BLUE!');
    console.log('The user got the fifthAnswer wrong (no)');
}