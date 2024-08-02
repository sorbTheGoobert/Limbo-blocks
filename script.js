const game = document.getElementById("canvas");
const ctx = game.getContext("2d");

function redrawFrame() {
    ctx.clearRect(0, 0, 900, 500);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 900, 500);
}

class Keys {
    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.size = 100
        this.state = state;
        this.color = "red";
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        console.log("drawn")
    }
}
let keys = [
    new Keys(100, 100, false),
    new Keys(300, 100, false),
    new Keys(500, 100, false),
    new Keys(700, 100, false),
    new Keys(100, 300, false),
    new Keys(300, 300, false),
    new Keys(500, 300, false),
    new Keys(700, 300, false),
];

function init() {
    redrawFrame();
    for(i = 0; i < 8; i++){
        keys[i].draw();
    }
}

init();
