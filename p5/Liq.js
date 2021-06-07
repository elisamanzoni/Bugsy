class Liq {
  constructor () {
    this.vNnum = 0;
    this.nm = 0;
		this.sm = 0;
		this.fcm = 0;

		// init
		this.updateLiq();
		mouseX = (windowWidth/2)*0.2;
		mouseY = (windowHeight/2)*0.2;
  }

	drawLiq() {
		push();
		let dr = TWO_PI/this.vNnum;
		beginShape();
		for(let i = 0; i  < this.vNnum + 3; i++){
			let ind = i%this.vNnum;
			let rad = dr *ind;
			let r = height*0.3 + noise(frameCount/this.nm + ind) * height*0.1 + sin(frameCount/this.sm + ind)*height*0.05;
			curveVertex(cos(rad)*r*((mouseX)/windowWidth), sin(rad)*r*0.5);
		}
		endShape();
		pop();
	}

	updateLiq() {
		this.vNnum = int(11);
		this.nm = int(31);
		this.sm = int(18);
		this.fcm = int(100);

    console.log(mouseY);
    console.log(mouseX);

	}
}
