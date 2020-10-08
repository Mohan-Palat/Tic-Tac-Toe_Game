console.log('script connected!')
/**
 * Global Variables
 * -currentTurn: will point to the player who's turn it is
 */

 let currentPlayer = null;


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

    currentPlayer = player2;
 }

 document.addEventListener('DOMContentLoaded', init);

/**
 * Event listener
 * When a square is clicked:
 * -make sure the square that was clicked, wasn't previously clicked
 * if not previously clicked:
 * -the data-clicked property will be set to true
 * -the background will change to the players token
 * -update player object with row/col/diag counts ==> call a function
 * -call validation function to see if 3 in a row was met ==> call a function
 * -change global variable currentTurn to other player ==> call a function
 * -change message on display board ==> call a function
 */

 function tileClick(event){
    let tile = event.target;
    if(tile.dataset.clicked !== true){
        tile.dataset.clicked = true;
        tile.style.backgroundImage = `url(${currentPlayer.token})`;
    }
    
 }

 let tiles = document.querySelectorAll('.tile');
 tiles.forEach((tile) => {
     tile.addEventListener('click', tileClick);
 })

/**
 * Switch turn
 * - this function will switch the player who's turn it is
 */


/**
 * Validation method:
 * -this method will check if the player has played 3 in a row
 */

/**
 * Display Board Updates:
 * -this method will display the winner/who's turn it is/tie  
 */

/**
 * New Game
 * -this method will reset the board for a new game
 */
