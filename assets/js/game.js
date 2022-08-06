var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create function 
var fight = function() {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemys health by subtracting the amount set in the playerAttack Variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we knw that it worked.
    console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );
    // check enemy's health
      if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died ');
  }
  else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left ');
  }
  // Remove players health by subtracting the amount set in the enemyAttack variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked. 
  console.log(
  enemyName = ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining. ' 
  ); 
  // Check players health
  if (playerHealth <= 0) {
    window.alert(playerName + ' has died! ');
  }
  else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left ');
  }
  // If player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wishes to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // If yes (true), than leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip the fight, Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // If no (false), ask question again by running fight() again
  else {
    fight();
  }
  window.alert(playerName + ' has chosen to skip the fight! ');
} else {
  window.alert("You need to choose a valid option. Try again!");
}




};

fight();