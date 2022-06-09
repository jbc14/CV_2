// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const scrollTop =
    window.scrollTop || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-50px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// TYPED

let typed = new Typed('.typed', {
  strings: [
    `Bonjour à tous ! je m'appel`,
    `Après dix années dans le commerce, je me lance dans
  l'aventure passionnante du développement web. Suite à
  l'obtention d'un diplôme RNCP, je suis à la recherche d'un
  nouveau défi ! Je saurai mettre créativité, curiosité et
  autonomie au service de votre projet.`,
  ],
  typeSpeed: 20,
  backSpeed: 40,
  smartBackspace: true,
  loop: false,
});
