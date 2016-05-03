var music = document.getElementById('music');
var audio = document.getElementsByTagName('audio')[0];
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');

audio.addEventListener('ended', function () {
	 music.setAttribute('class', ''); 
});

music.addEventListener('touchstart',function () {
	if (audio.paused) {
		audio.play();
		this.style.animationPlayState ='running';
	} else {
		audio.pause();		
		this.style.animationPlayState ='paused';
	}
});

page1.addEventListener('touchstart',function () {
	 page1.style.display = 'none';
	 page2.style.display = 'block';
	 page3.style.display = 'block';
	 page3.style.top = '100%';

	 setTimeout(function () {
	 	  page2.setAttribute('class','page fadeOut')
	 	  page3.setAttribute('class','page fadeIn')
	 }, 5500);
});

