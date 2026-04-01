// p5.glitch-image


let glitch;
let canvas;
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
	pixelDensity(1);
	canvas = createCanvas(w, h);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('CI24_Logo_R01_2.png', function (im) {
		glitch.loadImage(im);
	});
	glitch.pixelate(1);
	glitch.loadQuality(.01);
	glitch.loadType('webp');
}

function draw() {

	glitch.resetBytes();

	glitch.replaceBytes(10, 54); // swap all decimal byte 100 for 104
	glitch.randomBytes(10); // add one random byte for movement

	glitch.buildImage();
	if (window.innerWidth <= 600) {
		glitch.limitBytes(random(0.1, 1));
		console.log("EEEEE")
	} else {
		glitch.limitBytes(map(mouseY, 0, height, 0, 1))
	}



	image(glitch.image, width / 2, height / 2, glitch.width, glitch.height)

}

window.onresize = function () {
	// assigns new values for width and height variables
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.size(w, h);


}