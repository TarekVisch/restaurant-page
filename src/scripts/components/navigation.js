import { gsap } from 'gsap';

export const Navigation = () => {
  let isOpen = false;
  const logoText = document.querySelector('.header__logo--link-text');
  const btn = document.querySelector('.button__main');
  const timeline = gsap.timeline();

  const toggle = () => {
    if (!isOpen) {
      logoText.classList.add('onChange');
      btn.classList.add('onChange');

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
      logoText.classList.remove('onChange');
      btn.classList.remove('onChange');

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