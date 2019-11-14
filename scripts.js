
let PlayerTurn = 


let cell = document.querySelectorAll('.cell')

for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function(){
        let turn = whosTurn(this.innerHTML);
        // add something that shows an x or an o dependng on whos turn it is at the cell selected by player

    });
};