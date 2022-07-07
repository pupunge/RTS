var UITitle = {
    titleText : [8, 48],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.strokeStyle = 'Black';
    context.fillStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 600);
}

function mouseUpTitle(x, y) {
    
}
