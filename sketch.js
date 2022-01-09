var playB, pauseB, nex, pre, slider, amplitude, level, size;
var sound1, sound2, sound3;
var image1, image2, image3;
var soundHandle = [];
var imageHandle = [];
var updateSound = 0;

function preload() {
  sound1 = loadSound("howsuccessfulpeoplethink.mp3");
  sound2 = loadSound("howtotalktoanyone.mp3");
  sound3 = loadSound("HowtoStopWorryingandStartLiving.mp3");

  image1 = loadImage("HowSuccessfulPeopleThink.png");
  image2 = loadImage("HowtoTalktoAnyone.png");
  image3 = loadImage("HowtoStopWorryingandStartLiving.png");
  bg = loadImage(
    "https://image.freepik.com/free-vector/geometric-background-concept_23-2148540971.jpg"
  );
  soundHandle = [sound1, sound2, sound3];
  imageHandle = [image1, image2, image3];
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playB = createButton("▶ ");
  playB.style("background-color", "#BFE3D7");
  playB.position(width / 2 - 30, height - 100);
  playB.style("color", "white");
  playB.style("font-size", "40px");
  playB.style("border-radius", "40px");

  playB.mousePressed(_play);

  pauseB = createButton("|| ");
  pauseB.position(width / 2 + 30, height - 100);
  pauseB.style("background-color", "#BFE3D7");
  pauseB.style("color", "white");
  pauseB.style("font-size", "40px");
  pauseB.size(50, 55);
  pauseB.style("border-radius", "40px");

  pauseB.mousePressed(_pause);

  nex = createButton("Next");
  nex.position(width / 2 + 90, height - 100);
  nex.style("background-color", "#BFE3D7");
  nex.style("color", "white");
  nex.style("font-size", "25px");
  nex.style("font-weight", "4px");
  nex.size(90, 40);
  nex.style("border-radius", "40px");

  nex.mousePressed(_next);

  pre = createButton("Previous");
  pre.position(width / 2 - 150, height - 100);
  pre.style("background-color", "#BFE3D7");
  pre.style("color", "white");
  pre.style("font-size", "25px");
  pre.size(110, 40);
  pre.style("border-radius", "40px");
  pre.mousePressed(_previous);
}

function _play() {
  soundHandle[updateSound].play();
}

function _pause() {
  soundHandle[updateSound].stop();
}

function _next() {
  _pause();
  updateSound += 1;
  if (updateSound > soundHandle.length - 1) {
    updateSound = 0;
    soundHandle[updateSound].play();
    console.log(soundHandle.length);
    image(imageHandle[updateSound], 90, 80, 200, 200);
  } else {
    _pause();
    image(imageHandle[updateSound], 90, 80, 200, 200);
    _play();
  }
}

function _previous() {
  _pause();
  updateSound -= 1;
  if (updateSound < soundHandle.length - 2) {
    updateSound = soundHandle.length;
    soundHandle[updateSound].play();
    console.log(arr.length);
  } else {
    _pause();
    _play();
  }
}

function draw() {
  imageMode(CENTER);
  background("white");
  image(bg, 0, 100, width * 2, height * 2);
  image(
    imageHandle[updateSound],
    width / 2,
    250,
    width - width * 0.6,
    height - height * 0.3
  );
}
