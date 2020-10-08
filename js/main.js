console.log('script connected!')
/**
 * Global Variables
 * -currentTurn: will point to the player who's turn it is
 */



/**
 * Need a Player class
 * Attributes:
 * -name
 * -token url (either x or o)
 * -row, column, and diagonal count?
 */

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
 */

/**
 * Switch turn
 * - this function will switch the player who's turn it is
 */


/**
 * Validation method:
 * -this method will check if the player has played 3 in a row
 */

/**
 * Display Updates:
 * -this method will display the winner/who's turn it is/tie  
 */
//add event listener for every tile clicked
document.querySelector('.one').addEventListener('click', (event) => {
    let tile = event.target;
    console.log(tile.dataset.clicked);
    tile.dataset.clicked = true;
    console.log(tile.dataset.clicked);
    console.log(tile.style);
    tile.style.backgroundImage = "url('images/x.png')";
})