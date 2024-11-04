// 美食选项卡
// 按钮
const btn = document.getElementsByClassName('area-btn')[0].getElementsByTagName('button');
// 对应内容
const areaContent = document.getElementsByClassName('area-content')[0].getElementsByTagName('div');
for(let i=0;i<btn.length;i++){
    btn[i].onclick = function(){
        for (let j = 0; j < btn.length; j++) {
            areaContent[j].style.display = 'none';
        }
        areaContent[i].style.display = 'block';
    }
}

// 游客评论——垂直选项卡
let lis = document.getElementsByClassName('left-box')[0].querySelectorAll('li');
let rbs = document.querySelectorAll('.rb');
let line = document.querySelector('.line');

// 循环绑定li的点击事件，并设置选中状态样式
lis.forEach((item, index) => {
    item.addEventListener('click', function () {
        lis.forEach((item1) => {
            item1.classList.remove('active');
        })
        rbs.forEach((item2) => {
            item2.classList.remove('active');
        })
        lis[index].classList.add('active');
        rbs[index].classList.add('active');
        // index是从0开始，所以要+1
        line.className = "line line" + (index + 1);
    })
})