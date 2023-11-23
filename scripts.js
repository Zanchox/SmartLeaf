document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('toggleMenu');
    var menuList = document.getElementById('menuList');

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('show');
    });
});