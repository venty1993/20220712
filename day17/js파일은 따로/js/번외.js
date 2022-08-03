makeSlider(`.slide-contents-wrapper`);

    function makeSlider(id) {
    const slideContentsWrapper = document.querySelector(id);
    const cloneFirst =
        slideContentsWrapper.firstElementChild.cloneNode(true);
    const cloneLast = slideContentsWrapper.lastElementChild.cloneNode(true);
    const 슬라이드너비 = slideContentsWrapper.parentElement.clientWidth;

    slideContentsWrapper.insertBefore(
        cloneLast,
        slideContentsWrapper.firstChild
    );
    slideContentsWrapper.appendChild(cloneFirst);

    const buttons = document.getElementsByTagName(`button`);
    const prevButton = buttons[0];
    const nextButton = buttons[1];

    let moveChecker = true;
    let intervalManager;
    let index = 1;
    moveSlide(false);

    nextButton.addEventListener("click", () => {
        //childElmentCount 프로퍼티에는 자식요소의 갯수 값이 들어있다
        slide(true);
    });
    prevButton.addEventListener(`click`, () => {
        slide(false);
    });

    fiveSecondSlide()

    function fiveSecondSlide(){
        intervalManager = setInterval(() => {
            slide(true);
        }, 5000);
    }

    function slide(vector) {
        if (moveChecker) {
        let destination;
        let maxAndMin;

        moveChecker = false;
        if (vector) {
            maxAndMin = slideContentsWrapper.childElementCount - 1;
            destination = 1;
            index++;
        } else {
            maxAndMin = 0;
            destination = slideContentsWrapper.childElementCount - 2;
            index--;
        }
        moveSlide(true);
        clearInterval(intervalManager);
        fiveSecondSlide();
        setTimeout(() => {
            moveChecker = true;
            if (index === maxAndMin) {
            index = destination;
            moveSlide(false);
            }
        }, 1000);
        }
    }

    function moveSlide(transition) {
        if (transition) {
        slideContentsWrapper.style.transition = `1s`;
        } else {
        slideContentsWrapper.style.transition = `0s`;
        }

        slideContentsWrapper.style.transform = `translateX(-${
        index * 슬라이드너비
        }px)`;
    }
    }