import { videoStore, selectedVideoId, getVideoUrl } from '../main.js';

export function loadWatchPage() {
    const watch = document.getElementById('watch');
    const video = videoStore.find(v => v.id === selectedVideoId);
    if (!video) {
        watch.innerHTML = '<div style="padding:2rem">No video selected.</div>';
        return;
    }
    watch.innerHTML = `
        <div class="watch-container">
            <div class="video-section">
                <div class="video-player">
                    ${video.url ? `<video src="${video.url}" controls width="100%" height="100%"></video>` : `<i class='fas fa-play-circle'></i>`}
                </div>
                <div class="video-details">
                    <h1 id="watchVideoTitle">${video.title}</h1>
                    <div class="video-meta">
                        <div class="video-stats-detail">${video.views} views • ${video.date}</div>
                        <div class="video-actions">
                            <button class="action-btn"><i class="fas fa-thumbs-up"></i><span>12K</span></button>
                            <button class="action-btn"><i class="fas fa-thumbs-down"></i><span>234</span></button>
                            <button class="action-btn"><i class="fas fa-share"></i><span>Share</span></button>
                            <button class="action-btn"><i class="fas fa-download"></i><span>Download</span></button>
                        </div>
                    </div>
                    <div class="channel-info">
                        <div class="channel-avatar">${video.channel[0]}</div>
                        <div class="channel-details">
                            <h3>${video.channel}</h3>
                            <div class="subscriber-count">2.5M subscribers</div>
                        </div>
                        <button class="subscribe-btn">Subscribe</button>
                    </div>
                    <div class="video-description">
                        <p>${video.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
} 