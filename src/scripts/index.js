import { Navigation } from './components/navigation';

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', Navigation().toggle);
