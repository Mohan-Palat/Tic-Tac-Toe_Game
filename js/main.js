console.log('script connected!')
/**
 * Global Variables
 * -currentTurn: will point to the player who's turn it is
 * -totalMoves: integer -> will keep track of total moves on the board
 * will help determine if a tie has occured
 */

 let currentPlayer = null;
 let totalMoves = 0;


/**
 * Need a Player class
 * Attributes:
 * -name
 * -token url (either x or o)
 * -row, column, and diagonal count?
 */

 class Player {
     constructor(name, token){
         this.name = name;
         this.token = token;
         this.row1 = 0;
         this.row2 = 0;
         this.row3 = 0;
         this.col1 = 0;
         this.col2 = 0;
         this.col3 = 0;
         this.diag1 = 0;
         this.diag2 = 0;
     }
 }

 /**
  * Init Function
  * -will create the first two players
  * -will set the current player to player 1
  * -this function will probably change, once I include a feature to enter player's names
  * 
  */

 function init(){
    let player1 = new Player('Angeline', 'images/x.png');
    let player2 = new Player('Jacob', 'images/o.png');

    currentPlayer = player1;
 }

 document.addEventListener('DOMContentLoaded', init);

/**
 * Event listener
 * When a square is clicked:
 * -make sure the square that was clicked, wasn't previously clicked
 * if not previously clicked:
 * -the data-clicked property will be set to true
 * -the background will change to the players token
 * -add 1 to totalMoves global variable (used to help us determine a tie)
 * -update player object with row/col/diag counts ==> call a function
 * -call validation function to see if 3 in a row was met ==> call a function
 * -change global variable currentTurn to other player ==> call a function
 */

 function tileClick(event){
    let tile = event.target;
    if(tile.dataset.clicked !== "true"){
        //update clicked property to true
        tile.dataset.clicked = "true";

        //update background of the tile clicked
        tile.style.backgroundImage = `url(${currentPlayer.token})`;

        //increment total moves
        totalMoves++;

        //add counts to player
        let coordinates = {
            row: tile.dataset.row,
            col: tile.dataset.col
        };
        updatePlayerCounts(coordinates);

        //validate to see if anyone has won yet, or if there are ties
        validate();


    }
    
 }

 //add event listener for each tile
 let tiles = document.querySelectorAll('.tile');
 tiles.forEach((tile) => {
     tile.addEventListener('click', tileClick);
 });

 /**
 * Update Player Counts:
 * -every time a player clicks on a tile it needs to be recorded in someway
 * -@ANGELINE you need to properly explain how this works
 */

function updatePlayerCounts(coordinates){
    let row = parseInt(coordinates.row);
    let col = parseInt(coordinates.col);

    //check rows
    if(row ===1){
        currentPlayer.row1++;
    }
    else if(row === 2){
        currentPlayer.row2++;
    }
    else {
        currentPlayer.row3++;
    }
    
     //check columns
    if(col ===1){
        currentPlayer.col1++;
    }
    else if(col === 2){
        currentPlayer.col2++;
    }
    else {
        currentPlayer.col3++;
    }

    //check diagonal
    //{1,1} {2,2} {3,3} = diag1
    if(row === col){
        currentPlayer.diag1++;
    }

    //{3,1} {2,2} {1,3} = diag2
    if((row === 3 && col === 1) || (row === 2 && col === 2) || (row === 1 && col === 3)){
        currentPlayer.diag2++;
    }
 }

 /**
 * Validation method:
 * -this method will check if the player has played 3 in a row
 * if 3 in a row is not met then:
 * -see if the game is a tie 
 * -change message on display board (according to the scenario) ==> call a function
 */

 function validate(){
    let hasWon = false;
    if(currentPlayer.row1 === 3){
        hasWon = true;
    }
    else if(currentPlayer.row2 === 3){
        hasWon = true;
    }
    else if(currentPlayer.row3 === 3){
        hasWon = true;
    }
    else if(currentPlayer.col1 === 3){
        hasWon = true;
    }
    else if(currentPlayer.col2 === 3){
        hasWon = true;
    }
    else if(currentPlayer.col3 === 3){
        hasWon = true;
    }
    else if(currentPlayer.diag1 === 3){
        hasWon = true;
    }
    else if(currentPlayer.diag2 === 3){
        hasWon = true;
    }

    //based off of the validation above, display the right message
    if(hasWon){
        //display that the current player has won on the message board
        displayMessage(`${currentPlayer.name} has won!`);
    }
    else if(hasWon === false && totalMoves === 9){
        //display that the game was a tie
        displayMessage("There has been a tie!");
    }
 }
/**
 * Switch turn
 * - this function will switch the player who's turn it is
 */




/**
 * Display Board Updates:
 * -this method will display the winner/who's turn it is/tie  
 */
 function displayMessage(string){
     let messageBoard = document.querySelector('main p');
     messageBoard.innerText = string;
 }

/**
 * New Game
 * -this method will reset the board for a new game
 * -clear player counts
 */




/**
 * Tie checker
 * -check if 9 moves have been played
 * -if yes, then a tie has occured, change message board, set currentPlayer = null
 * -if no, do nothing
 */

 /**
  * Clear Player counts
  * -when a game resets, I need to reset their row/col/diag counts to 0
  */
