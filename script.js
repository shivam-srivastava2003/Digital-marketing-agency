document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Simple Mobile Menu (Log functionality for demo)
    const mobileToggle = document.getElementById('mobile-toggle');
    mobileToggle.addEventListener('click', () => {
        alert('Mobile menu toggled! In a real app, this would slide in a navigation drawer.');
    });

    // Scroll reveal placeholder (simple version)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .price-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = '#22c55e';
            contactForm.reset();
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
});
