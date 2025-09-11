document.addEventListener('DOMContentLoaded', function () {
  // Burger menu logic (mobile)
  const burger = document.getElementById('burger');
  const sideMenu = document.getElementById('sideMenu');
  const closeBtn = document.getElementById('closeBtn');

  burger.addEventListener('click', function () {
    sideMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    sideMenu.classList.remove('active');
  });

  // Active link indicator for both desktop and mobile navs
  function setActiveLink(links, hash) {
    links.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  const allNavLinks = document.querySelectorAll('.nav-link');

  allNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      setActiveLink(allNavLinks, this.getAttribute('href'));
      // For mobile, close menu after click
      if (window.innerWidth <= 768) {
        sideMenu.classList.remove('active');
      }
    });
  });

  // Optional: Set active link on page load based on hash
  if (window.location.hash) {
    setActiveLink(allNavLinks, window.location.hash);
  }
});