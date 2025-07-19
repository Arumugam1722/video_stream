
export function renderNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <div class="nav-left">
            <button class="menu-toggle" id="menuToggleBtn">
                <i class="fas fa-bars"></i>
            </button>
            <a href="#" class="logo" id="logoBtn">VideoStream</a>
        </div>
        <div class="nav-center">
            <div class="search-container">
                <input type="text" class="search-bar" id="searchInput" placeholder="Search videos...">
                <button class="search-btn" id="searchBtn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="nav-right">
            <button class="nav-btn" title="Notifications">
                <i class="fas fa-bell"></i>
            </button>
            <a href="#" class="upload-btn" id="uploadBtn">
                <i class="fas fa-plus"></i> Upload
            </a>
            <div class="profile-avatar" id="profileBtn" title="Profile">
                <i class="fas fa-user"></i>
            </div>
        </div>
    `;
    document.getElementById('navbar').innerHTML = '';
    document.getElementById('navbar').appendChild(navbar);

    document.getElementById('menuToggleBtn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('hidden');
        document.getElementById('mainContent').classList.toggle('sidebar-hidden');
    });
    document.getElementById('logoBtn').addEventListener('click', (e) => {
        e.preventDefault();
        window.showPage('home');
    });
    document.getElementById('uploadBtn').addEventListener('click', (e) => {
        e.preventDefault();
        window.showPage('upload');
    });
    document.getElementById('profileBtn').addEventListener('click', () => {
        window.showPage('profile');
    });
    document.getElementById('searchBtn').addEventListener('click', () => {
        window.showPage('search');
    });
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') window.showPage('search');
    });
} 