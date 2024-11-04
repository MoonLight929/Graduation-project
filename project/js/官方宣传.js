// 轮播图
var text=document.getElementsByClassName("news-left")[0].querySelectorAll('li');
var photo=document.getElementsByClassName("news-photo")[0];
var changeImg = ["img/official/banner1.png", "img/official/banner2.png", "img/official/banner3.png", "img/official/banner4.png", "img/official/banner5.png", "img/official/banner6.png", "img/official/banner7.png", "img/official/banner8.png"];
var a=0;
function enter(n){
    for(var i=0;i<changeImg.length;i++){
        text[i].classList.remove("newsActive");
    }
    text[n].classList.add("newsActive");
    photo.src=changeImg[n];
}
// 计时器，自动轮播
setInterval(()=>{
    enter(a);
    a++;
    if(a>=changeImg.length){
        a=0;
    }
},3000)

// 新闻 进度条选项卡
let btn=document.getElementsByClassName("office-point")[0].querySelectorAll('.point');
// console.log(btn)
let officeContent=document.getElementsByClassName("office-content")[0].getElementsByTagName('nav');
let line=document.querySelector(".line0");
for(let i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        for(let j=0;j<btn.length;j++){
            officeContent[j].style.display='none';
        }
        officeContent[i].style.display='block';
    }
}
btn=Array.from(btn);
btn.forEach((item,index) => {
    item.addEventListener('click',function(){
        // 进度条长度改变
        line.className="line0 line"+(index+1);
        // 点击元素及其之前兄弟元素变色
         // 移除所有元素上的.pointActive类
        btn.forEach(a => a.classList.remove('pointActive'));
        // 为当前元素以及之前的所有兄弟元素添加.pointActive类
        // indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置
        let currentIndex = btn.indexOf(this);
        for (let i = 0; i <= currentIndex; i++) {
            btn[i].classList.add('pointActive');
        }
    });
});
