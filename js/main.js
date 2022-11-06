document.addEventListener('DOMContentLoaded', () => {
    const moveBtns = document.querySelectorAll('.move__btn');
    const playBtn = document.querySelector('.play__btn');
    const playerResult = document.querySelector('#playerResult');
    const compResult = document.querySelector('#compResult');
    const choosenMovePlayer = document.querySelector('.choosen__move-player');
    const choosenMoveComp = document.querySelector('.choosen__move-comp');

    const gameResults = {
        player: 0,
        comp: 0
    };

    // 0 - lose, 1 - win, 2 - draw
    const gameRules = {
        'rock': {'rock': 2, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 2, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 2}
    }

    const gameOption = ['rock', 'paper', 'scissors'];

    let playerChoose = '';


    function setPlayerChoose (btn) {
        let action = btn.getAttribute('data-action');
        return action
    };

    function setCompChoose (arr) {
        let arrElement = Math.floor((Math.random()) * arr.length);
        return arr[arrElement]
    }

    function changeBtnsStyle (btns, btn) {
        btns.forEach(el => {
            if (el.getAttribute('data-action') == btn) {
                el.classList.add('move__btn-active');         
            } else {
                el.classList.remove('move__btn-active');
            }
        })
    };

    function setGamePicture (option, field) {
        switch (option) {
            case 'rock':
                field.setAttribute('src', './assets/btn-rock.png');
                break
            case 'paper':
                field.setAttribute('src', './assets/btn-paper.png');
                break
            case 'scissors':
                field.setAttribute('src', './assets/btn-scissors.png');
                break
        }
    };

    function checkGameResult (checkedOption, checking) {
        let result = 0;
        let dataForCheck;

        switch (checkedOption) {
            case 'rock':
                dataForCheck = gameRules['rock'];
                result = dataForCheck[checking]
                console.log(result);
                break
            case 'paper':
                dataForCheck = gameRules['paper'];
                result = dataForCheck[checking]
                console.log(result);
                break
            case 'scissors':
                dataForCheck = gameRules['scissors'];
                result = dataForCheck[checking];
                console.log(result);
                break
        }
    };

    function checkWinner (gameResult) {

    };

    moveBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            playerChoose = setPlayerChoose(item);
            changeBtnsStyle(moveBtns, playerChoose);            
        });
    });

    playBtn.addEventListener('click', () => {
        let compChose = setCompChoose(gameOption);

        setGamePicture(playerChoose, choosenMovePlayer);
        setGamePicture(compChose, choosenMoveComp);

        checkGameResult(playerChoose, compChose);
    })
})