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
            document.getElementById(`${space[0]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('0').style.color = 'green';
            document.getElementById('1').style.color = 'green';
            document.getElementById('2').style.color = 'green';
        }
        else if (pattern[1].every(c2)) {
            status.innerText = `The winner is ${space[3]}`;
            let result = parseInt(document.getElementById(`${space[3]}`).querySelector('.count').innerText);
            document.getElementById(`${space[3]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('3').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('5').style.color = 'green';
        }
        else if (pattern[2].every(c3)) {
            status.innerText = `The winner is ${space[6]}`;
            let result = parseInt(document.getElementById(`${space[6]}`).querySelector('.count').innerText);
            document.getElementById(`${space[6]}`).querySelector('.count').innerText = result += 1;
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
            document.getElementById(`${space[0]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('0').style.color = 'green';
            document.getElementById('3').style.color = 'green';
            document.getElementById('6').style.color = 'green';
        }
        else if (pattern[1].every(c2)) {
            status.innerText = `The winner is ${space[1]}`;
            let result = parseInt(document.getElementById(`${space[1]}`).querySelector('.count').innerText);
            document.getElementById(`${space[1]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('1').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('7').style.color = 'green';
        }
        else if (pattern[2].every(c3)) {
            status.innerText = `The winner is ${space[2]}`;
            let result = parseInt(document.getElementById(`${space[2]}`).querySelector('.count').innerText);
            document.getElementById(`${space[2]}`).querySelector('.count').innerText = result += 1;
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
            document.getElementById(`${space[0]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('0').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('8').style.color = 'green';
        }
        else if (pattern[1].every(c2)) {
            status.innerText = `The winner is ${space[2]}`;
            let result = parseInt(document.getElementById(`${space[2]}`).querySelector('.count').innerText);
            document.getElementById(`${space[2]}`).querySelector('.count').innerText = result += 1;
            document.getElementById('2').style.color = 'green';
            document.getElementById('4').style.color = 'green';
            document.getElementById('6').style.color = 'green';
        }
    };
    const _gameOver = () => {
        if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw')) {
            document.querySelectorAll('.player').forEach((player) => player.classList.remove('active'));
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
    const easy = () => {
        if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw')) return;
        let _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        while (gameLogic.space[_checkSpace] != undefined)
            _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        while (document.getElementById(_checkSpace).innerText === 'X')
            _checkSpace = Math.floor(Math.random() * gameLogic.space.length);
        gameLogic.space[_checkSpace] = 'O';
        document.getElementById(_checkSpace).innerText = 'O';
        document.getElementById(_checkSpace).style.color = 'rgb(221, 17, 17)';
        console.log(_checkSpace);
        console.log(gameLogic.space);
    };
    return { easy };
})();

const gameBoard = (() => {
    const cells = document.querySelectorAll('td');
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
        cells.forEach((cell) => (cell.innerText = ''));
        for (let i = 0; i < gameLogic.space.length; i++) {
            gameLogic.space[i] = undefined;
        }
        cells.forEach((cell) => (cell.style.color = ''));
        document.querySelectorAll('.player').forEach((player) => player.classList.remove('active'));
        gameLogic.status.innerText = 'Start game or select player';
    };
    const _switchPlayer = function () {
        if (gameLogic.status.innerText != 'Start game or select player') return;
        _retry();
    };
    const _draw = function (e) {
        const difficulty = document.getElementById('difficulties').value;
        if (document.querySelector('body').classList.contains('blur')) {
            _retry();
            document.querySelector('body').classList.remove('blur', 'click');
            e.preventDefault();
        } else {
            if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw'))
                return;
            if (this.innerText != '') return;
            if (difficulty === 'easy') {
                this.innerText = x.side; 
                gameLogic.space[this.id] = this.innerText;
                gameLogic.evaluate();
                AI.easy();
            }
            if (difficulty === 'Play with friends') {
                this.innerText = x.takeTurn() || o.takeTurn() || 'O';
                this.style.color = this.innerText === 'O' ? 'rgb(221, 17, 17)' : 'black';
                gameLogic.status.innerText = this.innerText === 'O' ? 'X turn' : 'O turn';
                gameLogic.space[this.id] = this.innerText;
            }
            if (this.innerText === 'O') {
                document.getElementById('X').classList.add('active');
                document.getElementById('O').classList.remove('active');
            } else {
                document.getElementById('O').classList.add('active');
                document.getElementById('X').classList.remove('active');
            }
            gameLogic.evaluate();
            e.preventDefault();
        }
    };
    const _restartFunction = () => {
        if (gameLogic.status.innerText.includes('The winner is') || gameLogic.status.innerText.includes('Draw')) return;
        _retry();
        document.querySelectorAll('.count').forEach((count) => (count.innerText = 0));
    };
    const restart = () => _restartButton.addEventListener('click', _restartFunction);
    const click = () => cells.forEach((cell) => cell.addEventListener('click', _draw));
    const changePlayer = () =>
        _switchButtons.forEach((switchButton) => switchButton.addEventListener('click', _switchPlayer));
    return { click, restart, changePlayer };
})();

gameBoard.click();
gameBoard.restart();
gameBoard.changePlayer();
