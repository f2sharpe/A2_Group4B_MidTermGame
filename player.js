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

    fill(240, 200, 150);
    ellipse(0, 0, 30, 40);

    fill(50);
    ellipse(5, -5, 5);

    pop();
  }
}
