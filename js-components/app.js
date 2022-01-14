/**********************************************
 * Tetris Board version 1
 * ********************************************/

function returnsTetrisBoard() {

    const row1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Each cell in the array (indexes 0-9) should contain either 1 (truthy) or 0 (falsy)
    const row2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 1 if the cell is being occupied by part of the tetris piece, 0 if not
    const row3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // this was a pain in the a** to write
    const row10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
    const row11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row14 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row15 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const row16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // what if each cell held an object, so that it could store more information? 
                                                // What kind of information? Color? The type of tetris block?

    const fullBoard = [
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        row7,
        row8,
        row9,
        row10,
        row11,
        row12,
        row13,
        row14,
        row15,
        row16
    ] // maybe try iterating through this before coming up a better solution
    // and pls do cause it sucked to write, it really did

    console.log(fullBoard)
    console.table(fullBoard)

    return fullBoard; 
}

/*
Square Block incoming
[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Thank god finally
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Ugh <tab>
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
*/

function returnsSquarePiece() {

} // idk this might be a function, really just throwing s**t at the walls here tbh


console.log(returnsTetrisBoard()) // logs to the console the return value of the returnsTetrisBoard function
                                  // the function is called while being passed into the log function method on the console object 

function startGame() {

    const play = 1 

    while(play) {
        // do stuff

















        play = !play
    }
} // im so tired i started writing javascript directly into the body of the html file lol