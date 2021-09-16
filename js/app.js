'use strict';


let name = prompt('Hello what is your name?')

alert('Welcome ' + name + ' lets play a guessing game about me.');
alert('You will be scored on this game so take your best guess!')

let military = prompt('Have i ever been in the military?').toLowerCase()
if (military === 'yes' || 'y') 
    alert('Correct, i served 4 years in San Diego!')
else if (military === 'no' || 'n')
    alert('Actually, i did, i served 4 years in San Diego.')

let oldest = prompt('Am i the youngest child?').toLowerCase()
if (oldest === 'yes' || 'y')
    alert('No, i am actually the oldest of Four.')
    else if (oldest === 'no' || 'n')
    alert('Correct! i am the oldest of Four')
    

let instrument = prompt('Can i play the Piano?').toLowerCase()
if (instrument === 'yes' || 'y')
    alert('No, i actually play the guitar and bass.')
    else if (instrument === 'no' || 'n')
    alert('Correct, even though it looks fun i only know Guitar and Bass')
   

let country = prompt('Have i ever been outside of the country?').toLowerCase()
if (country === 'yes' || 'y')
    alert('CORRECT! ive actually been to 4 different countries')
    else if (country === 'no' || 'n')
    alert('Actually i have, i have been to 4 different countries')

let schools = prompt('Did i go to over 9 different schools growing up?').toLowerCase()
if (schools === 'yes' || 'y')
    alert('YES! unfortunately i went to 10 different schools growing up.')
    else if (schools === 'no' || 'n')
    alert('unfortunately i did, i went to 10 different schools growing up')
       
      let age= ('29')
            let ageguess = prompt('How old do you think i am?')
        if (ageguess === '29')
            alert('Correct! i am 29')
        else if(ageguess >'29') 
            alert('Guess Lower Next Time!')
        else if(ageguess < '29')
            alert('Guess Higher Next Time!')

   let favefood = []
   favefood.push('teriyaki', 'pizza', 'chipotle', 'tacos');
   console.log(favefood);
    let foodguess = prompt('Whats one of my favorite foods?').toLowerCase()
        if(foodguess == favefood){
                alert('Yes that is one of my faves!')
                userpoints ++;}
        else if (foodguess != favefood)
                alert('No, not that, try again')
