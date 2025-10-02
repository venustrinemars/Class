// Smooth scrolling behavior for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', '#' + id);
    }
  });
});

// Active nav state on scroll
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));

const onScroll = () => {
  const scrollY = window.scrollY + 100; // offset for header
  let active = null;
  sections.forEach((sec, i) => {
    const rect = sec.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    if (scrollY >= top) active = navLinks[i];
  });
  navLinks.forEach(l => l.classList.toggle('is-active', l === active));
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Rollover images: swap src with data-rollover on mouseenter/leave
document.querySelectorAll('img.rollover').forEach(img => {
  const defaultSrc = img.getAttribute('src');
  const hoverSrc = img.getAttribute('data-rollover');
  if (!hoverSrc) return;
  img.addEventListener('mouseenter', () => img.src = hoverSrc);
  img.addEventListener('mouseleave', () => img.src = defaultSrc);
});

// Basic form handler (demo only)
document.querySelector('.support-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! A support specialist will reach out shortly.');
});
