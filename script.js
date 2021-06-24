const Player = (side) => {
    let _turnEnd = false;
    const takeTurn = function () {
        if (!_turnEnd) {
            _turnEnd = true;
            console.log('a');
            return this.side;
        } else if (_turnEnd) {
            _turnEnd = false;
            console.log('b');
        }
    };
    return { side, takeTurn };
};

const x = Player('X');
const o = Player('O');

const gameLogic = (() => {
    const space = new Array(9).fill(undefined);
    const status = document.getElementById('statusDisplay');
    const _draw = () => {
        if (!space.includes(undefined)) status.innerText = 'Draw';
    };
    const _horizontalWin = () => {
        const c1 = (e) => e === space[0] && typeof space[0] === 'string';
        const c2 = (e) => e === space[3] && typeof space[3] === 'string';
        const c3 = (e) => e === space[6] && typeof space[6] === 'string';
        const pattern = [
            [space[0], space[1], space[2]],
            [space[3], space[4], space[5]],
            [space[6], space[7], space[8]],
        ];
        if (pattern[0].every(c1)) {
            status.innerText = `${space[0]} wins`;
        }
        if (pattern[1].every(c2)) {
            status.innerText = `${space[3]} wins`;
        }
        if (pattern[2].every(c3)) {
            status.innerText = `${space[6]} wins`;
        }
    };
    const _verticalWin = () => {
        const c1 = (e) => e === space[0] && typeof space[0] === 'string';
        const c2 = (e) => e === space[1] && typeof space[1] === 'string';
        const c3 = (e) => e === space[2] && typeof space[2] === 'string';
        const pattern = [
            [space[0], space[3], space[6]],
            [space[1], space[4], space[7]],
            [space[2], space[5], space[8]],
        ];
        if (pattern[0].every(c1)) {
            status.innerText = `${space[0]} wins`;
        }
        if (pattern[1].every(c2)) {
            status.innerText = `${space[1]} wins`;
        }
        if (pattern[2].every(c3)) {
            status.innerText = `${space[2]} wins`;
        }
    };
    const _diagonalWin = () => {
        const c1 = (e) => e === space[0] && typeof space[0] === 'string';
        const c2 = (e) => e === space[4] && typeof space[4] === 'string';
        const pattern = [
            [space[0], space[4], space[8]],
            [space[2], space[4], space[6]],
        ];
        if (pattern[0].every(c1)) {
            status.innerText = `${space[0]} wins`;
        }
        if (pattern[1].every(c2)) {
            status.innerText = `${space[2]} wins`;
        }
    };
    const gameOver = () => {
        _draw();
        _horizontalWin();
        _verticalWin();
        _diagonalWin();
    };
    return { status, space, gameOver };
})();

const gameBoard = (() => {
    let init = false;
    const _cells = document.querySelectorAll('td');
    const _restartButton = document.getElementById('restart');
    const _draw = function (e) {
        init = true;
        if (this.innerText != '') return;
        this.innerText = x.takeTurn() || o.takeTurn() || 'O';
        this.style.color = this.innerText === 'O' ? 'rgb(221, 17, 17)' : 'black';
        gameLogic.space[this.id] = this.innerText;
        gameLogic.gameOver();
        e.preventDefault();
    };
    const restartFunction = () => {
        const left = gameLogic.space.filter((s) => s == undefined);
        if (left.length === 8 || left.length === 4) x.takeTurn();
        else if (left.length === 7 || left.length === 3) {
            x.takeTurn();
            o.takeTurn();
            x.takeTurn();
        } else if (left.length === 6 || left.length === 2) {
            x.takeTurn();
            o.takeTurn();
        }
        _cells.forEach((cell) => (cell.innerText = ''));
        for (let i = 0; i < gameLogic.space.length; i++) {
            gameLogic.space[i] = undefined;
        }
        gameLogic.status.innerText = 'Start game or select player';
    };
    const restart = () => _restartButton.addEventListener('click', restartFunction);
    const click = () => _cells.forEach((cell) => cell.addEventListener('click', _draw));
    return { init, click, restart };
})();

gameBoard.click();
gameBoard.restart();
