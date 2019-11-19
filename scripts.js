numberPlays = 0;
playerSym = 'X';

gameboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function math(move, symbol) {

    x = (Math.ceil(move / 3) - 1);
    y = ((move % 3) - 1);

    if (y == -1) {
        y = 2
    };

    gameboard[x][y] = symbol;

    // console.log(gameboard[x]);
    win = 0

    for (var i = 0; i < 3; i++) {

        if (gameboard[x][i] == "X" || gameboard[x][i] == "O"){
            win += 1

        } else{
            break
        };

        if (win == 3) {
            if (gameboard[x][0] == "X") {
                console.log("player O wins")
            } else {
                console.log('player X wins')
            }
        }

    }
}

function whosTurn(symbol) {
    if (symbol == 'X') {
        symbol = 'O';
    } else {
        symbol = "X"
    };

    return symbol;
};




let cell = document.querySelectorAll('.cell');



for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {

        math(this.innerHTML, playerSym)

        if (this.innerHTML == 'X' || this.innerHTML == 'O') {
            console.log('invalid move')
        } else {
            let turn = whosTurn(playerSym);
            playerSym = turn

            this.innerHTML = turn;
        }

        


    });
};