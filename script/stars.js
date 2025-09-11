const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];
const STAR_COUNT = 160;
let mouse = { x: null, y: null, active: false };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      r: randomBetween(0.5, 1.7),
      vx: randomBetween(-0.15, 0.15),
      vy: randomBetween(-0.15, 0.15)
    });
  }
}
createStars();

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function updateStars() {
  for (let star of stars) {
    // Normal drifting
    star.x += star.vx;
    star.y += star.vy;

    // Move away from cursor if active
    if (mouse.active && mouse.x !== null && mouse.y !== null) {
      const dx = star.x - mouse.x;
      const dy = star.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 160;
      if (dist < repelRadius && dist > 5) {
        // Repel strength decreases with distance
        const force = (repelRadius - dist) / repelRadius;
        const angle = Math.atan2(dy, dx);
        star.x += Math.cos(angle) * force * 5;
        star.y += Math.sin(angle) * force * 5;
      }
    }

    // Wrap around edges
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  }
}

// Listen on the whole document and convert to canvas coordinates
document.addEventListener('mousemove', function(e) {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  mouse.active = true;
});
document.addEventListener('mouseleave', function() {
  mouse.active = false;
});

function animate() {
  updateStars();
  drawStars();
  requestAnimationFrame(animate);
}
animate();
