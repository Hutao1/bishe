var myScroll;

function loaded () {
	myScroll = new IScroll('#wrapper', { bounceEasing: 'elastic', bounceTime: 1200 });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); },  false);
window.onload = function(){
	var buy = document.querySelector(".buy");
	var buycontent = document.querySelector(".buycontent");
	var have = document.querySelector(".have");
	var havecontent = document.querySelector(".havecontent");
	var my = document.querySelector(".my");
	var mycontent = document.querySelector(".mycontent");
	var header = document.querySelector("#header");
	loaded();
	buy.onclick = function(){
		buycontent.style.display = "block";
		havecontent.style.display = "none";
		mycontent.style.display = "none";
		header.innerHTML = "房屋预定";
	}
	have.onclick = function(){
		console.log('111')
		buycontent.style.display = 'none';
		havecontent.style.display = "block";
		mycontent.style.display = "none";
		header.innerHTML = "订单管理";
	}
	my.onclick = function(){
		buycontent.style.display = 'none';
		havecontent.style.display = "none";
		mycontent.style.display = "block";
		header.innerHTML = "个人中心";
	}
	var toziliao = document.querySelector(".toziliao");
	toziliao.onclick = function () {
		location.href = "./myziliao.html";
    }
    var tofangyuan = document.querySelector(".tofangyuan");
	tofangyuan.onclick = function () {
		location.href = "./myfangyuan.html"
    }

}