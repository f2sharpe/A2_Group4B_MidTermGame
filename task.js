class Task {
  constructor(x, y, icon) {
    this.x = x;
    this.y = y;
    this.icon = icon;
    this.done = false;
  }

  draw() {
    if (this.done) return;

    fill(60, 200, 120);
    rect(this.x, this.y, 45, 45, 10);

    textSize(22);
    textAlign(CENTER);
    text(this.icon, this.x + 22, this.y + 30);
  }

  checkHover() {
    if (this.done) return;

    if (dist(player.x, player.y, this.x, this.y) < 40) {
      startTask(this);
    }
  }
}

function startTask(task) {
  if (activeTask) return;

  activeTask = task;
  player.locked = true;

  sequence = randomSequence();
  progress = 0;
}

function randomSequence() {
  let keys = ["W", "A", "S", "D"];

  let seq = [];

  for (let i = 0; i < 3 + level; i++) {
    seq.push(random(keys));
  }

  return seq;
}
