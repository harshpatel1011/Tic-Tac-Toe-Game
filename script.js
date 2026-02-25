var turn = "X";
var moves = 0;
var finished = false;

function press(btn) {
    if (finished) return;
    if (btn.innerHTML != "") return;

    btn.innerHTML = turn;
    moves++;

    if (checkWinner()) {
        document.getElementById("display").innerHTML = turn + " Wins!";
        finished = true;
        disableCells();
        return;
    }

    if (moves == 9) {
        document.getElementById("display").innerHTML = "Draw!";
        finished = true;
        return;
    }

    // Switch turn
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    }
    document.getElementById("display").innerHTML = "Turn: " + turn;
}

function checkWinner() {
    // Get all buttons in the page
    var allButtons = document.getElementsByTagName("button");
    // The first 9 buttons are the game cells
    var b = [];
    for (var i = 0; i < 9; i++) {
        b[i] = allButtons[i].innerHTML;
    }

    // Winning conditions
    if (
        (b[0] && b[0] == b[1] && b[1] == b[2]) ||
        (b[3] && b[3] == b[4] && b[4] == b[5]) ||
        (b[6] && b[6] == b[7] && b[7] == b[8]) ||
        (b[0] && b[0] == b[3] && b[3] == b[6]) ||
        (b[1] && b[1] == b[4] && b[4] == b[7]) ||
        (b[2] && b[2] == b[5] && b[5] == b[8]) ||
        (b[0] && b[0] == b[4] && b[4] == b[8]) ||
        (b[2] && b[2] == b[4] && b[4] == b[6])
    ) {
        return true;
    } else {
        return false;
    }
}

function disableCells() {
    var allButtons = document.getElementsByTagName("button");
    for (var i = 0; i < 9; i++) {
        allButtons[i].disabled = true;
    }
}

function resetGame() {
    var allButtons = document.getElementsByTagName("button");
    for (var i = 0; i < 9; i++) {
        allButtons[i].innerHTML = "";
        allButtons[i].disabled = false;
    }
    turn = "X";
    moves = 0;
    finished = false;
    document.getElementById("display").innerHTML = "Turn: " + turn;
}