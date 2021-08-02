// Code your solutions in this file



function writeCards(people, occasion) {
    
    let thankYous = [];

    for (let i=0; i < people.length; i++) {
        thankYous.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }

    return thankYous;

}


function countDown(howLong) {
    while (howLong > -1) {
        console.log(howLong);
        howLong --;
    }
}

