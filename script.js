var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSrc1 = "images/dice_" + randomNumber1 + ".png";
var imageSrc2 = "images/dice_" + randomNumber2 + ".png";

document.querySelector(".dice1").setAttribute("src", imageSrc1);
document.querySelector(".dice2").setAttribute("src", imageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "PLAYER-1 IS WON";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h2").innerHTML = "PLAYER-2 IS WON";
}else{
    document.querySelector("h2").innerHTML = "NONE HAS WON. ITS A TIE."
}