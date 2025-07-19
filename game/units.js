const units = [
  { x: 5, y: 5, type: 'infantry', selected: false }
];

function drawUnits() {
  units.forEach(unit => {
    ctx.fillStyle = unit.selected ? "yellow" : "white";
    ctx.fillRect(unit.x * TILE_SIZE + 10, unit.y * TILE_SIZE + 10, 20, 20);
  });
}

function gameLoop() {
  drawGrid();
  drawUnits();
  requestAnimationFrame(gameLoop);
}

gameLoop();

