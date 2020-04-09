(function() {

    const UI = (() => {
        const smoothWrapper = document.querySelector('.smooth-wrapper');
        const nextButton = document.querySelector('.smooth-button-next');
        const sliderElems = Array.from(smoothWrapper.children);

        return {
            sliderElems,
            smoothWrapper,
            nextButton
        }
    })();

    const wrapperWidth = () => UI.smoothWrapper.offsetWidth;

    const initSS = (() => {
        UI.sliderElems.map((sliderItem) => {
            sliderItem.style.width = wrapperWidth() + "px";
        })
    })();

    const findActiveSlide = () => {
        for (let index = 0; index <= UI.sliderElems.length; index++) {
            if (typeof UI.sliderElems[index] !== "undefined") {
                if (UI.sliderElems[index].classList.contains('smooth-slide-active')) {
                    return index;
                }
            }
        }
    }

    const removeClass = () => {
        for (let index = 0; index <= UI.sliderElems.length; index++) {
            if (typeof UI.sliderElems[index] !== "undefined") {
                UI.sliderElems[index].classList.remove('smooth-slide-active');
                UI.sliderElems[index].classList.remove('smooth-slide-next');
            }
        }
    }

    const addClass = (nextItem) => {
        console.log('addClass' + nextItem);
        if (typeof UI.sliderElems[nextItem] !== "undefined") {
            UI.sliderElems[nextItem].classList.add('smooth-slide-active')
        } else {
            console.log('No more item!!!');
        }
    }

    UI.nextButton.addEventListener("click", () => {

        let moveItem = 0;

        const nextItem = findActiveSlide() + 1;

        console.log('nextitem' + nextItem)

        if (findActiveSlide() === 0) {
            moveItem = wrapperWidth();
        } else {
            console.log('nextbutton' + wrapperWidth())
            moveItem = findActiveSlide() * wrapperWidth();
        }

        removeClass();

        UI.smoothWrapper.style.transform = "translate3d(-" + moveItem + "px, 0px, 0px)";

        addClass(nextItem);

    });


    // console.dir(UI.smoothWrapper);
    // console.log('Hello smooth js' + wrapperWidth());
})();