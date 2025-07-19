import { getVideoUrl } from '../main.js';

export function renderVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <div class="video-thumbnail">
            ${getVideoUrl(video) ? `<video src="${getVideoUrl(video)}" width="100%" height="100%" muted></video>` : '<i class="fas fa-play"></i>'}
            <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-channel">${video.channel}</div>
            <div class="video-stats">${video.views} views • ${video.date}</div>
        </div>
    `;
    card.addEventListener('click', () => window.showPage('watch', video.id));
    return card;
} 