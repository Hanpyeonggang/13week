document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // 3. Mouse Parallax Effect
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        const x = (window.innerWidth - e.clientX * 2) / 100;
        const y = (window.innerHeight - e.clientY * 2) / 100;

        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 1;
            // Set CSS variables instead of direct transform
            el.style.setProperty('--parallax-x', `${x * speed}px`);
            el.style.setProperty('--parallax-y', `${y * speed}px`);
        });
    });

    // Add hover effect for clickable elements
    const clickableElements = document.querySelectorAll('a, button, .clickable, section, .intro-title, .story-line, .keyword');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 2. Click Ripple Effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('click-ripple');
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

// Helper to change cursor text (4.html 스타일로 통일)
function setCursorText(text) {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        if (text) {
            cursor.innerText = text;
            cursor.style.width = "auto";
            cursor.style.height = "auto";
            cursor.style.padding = "5px 10px";
            cursor.style.borderRadius = "20px";
        } else {
            cursor.innerText = "";
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.padding = "0";
            cursor.style.borderRadius = "50%";
        }
    }
}
