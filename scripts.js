function initStuff() {
    const textInput = document.getElementsByClassName('text-input')[0];
    textInput.addEventListener('input', () => {
        setTextOfAll(textInput.value);
        adjustWidthWherePossible();
    });

    window.addEventListener('resize', () => {
        adjustWidthWherePossible();
    });
}

/**
 * @param {string} text
 */
function setTextOfAll(text) {
    Array.prototype.forEach.call(
        document.getElementsByClassName('text-bubble'),
        (element) => {
            element.innerText = text;
        }
    );
}

function adjustWidthWherePossible() {
    Array.prototype.forEach.call(
        document.getElementsByClassName('text-bubble_width-hacked'),
        (element) => {
            adjustWidth(element);
        }
    );
}

/**
 * @param {Element} bubbleElement
 */
function adjustWidth(bubbleElement) {
    let words = bubbleElement.innerText.split(/\s/g);
    bubbleElement.innerText = words.shift();
    let innerText = bubbleElement.innerText;
    let height = bubbleElement.clientHeight;

    words.forEach((word) => {
        bubbleElement.innerText += ` ${word}`;
        if(bubbleElement.clientHeight > height) {
            bubbleElement.innerText = `${innerText}
${word}`;
            height = bubbleElement.clientHeight;
        }
        innerText = bubbleElement.innerText
    });
}

initStuff();
