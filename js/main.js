document.addEventListener('DOMContentLoaded', () => {
    const moveBtns = document.querySelectorAll('.move__btn');


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


    moveBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            let playerChoose = setPlayerChoose(item);
            changeBtnsStyle(moveBtns, playerChoose);            
        });
    })
})