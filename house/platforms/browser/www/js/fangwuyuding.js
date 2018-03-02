$(".back").click(function () {
    history.go(-1);
});
$(".soucang").click(function () {
    if(/_false/.test($(this).attr("src"))){
        $(this).attr("src","./img/shoucang_true.png");
    }else{
        $(this).attr("src","./img/shoucang_false.png");
    }
    console.log(/_false/.test($(this).attr("src")));
});
$(".calendar").Calendar();
$(".calendar").val(getNowFormatDate());

$(".calendar2").Calendar();
$(".calendar2").val(getNowFormatDate());
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}