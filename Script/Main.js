window.onload = start;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp);
    window.addEventListener('keydown', keyDown);

    imageLoad();
    generateOffscreenCanvas();

    loop();
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'SaveSelect') {
        loopSaveSelect();
    } else if (scene === 'LevelSelect') {
        loopLevelSelect();
    } else if (scene === 'Ready') {
        loopReady();
    } else if (scene === 'Game') {
        loopGame();
    }

    requestAnimationFrame(loop);
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y);
    } else if (scene === 'SaveSelect') {
        mouseUpSaveSelect(x, y);   
    } else if (scene === 'LevelSelect') {
        mouseUpLevelSelect(x, y);
    } else if (scene === 'Ready') {
        mouseUpReady(x, y);
    } else if (scene === 'Game') {
        mouseUpGame(x, y);
    }
}

function keyDown(event) {
    var key = event.keyCode;

    if (scene === 'SaveSelect') {
        keyDownSaveSelect(key);
    } else if (scene === 'LevelSelect') {
        keyDownLevelSelect(key);
    } else if (scene === 'Ready') {
        keyDownReady(key);
    } else if (scene === 'Game') {
        keyDownGame(key);
    }
}

function errorHandle() {
}

function rightClick() {
    return false;
}
