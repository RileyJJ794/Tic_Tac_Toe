numberPlays = 0;
playerSym = 'X';

var modal = document.getElementById('mymodal');

var span = document.getElementsByClassName('close')[0];

var winner = document.querySelector(".who_win");

var winBox = document.querySelector('.modal')


gameboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function winDisplay(symbol) {
    winner.innerHTML = ("Player " + symbol + " wins!!!")

    winBox.classList.add("show")
}

// function winCondition(axis) {
//     for (var i = 0; i < 3; i++) {

//         if (gameboard[axis][i] == "X" || gameboard[axis][i] == "O"){
//             win += 1

//         } else{
//             break
//         };

//         if (win == 3) {
//             if (gameboard[axis][0] == "X") {

//                 winDisplay("O");

//                 console.log("player O wins");
//             } else {

//                 winDisplay("X");

//                 console.log('player X wins');
//             }
//         }
//     }
// }



function math(move, symbol) {

    x = (Math.ceil(move / 3) - 1);
    y = ((move % 3) - 1);

    if (y == -1) {
        y = 2
    };
    console.log(y)
    console.log(x);
    gameboard[x][y] = symbol;

    
    win = 0

    for (var i = 0; i < 3; i++) {

        if (gameboard[x][i] == "X" || gameboard[x][i] == "O"){
            win += 1

        } else{
            break
        };

        if (win == 3) {
            if (gameboard[x][0] == "X") {

                winDisplay("O");

                console.log("player O wins");
            } else {

                winDisplay("X");

                console.log('player X wins');
            }
        }
    }

    win = 0

    for (var i = 0; i < 3; i++) {

        if (gameboard[i][y] == "X" || gameboard[i][y] == "O"){
            win += 1

        } else{
            break
        };

        if (win == 3) {
            if (gameboard[0][y] == "X") {

                winDisplay("O");

                console.log("player O wins")
            } else {

                winDisplay("X");

                console.log('player X wins')
            }
        }
    }

    win = 0

    for (var i = 0; i < 3; i++) {

        if (gameboard[i][i] == "X" || gameboard[i][i] == "O"){
            win += 1
        } else{
            break
        };

        if(win == 3) {
            if (gameboard[x][y] == "X") {

                winDisplay("O");
                
                console.log("player O wins")
            } else {

                winDisplay("X");

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
            this.style.color = "Black";
        }

        


    });
};