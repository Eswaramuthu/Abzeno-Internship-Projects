// Generate animated stars
function generateStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.8 + 0.2;
        const delay = Math.random() * 5;

        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.opacity = opacity;
        star.style.animationDelay = delay + 's';

        starsContainer.appendChild(star);
    }
}

// Intersection Observer for timeline animations
function initTimelineAnimations() {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });

    timelineEvents.forEach(event => {
        observer.observe(event);
    });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    generateStars();
    initTimelineAnimations();
});

// Navigation handling - only prevent default for placeholder links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for placeholder links (# or empty)
        if (!href || href === '#') {
            e.preventDefault();
            console.log('Navigation placeholder clicked:', this.textContent);
        }
        // For actual file links like teams.html, index.html etc., let the browser handle navigation normally
    });
});

// Add click handlers for read more buttons
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Add your read more logic here
        console.log('Read more clicked');
    });
});

// Optional: Add smooth page transitions (uncomment if desired)
/*
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply smooth transition to actual page links
        if (href && href !== '#' && !href.startsWith('http')) {
            e.preventDefault();
            
            // Add fade out effect
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            // Navigate after fade out
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});
*/