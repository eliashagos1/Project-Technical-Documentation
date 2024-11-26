document.querySelectorAll('#navbar .nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior: 'smooth'});
    });
});