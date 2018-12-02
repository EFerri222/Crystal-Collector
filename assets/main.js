
var userScore = 0;
var winCount = 0;
var lossCount = 0;
var blueNumber;
var greenNumber;
var orangeNumber;
var purpleNumber;
var targetNumber;

var blueAudio = document.createElement("audio");
blueAudio.setAttribute("src", "assets/bluesuede.mp3");

var shotAudio = document.createElement("audio");
shotAudio.setAttribute("src", "assets/shotthrutheheart.mp3");

var amberAudio = document.createElement("audio");
amberAudio.setAttribute("src", "assets/amber.mp3");

var blameAudio = document.createElement("audio");
blameAudio.setAttribute("src", "assets/youretoblame.mp3");

function reset() {
    targetNumber = Math.floor(Math.random() * (102)) + 19;
    $("#randomNumberBox").text(targetNumber);

    blueNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(blueNumber);

    greenNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(greenNumber);

    orangeNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(orangeNumber);

    purpleNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(purpleNumber);

    userScore = 0;
    $("#userScoreBox").text(userScore);
}

$(document).ready(function() {

    targetNumber = Math.floor(Math.random() * (102)) + 19;
    $("#randomNumberBox").text(targetNumber);

    blueNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(blueNumber);

    greenNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(greenNumber);

    orangeNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(orangeNumber);

    purpleNumber = Math.floor(Math.random() * (12)) + 1;
    console.log(purpleNumber);

$(document).on("click", "#blueCrystal", function(){
    $("#result").hide();
    userScore = userScore + blueNumber;
    $("#userScoreBox").text(userScore);
    blueAudio.play();
    if (userScore === targetNumber) {
        winCount++;
        $("#wins").text('Wins: ' + winCount);
        $("#result").show();
        $("#result").text("You Win!");
        reset();
    }
    if (userScore > targetNumber) {
        lossCount++;
        $("#losses").text('Losses: ' + lossCount);
        $("#result").show();
        $("#result").text("You Lose!");
        reset();
    }
  });

$(document).on("click", "#greenCrystal", function(){
    $("#result").hide();
    userScore = userScore + greenNumber;
    $("#userScoreBox").text(userScore);
    shotAudio.play();
    if (userScore === targetNumber) {
        winCount++;
        $("#wins").text('Wins: ' + winCount);
        $("#result").show();
        $("#result").text("You Win!");
        reset();
    }
    if (userScore > targetNumber) {
        lossCount++;
        $("#losses").text('Losses: ' + lossCount);
        $("#result").show();
        $("#result").text("You Lose!");
        reset();
    }
  });

$(document).on("click", "#orangeCrystal", function(){
    $("#result").hide();
    userScore = userScore + orangeNumber;
    $("#userScoreBox").text(userScore);
    amberAudio.play();
    if (userScore === targetNumber) {
        winCount++;
        $("#wins").text('Wins: ' + winCount);
        $("#result").show();
        $("#result").text("You Win!");
        reset();
    }
    if (userScore > targetNumber) {
        lossCount++;
        $("#losses").text('Losses: ' + lossCount);
        $("#result").show();
        $("#result").text("You Lose!");
        reset();
    }
  });

$(document).on("click", "#purpleCrystal", function(){
    $("#result").hide();
    userScore = userScore + purpleNumber;
    $("#userScoreBox").text(userScore);
    blameAudio.play();
    if (userScore === targetNumber) {
        winCount++;
        $("#wins").text('Wins: ' + winCount);
        $("#result").show();
        $("#result").text("You Win!");
        reset();
    }
    if (userScore > targetNumber) {
        lossCount++;
        $("#losses").text('Losses: ' + lossCount);
        $("#result").show();
        $("#result").text("You Lose!");
        reset();
    }
  });

});