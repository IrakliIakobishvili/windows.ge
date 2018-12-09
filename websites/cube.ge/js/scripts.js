$(document).ready(function(e) {

function bg() {
	var i = 1;
	function changeImg(){
		$('body').css('background-image','url(images/bg/bg'+i+'.jpg)');
		i++;
		if(i === 12) {i = 1;}
	}
	function changeImg2(){
		$('.bg').attr('src','images/bg/bg'+i+'.jpg');
		i++;
		if(i === 12) {i = 1;}
	}
	setInterval(changeImg,8000);
}//bg
bg();

function nav() {
	var left = parseInt($('.topNav').css('left'));
	var linkBox = $('.topNav').find('.navBox').length;
	var width = linkBox * 100 + linkBox; 
	var w = width - 808;
	
	
	$('.right_arrow').hover(function(){
		var left = parseInt($('.topNav').css('left'));
		$('.topNav').animate({left:-w},1000,'linear');
	},function(){
		$('.topNav').stop();
	});	
	
	
	$('.left_arrow').hover(function(){
		var left = parseInt($('.topNav').css('left'));
		$('.topNav').animate({left:0},1000,'linear');
	},function(){
		$('.topNav').stop();
	});	
	
	setInterval(function(){
		var left = parseInt($('.topNav').css('left'));
		$('.right_arrow').css('background-color','white');
		if(left === 0) {
			$('.left_arrow').css('background-color','black');	
		}else if(left === -w){
			$('.right_arrow').css('background-color','black');
		}else if(left !== 0){
			$('.left_arrow').css('background-color','white');	
		}
	},1);
}//nav
nav();
	
	
function hoverMenu(){
	function resume() {cube.removeClass('stop');}
	var time = 100000;
	var cube = $('.cubeBox');
	cube.animate
	var texts = ['image 1','image 2','image 3','image 4','image 5','image 6','image 7','image 8','image 9','image 10','image 11'];
	
	var one = $('.topNav').children('.navBox').find('div:contains('+texts[0]+')');
	var two = $('.topNav').children('.navBox').find('div:contains('+texts[1]+')');
	var three = $('.topNav').children('.navBox').find('div:contains('+texts[2]+')');
	var four = $('.topNav').children('.navBox').find('div:contains('+texts[3]+')');
	var five = $('.topNav').children('.navBox').find('div:contains('+texts[4]+')');
	var six = $('.topNav').children('.navBox').find('div:contains('+texts[5]+')');
	var seven = $('.topNav').children('.navBox').find('div:contains('+texts[6]+')');
	var eight = $('.topNav').children('.navBox').find('div:contains('+texts[7]+')');
	var nine = $('.topNav').children('.navBox').find('div:contains('+texts[8]+')');
	var ten = $('.topNav').children('.navBox').find('div:contains('+texts[9]+')');
	var eleven = $('.topNav').children('.navBox').find('div:contains('+texts[10]+')');
	var twelve = $('.topNav').children('.navBox').find('div:contains('+texts[11]+')');
	
	one.hover(function(){
		cube.addClass('one stop');	
	},function(){
		cube.removeClass('one');
		setTimeout(resume,time);	
	});
	
	two.hover(function(){
		cube.addClass('two stop');	
	},function(){
		cube.removeClass('two');
		setTimeout(resume,time);	
	});
	
	three.hover(function(){
		cube.addClass('three stop');	
	},function(){
		cube.removeClass('three');
		setTimeout(resume,time);	
	});
	
	four.hover(function(){
		cube.addClass('four stop');	
	},function(){
		cube.removeClass('four');
		setTimeout(resume,time);	
	});
	
	five.hover(function(){
		cube.addClass('five stop');	
	},function(){
		cube.removeClass('five');
		setTimeout(resume,time);	
	});
	
	six.hover(function(){
		cube.addClass('six stop');	
	},function(){
		cube.removeClass('six');
		setTimeout(resume,time);	
	});
	
	seven.hover(function(){
		cube.addClass('seven stop');	
	},function(){
		cube.removeClass('seven');
		setTimeout(resume,time);	
	});
	
	eight.hover(function(){
		cube.addClass('eight stop');	
	},function(){
		cube.removeClass('eight');
		setTimeout(resume,time);	
	});
	
	nine.hover(function(){
		cube.addClass('nine stop');	
	},function(){
		cube.removeClass('nine');
		setTimeout(resume,time);	
	});
	
	ten.hover(function(){
		cube.addClass('ten stop');	
	},function(){
		cube.removeClass('ten');
		setTimeout(resume,time);	
	});
	
	eleven.hover(function(){
		cube.addClass('eleven stop');	
	},function(){
		cube.removeClass('eleven');
		setTimeout(resume,time);	
	});
	
	twelve.hover(function(){
		cube.addClass('twelve stop');	
	},function(){
		cube.removeClass('twelve');
		setTimeout(resume,time);	
	});
}//hoverMenu
hoverMenu();	


function boxContent(){
	var one = $('.cube_1');
	one.load('load.html');	
}//boxContent
//boxContent();




	
});