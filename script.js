document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navbar .menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
            
            // Toggle overflow on body to prevent scrolling when menu is open
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        document.querySelectorAll('.navbar .menu ul li a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && menu.classList.contains('active')) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Initialize menu state based on screen size
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            } else {
                menu.classList.add('active');
            }
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    } else {
        console.error('Hamburger or menu element not found.');
    }
});