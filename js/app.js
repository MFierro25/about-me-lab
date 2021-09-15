'use strict';

let name = prompt('Hello what is your name?')

alert('Welcome ' + name + ' lets play a guessing game about me.');
alert('All the following questions will be yes or no and after the game is completed you will be able to read My About Me to see if you were right')

let military = prompt('Have i ever been in the military?').toLowerCase()
if (military === 'yes') 
    alert('Correct, i served 4 years in San Diego!')
else if (military === 'no')
    alert('Actually, i did, i served 4 years in San Diego.')

let oldest = prompt('Am i the youngest child?').toLowerCase()
if (oldest === 'yes')
    alert('No, i am actually the oldest of Four.')
    else if (oldest === 'no')
    alert('Correct! i am actually the oldest of Four')

let instrument = prompt('Can i play the Piano?').toLowerCase()
if (instrument === 'yes')
    alert('No, i actually play the guitar and bass.')
    else if (instrument === 'no')
    alert('Correct, even though it looks fun i only know Guitar and Bass')

let country = prompt('Have i ever been outside of the country?').toLowerCase()
if (country === 'yes')
    alert('CORRECT! ive actually been to 4 different countries')
    else if (country === 'no')
    alert('Actually i have, i have been to 4 different countries')

let schools = prompt('Did i go to over 9 different schools growing up?').toLowerCase()
if (schools === 'yes')
    alert('YES! unfortunately i went to 10 different schools growing up.')
    else if (military === 'no')
    alert('unfortunately i did, i went to 10 different schools growing up')

alert('Well that was the whole game! you did a great job ' + name + ' welcome to the page to learn more about me.')