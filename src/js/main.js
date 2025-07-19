// Main entry point for VideoStream platform
import { renderNavbar } from './components/navbar.js';
import { renderSidebar } from './components/sidebar.js';
import { loadHomePage } from './pages/home.js';
import { loadWatchPage } from './pages/watch.js';
import { loadUploadPage } from './pages/upload.js';
import { loadProfilePage } from './pages/profile.js';
import { loadSearchPage } from './pages/search.js';

// In-memory video data
// To add your own videos, place .mp4 files in the assets/ folder and add an entry below with the correct url (e.g., 'assets/myvideo.mp4')
export const videoStore = [
    {
        id: 1,
        title: 'Advanced JavaScript Concepts Explained',
        channel: 'TechChannel',
        views: '1.2M',
        date: '2 days ago',
        duration: '12:34',
        description: 'In this comprehensive tutorial, we\'ll explore advanced JavaScript concepts...',
        url: '../assets/videos/add-blur-from-nav.mp4', // No real video, just a placeholder
        thumbnail: '',
    },
    {
        id: 2,
        title: 'Complete React Tutorial for Beginners',
        channel: 'WebDev Pro',
        views: '1.2M',
        date: '1 week ago',
        duration: '8:20',
        description: 'A complete React tutorial for beginners covering all the basics...',
        url: '../assets/videos/modifying-panels.mp4',
        thumbnail: '',
    },
    {
        id: 3,
        title: 'Node.js Complete Guide',
        channel: 'Backend Basics',
        views: '756K',
        date: '3 days ago',
        duration: '15:45',
        description: 'Node.js from beginner to advanced in one video...',
        url: '',
        thumbnail: '',
    },
    {
        id: 4,
        title: 'Sample Real Video 1',
        channel: 'RealChannel',
        views: '100',
        date: 'just now',
        duration: '2:00',
        description: 'This is a real video file from assets.',
        url: 'assets/sample1.mp4',
        thumbnail: '',
    },
    {
        id: 5,
        title: 'Sample Real Video 2',
        channel: 'RealChannel',
        views: '50',
        date: 'just now',
        duration: '1:30',
        description: 'Another real video file from assets.',
        url: 'assets/sample2.mp4',
        thumbnail: '',
    }
];

export let selectedVideoId = null;

export const userStore = [
    {
        id: 1,
        username: 'Demo user',
        uploadedVideos: [1, 2, 3], 
    }
];
export let currentUserId = 1;

export function addVideo(video) {
    video.id = videoStore.length ? videoStore[videoStore.length-1].id + 1 : 1;
    videoStore.push(video);

    const user = userStore.find(u => u.id === currentUserId);
    if (user) user.uploadedVideos.push(video.id);
}

export function selectVideo(id) {
    selectedVideoId = id;
}

export function getVideoUrl(video) {
    return video.url ? video.url : '';
}

let lastSearchQuery = '';

function parseHash() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const [page, ...params] = hash.split('/');
    return { page: page || 'home', params };
}

function route() {
    const { page, params } = parseHash();
    const pages = ['home', 'watch', 'upload', 'profile', 'search'];
    pages.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.style.display = (p === page) ? 'block' : 'none';
    });
    switch(page) {
        case 'home':
            loadHomePage();
            break;
        case 'watch':
            if (params[0]) selectVideo(Number(params[0]));
            loadWatchPage();
            break;
        case 'upload':
            loadUploadPage();
            break;
        case 'profile':
            loadProfilePage();
            break;
        case 'search':
            const query = params.length ? decodeURIComponent(params.join('/')) : '';
            lastSearchQuery = query;
            loadSearchPage(query);
            break;
        default:
            loadHomePage();
    }
}

window.addEventListener('hashchange', route);

window.navigateTo = function(page, param) {
    let hash = `#/${page}`;
    if (param !== undefined && param !== null) {
        hash += `/${encodeURIComponent(param)}`;
    }
    window.location.hash = hash;
};


document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderSidebar();
    route();

    setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    window.navigateTo('search', searchInput.value);
                }
            });
        }
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                window.navigateTo('search', searchInput.value);
            });
        }
    }, 100);
});

window.showPage = function(page, param) {
    window.navigateTo(page, param);
}; 