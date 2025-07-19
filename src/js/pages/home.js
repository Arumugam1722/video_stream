import { videoStore } from '../main.js';
import { renderVideoCard } from './shared.js';

export function loadHomePage() {
    const home = document.getElementById('home');
    home.innerHTML = `<div class="video-grid" id="videoGrid"></div>`;
    const grid = document.getElementById('videoGrid');
    videoStore.forEach(video => {
        grid.appendChild(renderVideoCard(video));
    });
} 