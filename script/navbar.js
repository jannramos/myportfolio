const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

burger.addEventListener('click', () => {
  sideMenu.classList.add('open');
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