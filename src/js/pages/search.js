import { videoStore } from '../main.js';
import { renderVideoCard } from './shared.js';

export function loadSearchPage(query = '') {
    const search = document.getElementById('search');
    let results = videoStore;
    let info = 'Showing all videos';
    if (query && query.trim()) {
        const q = query.trim().toLowerCase();
        results = videoStore.filter(v =>
            v.title.toLowerCase().includes(q) ||
            v.channel.toLowerCase().includes(q) ||
            v.description.toLowerCase().includes(q)
        );
        info = `Results for <b>"${query}"</b> (${results.length} found)`;
    }
    search.innerHTML = `
        <div class="search-results">
            <div class="search-header">
                <h2>Search Results</h2>
                <div class="search-info">${info}</div>
            </div>
            <div class="video-grid" id="searchGrid"></div>
        </div>
    `;
    const grid = document.getElementById('searchGrid');
    results.forEach(video => {
        grid.appendChild(renderVideoCard(video));
    });
} 