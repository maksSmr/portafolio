// Menú hamburguesa móvil
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (en móvil)
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


const darkModeToggle = document.querySelector('#dark-mode-toggle');


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensaje = document.querySelector('#mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    alert('¡Mensaje enviado con éxito! Gracias por contactarme.');
    contactForm.reset();
  });
}