let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""; 
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomNum = Math.floor( Math.random()*13 ) + 1;

    if (randomNum > 10) {
        return 10;
    } else if (randomNum === 1 ) {
        return 11;
    } else {
        return randomNum;
    }
}

function startGame() {
    isAlive = true;
    // Generate two random numbes
    let card1 = getRandomCard();
    let card2 = getRandomCard();

    // Re-assign the cards and sum variables so that the game can start
    cards = [card1, card2];
        
    sum = card1 + card2;
    
    renderGame();
}

function renderGame() {
    //render our first and second card
    cardsEl.textContent = "Cards: ";
    // need it to redner out all the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let cardVal = getRandomCard();
    sum += cardVal;
    cards.push(cardVal);
    renderGame();
}

function newGame() {
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = "Sum: ";
    cardsEl.textContent = "Cards: ";
}


