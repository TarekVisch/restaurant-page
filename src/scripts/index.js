import { Navigation } from './components/navigation';
import { Home } from './components/home';
import { Sections } from './components/sections';

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', Navigation().toggle);

const playBtn = document.querySelector('.play');
playBtn.addEventListener('click', Sections().load);
// window.addEventListener('load', Home().handleLoad);
