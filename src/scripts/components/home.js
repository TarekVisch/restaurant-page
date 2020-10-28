import { gsap } from 'gsap';

export const Home = () => {
  const timeline = gsap.timeline();

  const handleLoad = () => {
    timeline
      .from('.text-hero', { duration: 1.5, x: '-100%', ease: 'back.out(1.7)' })
      .from('.image-hero', { duration: 2, y: '-100%', ease: 'power4.out' })
      .from('.quote-text', {
        duration: 1.5,
        y: '-100%',
        stagger: 0.55,
        ease: 'power4.out',
      });
  };

  return { handleLoad };
};
