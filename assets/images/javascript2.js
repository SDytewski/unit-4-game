
//Makes Jquery ready //
$(document).ready(function(){  



    //Count Wins, Losses, and Score
    wins = 0;
    losses = 0;
    var target = 0;
    var counter = 0;
    
    
    //Number loaded on screen at startup
    
    
    
        //Generates computer random number
      //  document.getElementById("random-number-computer-text").innerHTML = randomNumberComputer;
      //Generates code to give random number for crystal 2
      //  $("#random-button-crystal2").on("click",function(){
    
       // })
    
    
    
    
    
    // Function that creates random number for Crystals
    
      
    
    function randomNumber(max, min){
      
      return Math.floor(Math.random()*(max-min+1)+min);
      
      } 
    
    console.log(randomNumber(12,1));
    console.log(randomNumber(120,19));
    
    
    
    
    // 4 Crystal numbers
    
    //var crystalnumber1 = randomNumber(12,1);
    
    //console.log(crystalnumber1);
    
    
    //var crystalnumber2 = randomNumber(12,1);
    
    //console.log(crystalnumber2);
    
    //var crystalnumber3 = randomNumber(12,1);
    
    //console.log(crystalnumber3);
    
    //var crystalnumber4 = randomNumber(12,1);
    
    //console.log(crystalnumber4);
    
    
    
    //Number loaded on screen at startup
    
    
    console.log(randomNumber(120,19));
    
    var targetNumber = randomNumber(120,19);
    
    
    $("#number-to-guess").text(targetNumber);
    
    var counter = 0;
    
    
    
    //Displays Wins
    
    
    //Four Number options for crystals
    
    var numberOptions = randomNumber(12,1); 
      
      