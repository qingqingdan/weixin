// 重新发送倒计时
function countDown(){
    var t=60;
    var timer = null;
    $('#J_second').html('60');
    timer=setInterval(function(){
        t-=1;
        if(t>0){
            $("#J_second").html(t);
        }else{
            clearInterval(timer);
            $('.again').show();
            $('.count').hide();
        }

    },1000);
}
window.onload=function(){
   countDown();
};

// 点击重新发送
function countDown2(obj){
	$(obj).hide();
    $('.count').show();
    $('#J_second').html('60');
	var second = 60;
    var timer = null;
    timer = setInterval(function(){
        second -= 1;
        if(second >0 ){
            $('#J_second').html(second);
        }else{
            clearInterval(timer);
            $('.again').show();
            $('.count').hide();
        }
    },1000);

}