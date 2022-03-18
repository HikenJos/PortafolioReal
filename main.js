const nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0)
})

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar__menu--list').classList.toggle('show')
});

