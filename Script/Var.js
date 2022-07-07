var canvas;
var context;
var canvasRect;

var scene = 'Title';
var state = '';
var menu = false;
var pause = false;

var player = {
    energy : 0,
    energyMax : 0,
    wheat : 0,
    sugar : 0,
    hand : [],
    deck : [],
};

var enemy = {
    energy : 0,
    energyMax : 0,
    wheat : 0,
    sugar : 0,
    hand : [],
    deck : [],
};

var field = {
    floor : [],
    terrain : [],
    unit : [],
};
