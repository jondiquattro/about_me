'use strict';
// Ask for users name

var username = prompt('Hi what is your name?');


// Greet the user by name in alert

alert('Hi ' + username + ', thanks for stopping by!');

// Log name to console
console.log('The user said their username was '+ username);


function question1() {
    // Ask first guessing game question
    var firstAnswer = prompt('Does Jon have 12 siblings?').toLowerCase();
    console.log('the first answer is '+firstAnswer);
  
  
  
    // User guesses "yes/no" or "Y/N"
    if (firstAnswer === 'yes'|| firstAnswer ==='y'){
    // Right answer
    alert('You got it right!!');
    console.log('The user got the FirstAnswer correct (yes)');
    } else {
        
        // Wrong answer
        alert('Incorrect, pretty crazy I know!');
        console.log('The user got the Firstnswer wrong (no)');
    }
  }

  // Next question
  function question2() {

  var secondAnswer = prompt('Is Jon from New York?').toLowerCase();
  console.log('the secondAnswer is ' + secondAnswer);

  // no = correct
  if (secondAnswer === 'no' || secondAnswer === 'n'){
      alert('You guessed correctly! Jon is from Alabama!');
      console.log('The user got secondAnswer correct (no) ');
  }
  else {
      // Wrong answer
      alert('I am actually from Alabama');
      console.log('The user got the secondAnswer wrong (yes)');
  }
}

// Third question
function question3() {
    var thirdAnswer = prompt('Does Jon play the saxaphone?').toLowerCase();
  console.log('the secondAnswer is ' + thirdAnswer);

  if (thirdAnswer === 'no' || thirdAnswer === 'n'){
      alert('You guessed correctly! He does however play the guitar.');
      console.log('The user got the thirdAnswer correct (no)');
  }
  else {
      // Wrong answer
      alert('Sorry, he doesnt play the sax, but he does play guitar');
      console.log('The user got the thirdAnswer wrong (yes)');
  }
}

// Fourth question
function question4() {
    var fourthAnswer = prompt('Does Jon like the Giants?').toLowerCase();
    console.log('the secondAnswer is ' + fourthAnswer);
  
    if (fourthAnswer === 'yes' || fourthAnswer === 'Y'){
        alert('Go big BLUE!');
        console.log('The user got the thirdAnswer correct (no)');
    }
    else {
        // Wrong answer
        alert('Go big BLUE!');
        console.log('The user got the thirdAnswer wrong (no)');
    }
  }

  // Fifth question
function question5() {
    var fifthAnswer = prompt('Is this my spawn?').toLowerCase();
    console.log('the FifthAnswer is ' + fifthAnswer);
  
    if (fifthAnswer === 'yes' || fifthAnswer === 'Y'){
        alert('Believe it or not this munchikin is his son');
        console.log('The user got the fifthAnswer correct (no)');
    }
    else {
        // Wrong answer
        alert('Yeah that little guy is mine!');
        console.log('The user got the fifthAnswer wrong (no)');
    }
  }

  // Sixth question
function question6() {
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
      
    }// Outer loop
  }



function question7() {
    // Question 7
    var correctAnswers = ['ron', 'nathan', 'mary', 'jenny', 'becca', 'laura', 'ben', 'claire', 'sam', 'tad', 'mark', 'emily'];
    alert('do you want to guess my siblings names?');
  
    var guessLeft = 4;
    console.log('First guess ' + guess);
  
    var guessCount = 0;
  
    // While loop that searches through array
    while (guessLeft > 0){
  
        var guess = prompt('Enter a name').toLowerCase();
        var right = false; // Starts off wrong
        
        guessCount ++;
  
        for (var i = 0; i < 13; i ++){
            console.log(correctAnswers[i]);
                  
              if ( guess == correctAnswers [i]){
                
                console.log('You guessed ' + guess + ' you were right');
                alert('You were correct!');
                right = true;
                break;
              }
            }// First for loop
    // If to break while loop
    if (right == true){
        alert('you got it in ' + guessCount );
        break;
    }
            guessLeft --;
            
        alert('You were wrong, you have ' + guessLeft + ' guesses left');
    }// Outer while
  }

  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();