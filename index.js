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
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
];

// const hasPets = person => person.hasPet;

// const peopleWithPets = people.filter(hasPets);
// console.log(peopleWithPets);

// const peopleOver18 = people.filter(person => person.age >= 18);
// console.log(peopleOver18);

function filterArray(array, callback) {
    const resultingArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultingArray.push(array[i]);
        }
    }
    return resultingArray;
}

const peopleWithPets = filterArray(people, person => person.hasPet);
console.log(peopleWithPets);