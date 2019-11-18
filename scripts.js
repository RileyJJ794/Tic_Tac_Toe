numberPlays = 0;
playerSym = 'X';

gameboard = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
]

function math(move) {

    y = (Math.ceil(move/3)-1);
    x = ((move%3)-1);

    if (x==-1) {
        x=2
    };

    console.log(x);
    console.log(y);
}

function whosTurn(symbol) {
    if (symbol == 'O') {
        symbol = 'X';
    } else {
        symbol = "O"
    };

    return symbol;
};

let cell = document.querySelectorAll('.cell');



for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {

        math(this.innerHTML)

        if (this.innerHTML == 'X' || this.innerHTML == 'O') {
            console.log('invalid move')
        }  else{
            let turn = whosTurn(playerSym);
            playerSym = turn

            this.innerHTML = turn;
        }



    });
};