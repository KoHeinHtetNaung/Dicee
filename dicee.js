// const images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png",]

// const img1 = "./images/dice1.png";
// const img2 = "./images/dice2.png"
// const img3 = "./images/dice3.png"
// const img4 = "./images/dice4.png"
// const img5 = "./images/dice5.png"
// const img6 = "./images/dice6.png"

// const images = [img1, img2, img3, img4, img5, img6];


// const here = document.getElementsByClassName("img1").innerHTML = Math.floor(Math.random() * 6);

// const she = document.getElementsByClassName("img2").innerHTML = Math.floor(Math.random() * 6);

// let randomNumber = Math.random();
// console.log(randomNumber);

// function random(max) {
//     return Math.floor(Math.random() * max)
// }
// console.log(random(4))

// let x = Math.floor(Math.random() * 6) + 1;
// let y = Math.floor(Math.random() * 6) + 1;

// document.getElementsByClassName("img1").innerHTML = x;
// document.getElementsByClassName("img2").innerHTML = y;

// var num1 = Math.floor(Math.random() * 6 ) + 1; // It will give 1-6
// var randomDiceImage = "dice" + num1 + ".png"; // dice1.png to dice6.png
// var randomDiceImageSource = "./images/" + randomDiceImage; // ./images/dice1.png to ./images/dice6.png
// var image1 = document.querySelectorAll('img')[0];
// image1.setAttribute('src', randomDiceImageSource);

// var num2 = Math.floor(Math.random() * 6 ) + 1;
// var randomDiceImage2 = "dice" + num2 + ".png";
// var randomDiceImageSource2 = "./images/" + randomDiceImage2;
// var image2 = document.querySelectorAll('img')[1];
// image2.setAttribute('src', randomDiceImageSource2);


// if (num1 > num2) {
//     document.querySelector('h1').innerHTML = "Player 1 Wins";
// } else if (num2 > num1) {
//     document.querySelector('h1').innerHTML = "Player 2 Wins";
// } else {
//     document.querySelector('h1').innerHTML = "Draw";
// }

var num1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage = "dice" + num1 + ".png";
var randomDiceImageSource = "./images/" + randomDiceImage;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomDiceImageSource);





var num2 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage2 = "dice" + num2 + ".png";
var randomDiceImageSource2 = "./images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImageSource2);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 win..."
}else if (num1 < num2) {
    document.querySelector("h1").innerHTML = "Player 2 win..."
}else {
    document.querySelector("h1").innerHTML = "Draw..."
}