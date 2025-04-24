
/* mobile menu */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('show'));

/* fake form submission */
const form = document.getElementById('contactForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').hidden = false;
  form.reset();
  setTimeout(()=>location.href='index.html',2500);
});

/* language toggle stub */
document.getElementById('langBtn')?.addEventListener('click', () =>
  alert('Multilingual support coming soon!')
);
