var random = Math.random();
var random2 =Math.random();
random2=Math.floor(random2*6 + 1);
random=Math.floor(random*6 + 1);
var dice1 = document.querySelectorAll(".dice")[0];
var dice2 = document.querySelectorAll(".dice")[1];
dice1.setAttribute("src","Dice images\\dice"+random+".png");
dice2.setAttribute("src","Dice images\\dice"+random2+".png");
if(random > random2){
    document.querySelector(".heading").textContent="Player 1 Wins! 🚩";
}
else if(random2 > random){
     document.querySelector(".heading").textContent="Player 2 Wins! 🚩";
}
else{
    document.querySelector(".heading").textContent="Draw!";
}


