var button = document.getElementById("start");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box = [box1, box2, box3, box4, box5, box6, box7, box8];
var correctBox = box[Math.floor(Math.random() * 9)];
var devWidth = document.body.offsetWidth;
var devHeigth = document.body.offsetHeight;

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

async function flash(){
    correctBox.classList.add("changecolor");
    await correctBox.style.backgroundColor("rgb(0, 255, 0)");
    await correctBox.style.backgroundColor("rgb(255, 0, 0)");
    await correctBox.classList.remove("changecolor");
}

function boxSpawn() {

}

function load() {
    button.classList.add("fade");
    flash();
    boxSpawn();
    sleep(5000);
}

