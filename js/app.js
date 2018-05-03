'use strict';
// ask for users name

/*

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
console.log('the FifthAnswer is ' + fifthAnswer);

if (fifthAnswer === 'yes' || fifthAnswer === 'Y'){
    alert('Believe it or not this munchikin is his son');
    console.log('The user got the fifthAnswer correct (no)');
}
else {
    //wrong answer
    alert('Yeah that little guy is mine!');
    console.log('The user got the fifthAnswer wrong (no)');
}



alert('Lets play a guessing game!');
alert('Pick a number between 1 and 10!');
var count = 0;
var sixthAnswer = 0;


while (sixthAnswer != 6){
    count +=1;
  console.log('count is '+ count);
    if (count === 5){
    alert('Sorry you are out of tries!');
    break;
  }
  
  sixthAnswer = prompt('What is your number?');

  console.log('user entered ' + sixthAnswer);
    if (sixthAnswer <= 4){
    alert('guess higher');
  }
  else if (sixthAnswer >= 7){
    alert('guess lower');
  }
  
  if (sixthAnswer == 6){
    alert('Great job you did it in ' + count + ' guesses');
  }
  
}//outer loop

*/

//Question 7
var correctAnswers = ['Ron', 'Nathan', 'Mary', 'Jenny', 'Becca', 'Laura', 'Ben', 'Claire', 'Sam', 'Tad', 'Mark', 'Emily'];

alert('do you want to guess my siblings names?');

var guessLeft = 4;
console.log('First guess ' + guess);

var guessCount = 0;

//while loop that searches through array
while (guessLeft > 0){

    var guess = prompt('Enter a name');
    var right = false; //starts off wrong
    
    guessCount ++;

    for (var i = 0; i < 13; i ++){
        console.log(correctAnswers[i]);
               
          if ( guess == correctAnswers [i]){
            
            console.log('You guessed ' + guess + ' you were right');
            alert('You were correct!');
            right = true;
            break;
          }
        }//first for loop
//if to break while loop
if (right == true){
    alert('you got it in ' + guessCount );
    break;
}
        guessLeft --;
        
    alert('You were wrong, you have ' + guessLeft + ' guesses left');
}//outer whil


  
  
  
  





  



  



  





  


