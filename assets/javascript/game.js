$(document).ready(function(){

var randomNum = 0;
var totalScore = 0;

var button1 = Math.floor(Math.random() * 12) + 1;
var button2 = Math.floor(Math.random() * 12) + 1;
var button3 = Math.floor(Math.random() * 12) + 1;
var button4 = Math.floor(Math.random() * 12) + 1;

var winCounter = 1
var lossCounter = 1


// Random number generator
	
randomNum = Math.floor(Math.random() * 120) + 19;
   $("#random-number").append(randomNum);
   console.log(randomNum)


// Click functions

button1 = Math.floor(Math.random() * 15) + 1;
button2 = Math.floor(Math.random() * 15) + 1;
button3 = Math.floor(Math.random() * 15) + 1;
button4 = Math.floor(Math.random() * 15) + 1;

totalscore = 0;


$("#ruby").on("click", function() {
	totalScore= totalScore+button1
	$("#total-score").html(totalScore);
	scoreCheck()

});

$("#emerald").on("click", function() {
	totalScore= totalScore+button2
	$("#total-score").html(totalScore);
	scoreCheck()

});

$("#amethyst").on("click", function() {
	totalScore= totalScore+button3
	$("#total-score").html(totalScore);
	scoreCheck()

});

$("#aquamarine").on("click", function() {
	totalScore= totalScore+button4
	$("#total-score").html(totalScore);
	scoreCheck()

});

// Win, Loss Count

function scoreCheck() {

if(totalScore === randomNum){
	$("#win-counter").html(winCounter++);
	alert("You win!")
	newGame()

}else if(totalScore > randomNum){
	$("#loss-counter").html(lossCounter++);
	alert("Try again :(")
	newGame()
}
}

// Reset game

function newGame() {
totalScore = 0;	
randomNum =  Math.floor(Math.random() * (102) + 19);
button1 = Math.floor(Math.random() * 12) + 1;
button2 = Math.floor(Math.random() * 12) + 1;
button3 = Math.floor(Math.random() * 12) + 1;
button4 = Math.floor(Math.random() * 12) + 1;
$("#random-number").html(randomNum);
$("#total-score").html(totalScore);
};

newGame();



});


