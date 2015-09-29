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
    $('.grid .block > a').click(function(e) {
        e.preventDefault();
        if($(this).parent().parent().hasClass('red') || $(this).parent().parent().hasClass('blue')) {
            return;
        }
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
        currentTurn = turn === true ? 1 : 0;
        nextTurn = turn === true ? 0 : 1;
        $('.turn-text p > strong').text(turns[currentTurn]);
        $('.grid .block').parent().removeClass('red').removeClass('blue');
    });
});
