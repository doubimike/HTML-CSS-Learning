$(document).ready(function(){
	// 输入框反应
	$(".searchtxt").focus(function(){
		$(".search").addClass('onclick');
	});
	$(".searchtxt").blur(function(){
		$(".search").removeClass('onclick');
	});

	//慕课APP动效
	$(".app").mouseover(function() {
		$(".apppic").css({
			backgroundPosition:'0 -16px',
			transition:"0.3s",
		});
	});
	$(".app").mouseout(function() {
		$(".apppic").css({
			backgroundPosition:'0 0',
		});
	});

	//输入框已输入字体颜色
	if($(".searchtxt").text!==null){
		$(".searchtxt").css({
			color: 'black',
		});
	}

	//fanye显示
	$('.picwall').mouseover(function() {
		$('.fanye.prev').css({
			left: '0',
			transition:"left 0.6s",
		});
		$('.fanye.next').css({
			right: '0',
			transition:"right 0.6s",
		});
	});
	$('.picwall').mouseout(function() {
		$('.fanye.prev').css({
			left: '-80px',
		});
		$('.fanye.next').css({
			right: '-80px',
		});
	});

	//dothover效果
	$(".bannerdot span").click(function(){
		$(".bannerdot .active").removeClass('active');
		$(this).addClass('active');
	});

	var speed=3000;
	//设定dot切换的定时器
	dotauto=setInterval(bannerchange, speed);
	
	// 抽象出banner自动切换整体的函数
	function bannerchange(){
		var dotid=$(".bannerdot .active").attr("id");
		dotid=dotid-0;
		if (dotid==1) {
			dotclassremoveadd(dotid+1);
			$(".picwall").css({
			background: 'url(images/5653c2310001392320000600.jpg)',
			//在css里面实现北京动态切换效果 transition: 'background 2s',
			});
		}
		else if(dotid==2){
			dotclassremoveadd(dotid+1);
			$(".picwall").css({
			background: 'url(images/56550dee0001d7cd20000600.jpg)',
			});
		}
		else if(dotid==3){
			dotclassremoveadd(dotid-2);
			$(".picwall").css({
			background: 'url(images/banner2.jpg)',
			});
		}
	}

	//抽象出设定dot切换的定时器中的函数
	function dotclassremoveadd(dotidarg){
		$(".bannerdot .active").removeClass('active');
		$("#"+dotidarg).addClass('active');
		
	}

	//banner点击效果
	$(".bannerdot span").click(dotclick);
	function dotclick(){
		clearInterval(dotauto);
		var dotid=$(this).attr('id');
		dotclassremoveadd(dotid);
		if (dotid==2) {
			$(".picwall").css({
			background: 'url(images/5653c2310001392320000600.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
		else if(dotid==3){
			$(".picwall").css({
			background: 'url(images/56550dee0001d7cd20000600.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
		else if(dotid==1){
			$(".picwall").css({
			background: 'url(images/banner2.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
	}

	//prev&next hit affect
	$("#prev").click(fanyeprevclick);
	function fanyeprevclick(){
		clearInterval(dotauto);
		var dotid=$(".bannerdot .active").attr('id');
		dotid=dotid-0;
		if (dotid==1) {
			dotclassremoveadd(3);
			$(".picwall").css({
			background: 'url(images/56550dee0001d7cd20000600.jpg)',
			//在css里面实现北京动态切换效果 transition: 'background 2s',
			});
			dotauto=setInterval(bannerchange, speed);
		}
		else if(dotid==2){
			dotclassremoveadd(1);
			$(".picwall").css({
			background: 'url(images/banner2.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
		else if(dotid==3){
			dotclassremoveadd(2);
			$(".picwall").css({
			background: 'url(images/5653c2310001392320000600.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
	}

	$("#next").click(fanyenextclick);
	function fanyenextclick(){
		clearInterval(dotauto);
		var dotid=$(".bannerdot .active").attr('id');
		dotid=dotid-0;
		if (dotid==2) {
			dotclassremoveadd(3);
			$(".picwall").css({
			background: 'url(images/56550dee0001d7cd20000600.jpg)',
			//在css里面实现北京动态切换效果 transition: 'background 2s',
			});
			dotauto=setInterval(bannerchange, speed);
		}
		else if(dotid==3){
			dotclassremoveadd(1);
			$(".picwall").css({
			background: 'url(images/banner2.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
		else if(dotid==1){
			dotclassremoveadd(2);
			$(".picwall").css({
			background: 'url(images/5653c2310001392320000600.jpg)',
			});
			dotauto=setInterval(bannerchange, speed);
		}
	}
			
			$(".family").mouseover(function() {
				$(".family-big-mask").hide();
				$(".family-text").hide();
			});
			$(".family").mouseout(function() {
				$(".family-big-mask").show();
				$(".family-text").show();
			});
	
	

});
