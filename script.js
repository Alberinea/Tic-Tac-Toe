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
            status.innerText = `The winner is ${space[0]}`;
            let result = parseInt(document.getElementById(`${space[0]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[0]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[0])
                document.getElementById(`${space[0]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[0]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('0').style.color = 'green';
            document.getElementById('1').style.color = 'green';
            document.getElementById('2').style.color = 'green';
        } else if (pattern[1].every(c2)) {
            status.innerText = `The winner is ${space[3]}`;
            let result = parseInt(document.getElementById(`${space[3]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[3]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[3])
                document.getElementById(`${space[3]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[3]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('3').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('5').style.color = 'green';
        } else if (pattern[2].every(c3)) {
            status.innerText = `The winner is ${space[6]}`;
            let result = parseInt(document.getElementById(`${space[6]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[6]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[6])
                document.getElementById(`${space[6]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[6]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('6').style.color = 'green';
            document.getElementById('7').style.color = 'green';
            document.getElementById('8').style.color = 'green';
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
            status.innerText = `The winner is ${space[0]}`;
            let result = parseInt(document.getElementById(`${space[0]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[0]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[0])
                document.getElementById(`${space[0]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[0]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('0').style.color = 'green';
            document.getElementById('3').style.color = 'green';
            document.getElementById('6').style.color = 'green';
        } else if (pattern[1].every(c2)) {
            status.innerText = `The winner is ${space[1]}`;
            let result = parseInt(document.getElementById(`${space[1]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[1]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[1])
                document.getElementById(`${space[1]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[1]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('1').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('7').style.color = 'green';
        } else if (pattern[2].every(c3)) {
            status.innerText = `The winner is ${space[2]}`;
            let result = parseInt(document.getElementById(`${space[2]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[2]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[2])
                document.getElementById(`${space[2]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[2]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('5').style.color = 'green';
            document.getElementById('8').style.color = 'green';
            document.getElementById('2').style.color = 'green';
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
            status.innerText = `The winner is ${space[0]}`;
            let result = parseInt(document.getElementById(`${space[0]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[0]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[0])
                document.getElementById(`${space[0]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[0]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('0').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('8').style.color = 'green';
        } else if (pattern[1].every(c2)) {
            status.innerText = `The winner is ${space[2]}`;
            let result = parseInt(document.getElementById(`${space[2]}`).querySelector('.count').innerText);
            let result2 = parseFloat(document.getElementById(`${space[2]}`).querySelector('.count').innerText);
            if (document.querySelector('.active').id === space[2])
                document.getElementById(`${space[2]}`).querySelector('.count').innerText = result2 += 0.5;
            else document.getElementById(`${space[2]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('2').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('6').style.color = 'green';
        }
    };
    const _gameOver = () => {
        if (status.innerText.includes('The winner is') || status.innerText.includes('Draw')) {
            setTimeout(() => {
                document.querySelector('body').classList.add('blur', 'click');
            }, 1500);
        }
    };
    const evaluate = () => {
        _draw();
        _horizontalWin();
        _verticalWin();
        _diagonalWin();
        _gameOver();
    };
    return { status, space, evaluate };
})();

const AI = (() => {
    const easy = (side) => {
        if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw')) return;
        let _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        while (gameLogic.space[_checkSpace] != undefined)
            _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        if (side === 'O') {
            while (document.getElementById(_checkSpace).innerText === 'X')
                _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        } else {
            while (document.getElementById(_checkSpace).innerText === 'O')
                _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        }
        gameLogic.space[_checkSpace] = side;
        document.getElementById(_checkSpace).innerText = side;
        document.getElementById(_checkSpace).style.color = side === 'O' ? 'rgb(221, 17, 17)' : 'black';
    };
    return { easy };
})();

const gameBoard = (() => {
    const _cells = document.querySelectorAll('td');
    const _restartButton = document.getElementById('restart');
    const _switchButtons = document.querySelectorAll('.player');
    const _retry = () => {
        const left = gameLogic.space.filter((s) => s == undefined);
        if (left.length === 8 || left.length === 4) x.takeTurn();
        else if (left.length === 7 || left.length === 3) {
            x.takeTurn();
            o.takeTurn();
            x.takeTurn();
        } else if (left.length === 6 || left.length === 2 || left.length === 0) {
            x.takeTurn();
            o.takeTurn();
        }
        _cells.forEach((cell) => (cell.innerText = ''));
        for (let i = 0; i < gameLogic.space.length; i++) {
            gameLogic.space[i] = undefined;
        }
        _cells.forEach((cell) => (cell.style.color = ''));
        document.querySelectorAll('.player').forEach((player) => player.classList.add('hover'));
        gameLogic.status.innerText = 'Start game or select player';
    };
    const restartFunction = () => {
        if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw')) return;
        _retry();
        document.querySelectorAll('.count').forEach((count) => (count.innerText = 0));
        document.querySelectorAll('.player').forEach((player) => player.classList.remove('active'));
        document.getElementById('X').classList.add('active');
    };
    const _switchPlayer = function () {
        let _difficulty = document.getElementById('difficulties').value;
        if (gameLogic.status.innerText != 'Start game or select player') return;
        restartFunction();
        if (this.id === 'O') {
            if (_difficulty === 'easy') AI.easy('X');
            document.getElementById('O').classList.add('active');
            document.getElementById('X').classList.remove('active');
            gameLogic.status.innerText = 'O turn';
        } else {
            document.getElementById('X').classList.add('active');
            document.getElementById('O').classList.remove('active');
        }
    };
    const _draw = function (e) {
        let _difficulty = document.getElementById('difficulties').value;
        const _player = document.querySelector('.active').id;
        e.preventDefault();
        if (document.querySelector('body').classList.contains('blur')) {
            _retry();
            document.querySelector('body').classList.remove('blur', 'click');
            if (_player === 'O') {
                if (_difficulty === 'easy') AI.easy('X');
            }
        } else {
            if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw'))
                return;
            if (this.innerText != '') return;

            if (_difficulty === 'PWF') {
                this.innerText = x.takeTurn() || o.takeTurn() || 'O';
                gameLogic.status.innerText = this.innerText === 'O' ? 'X turn' : 'O turn';
                gameLogic.space[this.id] = this.innerText;
                if (this.innerText === 'O') {
                    document.getElementById('X').classList.add('active');
                    document.getElementById('O').classList.remove('active');
                } else {
                    document.getElementById('O').classList.add('active');
                    document.getElementById('X').classList.remove('active');
                }
            } else {
                const _ai = _player === 'X' ? 'O' : 'X';
                this.innerText = _player;
                gameLogic.space[this.id] = this.innerText;
                gameLogic.evaluate();

                if (_difficulty === 'easy') AI.easy(_ai);

                gameLogic.status.innerText = `${_player} turn`;
            }

            this.style.color = this.innerText === 'O' ? 'rgb(221, 17, 17)' : 'black';
            gameLogic.evaluate();
        }
        if (gameLogic.space.includes('X') || gameLogic.space.includes('O'))
            document.querySelectorAll('.player').forEach((player) => player.classList.remove('hover'));
    };
    const restart = () => _restartButton.addEventListener('click', restartFunction);
    const click = () => _cells.forEach((cell) => cell.addEventListener('click', _draw));
    const changePlayer = () =>
        _switchButtons.forEach((switchButton) => switchButton.addEventListener('click', _switchPlayer));
    return { click, restart, changePlayer, restartFunction };
})();

gameBoard.click();
gameBoard.restart();
gameBoard.changePlayer();
