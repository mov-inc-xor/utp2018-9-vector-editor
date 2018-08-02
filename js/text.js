'use strict'

const text = document.getElementById("text");
let textForeignObject;
let textDiv;

function addText() {
    textForeignObject = svgPanel.getElementById('textForeignObject');

    if(!text.checked) {
        textForeignObject.getElementsByTagName('div')[0].setAttribute('contenteditable', false);
        return;
    }

    if(textForeignObject) {
        if(text.checked) {
            textForeignObject.getElementsByTagName('div')[0].setAttribute('contenteditable', true);
        }
        return;
    }

    textForeignObject = document.createElementNS(svgNS, 'foreignObject');
    textForeignObject.setAttribute('id', 'textForeignObject');
    textForeignObject.setAttribute('height', 500);
    textForeignObject.setAttribute('width', 900);

    svgPanel.appendChild(textForeignObject);

    textDiv = document.createElement('div');
    textDiv.style.cssText = "overflow: auto; \
    width: 900px; \
    height: 500px; \
    ";
    textDiv.setAttribute('id', 'textDiv');
    textDiv.setAttribute('contenteditable', true);
    textDiv.textContent = 'Enter your text';

    textForeignObject.appendChild(textDiv);
}

drawPanel.addEventListener('click', addText);