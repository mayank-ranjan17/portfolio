document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');

    let lastScrollTop = 0;
    const scrollThreshold = 50; // Adjust this threshold if necessary

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(st - lastScrollTop) > scrollThreshold) {
            if (st > lastScrollTop) {
                // Scroll down, collapse navbar
                nav.classList.add('collapsed');
            } else {
                // Scroll up, expand navbar
                nav.classList.remove('collapsed');
            }
            lastScrollTop = st <= 0 ? 0 : st; // Prevent negative scroll values
        }
    });
});
