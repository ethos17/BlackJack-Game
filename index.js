let player = {
    name: "Diego",
    chips: 248
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""; 
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent += player.name + ": " + "$" + player.chips;

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
    let card1 = getRandomCard();
    let card2 = getRandomCard();

    cards = [card1, card2];
        
    sum = card1 + card2;
    
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
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
    if (isAlive === true && hasBlackJack === false) {
        let cardVal = getRandomCard();
        sum += cardVal;
        cards.push(cardVal);
        renderGame();
    } else {
        messageEl.textContent = "You can't draw a new card"
    }
}

function newGame() {
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = "Sum: ";
    cardsEl.textContent = "Cards: ";
}


