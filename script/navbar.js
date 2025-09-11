document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const sideMenu = document.getElementById('sideMenu');
  const closeBtn = document.getElementById('closeBtn');

  // Example nav links (add your own if needed)
  if (!sideMenu.innerHTML.trim()) {
    sideMenu.innerHTML = `
      <span class="close-btn" id="closeMenu">&times;</span>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    `;
  }

  burger.addEventListener('click', function () {
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  document.addEventListener('click', (e) => {
    const clickedInsideMenu = sideMenu.contains(e.target);
    const clickedBurger = burger.contains(e.target);

    if (!clickedInsideMenu && !clickedBurger && sideMenu.classList.contains('open')) {
      sideMenu.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Close menu when clicking the close button or a link
  sideMenu.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('close-btn') ||
      (e.target.tagName === 'A' && e.target.closest('.nav-links'))
    ) {
      sideMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});