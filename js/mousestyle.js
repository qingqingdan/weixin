// keyup
function up(obj){
	if($(obj).val()!=''){
		$(obj).next().show();
	}else{
		$(obj).next().hide();
	}
}
// blur
function blu(obj){
	setTimeout(function(){
		$(obj).next().hide();
	},100);
}
// click
function cli(obj){
	$(obj).hide();
	$(obj).prev().val('');
	$(obj).prev().focus();
	
	
}