let deckId;
let computerScore = 0;
let playerScore = 0;
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreText = document.getElementById("computerScore");
const playerScoreText = document.getElementById("playerScore");

async function handleClick() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/");
    const data = await response.json();
    remainingText.textContent = `Remaining cards: ${data.remaining}`;
    deckId = data.deck_id;
    console.log(deckId);
}

newDeckBtn.addEventListener("click", handleClick);

drawCardBtn.addEventListener("click", async () => {
    const response = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`);
    const data = await response.json();
    remainingText.textContent = `Remaining cards: ${data.remaining}`;
    cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `;
    cardsContainer.children[2].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `;
    const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
    header.textContent = winnerText;

    if (data.remaining === 0) {
        drawCardBtn.disabled = true;
        computerScore > playerScore ? header.textContent = "Computer wins the game!" : computerScore < playerScore ? header.textContent = "Player wins the game!" : header.textContent = "It's a tie!";
    }
});

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9",
        "10", "JACK", "QUEEN", "KING", "ACE"];
    const card1ValueIndex = valueOptions.indexOf(card1.value);
    const card2ValueIndex = valueOptions.indexOf(card2.value);

    if (card1ValueIndex > card2ValueIndex) {
        computerScore++;
        computerScoreText.textContent = `Computer: ${computerScore}`;
        return "Computer wins!";
    } else if (card1ValueIndex < card2ValueIndex) {
        playerScore++;
        playerScoreText.textContent = `Player: ${playerScore}`;
        return "Player wins!";
    } else {
        return "War!";
    }
}

