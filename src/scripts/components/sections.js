import { gsap } from 'gsap';

export const Sections = () => {
  // State
  const timeLine = gsap.timeline();

  const load = () => {
    console.log('Im here');
    timeLine
      .to('.containerTopBorder', {
        duration: 1.5,
        width: '100%',
        ease: 'power4.in',
      })
      .to('.main__menu--header', { duration: 1, y: 0, ease: 'power4.out' })
      .to('.gallery-col', {
        duration: 1,
        opacity: 1,
        stagger: 0.5,
        ease: 'power2.out',
      });
  };

  return { load };
};
