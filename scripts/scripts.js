const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById('menu');

menuIcon.addEventListener("click", () => {

    if (menu.className=="heddin") {

        menu.classList.remove('heddin');

    } else {
        menu.classList.add('heddin');
    }
});
