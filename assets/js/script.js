let menuIcon = document.getElementById('menuIcon');
let navList = document.getElementById('navList');

menuIcon.addEventListener('click', (event) => {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('active');
    event.stopPropagation(); 
});

document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
        navList.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    navList.classList.remove('active');
    menuIcon.classList.remove('active');
});
