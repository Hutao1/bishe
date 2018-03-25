$(".back").click(function () {
    history.go(-1);
});
if(document.cookie.indexOf(";")){
    var userId = document.cookie.split(";")[0].split("=")[1];
}else{
    var userId = document.cookie.split("=")[1];
}
$(function () {
    $.ajax({
        url:"http://111.231.105.142:8080/House/rest/house/reserve/houseDetails.json",
        data:`userId=${userId}`,
        type:"post",
        contentType:"application/x-www-form-urlencoded;charset=UTF-8",
        success:function(res){
            if(res.stateCode == 0){
                console.log(res);
            }
            // location.href = "index.html"
        },

    });
});