function dicing(){
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="🚩 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText=" Player 2 Wins 🚩";

}
else{
    document.querySelector("h1").innerText=" Draw!";
}
}













// window.onload = randomImage;

// var myPix = new Array("dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png");

// function randomImage(){
//     var randomNumber1 = Math.floor(Math.random()*myPix.length);
//     document.getElementsByClassName("img1").src=myPix[randomNumber1];
//     document.getElementsByClassName("img").src=myPix[randomNumber1];
// }
// randomImage();
