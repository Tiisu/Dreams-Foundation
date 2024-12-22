window.addEventListener('resize', function() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        navbar.classList.add('responsive');
    } else {
        navbar.classList.remove('responsive');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('responsive');
    });
});

document.querySelectorAll('.grouped-list').forEach(function(list) {
    list.addEventListener('mouseenter', function() {
        this.querySelector('.list-items').classList.remove('hidden');
    });
    list.addEventListener('mouseleave', function() {
        this.querySelector('.list-items').classList.add('hidden');
    });
});

document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
