$(document).ready(function(e) {
	
function icons(){
	$('.subLanguage').slideUp();
    $('.currency, .language').click(function(){
		$(this).find('.subLanguage').css('opacity','1').slideToggle();	
		$(this).siblings('span').find('.subLanguage').slideUp();
	});
	
	$(document).click(function(){
		$('.currency, .language').find('.subLanguage').hide();	
	});
	
	$('.currency, .language').click(function(e){
		e.stopPropagation();	
	});
}//icons
icons();

function subMenu(){
	$('.subUniforms').hide();
    $('.subM, .subUniforms').hover(function(){
		$('.subUniforms').css('opacity','1').show();
	},function(){
		$('.subUniforms').hide().css('opacity','0');
	});
}//sub menu
subMenu();
	
	
function searching() {
	$('.search').click(function(){
		$('.menu_ul').hide();
		$('.search_bar').css('opacity','1').fadeIn();
		$('.search_bar input').focus();
	});
	$('.x').click(function(){
		$('.search_bar').hide();	
	});
}//searching
searching();
	

function jMenu(){
	$('.menu_ul').hide();
	$('.mn').click(function(e){
		e.stopPropagation();
		$('.menu_ul').fadeToggle(150);
	});
	
	$(document).click(function(){
		$('.menu_ul').hide();	
	});
	
	$('.menu_ul').click(function(e){
		e.stopPropagation();	
	});
}//JMenu	
jMenu();
	
	
function tabletMenu() {
	$('.tablet_sub').css('display','block').slideUp(0).css('opacity','1');
	$('.tablet_menu > li a').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.tablet_menu li a').not(this).next('.tablet_sub').hide();
		$(this).next('.tablet_sub').slideToggle();
		
	});
	
	$(document).click(function() {
		$('.tablet_menu > li').find('.tablet_sub').hide();
	});
	
	$('.tablet_menu > li').find('.tablet_sub').click(function(e){
		e.stopPropagation();	
	});
	
	
	$('.close').click(function(){
		$('.chart').hide();	
	});
	
	$('.search_tabl').click(function(){
		$(this).next('.srch').find('li input').focus();
		//alert('fdfd');	
	});
	
}//tabletmenu
tabletMenu();

function sales() {
	var left = $('.sale').width();
	$(window).resize(function(){
		var l = ($('.box2').width() - $('.sale').width()) / 2;
		var t = ($('.box2').height() - $('.sale').height()) / 2;
		//alert(o);
		$('.sale').css({left:l,top:t});
	});	
}//sales
sales();		


function footerMenu() {
	var width = $(window).width() + 17;
	if(width <= 711) {
		$('.mainFooter div h3').click(function(){
			$(this).next('ul').slideToggle(50);	
			$(this).toggleClass('bottom');
		});
	}
	
}//footer menu
footerMenu();


function scrollTop() {
	$(document).scroll(function(){
		var top = $(document).scrollTop();	
		if(top > 200) {
			$('.scrollTop').addClass('opacity');	
		}else {
			$('.scrollTop').removeClass('opacity');		
		}
	});
	
	$('.scrollTop').click(function(){
		$('html, body').animate({scrollTop:'0'},1000,'linear');
	});
}//scrollTop
scrollTop();


function chat(){
$('.chat > a').click(function(e){e.preventDefault();});
var text;
var input = $('.chat').find('input, textarea'); 
	input.focus(function(){
		text = $(this).attr('placeholder');
		if($(this).attr('placeholder') === text) {
			$(this).attr('placeholder','');	
		}else {
			$(this).attr('placeholder', text);
		}
	}).blur(function(){
		$(this).attr('placeholder',text);	
	});	
	
$('.chat > a').click(function(){
	var $chat = $('.chat');
	var bottom = parseInt($chat.css('bottom'));
	if(bottom == -292) {
		$chat.css({'bottom':'0px'});
		$('.chat > a').css('background-image','url(../images/chat/down.PNG)');
	}else if(bottom == 0){
		$chat.animate({bottom: '-320px'},0,function(){
			$chat.animate({bottom:'-292px'},500);
			$('.chat > a').css('background-image','url(../images/chat/up.PNG)');
		});
	}
});	

$('.chat input[type="submit"]').click(function(e){
	e.preventDefault();
});   
}
chat();



	
});