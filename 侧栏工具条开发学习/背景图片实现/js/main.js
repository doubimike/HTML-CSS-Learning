requirejs.config({
	paths:{
		jquery:'jquery-2.1.4.min'
	}
});

requirejs(['jquery'],function($){
	$('body').css('background-color','red');
});

