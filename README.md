# Project 1 - Tic Tac Toe

## Technologies
1. JS
2. HTML
3. CSS

## Development Strategy
I decided to start this project, by first creating a basic [wireframe](https://github.com/angelinejacob/Tic-Tac-Toe_Game/blob/master/TicTacToe-Wireframe.pdf). 

After creating this basic UI design, I spent some time thinking about how I wanted to structure my program. I thought about how I wanted to structure data (classes) and how I would figure out if a player had won the game. I thought through an [algorithm](https://github.com/angelinejacob/Tic-Tac-Toe_Game#algorithm) and filled my javascript file with pseudocode. 

After this, I created some simple HTML elements, just enough to test a basic tic tac toe game. Then, I started to actually code in JS. I found that, the more I coded in JS, the more functions I needed. So I would write pseudo code for those functions and go back later to code them out. 

Once I had written some basic JS, I tested my tic tac toe game to make sure it met the requirements for the MVP. Once this was successful I went ahead and meddled with the CSS styling and added other features like multi-round games.

## Algorithm
**Player Class**
1. In order to represent a player, I created a player class. This class has the following attributes:
    * *name* - the name the player wishes to go by
    * *token* - the token they wish to play with (one of the planets)
    * Row Counts
        * *row1*
        * *row2*
        * *row3*
    * Col Counts
        * *col1*
        * *col2*
        * *col3*
    * Diag Counts
        * *diag1*
        * *diag2*
    * *wins* - keeps track of the number of rounds the player has won in the current game

You might be wondering what all those counts are for. I use these counts to determine if a player has won or not. 

The way my algorithm works is simple. I realized that in order to win, a player needs to place 3 tokens in any given row, column, or diagonal. It does not matter where in the row/column/ diagonal. Every time a tile is clicked, I take the coordinates of the tile and increment the count for that row/column/diagonal. For example if tile (1, 1) is clicked, then I would increment the following counts by 1: *row1*, *col1*, *diag1*. The first player to have any of their counts reach to 3 wins the game!

**Tile Click** - Every time a tile on the board is clicked, the following steps are run. I will go through the steps one by one.
1. Change Background - The player specifies which token they would like to play with (in our case, planets), the background of the tile will change to a photo of their preferred planet. 
2. Update Player Counts - Every tile has a coordinate like so {row: 1, col: 3}. This coordinate is passed to the updatePlayerCounts() function. This function will take the coordinates and update the row/col/diagonal counts for the player who clicked the tile (currentPlayer)
3. Validate - after the counts have been updated for the current player, we check if the currentPlayer has met a winning condition or not
    * If the currentPlayer did not win, then we call the switchPlayer() function which will make the currentPlayer = other player
    * If current player did not win, and the board is filled then the program calls a tie
    * A winning condition is if one of the counts  = 3



## Unsolved Problems
1. Currently, both users can choose the same token if they want to. 
2. There are no checks to see if all required fields (Player names & tokens) have been populated.

## Future Features
1. Build an Easy, Medium, and Hard AI Bot
2. Player tokens will be displayed next to their score
3. UI Updates
    * Make the UI more intuitive when it's a players turn
    * Make the UI more readable, with less going on in the screen
4. Include functionality so that two players can play from different machines
