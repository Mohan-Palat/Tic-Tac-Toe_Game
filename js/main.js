console.log('script connected!')
/**
 * Need a Player class
 * Attributes:
 * -name
 * -token url (either x or o)
 * -row, column, and diagonal counts
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
 * Global Variables
 * -currentTurn: will point to the player who's turn it is
 * -totalMoves: integer -> will keep track of total moves on the board
 * will help determine if a tie has occured
 */

 let currentPlayer = null;
 let otherPlayer = null;
 let totalMoves = 0;
//  let player1 = new Player('Rachel', 'images/hamburger.png');
//  let player2 = new Player('Angeline', 'images/upside-down-face.png');
 let player1 = null;
 let player2 = null;

 /**
  * Init Function
  * -will create the first two players
  * -will set the current player to player 1
  * -this function will probably change, once I include a feature to enter player's names
  * 
  */

 function init(){
    currentPlayer = player1;
    otherPlayer = player2;
    displayMessage(`${currentPlayer.name} you're up!`)
 }

//  document.addEventListener('DOMContentLoaded', init);

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

        //if anyone won the game or if there was a tie, currentPlayer would be set to null (in the validation function)
        //and the game would be over
        //this conditional runs if the game is still in play
        if(currentPlayer !== null){
            //switch current player since the game is still in motion
            switchPlayer();
            displayMessage(`It's ${currentPlayer.name}'s turn!`);
        }
        else {
            //mark all tiles with clicked = "true" so that no more moves
            //can be made on the board, since the game has ended
            setAllTilesToClicked();
        }
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
 * -a person wins tic tac toe if they have 3 consecutive tokens in any row, column,
 * or diagonal. Each tile on the board has a coordinate (row, column). Each time
 * a player clicks a tile, this coordinate is recorded in the player object. The player
 * object keeps a count of how many tokens were placed on each row/column/diagonal
 * Once one of these counts reaches 3, the game is over. This method adds to the count of the 
 * respective row/column/diagonal
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
 * -this method will check if the player has played 3 in a row by checking the counts on the player object
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
        displayMessage(`${currentPlayer.name} has won! Sorry ${otherPlayer.name}, better luck next time!`);
        console.log(currentPlayer);

        //set currentPlayer to null so that the calling function will know that the game is over
        currentPlayer = null;
    }
    else if(hasWon === false && totalMoves === 9){
        //display that the game was a tie
        displayMessage("There has been a tie!");

        //set currentPlayer to null so that the calling function will know that the game is over
        currentPlayer = null;
    }

    //if no one won the game, and if there is no tie, then the game is still in play
 }

/**
 * Switch turn
 * - this function will switch the player who's turn it is
 */

 function switchPlayer(){
     if(currentPlayer === player1){
         currentPlayer = player2;
         otherPlayer = player1;
     }else {
        currentPlayer = player1;
        otherPlayer = player2;
     }
 }

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
 * -set totalMoves back to 0
 */

 function newGame(){
    //remove the background images from all tiles
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.style.backgroundImage = "";
        tile.dataset.clicked = "false";
    });

    //reset player counts to 0, to start the game from scratch
    clearPlayerCounts();

    //reset totalMoves
    totalMoves = 0;

    //reset currentPlayer & other player
    currentPlayer = player1;
    otherPlayer = player2;

    //update display message
    displayMessage(`${currentPlayer.name} you're up!`);

 }

 //add event listener to button
 let newGameBtn = document.querySelector('#new-game-btn');
 newGameBtn.addEventListener('click', newGame);

 /**
  * Clear Player counts
  * -when a game resets, I need to reset their row/col/diag counts to 0
  */
 function clearPlayerCounts(){
     let players = [player1, player2];
     players.forEach((player) => {
         player.row1 = 0;
         player.row2 = 0;
         player.row3 = 0;

         player.col1 = 0;
         player.col2 = 0;
         player.col3 = 0;

         player.diag1 = 0;
         player.diag2 = 0;

         console.log(player);
     })
 }
 
 /**
  * Set All Tiles to clicked
  * -once the game has tied/ended I will set all tiles to a value of clicked = true
  * so that no more moves can be made on the board
  */

 function setAllTilesToClicked(){
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.dataset.clicked = "true";
    });
 }

 // ===================================================================
 /**
  * WELCOME PAGE FUNCTIONALITY
  */
 function setPlayers(){
    //get selected player icons
    const p1_options = document.querySelector('#p1_options');
    let p1_token = p1_options.value;

    const p2_options = document.querySelector('#p2_options');
    let p2_token = p2_options.value;

    //get player names
    let player1name = document.querySelector('#p1_name').value;
    let player2name = document.querySelector('#p2_name').value;

    player1 = new Player(player1name, p1_token);
    player2 = new Player(player2name, p2_token);

    //change HTML content
    document.querySelector('#welcome-page').style.display = "none";
    document.querySelector('#game-page').style.display = "flex";

    init();
 }

 let startGameBtn = document.querySelector('#start-game');
 startGameBtn.addEventListener('click', setPlayers);