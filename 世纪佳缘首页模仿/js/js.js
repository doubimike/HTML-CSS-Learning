$(document).ready(function(){

	


	var x=document.getElementById("dirlogin").offsetTop;
	var y=$(document).width();
	// alert(y);
	// 获取dirlogin到窗口顶部的像素高度
	var z=$("#dirlogin").offset().top;
	//获取浏览器滚动条到窗口顶部的像素高度
	$(window).scroll(function() {
		var s=$(window).scrollTop();
		// alert(s);
		if(s<600){
		$("#dirlogin").css("display","none");
	}
	else{
		$("#dirlogin").css("display","block");
	}
	});

	$(".tm").click(function() {
		/* Act on the event */

		$("#popup_bg").css("display","block");
		$("#popup_reg").css("display","block");
		var s=$(window).scrollTop();
		$("#popup_reg").css("top",s+100);
	});

	$('.close').click(function() {
		$("#popup_bg").css("display","none");
		$("#popup_reg").css("display","none");
	});



	// pop_reg_height
	if($("#popup_reg").css("display")){
		//pic框高度=滚动条距离顶部高度+一个固定的距离；
		//监听滚动的事件；

		$(window).scroll(function(){
			var s=$(window).scrollTop();
			$("#popup_reg").css("top",s+100);
		});

		return;
	}


});


function submenu(){
	if(document.getElementById("sub_menu_sex").style.display=="block"){
		document.getElementById("sub_menu_sex").style.display="none";
		document.getElementById("sexvalue").style.backgroundColor="transparent";
		document.getElementById("sexvalue").style.borderBottom="1px solid #666666";
	}
	else{
		document.getElementById("sub_menu_sex").style.display="block";
		document.getElementById("sexvalue").style.borderBottom="none";
		document.getElementById("sexvalue").style.backgroundColor="#57595B";
	}
}

function submenu2(){
	if(document.getElementById("sub_menu_age").style.display=="block"){
		document.getElementById("sub_menu_age").style.display="none";
		document.getElementById("agevalue").style.backgroundColor="transparent";
		document.getElementById("agevalue").style.borderBottom="1px solid #666666";
	}
	else{
		document.getElementById("sub_menu_age").style.display="block";
		document.getElementById("agevalue").style.borderBottom="none";
		document.getElementById("agevalue").style.backgroundColor="#57595B";
	}
}

function submenu3(){
	if(document.getElementById("sub_menu_place").style.display=="block"){
		document.getElementById("sub_menu_place").style.display="none";
		document.getElementById("placevalue").style.backgroundColor="transparent";
		document.getElementById("placevalue").style.borderBottom="1px solid #666666";
	}
	else{
		document.getElementById("sub_menu_place").style.display="block";
		document.getElementById("placevalue").style.borderBottom="none";
		document.getElementById("placevalue").style.backgroundColor="#57595B";
	}
}

function getprovince(){
// 获取当前select的值	
	$("#dq_province").change(function(){});
	var checkText=$("#dq_province").find("option:selected").text();
	var checkValue=$("#dq_province").find("option:selected").attr("value");
	alert(checkValue);
}

