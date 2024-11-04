
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

// 页面滚动
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("pageActive");
        }
    });
});
const hiddenEle = document.querySelectorAll(".flag")
hiddenEle.forEach((el) => observer.observe(el));

// 加载页面
const loading = {
    container: document.querySelector(".loading"),
    in(target) {
        this.container.classList.remove("loading_out");
        setTimeout(() => {
            window.location.href = target;
        }, 1000)
    },
    out() {
        this.container.classList.add("loading_out");
    }
};
window.addEventListener("load", () => {
    loading.out();
})