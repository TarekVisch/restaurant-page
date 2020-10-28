import { gsap } from 'gsap';

export const Navigation = () => {
  let isOpen = false;

  const toggle = () => {
    const timeline = gsap.timeline();

    const logoText = document.querySelector('.header__logo--link-text');
    const btn = document.querySelector('.button__main');

    if (!isOpen) {
      logoText.classList.add('brown');
      btn.classList.add('brown');

      // Bring navigation down
      gsap.to('.navigation', { duration: 1, y: 0, ease: 'power2.out' });

      // Change from 'Menu' to 'Close'
      gsap.to('.button__main--container-inside', {
        duration: 0.5,
        y: '-50%',
        ease: 'power2.out',
      });

      // Show links
      timeline.from('.link', {
        duration: 1,
        delay: 1,
        y: '100%',
        stagger: 0.25,
        ease: 'slow',
      });

      // Show seperators
      timeline.from('.navigation__seperator', { duration: 0.5, opacity: 0 });

      isOpen = true;
    } else {
      logoText.classList.remove('brown');
      btn.classList.remove('brown');

      // Revert back
      gsap.to('.navigation', { duration: 1, y: '-100%', ease: 'power2.out' });
      gsap.to('.button__main--container-inside', {
        duration: 0.5,
        y: 0,
        ease: 'power2.out',
      });

      isOpen = false;
    }
  };

  return { toggle };
};
