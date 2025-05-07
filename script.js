document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor-dot');
    const cursorFollower = document.querySelector('.cursor-outline');

    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
    }

    // Typed.js initialization
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const typed = new Typed('#typed-text', {
            strings: [
                'Aspiring Developer',
                'Continuous Learner',
                'Problem Solver',
                'Tech Enthusiast'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling with animation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                    }, 3000);
                }, 2000);
            }
        });
    }

    // Navbar scroll effect
    const nav = document.querySelector('header');
    if (nav) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                nav.classList.remove('-translate-y-full');
                return;
            }
            
            if (currentScroll > lastScroll && !nav.classList.contains('-translate-y-full')) {
                nav.classList.add('-translate-y-full');
            } else if (currentScroll < lastScroll && nav.classList.contains('-translate-y-full')) {
                nav.classList.remove('-translate-y-full');
            }
            lastScroll = currentScroll;
        });
    }

    // Parallax effect for hero section
    const heroContent = document.querySelector('#home > div');
    if (heroContent) {
        document.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

    // Project and blog card hover effects
    const cards = document.querySelectorAll('.group');
    if (cursor && cursorFollower) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursorFollower.style.transform = 'scale(2)';
            });
            
            card.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }

    // Form input animation
    const formGroups = document.querySelectorAll('.relative');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');

        if (input && label) {
            input.addEventListener('focus', () => {
                label.classList.add('-translate-y-6', 'text-xs', 'text-primary');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('-translate-y-6', 'text-xs', 'text-primary');
                }
            });

            // Check if input has value on page load
            if (input.value) {
                label.classList.add('-translate-y-6', 'text-xs', 'text-primary');
            }
        }
    });

    // Add loading animation
    document.body.classList.add('opacity-100');
    document.body.classList.remove('opacity-0');
});
