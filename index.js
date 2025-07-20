/**
 Challenge: Add a button that, when clicked, gets a new deck of cards from the deckofcards API

 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/

 Log the whole response to the console
 */

// const handleClick = () => {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data));
// };

// document.querySelector("#new-deck").addEventListener("click", handleClick);

// const twoSecondsLater = () => {
//     console.log("I finally ran!");
// };

// setTimeout(twoSecondsLater, 2000);

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
];

const hasPets = person => person.hasPet;


const peopleWithPets = people.filter(hasPets);
console.log(peopleWithPets);
