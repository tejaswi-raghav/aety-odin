const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const sequences = [...document.querySelectorAll('.scroll-cinema')]
  .map((section) => ({
    section,
    shell: section.querySelector('.scroll-cinema-sticky'),
    film: section.querySelector('.scroll-film'),
    phaseCount: section.querySelectorAll('.scroll-moment').length,
  }))
  .filter(({ shell, film, phaseCount }) => shell && film && phaseCount);

if (sequences.length && !reduceMotion.matches) {
  let ticking = false;

  const syncSequence = ({ section, shell, film, phaseCount }) => {
    const start = section.offsetTop;
    const distance = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
    const phase = Math.min(phaseCount - 1, Math.floor(progress * phaseCount));

    shell.style.setProperty('--scroll-progress', progress.toFixed(4));
    shell.dataset.phase = String(phase);

    if (Number.isFinite(film.duration) && film.duration > 0) {
      const target = progress * Math.max(0, film.duration - .05);
      if (Math.abs(film.currentTime - target) > .035) film.currentTime = target;
    }
  };

  const syncAll = () => {
    sequences.forEach(syncSequence);
    ticking = false;
  };

  const requestSync = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(syncAll);
  };

  sequences.forEach(({ film }) => film.addEventListener('loadedmetadata', requestSync));
  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync, { passive: true });
  syncAll();
}
