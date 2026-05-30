// Nav scrolled
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('topBtn').style.display = window.scrollY > 300 ? 'block' : 'none';

  // Link ativo
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id);
      });
    }
  });
});

// Menu hambúrguer
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});
document.querySelectorAll('#navMenu a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animação de entrada
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

// Modo escuro
document.getElementById('darkModeBtn').addEventListener('click', function() {
  document.body.classList.toggle('light');
  this.textContent = document.body.classList.contains('light') ? '●' : '◑';
});

// Formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const feedback = document.getElementById('formFeedback');
  if (nome && email && mensagem) {
    feedback.textContent = '✓ Obrigado, ' + nome + '! Em breve entro em contato.';
    feedback.style.color = '#3b82f6';
    this.reset();
  } else {
    feedback.textContent = '⚠ Preencha todos os campos.';
    feedback.style.color = '#f87171';
  }
});

// Botão topo
document.getElementById('topBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
