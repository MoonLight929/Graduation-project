// 分类部分选项卡
const btn=document.getElementsByClassName('classifyNav')[0].getElementsByTagName('p');
const content=document.getElementsByClassName('classifyContent')[0].getElementsByTagName('nav');
for(let i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        for(let j=0;j<btn.length;j++){
            content[j].style.display='none';
            btn[j].style.fontWeight="normal";
        }
        content[i].style.display='block';
        btn[i].style.fontWeight = "bold";
    }
}