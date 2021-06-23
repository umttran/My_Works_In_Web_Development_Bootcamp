
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;

// To start the game
$(document).keypress(function(){
    $("div").show();
    if(!start){
      nextSequence();
      $("#level-title").html("Level  " + level);
      start = true;
    }
  });

// Generate the squence
function nextSequence(){
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  level++;
  $("#level-title").html("Level   " + level);
}

// Button clicked event
$(".btn").click(function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

// Function to play sounds when button click
function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

// Function to animation when button click
function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Check User Answer
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    $("#level-title").html("<h1>GAME OVER</h1><br></br></br>You reached to Level "+ level + "<br></br></br> Press Any Key to Restart");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("div").hide();
    startOver();
  }
}

// Reset game settings
function startOver(){
  level = 0;
  gamePattern = [];
  start = false;
}
