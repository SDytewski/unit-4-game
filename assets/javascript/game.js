

//Sets are variables for wins, losses, and the counter increments to create a score.  

var counter = 0;
var wins = 0
var losses = 0;

//sets the random number between 120 and 19.
var targetNumber = randomNumber(120, 19);

// Function that creates random number for Crystals

$("#number-to-guess").text(targetNumber);

function randomNumber(max, min) {

  return Math.floor(Math.random() * (max - min + 1) + min);
 


}




//$("#number-to-guess").text(targetNumber);


//Number loaded on screen at startup, this function we be called after a win or loss then upDateNumberToGuess is called. 



var updateNumberToGuess = function () {
  // This code is for the reset funcion. Here we get a random number and assign it based on a random generator.   
  
 
  $("#number-to-guess").text(targetNumber);
};



// This function will be called when we reset everything, after a win or loss. Other reset functions are stored inside.
var reset = function () {
  counter = 0;
  targetNumber = randomNumber(120, 19);
  setupGame();
  updateNumberToGuess();

  function randomNumber(max, min) {

    return Math.floor(Math.random() * (max - min + 1) + min);
   
  
  
  }




  
};



//This is our random number generator for our crystals

function crystalNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


// This function is so we can rerun our code over and over again. First we create the variables for our 4 crystals and
// set them to our our random number generator between 1 and 12.
function setupGame() {

 

  $("#crystals").empty();
 

  var crystal1 = crystalNumber(12, 1);

  console.log(crystalNumber(12, 1));

  var crystal2 = crystalNumber(12, 1);

  console.log(crystal2);

  var crystal3 = crystalNumber(12, 1);

  console.log(crystal3);

  var crystal4 = crystalNumber(12, 1);

  console.log(crystal4)

 

  // We begin by expanding our array to include four options.
  var numberOptions = [crystal1, crystal2, crystal3, crystal4];




  // Next we create a for loop to create crystals for every numberOption. This runs four times which gives us 4 crystals.  
 // Each crystal has the same image and a different random number attributed to it.

  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }
}



setupGame();




// This time, our click event applies to every single crystal on the page. Not just one.
$(document).on("click", ".crystal-image", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;



  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    wins++;
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;

    reset();
    


  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    losses++;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;

    reset();
   
    

  }

});





