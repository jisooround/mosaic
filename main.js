const container = document.getElementById("container");

function createItem(container, i) {
  const itemBox = document.createElement("div");
  itemBox.className = `box${i + 1}`;
  container.appendChild(itemBox);
}

for (let i = 0; i < 10; i++) {
  createItem(container, i);
}
