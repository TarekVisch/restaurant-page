import { Navigation } from './components/navigation';
import { Home } from './components/home';

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', Navigation().toggle);

// window.addEventListener('load', Home().handleLoad);
