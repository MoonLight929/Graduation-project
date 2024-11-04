var bt = document.querySelectorAll('.control a');
var biaodan = document.querySelector('.biaodan');
var form = document.querySelectorAll('.biaodan form');

//切换注册
bt[0].addEventListener('click',function(e){
	form[0].classList.add('disappear');
	form[1].classList.remove('disappear');
	biaodan.style.transform = 'rotateY(180deg)'
})
//切换登录
bt[1].addEventListener('click',function(e){
	form[1].classList.add('disappear');
	form[0].classList.remove('disappear');
	biaodan.style.transform = 'none'
})

