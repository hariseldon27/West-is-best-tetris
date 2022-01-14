/**********************************************
 * Tetris Board version 1
 * 
 * America's Sport
 * 
 * ********************************************/

/*
    “At some point, everything’s gonna go south 
    and you’re going to say, this is it. This is how I end. 
    Now, you can either accept that, or you can get to work. 
    That’s all it is. You just begin. You do the math. You solve one 
    problem, and you solve the next one, and then the next. 
    And if you solve enough problems, you get to come home.”

    Mark Watney

    

    "In the face of overwhelming odds, I'm left with only one option.
    I'm going to have to science the shit out of this."

    Mark Watney

    https://www.youtube.com/watch?v=BABM3EUo990
*/

// function declaration
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
                                                // What kind of information? Color? About block shape?

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
    ]

    // maybe try iterating through this before coming up a better solution
    // and pls do cause it also sucked to write

    console.log(fullBoard)
    console.table(fullBoard)

    return fullBoard; 
}

// if you need to copy an array and then modify that copy, keep in mind whether your changes
// are affecting the original, or just the copy. and why

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

Ugh 
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


function getUserInput() { 
    let result = window.prompt("Should we start (y/n)?")
    return result
} // why doesn't this work when running it in node?
                                
displayMessage() 


function startGame() {



    let play = 1 

    while(play) {
        // do stuff

















        play = !play
    }
} 

function dynamicallyCreateTetrisBoard () {

} // returns 2d array of objects