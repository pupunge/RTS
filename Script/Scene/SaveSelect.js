var UISaveSelect = {
     titleText : [8, 48],
     backButton : [928, 32, 64, 64],
     saveRect : [128, 128, 768, 384],
};

function loopSaveSelect() {
    displaySaveSelect();
}

function displaySaveSelect() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select save file.`, UISaveSelect.titleText[0], UISaveSelect.titleText[1]);
    context.drawImage(img.button.back, UISaveSelect.backButton[0], UISaveSelect.backButton[1]);

    // Save File
    context.strokeRect(UISaveSelect.saveRect[0], UISaveSelect.saveRect[1], UISaveSelect.saveRect[2], UISaveSelect.saveRect[3]);
}

function mouseUpSaveSelect(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UISaveSelect.backButton)) {
                scene = 'Title';
            } else if (pointInsideRectArray(x, y, UISaveSelect.saveRect)) {
                scene = 'LevelSelect';
            }
        }
    }
}

function keyDownSaveSelect(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 27) {
                scene = 'Title';
            }
        }
    }
}