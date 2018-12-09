$(document).ready(function(e) {

function slider() {
	var i = -100;
	var index = 0;
	var titleWidth = $('.titles').width();
	var length = $('.titles').length * titleWidth;
	var titleCont = $('.titleCont').width(length);
	var w = $('.titleCont').width() - titleWidth;
	var titleLength = $('.titleCont').find('.titles').length;
	//alert(titleLength);
	var currentSlide = 1;
	$('.bullets').children('div').eq(0).find('div').css('background-color','#FE7676');
	
	var left = function(){ 
			   		$('.titleCont').animate({left:'-='+titleWidth+''},500,'linear',function(){
						currentSlide++;
/*$('.bullets').children('div').find('div').css('background-color','#2F343A');
$('.bullets').children('div').eq(currentSlide - 1).find('div').css('background-color','#FE7676');
						if(currentSlide === titleLength) {
							$('.titleCont').css('left','0px');
							currentSlide = 1;
						}*/
						var tt = parseInt($('.titleCont').css('left'));
						if(parseInt($('.titleCont').css('left')) == -w) {
							$('.titleCont').css('left','0px');	
						}
						switch(tt) {
							case -w + titleWidth * 3:
$('.bullets').children('div').eq(1).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');
							break;
							case -w + titleWidth * 2:
$('.bullets').children('div').eq(2).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');
							break;	
							case -w + titleWidth * 1:
$('.bullets').children('div').eq(3).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');;
							break;		
							default: 
$('.bullets').children('div').eq(0).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');								
						}
			    	});
				}
	var setinterval = setInterval(left,6000);
	
	
	
	$('.bullets').children('div').hover(function(){
		clearInterval(setinterval);
	},function(){
		setinterval = setInterval(left,6000);
		//setTimeout(left,1000);
	});
	
	
	//$('.bullets').children('div').eq(currentSlide - 1).find('div').css('background-color','#FE7676');
	
	
	$('.bullets').children('div').eq(0).click(function(){
		$('.titleCont').stop().animate({left:0},500,'linear');	
$(this).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');
	});
	$('.bullets').children('div').eq(1).click(function(){
		$('.titleCont').stop().animate({left:-titleWidth},500,'linear');
$(this).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');	
	});
	$('.bullets').children('div').eq(2).click(function(){
		$('.titleCont').stop().animate({left:-titleWidth*2},500,'linear');	
$(this).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');
	});
	$('.bullets').children('div').eq(3).click(function(){
		$('.titleCont').stop().animate({left:-titleWidth*3},500,'linear');
$(this).find('div').css('background-color','#FE7676').parent().siblings().find('div').css('background-color','#2F343A');	
	});
}//slider
slider();

//////////////////////////////////////////////////////////////////////////

function responsive() {
	function prepend() {
		var $h1 = $('.modelBoxHeader');
		$h1.prepend("<div class='prepended'></div>");
		var $prepended = $('.prepended');
		var text = $prepended.parent().text();
		$prepended.each(function(index, element) {
			var text = $(this).parent().text();
			$(this).text(text);
		});
	}//prepend
	
	if($(window).width() < 841) {
		prepend();
	}else if($(window).width() > 840) {
		$('.prepended').hide();	
	}
	
	
}//responsive
responsive();

///////////////////////////////////////////////////////////////////////

function loadMore() {
	$("a:contains('MORE')").click(function(){
		$('.content').load('test.html');	
	});
}//loadMore
//loadMore();

function moreHref() {
	$("a:contains('MORE')").attr('href','more.html');
}//moreHref
moreHref();


//////////////////////////////////////////////////////////////////////

function menuScroll() {
	var $html = $('html, body');
	var resultArray = [];
	$('.menu li a').each(function(){
		resultArray.push($(this).text());
	});
	
	$('a').click(function(e){
		e.preventDefault();
		var links = $(this).text();
		switch(links) {
			case resultArray[0]:
				$html.animate({scrollTop:'0'},0,'linear');
			break;
			case resultArray[1]:
				$html.animate({scrollTop:'780'},0,'linear');
			break;
			case resultArray[2]:
				$html.animate({scrollTop:'1500'},0,'linear');
			break;
			case resultArray[3]:
				$html.animate({scrollTop:'2360'},0,'linear');
			break;
			case resultArray[4]:
				$html.animate({scrollTop:'3100'},0,'linear');
			break;
			default:
				$html.animate({scrollTop:'0'},0,'linear');
		}
	});
}//menuScroll
//menuScroll();

///////////////////////////////////////////////////////////////////////////

function scrollTop() {
	$(document).scroll(function(){
		var top = $(this).scrollTop();	
		if(top > 300) {
			$('.scrollTop').css({'visibility':'visible','opacity':'0.8'});
		}else {
			$('.scrollTop').css({'opacity':'0','visibility':'hidden'});	
		}
	});
	$('.scrollTop').click(function(){
		$('html, body').animate({scrollTop:'0'},1000,'linear');	
	});
}//scrollTop
scrollTop();

////////////////////////////////////////////////////////////////////

function formValidation() {
	var $input = $('.form input, .form textarea');
	$input.blur(function(){
		var value = $.trim($(this).val());
		if(value.length === 0) {
			$(this).next('.required').css('display','block');
		}else {
			$(this).next('.required').css('display','none');
		}
	});//blur
	$input.keyup(function(){
		var value = $.trim($(this).val());
		if(value.length === 0) {
			$(this).next('.required').css('display','block');
		}else {
			$(this).next('.required').css('display','none');
		}	
	});//keyup
	
	///////////  Submit  ////////////
	
	$('#submit').click(function(e){
		if( $.trim($("#name").val()) && ($.trim($("#email").val())) && ($.trim($("#message").val()))){
			//alert('kk');// $.ajax();
			var user_name = $('#name').val();
			var user_email = $('#email').val();
			var user_message = $('#message').val();
				$.ajax({
					url:"database.html",
					data:{name:user_name,email:user_email,message:user_message},
					type:"POST",
					success: function(data){
						function opacity(){$('.sent').css('opacity','0');}
						$('.sent').animate({opacity:'1'},1000,function(){
							setTimeout(opacity,5000);	
						});
						$('#name, #email, #message').val('');
				}
				});//ajax	
		}
		e.preventDefault();	
	});//submit
}//formValidation
formValidation();


function jMenu() {
	$('.jMenu').click(function(){
		$('.menu').toggle();
	});
}//jMenu
jMenu();




});