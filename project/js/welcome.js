// 导航栏 鼠标监听
let lastScrollTop = 0;
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
    lastScrollTop = scrollTop;
})