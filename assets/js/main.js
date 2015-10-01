var turns = ['X', 'O'];
var turnClass = ['blue', 'red'];

var grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

$(document).ready(function() {
    var turn = false;
    var currentTurn, nextTurn;
    $('.grid .block > a').click(function(e) {
        e.preventDefault();
        var $parent = $(this).parent().parent();
        if($parent.hasClass('red') || $parent.hasClass('blue')) {
            return;
        }
        currentTurn = turn === true ? 1 : 0;
        nextTurn = turn === true ? 0 : 1;
        // fill the grid variable
        var x = $(this).data('x'),
            y = $(this).data('y');
        var fillResult = fillField(x, y, currentTurn);
        if (fillResult !== false) {
        // Change turn text in the page
        $('.turn-text p > strong').text(turns[nextTurn]);
        $(this).html(turns[currentTurn]);
        $parent.addClass(turnClass[currentTurn]);
        // Change turn
        turn = ! turn;
        }
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

function check() {};

function loop() {};

function fillField(x, y, turn) {
    if (grid[x][y] === null) {
        return false;
    }
    grid[x][y] = turn;
};

function isWinner() {};
