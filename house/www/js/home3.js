
window.onload = function(){
    var buy = document.querySelector(".buy");

    var have = document.querySelector(".have");

    var my = document.querySelector(".my");
    var header = document.querySelector("#header");
    var tofangyuan = document.querySelector("#myhouse");
    var mymessage = document.querySelector("#mymessage")


    mymessage.onclick = function () {
        location.href = "myziliao.html"
    }
    tofangyuan.onclick = function () {
        location.href="myfangyuan.html"
    }
    buy.onclick = function(){
        location.href = "home.html"
        // header.innerHTML = "房屋预定";
    }
    have.onclick = function(){
        console.log('111')
        location.href = "home2.html"
        // header.innerHTML = "订单管理";
    }
    my.onclick = function(){
        location.href = "home3.html"
        // header.innerHTML = "个人中心";
    }



}