'use strict';

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => observer.observe(s));

// Cursor trail
document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.className = 'trail-dot';
  dot.style.left = e.clientX + 'px';
  dot.style.top  = e.clientY + 'px';
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 800);
});

// Title glitch — random char flicker every 8–12s
const title = document.getElementById('site-title');
if (title) {
  const glitch = () => {
    const text = title.textContent;
    const idx  = Math.floor(Math.random() * text.length);
    const chars = title.childNodes;
    // rebuild with one char wrapped
    title.innerHTML = text.slice(0, idx) +
      '<span class="glitch">' + text[idx] + '</span>' +
      text.slice(idx + 1);
    setTimeout(() => { title.textContent = text; }, 80);
    setTimeout(glitch, 8000 + Math.random() * 4000);
  };
  setTimeout(glitch, 8000 + Math.random() * 4000);
}

// Console message
console.log('%c// define.nilis.dev', 'color:#4a9a6a;font-family:monospace;font-size:14px');
console.log('%cnil is not the absence of value.\nIt is the value of absence.', 'color:#9a9a9a;font-family:monospace');
console.log('%c\nreturn nil // you found nothing. that was the point.', 'color:#3a3a3a;font-family:monospace;font-size:11px');
