yygyg
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level=0; // track the most recent state of the game pattern and the user answer

$(document).keypress(function(event){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
    }
});




// Function to handle button clicks
$(".btn").click(function() {
    
    var userColourChosen = $(this).attr("id");
    userClickedPattern.push(userColourChosen);
    
    $("userColourChosen").fadeIn(300).fadeOut(300).fadeIn(300);
    
    playSound(userColourChosen);
    animatePress(userColourChosen);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success :)");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }else{
        console.log("wrong :(");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern = [];
    started = false;
}


function nextSequence() {
    
    userClickedPattern = [];
    
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomColourChosen = buttonColours[randomNumber];
    gamePattern.push(randomColourChosen);

    $("#" + randomColourChosen).fadeIn(300).fadeOut(300).fadeIn(300);

    playSound(randomColourChosen);
}



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}



function animatePress(currentColour){
        $("#" + currentColour).addClass("pressed");
        
        setTimeout(function() {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
        
}





