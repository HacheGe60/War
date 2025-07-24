let deckId;

const handleClick = () => {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
        });
};

document.querySelector("#new-deck").addEventListener("click", handleClick);
