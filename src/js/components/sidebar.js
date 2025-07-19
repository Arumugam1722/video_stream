
export function renderSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = 'sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-section">
            <div class="sidebar-item active" data-page="home">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </div>
            <div class="sidebar-item coming-soon" data-page="trending">
                <i class="fas fa-fire"></i>
                <span>Trending <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
            <div class="sidebar-item coming-soon" data-page="subscriptions">
                <i class="fas fa-play-circle"></i>
                <span>Subscriptions <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-title">Library</div>
            <div class="sidebar-item coming-soon" data-page="history">
                <i class="fas fa-history"></i>
                <span>History <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
            <div class="sidebar-item coming-soon" data-page="watchlater">
                <i class="fas fa-clock"></i>
                <span>Watch Later <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
            <div class="sidebar-item coming-soon" data-page="liked">
                <i class="fas fa-thumbs-up"></i>
                <span>Liked Videos <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-title">Explore</div>
            <div class="sidebar-item coming-soon" data-page="music">
                <i class="fas fa-music"></i>
                <span>Music <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
            <div class="sidebar-item coming-soon" data-page="gaming">
                <i class="fas fa-gamepad"></i>
                <span>Gaming <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
            <div class="sidebar-item coming-soon" data-page="news">
                <i class="fas fa-newspaper"></i>
                <span>News <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
            <div class="sidebar-item coming-soon" data-page="sports">
                <i class="fas fa-trophy"></i>
                <span>Sports <span class='coming-soon-badge'>Coming Soon</span></span>
            </div>
        </div>
    `;
    document.getElementById('sidebar').innerHTML = '';
    document.getElementById('sidebar').appendChild(sidebar);

    sidebar.querySelectorAll('.sidebar-item[data-page]').forEach(item => {
        const page = item.getAttribute('data-page');
        if (page === 'home') {
            item.addEventListener('click', function() {
                sidebar.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                window.navigateTo('home');
            });
        } else {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                alert('This feature is coming soon!');
            });
        }
    });
} 