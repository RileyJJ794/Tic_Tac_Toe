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
        let turn = whosTurn(this.innerHTML);

        document.getElementsByName(this.innerHTML) = turn;

    });
};