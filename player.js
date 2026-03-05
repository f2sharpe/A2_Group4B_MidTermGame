class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.anim = 0;
    this.locked = false;
  }

  update() {
    if (this.locked) return;

    let speed = 4;

    if (keyIsDown(87)) this.y -= speed;
    if (keyIsDown(83)) this.y += speed;
    if (keyIsDown(65)) this.x -= speed;
    if (keyIsDown(68)) this.x += speed;
  }

  draw() {
    this.anim += 0.1;

    let bounce = sin(this.anim) * 2;

    push();

    translate(this.x, this.y + bounce);

    stroke(255);
    strokeWeight(3);
    fill(0);

    ellipse(0, 0, 40);

    fill(255);
    noStroke();

    ellipse(-7, -5, 6);
    ellipse(7, -5, 6);

    stroke(255);
    strokeWeight(3);
    noFill();

    arc(0, 5, 20, 15, 0, PI);

    pop();
  }
}
