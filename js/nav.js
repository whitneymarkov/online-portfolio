

function ToggleNavigation() {
    const button = document.getElementById('navToggle');
    const nav = document.getElementById('navOverlay');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Click!');
        nav.classList.toggle('open');
        button.classList.toggle('nav-toggle--open');
    });
}

ToggleNavigation();
