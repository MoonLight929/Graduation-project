// // tab选项卡
// 获取按钮
const btn = document.getElementById('btns').getElementsByTagName('button');
// 获取底部内容
const tabBox = document.getElementById('tabBox').getElementsByTagName('div');
for(let j=0;j<btn.length;j++){
    btn[j].onclick = function(){
        for(let q=0;q<btn.length;q++){
            btn[q].className = 'an';
            tabBox[q].style.display = 'none';
        }
        this.className = 'act';
        tabBox[j].style.display = 'block';
    }
}
