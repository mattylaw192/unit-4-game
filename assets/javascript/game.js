


//Target number randomly generated
var targetNumber = (Math.floor(Math.random() * 120) + 1);
var counter = 0;

//Variables for images randomly generated numbers
var kyleNumber = (Math.floor(Math.random() * 12) + 1);
var cartmanNumber = (Math.floor(Math.random() * 12) + 1);
var stanNumber = (Math.floor(Math.random() * 12) + 1);
var kennyNumber = (Math.floor(Math.random() * 12) + 1);
console.log(kyleNumber);
console.log(cartmanNumber);
console.log(targetNumber);



//Scoring Variables
// var counter;
var wins = 0;
var losses = 0;
var targetText = $("#targetNumberText").text(targetNumber);
var winsText = $("#winsText").text(wins);
var lossesText = $("#lossesText").text(losses);

console.log(counter);

console.log(targetText);

//reset function
function startGame() {
    var randomNumber = (Math.floor(Math.random() * 120) + 1);
    var targetNumber = randomNumber;
    counter=0;
    targetNumber = 0;

}
startGame();

//Adds image values to counter
$("#kyle").attr("imgNum", kyleNumber);
$("#cartman").attr("imgNum", cartmanNumber);
$("#stan").attr("imgNum", stanNumber);
$("#kenny").attr("imgNum", kennyNumber);


$(".character").click(function () {

    var imgValue = ($(this).attr("imgNum"))
    imgValue = parseInt(imgValue);

    counter += imgValue;

    alert(counter);
    $("#counterText").html(counter);

    console.log($(this).attr("imgNum"));
      
});

function winloss(){
    if (counter === targetNumber) {
    wins++;
    alert("You Win!");
   
  }

  else if (counter >= targetNumber) {
    alert("You Lose!");
    losses++;
    
  }
};

console.log(winloss());