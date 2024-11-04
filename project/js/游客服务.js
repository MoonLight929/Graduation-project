let navSide = document.querySelectorAll('.navSide li');
function activeLink() {
    navSide.forEach((item) => item.classList.remove('activeSide'));
    this.classList.add('activeSide');
}
navSide.forEach((item) => item.addEventListener("click", activeLink))