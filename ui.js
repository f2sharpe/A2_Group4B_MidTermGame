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
  background(20);

  fill(255);

  textAlign(CENTER);

  textSize(50);
  text("FOCUS FRENZY", width / 2, 250);

  textSize(20);
  text("Press SPACE to start", width / 2, 320);
}

function drawWin() {
  background(20);

  fill(255);

  textSize(40);

  textAlign(CENTER);

  text("YOU COMPLETED ALL LEVELS!", width / 2, 300);
}

function drawLose() {
  background(20);

  fill(255);

  textSize(40);

  textAlign(CENTER);

  text("OVERWHELMED", width / 2, 300);
}

function drawLevelMap() {
  background(80, 120, 200);

  fill(230);

  rect(150, 200, 300, 200, 10);

  rect(550, 200, 300, 200, 10);
}
