let firstCard = getRandomCard;
let secondCard = getRandomCard;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""; 
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
    return 5;
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
}

function renderGame() {
    //render our first and second card
    cardsEl.textContent = "Cards: "
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
    let cardVal = getRandomCard;
    sum += cardVal;
    cards.push(cardVal);
    renderGame();
}

function newGame() {
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = "Sum: ";
    cardsEl.textContent = "Cards: ";
}


