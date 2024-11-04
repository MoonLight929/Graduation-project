// 景点 tab选项卡
const btn = document.getElementById('arrowBtn').getElementsByTagName('p');
const arrowContent = document.getElementById('arrowContent').getElementsByTagName('div');
for (let j = 0; j < btn.length; j++) {
    btn[j].onclick = function () {
        for (let q = 0; q < btn.length; q++) {
            btn[q].style.backgroundImage = "url('./img/景点/景点-箭头.png')";
            arrowContent[q].style.display = 'none';
        }
        this.style.backgroundImage = "url('./img/景点/景点-箭头-移动.png')";
        arrowContent[j].style.display = 'block';
    }
}
