import { userStore, currentUserId, videoStore } from '../main.js';
import { renderVideoCard } from './shared.js';

export function loadProfilePage() {
    const profile = document.getElementById('profile');
    const user = userStore.find(u => u.id === currentUserId);
    if (!user) {
        profile.innerHTML = '<div style="padding:2rem">User not found.</div>';
        return;
    }
    profile.innerHTML = `
        <div class="profile-container">
            <div class="profile-header">
                <div class="profile-info">
                    <div class="profile-avatar-large">${user.username[0]}</div>
                    <div class="profile-details">
                        <h1>${user.username}</h1>
                        <div class="profile-stats">
                            <div class="stat-item"><span class="stat-number">${user.uploadedVideos.length}</span><span class="stat-label">Videos</span></div>
                            <div class="stat-item"><span class="stat-number">1.2K</span><span class="stat-label">Subscribers</span></div>
                            <div class="stat-item"><span class="stat-number">34K</span><span class="stat-label">Views</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-tabs">
                <button class="tab-btn active">Videos</button>
                <button class="tab-btn">Playlists</button>
                <button class="tab-btn">About</button>
            </div>
            <div class="tab-content active">
                <div class="video-grid" id="profileVideoGrid"></div>
            </div>
        </div>
    `;
    const grid = document.getElementById('profileVideoGrid');
    user.uploadedVideos.forEach(id => {
        const video = videoStore.find(v => v.id === id);
        if (video) grid.appendChild(renderVideoCard(video));
    });
} 