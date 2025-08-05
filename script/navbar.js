const burger = document.getElementById('burger');
  const sideMenu = document.getElementById('sideMenu');
  const closeBtn = document.getElementById('closeBtn');

  burger.addEventListener('click', () => {
    sideMenu.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
  });