


//Target number randomly generated
var randomNumber = 0;
var targetNumber = (Math.floor(Math.random() * 120) + 1);
console.log("Target Number Random Number" + " " + targetNumber);
var counter = 0;







//Variables for images randomly generated numbers
var kyleNumber = 0;
var cartmanNumber = 0;
var stanNumber = 0;
var kennyNumber = 0;
console.log(kyleNumber);
console.log(cartmanNumber);

function randomizeImg() {

}


//Scoring Variables
var wins = 0;
var losses = 0;

var winsText = $("#winsText").text(wins);
var lossesText = $("#lossesText").text(losses);

console.log(counter);



//reset function
function startGame() {
    targetNumber = (Math.floor(Math.random() * 120) + 1);
    var targetText = $("#targetNumberText").text(targetNumber);
    var randomNumber = (Math.floor(Math.random() * 120) + 1);
    $("#counterText").text(0);
    kyleNumber = (Math.floor(Math.random() * 12) + 1);
    cartmanNumber = (Math.floor(Math.random() * 12) + 1);
    stanNumber = (Math.floor(Math.random() * 12) + 1);
    kennyNumber = (Math.floor(Math.random() * 12) + 1);
    $("#kyle").attr("imgNum", kyleNumber);
    $("#cartman").attr("imgNum", cartmanNumber);
    $("#stan").attr("imgNum", stanNumber);
    $("#kenny").attr("imgNum", kennyNumber);

}
startGame();


$(".character").click(function () {

    var imgValue = ($(this).attr("imgNum"))
    imgValue = parseInt(imgValue);

    counter += imgValue;

    alert(counter);
    $("#counterText").html(counter);

    console.log($(this).attr("imgNum"));
    if (counter === targetNumber) {

        wins++;
        alert("You Win!");
        var winsText = $("#winsText").text(wins);
    }

    else if(counter > targetNumber) {
        alert("You Lose!");

        losses++;
        var lossesText = $("#lossesText").text(losses);
        console.log(counter);
    }

});

$("#buttonId").click(function () {
    startGame();
    // targetNumber = (Math.floor(Math.random() * 120) + 1);
    $("#counterText").text(0);
    counter = 0;
    randomizeImg();
});


