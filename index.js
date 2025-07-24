let deckId;
const drawCardEl = document.querySelector("#draw-card");
const newDeckEl = document.querySelector("#new-deck");
const cardsEl = document.querySelector("#cards");

drawCardEl.disabled = true;
newDeckEl.disabled = false;

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
        });
    drawCardEl.disabled = false;
    newDeckEl.disabled = true;
}

function drawCard() {
    if (!deckId) {
        alert("Please select a new deck first!");
        return;
    }
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            cardsEl.innerHTML = `
            <img src="${data.cards[0].image}" class="card">
            <img src="${data.cards[1].image}" class="card">`;

        });
}

newDeckEl.addEventListener("click", handleClick);
drawCardEl.addEventListener("click", drawCard);


