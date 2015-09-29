var grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

var turns = ['X', 'O'];
var turnClass = ['blue', 'red'];

function check(first, second, third) {};

function loop() {};

function fillField(x, y) {};

function isWinner() {};

$(document).ready(function() {
    var turn = false;
    var currentTurn, nextTurn;
    $('.grid .block:not(.red, .blue) > a').click(function(e) {
        e.preventDefault();
        currentTurn = turn === true ? 1 : 0;
        nextTurn = turn === true ? 0 : 1;
        // Change turn text in the page
        $('.turn-text p > strong').text(turns[nextTurn]);
        $(this).html(turns[currentTurn]);
        $(this).parent().parent().addClass(turnClass[currentTurn]);
        // Change turn
        turn = ! turn;
    });

    // Reset everything
    $('.reset').click(function(e) {
        e.preventDefault();
        $('.grid .block > a').html('&nbsp;');
        turn = false;
        nextTurn = turn === true ? 1 : 0;
        $('.turn-text p > strong').text(turns[nextTurn]);
    });
});
