numberPlays = 0;
playerSym = '';

function whosTurn(numberPlays, playerSym) {
    if (numberPlays % 2 == 0) {
        let playerSym = 'X';
    } else {
        let playerSym = "O"
    };

    return playerSym;
};



let cell = document.querySelectorAll('.cell');

for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {
        let turn = whosTurn(this.innerHTML);
        console.log(turn)
        // add something that shows an x or an o dependng on whos turn it is at the cell selected by player

    });
};