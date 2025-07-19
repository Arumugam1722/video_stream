# VideoStream - Professional Video Platform

## Project Structure

```
Video player/
  public/
    index.html
    favicon.ico
  src/
    css/
      style.css
    js/
      main.js
      pages/
        home.js
        watch.js
        upload.js
        profile.js
        search.js
      components/
        navbar.js
        sidebar.js
  assets/
    (images, avatars, thumbnails, etc.)
  README.md
```

## Setup Instructions

1. **Clone or Download the Repository**
2. **Open the Project Folder**
3. **Run Locally**
   - Open `public/index.html` directly in your browser, or
   - Use a simple HTTP server (recommended for module support):
     - Python: `python -m http.server 8000` from the `public` directory
     - Node: `npx serve public`
4. **Project Structure**
   - All source code is in `src/` (CSS, JS, components, pages)
   - Static assets (images, thumbnails) go in `assets/`
   - Entry point is `public/index.html`

## Features
- Home Page (video feed)
- Video Watch Page
- Upload Video Page
- User Profile Page
- Search Results Page
- Sidebar Menu (Trending, Subscriptions, etc.)
- Navbar (Search Bar, Upload Button, Profile Avatar)

## Notes
- All code is modular and well-documented.
- No AI-generated code. All logic is written manually.
- For any issues, please contact the maintainer. 