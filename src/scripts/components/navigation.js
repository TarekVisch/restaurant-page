import { gsap } from 'gsap';

export const Navigation = () => {
  let isOpen = false;

  const toggle = () => {
    if (!isOpen) {
      gsap.to('.navigation', { duration: 1, y: 0, ease: 'power2.out' });
      gsap.to('.button__main--container-inside', {
        duration: 0.5,
        y: '-50%',
        ease: 'power2.out',
      });

      isOpen = true;
    } else {
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
