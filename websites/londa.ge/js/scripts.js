$(document).ready(function() {
	
function slide() {
	$('.slideBox').click(function(){
		var top = $('body').scrollTop();
		$('body').append('<div class="bg"><img src=\'../images/gallery_loading.gif\'></div>'); 
		$('body').css('overflow','hidden');
			$('body').find('.bg img').css({
				'position':'relative',
				'top':200 + top
							
			});
			
			
			var src = $(this).find('img').attr('src');
			switch(src) {
				case 'images/pag2_1.jpg':
					$('body').append('<div class="img"><img src="images/slide_pic1.jpg" alt=""/></div>');
				break;
				case 'images/pag2_2.jpg':
					$('body').append('<div class="img"><img src="images/slide_pic2.jpg" alt=""/></div>');
				break;	
				case 'images/pag2_3.jpg':
					$('body').append('<div class="img"><img src="images/slide_pic3.jpg" alt=""/></div>');
				break;
				case 'images/pag2_4.jpg':
					$('body').append('<div class="img"><img src="images/slide_pic4.jpg" alt=""/></div>');
				break;
				case 'images/pag2_5.jpg':
					$('body').append('<div class="img"><img src="images/slide_pic5.jpg" alt=""/></div>');
				break;
				default:
					$('body').append('<div class="img"><img src="images/slide_pic5.jpg" alt=""/></div>');
			}
			
			
			$('.img').css({
				'left': ($(window).width() - $('.img').width())/2,
				'top' : ($(window).height() - $('.img').height())/2 + $(window).scrollTop()
			});
		
			$(window).resize(function (){
				$('.img').css({
				'left': ($(window).width() - $('.img').width())/2,
				'top' : ($(window).height() - $('.img').height())/2 + $(window).scrollTop()
				});
			});
			
			$('.img').click(function(){
				//$('body').find('.bg img').css({'display':'none'});
				$(this).hide();
				$('.bg').hide();
				$('body').css('overflow','visible');	
			});
	});	
}
slide();	

	
	
function smallSlide() {
	$('.mini_slideBox').click(function(){
		var top = $('body').scrollTop();
		$('body').append('<div class="bg"><img src=\'../images/gallery_loading.gif\'></div>'); 
		
		$('html').append('<div class="slideGal"><div class=\'center\'><img class=\'left_arrow\' src=\'images/prev_arrow_big.png\'><img class=\'mini_img\' src=\'images/pag_1.jpg\'><img class=\'mini_img\' src=\'images/pag_2.jpg\'><img class=\'mini_img\' src=\'images/pag_3.jpg\'><img class=\'mini_img\' src=\'images/pag_4.jpg\'><img class=\'mini_img\' src=\'images/pag_5.jpg\'><img class=\'right_arrow\' src=\'images/next_arrow_big.png\'></div></div>').addClass('slideGal');
		$('html').find('.slideGal').css({
			'top':395 + top
			});
			
			
			var images = ['images/slide_pic1.jpg','images/slide_pic2.jpg','images/slide_pic3.jpg','images/slide_pic4.jpg','images/slide_pic5.jpg']
			//var source = $('.mini_slides').find('img');
			var src =  $('.imgSmall').find('img').attr('src');
			var i = 1;
			var full = images.length - 1;
			$('.right_arrow').click(function(){
					//alert(source.eq(0).attr('src'));
					//$('.imgSmall').find('img').attr('src',source.eq(i).attr('src'));
					$('.imgSmall').find('img').attr('src',images[i]);
					i++;
					if(i === images.length) {
						i = 0;	
					}
			});
				
			$('.left_arrow').click(function(){
				//alert(full);
				//$('.imgSmall').find('img').attr('src',source.eq(i).attr('src'));
				$('.imgSmall').find('img').attr('src',images[full]);
				full--;//alert(full);
				if(full === -1) {
					full = 	images.length - 1;
				}
			});
			
			
		//$('#container').css({'position':'relative','z-index':'-1899','overflow':'hidden'});
		//$('body').find('.bg').css({'bottom':-($(window).height())+(-top)});
		
		$('body').css('overflow','hidden');
			$('body').find('.bg img').css({
				'position':'relative',
				'top':200 + top
							
			});
			
			
			var src = $(this).find('img').attr('src');
			//$('.img').addClass('imgSmall');
			switch(src) {
				case 'images/pag_1.jpg':
					$('body').append('<div class="imgSmall"><img src="images/slide_pic1.jpg" alt=""/></div>');
				break;
				case 'images/pag_2.jpg':
					$('body').append('<div class="imgSmall"><img src="images/slide_pic2.jpg" alt=""/></div>');
				break;	
				case 'images/pag_3.jpg':
					$('body').append('<div class="imgSmall"><img src="images/slide_pic3.jpg" alt=""/></div>');
				break;
				case 'images/pag_4.jpg':
					$('body').append('<div class="imgSmall"><img src="images/slide_pic4.jpg" alt=""/></div>');
				break;
				case 'images/pag_5.jpg':
					$('body').append('<div class="imgSmall"><img src="images/slide_pic5.jpg" alt=""/></div>');
				break;
				default:
					$('body').append('<div class="imgSmall"><img src="images/slide_pic5.jpg" alt=""/></div>');
			}
			
			$('.mini_img').click(function(){
				switchCase($(this));
				$(this).addClass('border').siblings().removeClass('border');
			});
	
			
			function switchCase(current){
				var src = $(current).attr('src');
			switch(src) {
				case 'images/pag_1.jpg':
					$('.imgSmall').find('img').attr('src','images/slide_pic1.jpg');
				break;
				case 'images/pag_2.jpg':
					$('.imgSmall').find('img').attr('src','images/slide_pic2.jpg');
				break;	
				case 'images/pag_3.jpg':
					$('.imgSmall').find('img').attr('src','images/slide_pic3.jpg');
				break;
				case 'images/pag_4.jpg':
					$('.imgSmall').find('img').attr('src','images/slide_pic4.jpg');
				break;
				case 'images/pag_5.jpg':
					$('.imgSmall').find('img').attr('src','images/slide_pic5.jpg');
				break;
				default:
					$('.imgSmall').find('img').attr('src','images/slide_pic2.jpg');
			}
			}//switchCase
			
			
			$('.imgSmall').css({
				'left': ($(window).width() - $('.imgSmall').width())/2,
				'top' : 5 + $(window).scrollTop()
			});
		
			$(window).resize(function (){
				$('.imgSmall').css({
				'left': ($(window).width() - $('.imgSmall').width())/2,
				'top' : ($(window).height() - $('.imgSmall').height())/2 + $(window).scrollTop()
				});
			});
			
			$('.imgSmall').click(function(){
				//$('body').find('.bg img').css({'display':'none'});
				$(this).hide();
				$('.slideGal').hide();
				$('html').show();
				$('.bg').hide();
				$('body').css('overflow','visible');
				$('html').css('overflow','visible');	
			});
	});	
}
smallSlide();	
	
	
	
	
//function loadContent() {
//	$('a:contains("about")').click(function(e){
//		e.preventDefault();
//		$('.slides').animate({left:'810px'},1000,function(){
//	 $('.loaded').load('aboutBox.html').css({'position':'relative','left':'810px'}).animate({left:'0px'},1000);
//		});
//	});	
//}
//loadContent();	



//function loadContent() {
//	$('.nav a').click(function(e){
//		e.preventDefault();
//		var text = $(this).text();
//		var div = $('.loaded').children('div').attr('class');
//		$('.'+div).animate({left:'810px'},1000,function(){
//	 $('.loaded').load(text+'.html').css({'position':'relative','left':'810px'}).animate({left:'0px'},1000);
//		});
//	});
//}
//loadContent();



//function loadContent() {
//	$('.nav a').click(function(e){
//		$('a').removeClass('clicked');
//		$('a').removeClass('clickedRed');
//		var $this = $(this);
//		var $text = $this.text();
//		
//		if($text == 'company' || $text == 'events' || $text == 'awards') {
//			$this.addClass('clickedRed');
//		}else {
//			$this.addClass('clicked');
//		}
//		
//		e.preventDefault();
//									
//		var text = $(this).text();
//		var div = $('.loaded').children('div').attr('class');
//			if(text == 'news' || text == 'folio' || text == 'contacts' || text == 'about' || text == 'company' || text == 'events' || text == 'awards') {
//				if($('.slides').length <= 0){
//				//alert('fff');
////$('.'+div).find('.blackBox').text('hhhhhhfffffffffffffffffffffffffffffffffhhhhhhhhh');
//$('.'+div).find('.blackBox').stop().animate({left:'650px'},1000,function(){
//	$('.blackBox').load(text+'.html').css({'position':'relative','left':'650px'}).stop().animate({left:'0px'},1000);
//});
//				}else{
//					//alert('ggg');
//$('.loaded').load(text+'2.html').css({'position':'relative','left':'810px'}).stop().animate({left:'0px'},1000);
//					}
//				
//				}else {
//		$('.'+div).stop().animate({left:'810px'},1000,function(){
//$('.loaded').load(text+'.html').css({'position':'relative','left':'810px'}).stop().animate({left:'0px'},1000);
//			
//		});
//			}							
//	});															
//}
//loadContent();

	
	

function loadContent() {
	$('.nav a').click(function(e){
		
					//
//					var top = $('body').scrollTop();
//				    $('body').append('<div class="loading"><img src=\'../images/preloader1.gif\'></div>') 
//					var left = ($(window).width() - $('.loading img').width())/2;
//							$('body').find('.loading img').css({
//								'position':'absolute',
//								'z-index':'9000',
//								'top':250 + top,
//								'left':left
//											
//							}); 
		
		
		var $this = $(this);
		var $text = $this.text();
		
			var $class = $(this).attr('class');
			//alert($class);
			
			if($class != 'clicked' && $class != 'clickedRed'){
			
			$('a').removeClass('clicked');
		    $('a').removeClass('clickedRed');
	
			if($text == 'company' || $text == 'events' || $text == 'awards') {
				$this.addClass('clickedRed');
			}else {
				$this.addClass('clicked');
			}
			
		
		e.preventDefault();
		
								
		var text = $(this).text();
		var div = $('.loaded').children('div').attr('class');
			if(text == 'news' || text == 'folio' || text == 'contacts' || text == 'about' || text == 'company' || text == 'events' || text == 'awards') {
				if($('.slides').length <= 0){
				
$('.'+div).find('.blackBox').stop().animate({left:'650px'},1000,function(){
		
	$('.blackBox').load(text+'.html').css({'position':'relative','left':'650px'}).stop().animate({left:'0px'},1000);
});
				}else{
					
$('.loaded').load(text+'2.html').css({'position':'relative','left':'810px'}).stop().animate({left:'0px'},1000);
					}
				
				}else {
$('.'+div).stop().animate({left:'810px'},1000,function(){
$('.loaded').load(text+'.html').css({'position':'relative','left':'810px'}).stop().animate({left:'0px'},1000);
	
		});
				}//end else							
}else {e.preventDefault();} });																									
}
loadContent();

    
/////////////////////// Read More //////////////////////
function readMore(){
    $('.more').click(function(){
        var title = $(this).attr('title');
        
        $(window).scrollTop(100);
    $('body').append('<div class="bg"></div>'); 

       $('#container').append('<div class=\'iframe\'><h1 class=\'box_h1\'>READ MORE '+title+'<img class=\'x\' src=\'images/x.png\'></h1><iframe class="read" src="read_more_'+title+'.html"></iframe><script>$.getScript(\'js/scripts.js\');</script></div>');
    });
    
    $('.x').click(function(){
        $('.iframe').hide();
        $('.bg').hide();
    });
    
}//Read More
readMore();
	
    $(window).resize(function(){
        $('.iframe').css({
        'left': ($(window).width() - $('.iframe').width())/2,
        });
    });
    
    $('.iframe').css({
        'left': ($(window).width() - $('.iframe').width())/2,
        'top': $(window).scrollTop() + 40
    });
    
    
    
    
    
    
    
 function slide_2() {
	$('.slide_2 img').click(function(){
        //alert($(this).attr('src'));
		var top = $('body').scrollTop();
		$('body').append('<div class="bg"><img src=\'../images/gallery_loading.gif\'></div>'); 
		$('body').css('overflow','hidden');
			$('body').find('.bg img').css({
				'position':'relative',
				'top':200 + top
							
			});
			
			
        var src = $(this).attr('src');
        switch(src) {
            case 'images/page3_pic1.jpg':
                $('body').append('<div class="img"><img src="images/page3_pic1_big.jpg" alt=""/></div>');
            break;
            case 'images/page3_pic2.jpg':
                $('body').append('<div class="img"><img src="images/page3_pic2_big.jpg" alt=""/></div>');
            break;	
            case 'images/page3_pic3.jpg':
                $('body').append('<div class="img"><img src="images/page3_pic3_big.jpg" alt=""/></div>');
            break;
            case 'images/page3_pic4.jpg':
                $('body').append('<div class="img"><img src="images/page3_pic4_big.jpg" alt=""/></div>');
            break;
            case 'images/page3_pic5.jpg':
                $('body').append('<div class="img"><img src="images/page3_pic5_big.jpg" alt=""/></div>');
            break;
            case 'images/page3_pic6.jpg':
                $('body').append('<div class="img"><img src="images/page3_pic6_big.jpg" alt=""/></div>');
            break;
            default:
                $('body').append('<div class="img"><img src="images/page3_pic1_big.jpg" alt=""/></div>');
        }

			
//var nuca = ($('.img').height() - $('.img').find('img').height()) /2;
        //$('.img').find('img').css({'max-height':'100%','display':'block','margin':'auto'});
              //$('.img').css({'width':'auto','height':'auto','display':'flex','justify-content':'center','align-items':'center'});
            //$('.img').css({'width':'600px'});      
        
			$('.img').css({
				'left': ($(window).width() - $('.img').width())/2,
				'top' : ($(window).height() - $('.img').height())/2 + $(window).scrollTop()
			});
		
			$(window).resize(function (){
				$('.img').css({
				'left': ($(window).width() - $('.img').width())/2,
				'top' : ($(window).height() - $('.img').height())/2 + $(window).scrollTop()
				});
			});
			
			$('.img').click(function(){
				$('.img').css({'display':'none'});
				$(this).hide();
				$('.bg').hide();
				$('body').css('overflow','visible');	
			});
	});	
}
slide_2();   
    
    
 
///////////////// Form /////////////////
function form(){
	var n = 'name is required.';
    var m = 'email is required.';
    var t = 'message is required.';
    var v = 'e-mail - is not valid email address.';
    var fake = 'Fuck you! Enter real mail!';
	
	$('.submit').click(function(e){
        var name = $('.form input[type="text"]').val().toLowerCase();
        var mail = $('.form input[type="email"]').val().toLowerCase();
        var message = $('.textarea').val().toLowerCase();
        
        e.preventDefault();
		if(name === 'name' || name === '') {
			$('.output').text(n);
		}else if(mail === 'e-mail' || mail === '') {
            $('.output').text(m);  
        }else if(message === 'message' || message === ''){
            $('.output').text(t); 
        }else if(mail.indexOf('@') === -1 || mail.indexOf('.') === -1){
            $('.output').text(v); 
        }else if(mail.indexOf('mailinator.com') >= 1){
            $('.output').text(fake);
        }else {
            $('.output').text('');
        }
	});
    
    $('.reset').click(function(e){
        $('.output').text('');
    });
}
form();
   

   
});