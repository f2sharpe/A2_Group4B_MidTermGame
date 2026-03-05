function drawUI() {
  fill(255);

  textSize(18);

  text("Level " + level, 80, 30);

  text(
    "Tasks " + tasks.filter((t) => t.done).length + "/" + tasks.length,
    220,
    30,
  );

  text("Time " + ceil(timer), 380, 30);

  text("Focus", 540, 30);

  fill(100);
  rect(600, 20, 200, 16);

  fill(0, 255, 150);
  rect(600, 20, focus * 2, 16);
}

function drawTaskPanel() {
  if (!activeTask) return;

  fill(40);
  rect(width - 260, 120, 220, 200, 10);

  fill(255);

  textSize(18);
  textAlign(CENTER);

  text("COMPLETE TASK", width - 150, 160);

  let seqText = "";

  for (let i = 0; i < sequence.length; i++) {
    if (i < progress) seqText += "✓ ";
    else seqText += sequence[i] + " ";
  }

  textSize(24);
  text(seqText, width - 150, 230);
}

function drawMenu() {
  background(0);

  fill(255);

  textAlign(CENTER);

  textSize(52);
  text("FOCUS FRENZY", width / 2, 180);

  textSize(20);

  text("Move with WASD", width / 2, 250);
  text("Hover over tasks to start them", width / 2, 280);
  text("Press the correct key sequence to finish", width / 2, 310);

  text("Distractions will chase you.", width / 2, 360);
  text("They move faster when you focus on tasks.", width / 2, 390);

  text("Complete all tasks before your focus runs out.", width / 2, 440);

  text("Press SPACE to start", width / 2, 500);
}

function drawWin() {
  background(20);

  fill(255);

  textSize(40);

  textAlign(CENTER);

  text("YOU COMPLETED ALL LEVELS!", width / 2, 300);
}

function drawLose() {
  background(0);

  fill(255);

  textAlign(CENTER);

  textSize(40);
  text("OVERWHELMED", width / 2, 260);

  textSize(20);
  text("Too many distractions drained your focus.", width / 2, 310);

  drawRetryButton();
}

function drawRetryButton() {
  fill(255);
  rect(width / 2 - 80, 360, 160, 50);

  fill(0);
  textSize(20);
  text("TRY AGAIN", width / 2, 392);
}

function drawLevelMap() {
  background(0);

  strokeWeight(4);

  if (level === 1) stroke(0, 255, 180);
  if (level === 2) stroke(255, 200, 0);
  if (level === 3) stroke(255, 80, 120);

  noFill();

  rect(40, 60, width - 80, height - 120);

  line(width / 2, 60, width / 2, height - 60);
}
