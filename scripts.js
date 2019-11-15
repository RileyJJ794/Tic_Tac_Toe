numberPlays = 0;
playerSym = 'X';

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

        if (this.innerHTML == 'X' || this.innerHTML == 'O') {
            console.log('invalid move')
        }  else{
            let turn = whosTurn(playerSym);
            playerSym = turn

            this.innerHTML = turn;
        }

        

    });
};