product1 = {
  productName: "Basketball",
  price: 2095,
};

product2 = {
  productName: "Tshirt",
  price: 799,
};

product3 = {
  productName: "Basketball",
  price: 2095,
};

console.log(product1);

// product1.price = 2595;
// console.log(product1);

product1["delivery-time"] = "3 days";
console.log(product1);

function comparePrice(product1, product2) {
  if (product1 < product2) {
    return product1;
  } else return product2;
}

console.log(comparePrice(product1.price, product2.price));

function isSameProduct(product1, product2) {
  if (
    product1.productName === product2.productName &&
    product1.price === product2.price
  ) {
    return true;
  } else return false;
}

console.log(isSameProduct(product3, product1));

const text = "HELLO";
const text1 = "test";

console.log(text.toLowerCase());
console.log(text1.repeat(2));
console.log(text1.repeat(3));

// // CALCULATOR

let calculation = localStorage.getItem("calculate") || "";
console.log(calculation);

function number(number) {
  calculation += number;
  console.log(calculation);
  localStorage.setItem("calculate", calculation);
}

function result(result) {
  return (calculation = eval(calculation));
}

//COIN FLIP GAME

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

function playGame(guess) {
  let randomNumber = Math.random();
  let result2 = "";

  if (randomNumber < 0.5) {
    result1 = "heads";
  } else result1 = "tails";

  guess === result1 ? (result2 = "You win!") : (result2 = "You lose!");
  console.log();

  result2 === "You win!" ? (score.wins += 1) : (score.losses += 1);

  alert(`${result2}
Wins: ${score.wins} Losses: ${score.losses}`);

  localStorage.setItem("score", JSON.stringify(score));
}
