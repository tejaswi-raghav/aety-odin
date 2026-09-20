const section = document.querySelector('.scroll-cinema');
const shell = document.querySelector('.scroll-cinema-sticky');
const film = document.querySelector('#scroll-film');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (section && shell && film && !reduceMotion.matches) {
  let ticking = false;

  const syncFilm = () => {
    const start = section.offsetTop;
    const distance = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
    shell.style.setProperty('--scroll-progress', progress.toFixed(4));

    const phase = progress < .24 ? 0 : progress < .51 ? 1 : progress < .78 ? 2 : 3;
    shell.dataset.phase = String(phase);

    if (Number.isFinite(film.duration) && film.duration > 0) {
      const target = progress * Math.max(0, film.duration - .05);
      if (Math.abs(film.currentTime - target) > .035) film.currentTime = target;
    }

    ticking = false;
  };

  const requestSync = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(syncFilm);
    }
  };

  film.addEventListener('loadedmetadata', syncFilm);
  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync, { passive: true });
  syncFilm();
}
