import { gsap } from 'gsap';

export const Sections = () => {
  const load = (section) => {
    const timeLine = gsap.timeline();

    timeLine
      .to(section, { duration: 0, display: 'block' })
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

  const unload = (section) => {
    const timeLine = gsap.timeline();

    timeLine
      .to('.gallery-col', {
        duration: 0.5,
        opacity: 0,
        stagger: 0.25,
      })
      .to('.main__menu--header', { duration: 0.5, y: -80 })
      .to('.containerTopBorder', {
        duration: 0.75,
        width: '0%',
      })
      .to(section, { duration: 0, display: 'none' });
  };

  return { load, unload };
};
