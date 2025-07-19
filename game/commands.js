canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / TILE_SIZE);
  const y = Math.floor((e.clientY - rect.top) / TILE_SIZE);

  let selectedUnit = units.find(unit => unit.x === x && unit.y === y);
  if (selectedUnit) {
    units.forEach(unit => unit.selected = false);
    selectedUnit.selected = true;
  } else {
    // ruch
    const unit = units.find(u => u.selected);
    if (unit) {
      unit.x = x;
      unit.y = y;
    }
  }
});

