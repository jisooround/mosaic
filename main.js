const container = document.getElementById("container");

for (let i = 0; i < 12; i++) {
  const itemBox = document.createElement("div");
  itemBox.className = `box${i + 1}`;
  container.appendChild(itemBox);
}
