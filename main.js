const container = document.getElementById("container");
// const items = container.getElementsByClassName("item");

for (let i = 0; i < 12; i++) {
  const itemBox = document.createElement("div");
  // 텍스트는 마지막에 지우기
  // itemBox.textContent = `${i + 1}`;
  itemBox.className = `item box${i + 1}`;
  // itemBox.style.borderLeft = "4px solid black";
  container.appendChild(itemBox);
}

// for (let j = 0; j < 12; j++) {
//   const item = document.getElementsByClassName(`item`);
//   const thisBoxStyle = getComputedStyle(item[j]).gridColumnStart;
//   console.log(thisBoxStyle);
//   if (thisBoxStyle === "1") {
//     console.log("hi");
//     thisBoxStyle.style.borderLeft = "none";
//   }
//   // console.log(itemBox.style.gridColumnEnd);
// }
