const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

let stars = [];
let numStars = 200;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * w,
  });
}

function drawStars() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "white";
  for (let i = 0; i < numStars; i++) {
    let star = stars[i];
    let k = 128.0 / star.z;
    let px = star.x * k + w / 2;
    let py = star.y * k + h / 2;

    if (px >= 0 && px <= w && py >= 0 && py <= h) {
      let size = (1 - star.z / w) * 2;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    star.z -= 2;
    if (star.z <= 0) {
      star.z = w;
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});