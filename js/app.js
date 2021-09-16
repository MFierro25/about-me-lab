'use strict';


let totalcorrect = 0
let name = prompt('Hello what is your name?')

alert('Welcome ' + name + ' lets play a guessing game about me.');
alert('You will be scored on this game so take your best guess!')

let military = prompt('Have i ever been in the military?').toLowerCase()
    if (military === 'yes' || military === 'y') {
        alert('CORRECT! i served 4 years in San Diego!')
        totalcorrect ++;}
    else if (military === 'no' || military === 'n')
        alert('Incorrect, i served 4 years in San Diego.')

let oldest = prompt('Am i the youngest child?').toLowerCase()
    if (oldest === 'yes' || oldest === 'y')
        alert('Incorrect, i am actually the oldest of Four.')
    else if (oldest === 'no' || oldest === 'n') {
        alert('CORRECT! i am the oldest of Four')
        totalcorrect ++; }

let instrument = prompt('Can i play the Piano?').toLowerCase()
    if (instrument === 'yes' || instrument === 'y')
        alert('Incorrect, i actually play the guitar and bass.')
    else if (instrument === 'no' || instrument === 'n') {
        alert('CORRECT! even though it looks fun i only know Guitar and Bass')
        totalcorrect ++;}

let country = prompt('Have i ever been outside of the country?').toLowerCase()
    if (country === 'yes' || country === 'y') {
        alert('CORRECT! ive actually been to 4 different countries')
        totalcorrect ++;}
    else if (country === 'no' || country === 'n')
        alert('Incorrect i have, i have been to 4 different countries')

let schools = prompt('Did i go to over 9 different schools growing up?').toLowerCase()
    if (schools === 'yes' || schools === 'y') {
        alert('CORRECT! unfortunately i went to 10 different schools growing up.')
        totalcorrect ++;}
    else if (schools === 'no' || schools === 'n')
        alert('Incorrect, i went to 10 different schools growing up')

let age= ('29')
let numbguess = 4;
let ageguess = '' 
let useriscorrect = false;	

for (let i = 0; i < numbguess; i++) {
    ageguess = prompt('How old do you think i am?')
    if (ageguess == age) {
        useriscorrect = true
        alert('Correct! i am 29!')
        totalcorrect ++;
        break;
    } else if(ageguess > '29') {
        alert('Guess Lower Next Time!')
    } else if(ageguess < '29') {
        alert('Guess Higher Next Time!')
    }
}

if (!useriscorrect) {
    alert('You are out of guesses')
} else {
    alert('Great Job on the guess')
}


let favefood = ['teriyaki', 'pizza', 'chipotle', 'tacos'];
let foodguess = 6;
let correct = false;

while(foodguess > 0 && correct == false) {  

  let userfood = prompt('What is one of my favorite Foods?');

  
  for (let i = 0; i < foodguess.length; i++) {
    if (userfood.toLowerCase() == favefood[i].toLowerCase()) {
      alert('thats correct');
      totalCorrect++;
      correct = true;
      break;
    }
  }

  if (!correct) {
    foodguess--;
    alert('Try Again!');
  }
}

if (!correct) {
  alert('You ran out of guesses', favefood);
} else {
  alert('Great Job');
}

alert('Thanks for participating you got ' + totalcorrect + ' Questions right!')