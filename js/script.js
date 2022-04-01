(function () {
    const navbar = document.querySelector('#navbar');

    window.addEventListener('scroll', function () {
        if (this.scrollY > 25) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    const navbarToggler = document.querySelector('#navbarToggler');
    const navbarMenu = document.querySelector('#navbarMenu');
    const navbarLink = document.querySelectorAll('.navbar-link');

    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle('active')
        navbarMenu.classList.toggle('active');
    });

    navbarLink.forEach(link => {
        link.addEventListener('click', () => {
            navbarToggler.classList.toggle('active')
            navbarMenu.classList.toggle('active');
        });
    });
})()