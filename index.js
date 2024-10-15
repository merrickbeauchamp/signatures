const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let position = { x: 0, y: 0 };
const setPosition = (e) => {
  let rect = canvas.getBoundingClientRect();
  position.x =
    ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
  position.y =
    ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
};
let lines = []; //{startX, startY, endX, endY}

canvas.addEventListener("mousedown", setPosition);
canvas.addEventListener("mouseenter", setPosition);
canvas.addEventListener("mousemove", (e) => {
  if (e.buttons !== 1) return;
  let line = {};
  ctx.beginPath();
  ctx.moveTo(position.x, position.y);
  line.startX = position.x;
  line.startY = position.y;
  setPosition(e);
  ctx.lineTo(position.x, position.y);
  line.endX = position.x;
  line.endY = position.y;
  ctx.stroke();
  lines.push(line);
});

document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lines = [];
});

