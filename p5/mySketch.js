let liq1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	liq1 = new Liq();
}

function draw() {
	background(245);
	noStroke();
	translate(width/2,height/2);

	fill(100,136,230);
	liq1.drawLiq();

  fill(255,255,255);
  text('Bugsy',0,0);
}
