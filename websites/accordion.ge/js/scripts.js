$(document).ready(function(e) {


function accordion() {
	var length = $('.accordion > div').length;
	var $arrows = $('.accordion > div').find('.left_arrow,.right_arrow');
	var i = 1;
	function slider() {
	$arrows.css({'opacity':'0'});
	$('.accordion > div:eq('+i+')').animate({width:'600px'},1000,'linear',function(){
		if(i >= length) {i = 0;}
	}).siblings().animate({width:'57.14px'},1000,'linear');
	i++;
	}//slider
	
	var setint;
	function int(){setint = setInterval(slider,4000);} int();
	$('.accordion > div').hover(function(){
		clearInterval(setint);
		$(this).stop().animate({width:'600px'},1000,'linear',function(){
			$(this).find('.left_arrow,.right_arrow').css({'opacity':'1'});	
		}).siblings().stop().animate({width:'57.14px'},1000,'linear');	
	},function(){
		    $arrows.css({'opacity':'0'});	
			int();
	});	
}//accordion
accordion();


function arrows() {
	var a = 1, b = 1, c = 1, d = 1, e = 1, f = 1, g = 1, h = 1;
	var beautiful = ['','beautiful1','beautiful2','beautiful'];
	var diving = ['','diving1','diving2','diving3','diving'];
	var londa = ['','londa2','londa3','londa4','londa1'];
	var vivus = ['','vivus1','vivus2','vivus3','vivus4','vivus'];
	var poco = ['','poco1','poco2','poco'];
	var style = ['','style1','style2','style3','style4','style'];
	var chatting = ['','chatting1','chatting2','chatting'];
	var cube = ['','cube','cube1','cube2'];
	
	var $left = $('.left_arrow');
	var $right = $('.right_arrow');
	
	$right.click(function(){
		var $title = $(this).siblings('.img').attr('title');
		switch($title) {
			case 'beautiful':
				 $(this).siblings('.img').attr('src','images/beautiful/'+beautiful[a]+'.png');
				 if(a === (beautiful.length - 1)) {a = 0;}
				 a++;
				break;	
			case 'diving':
				 $(this).siblings('.img').attr('src','images/diving/'+diving[b]+'.png');
				 if(b === (diving.length - 1)) {b = 0;}
				 b++;	
				break;
			case 'londa':
				 $(this).siblings('.img').attr('src','images/londa/'+londa[c]+'.png');
				 if(c === (londa.length - 1)) {c = 0;}
				 c++;	
				break;	
			case 'vivus':
				 $(this).siblings('.img').attr('src','images/vivus/'+vivus[d]+'.png');
				 if(d === (vivus.length - 1)) {d = 0;}
				 d++;	
				break;
			case 'poco':
				 $(this).siblings('.img').attr('src','images/poco/'+poco[e]+'.png');
				 if(e === (poco.length - 1)) {e = 0;}
				 e++;	
				break;
			case 'style':
				 $(this).siblings('.img').attr('src','images/style/'+style[f]+'.png');
				 if(f === (style.length - 1)) {f = 0;}
				 f++;	
				break;
			case 'chatting':
				 $(this).siblings('.img').attr('src','images/chatting/'+chatting[g]+'.png');
				 if(g === (chatting.length - 1)) {g = 0;}
				 g++;	
				break;
			case 'cube':
				 $(this).siblings('.img').attr('src','images/cube/'+cube[h]+'.png');
				 if(h === (cube.length - 1)) {h = 0;}
				 h++;	
				break;
		}//Switch
	});//right Click
	
	$left.click(function(){
		var $title = $(this).siblings('.img').attr('title');
		switch($title) {
			case 'beautiful':
				 $(this).siblings('.img').attr('src','images/beautiful/'+beautiful[a]+'.png');
				 if(a === 1) {a = beautiful.length;}
				 a--;
				break;	
			case 'diving':
				 $(this).siblings('.img').attr('src','images/diving/'+diving[b]+'.png');
				 if(b === 1) {b = diving.length;}
				 b--;	
				break;
			case 'londa':
				 $(this).siblings('.img').attr('src','images/londa/'+londa[c]+'.png');
				 if(c === 1) {c = londa.length;}
				 c--;	
				break;	
			case 'vivus':
				 $(this).siblings('.img').attr('src','images/vivus/'+vivus[d]+'.png');
				 if(d === 1) {d = vivus.length;}
				 d--;	
				break;
			case 'poco':
				 $(this).siblings('.img').attr('src','images/poco/'+poco[e]+'.png');
				 if(e === 1) {e = poco.length;}
				 e--;	
				break;
			case 'style':
				 $(this).siblings('.img').attr('src','images/style/'+style[f]+'.png');
				 if(f === 1) {f = style.length;}
				 f--;	
				break;
			case 'chatting':
				 $(this).siblings('.img').attr('src','images/chatting/'+chatting[g]+'.png');
				 if(g === 1) {g = chatting.length;}
				 g--;	
				break;
			case 'cube':
				 $(this).siblings('.img').attr('src','images/cube/'+cube[h]+'.png');
				 if(h === 1) {h = chatting.length;}
				 h--;	
				break;
		}//Switch
	});//left Click
		
}//arrows
arrows();


function links() {
	$('.accordion > div').contextmenu(false);
	$('.left_arrow,.right_arrow').click(function(e){
		e.stopPropagation();
	});
	
	$('.accordion > div').click(function(){
		switch($(this).attr('class')) {
			case 'tab_1':
				var url = 'http://portfoliosite.ml/beautiful.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_2':
				var url = 'http://portfoliosite.ml/diving.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_3':
				var url = 'http://portfoliosite.ml/londa.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_4':
				var url = 'http://portfoliosite.ml/vivus.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_5':
				var url = 'http://portfoliosite.ml/poco.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_6':
				var url = 'http://portfoliosite.ml/style.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_7':
				var url = 'http://portfoliosite.ml/chating.ge'; 
    			window.open(url, '_blank');
			break;
			case 'tab_8':
				var url = 'http://portfoliosite.ml/cube.ge'; 
    			window.open(url, '_blank');
			break;
		}
	});
}//links
links();


function bg() {
	var i = 1;
	function change() {
		$('body').css({'background-image':'url(../images/bg/resized/'+i+'.jpg)'});
		i++;
		if(i === 5) {i = 1;}
	}//change
	var intervals = setInterval(change,10000);
}//bg
bg();





});