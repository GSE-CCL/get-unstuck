document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

function classToggle() {
  var navItems = document.querySelectorAll('.Navbar__Items')

  navItems.forEach(function(nav) {
    nav.classList.toggle('Navbar__ToggleShow');
  });
}


// var tggle = document.querySelector('.Navbar__Link-toggle');
//   tggle.addEventListener('click', classToggle() {
//     const navs = document.querySelectorAll('.Navbar__Items')
//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
//   })
