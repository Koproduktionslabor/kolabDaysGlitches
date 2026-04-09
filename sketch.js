// p5.glitch-image


let glitch;
let canvas;
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
	frameRate(5);
	pixelDensity(1);
	canvas = createCanvas(w, h);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('WORKSHOP_HEADER.jpg', function (im) {
		glitch.loadImage(im);
	});
	glitch.pixelate(1);
	glitch.loadQuality(.01);
	glitch.loadType('jpg');
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

	fill(255);
  stroke(0);
  strokeWeight(1)
  text('Hier klicken zur Workshop Anmeldung', mouseX,mouseY)
  if(mouseIsPressed){
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfE7wpo8ttwTsKU3PYhG_rnoAbmYuUYvpe2wQDR07OHxx8Jiw/viewform'); 
  }

}

window.onresize = function () {
	// assigns new values for width and height variables
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.size(w, h);


}
