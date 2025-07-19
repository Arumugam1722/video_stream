import { addVideo } from '../main.js';

export function loadUploadPage() {
    const upload = document.getElementById('upload');
    upload.innerHTML = `
        <div class="upload-container">
            <form class="upload-form">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" name="title" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea name="description" required></textarea>
                </div>
                <div class="form-group">
                    <label>Channel</label>
                    <input type="text" name="channel" required>
                </div>
                <div class="form-group">
                    <label>Duration</label>
                    <input type="text" name="duration" required placeholder="e.g. 10:00">
                </div>
                <div class="form-group">
                    <label>Video File</label>
                    <input type="file" name="file" accept="video/*" required>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary" type="submit">Upload</button>
                    <button class="btn btn-secondary" type="reset">Cancel</button>
                </div>
            </form>
        </div>
    `;
    const form = upload.querySelector('.upload-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const file = formData.get('file');
        if (!file || !file.type.startsWith('video/')) {
            alert('Please select a valid video file.');
            return;
        }
        const url = URL.createObjectURL(file);
        addVideo({
            title: formData.get('title'),
            description: formData.get('description'),
            channel: formData.get('channel'),
            duration: formData.get('duration'),
            views: '0',
            date: 'just now',
            url,
            thumbnail: '',
        });
        window.showPage('home');
    });
} 