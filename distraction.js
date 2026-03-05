class Distraction {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.anim = random(100);
  }

  update() {
    this.anim += 0.1;

    if (activeTask) {
      let dx = player.x - this.x;
      let dy = player.y - this.y;

      this.x += dx * 0.01;
      this.y += dy * 0.01;
    } else {
      this.x += sin(this.anim) * 0.5;
    }
  }

  draw() {
    let pulse = sin(this.anim) * 5;

    fill(255, 80, 80);

    ellipse(this.x, this.y, 60 + pulse);

    fill(255);
    textSize(18);
    textAlign(CENTER);
    text("!", this.x, this.y + 6);

    if (dist(player.x, player.y, this.x, this.y) < 60) {
      focus -= 0.2;
    }
  }
}
