import { PageLoader } from './components/PageLoader';
import { Navigation } from './components/navigation';

const menuButton = document.getElementById('menuButton');
let isOpen = false;
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    Navigation().load();
    isOpen = true;
  } else {
    Navigation().unload();
    isOpen = false;
  }
});

const main = document.querySelector('.main');
for (const link of document.querySelectorAll('.navigation__link')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const section = e.target.dataset.section;

    if (section) {
      // Close Navigation
      Navigation().unload();
      isOpen = false;

      PageLoader(main, section);
    }
  });
}
