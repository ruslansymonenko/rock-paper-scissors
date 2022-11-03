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

    const gameOption = ['rock', 'paper', 'scissors'];


    function setPlayerChoose (btn) {
        let action = btn.getAttribute('data-action');
        return action
    };

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
                field.setAttribute('src', './assets/btn-rock.png')
                break
            case 'paper':
                field.setAttribute('src', './assets/btn-paper.png')
                break
        }
    }

    moveBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            let playerChoose = setPlayerChoose(item);
            changeBtnsStyle(moveBtns, playerChoose);            
        });
    });

    playBtn.addEventListener('click', () => {
        setGamePicture('rock', choosenMovePlayer);
        setGamePicture('paper', choosenMoveComp);
    })
})