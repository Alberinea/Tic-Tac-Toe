const Player = (side) => {
    let _turnEnd = false;
    const takeTurn = function () {
        if (!_turnEnd) {
            _turnEnd = true;
            return this.side;
        } else if (_turnEnd) {
            _turnEnd = false;
        }
    };
    return { side, takeTurn };
};

const x = Player('X');
const o = Player('O');

const gameBoard = (() => {
    let init = false;
    const space = new Array(9);
    const _cells = document.querySelectorAll('td');
    const _restartButton = document.getElementById('restart');
    const _draw = function (e) {
        init = true;
        if (this.innerText != '') return;
        space[this.id] = this.id;
        this.innerText = x.takeTurn() || o.takeTurn() || 'O';
        e.preventDefault()
    };
    const restartFunction = () => {
        _cells.forEach((cell) => cell.innerText = '')
    }
    const restart = () => _restartButton.addEventListener('click', restartFunction);
    const click = () => _cells.forEach((cell) => cell.addEventListener('click', _draw));
    return { init, space, click, restart };
})();

const gameLogic = (() => {
    const _draw = () => {
        
    }
})()

gameBoard.click();
gameBoard.restart();
