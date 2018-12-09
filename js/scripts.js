$(document).ready(function(e) {

function start() {
	$('.start').click(function(){
		$('.startMenu').toggle();
		$(this).toggleClass('startBg');	
	});
	
	$('.screen').click(function(){
		$('.startMenu').hide();	
		$('.start').removeClass('startBg');
	});
	$('.taskbar').click(function(e){
		e.stopPropagation();	
	});
}//start
start();

function contact() {
	/*var $mail = $('.mobile').html();
	$('.mobile').hover(function(){
		$(this).html("<span class='small'>+995 598 16 05 92</span>");
	},function(){
		$(this).html($mail);
	});*/
	$('.mailSmall').click(function(){
		var email = 'mailto:irakli.iakobishvili@portfoliosite.ml';
        var subject = 'Project order';
        var emailBody = 'Hi dear Irakli, ';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
	});
}//contact
contact();


function map() {
	$('.maps,.bigPictures,.bigEdge').click(function(){
		$('.startMenu').hide();	
		$('.start').removeClass('startBg');
		var $screenTop = $('.screenTop');
		
		var $this = $(this).attr('class');
		switch($this) {
			case 'maps':
				$screenTop.load("map.html");
				break;
			case 'bigPictures':
				$screenTop.load("photos.html");
				break;
			case 'bigEdge':
				$screenTop.load("edge.html");
				break;
		}
	});
}//map
map();

function pc() {
	$('.pc').dblclick(function(){
		$('.startMenu').hide();	
		$('.start').removeClass('startBg');	
		$('.screenTop').load("explorer.html");
	});
}//pc
pc();

function winIcons() {
	$('.x').click(function(){
		$(this).parent().parent().hide();	
	});
	$('.min').click(function(){
		var $class = $(this).parent().parent().attr('class');	
		alert($class);
	});
}//winIcons
winIcons();

function taskIcons() {	
	$('.taskMap,.taskEdge,.taskPhotos,.taskPc').on({ 
		mousedown: function(){
			$(this).css({'box-shadow':'none'});
		}, 
		mouseup: function(){
			$(this).css({'box-shadow':'0px 0px  0px 1px #005ace'});
		}
	});
	
	
	$('.taskMap,.taskEdge,.taskPhotos,.taskPc').click(function(){
		$('.startMenu').hide();	
		$('.start').removeClass('startBg');
		var $this = $(this).attr('class');	
		switch($this) {
			case 'taskMap':	
				$('.screenTop').load("map.html");
				break;
			case 'taskEdge':
				$('.screenTop').load("edge.html");
				break;
			case 'taskPhotos':
				$('.screenTop').load("photos.html");
				break;
			case 'taskPc':
				$('.screenTop').load("explorer.html");
				break;
		}
	});
}//taskIcons
taskIcons();


function contextMenu() {
	$(document).contextmenu(false);
}//contextMenu
contextMenu();

function WinKey() {
	$(document).keyup(function(e){
		if(e.keyCode == 91 || e.keyCode == 92) {
			$('.startMenu').toggle();
			$('.start').toggleClass('startBg');		
		}
	});
}//WinKey
WinKey();



/*----------------------Date------------------------*/

function timeFormatter(){
	var date = new Date();
	if (date.getHours()>=12){
		var hour = parseInt(date.getHours()) - 12;
		var amPm = "PM";
	} else {
		var hour = date.getHours(); 
		var amPm = "AM";
	}
	var time = hour + ":" + date.getMinutes() + " " + amPm;
	return time;
}
var time = timeFormatter();

function showTime() {
	timeFormatter();
	var time1 = timeFormatter();
	var dt = new Date();
	var fullDate = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
	$('.time').text(time1);
	$('.fullDate').text(fullDate);
}//showTime

$('.time').text(time);
var dts = new Date();
var dat = dts.getDate() + "/" + (dts.getMonth() + 1) + "/" + dts.getFullYear();
$('.fullDate').text(dat);
setInterval(showTime,60000);
	
/*-----------------------------------------------*/





function hoverMenu() {
	$('.mailSmall,.mobile,.picturesMiddle,.edge').hover(function(){
		var $this = $(this).attr('class');
		switch($this) {
			case 'mailSmall':
				$('#contactSearch').val('irakli.iakobishvili@portfoliosite.ml');
				break;
			case 'mobile':
				$('#contactSearch').val('(+995) 598 16 05 92');
				break;
			case 'picturesMiddle':
				$('#contactSearch').val('27 HD Pictures');
				break;
			case 'edge':
				$('#contactSearch').val('8 Working Websites');
				break;	
		}
	},function(){
		$('#contactSearch').val('');
	});
}//hoverMenu
hoverMenu();



/*------------------------------------Lig In---------------------------------------------*/
function startS() {
	document.getElementById("startUp").play();	
}//startS

var randomPass;
var randomPass1;
var num;

function randPass() {
	 randomPass = Math.floor((Math.random() * 10) + 1234);
	 randomPass1 = Math.floor((Math.random() * 10) + 1);
	 num = Math.floor(randomPass / randomPass1);
	 
	 $('.currentPass').text(num);
}//randPass
randPass();

function wrongPass() {
	var $text = $('.wrongPass').find('p');
	setInterval(function(){
		$text.animate({opacity:'0'},1,function(){
			$text.css('opacity','1');	
		}); 
	},1000);
}//wrongPass
wrongPass();



function loginto() {
	var $value = $('#pass').val();
	if($value == num) {
		$('.login').hide();
		$('.desctop').show();
		$('.wrongPass').css('display','none');
		startS();
	}else {
		$('#pass').val('');
		document.getElementById('error').play();
		///alert('OOO');	
		$('.wrongPass').css('display','block');
	}
}//loginto

$('#submit').click(function(){
	loginto();
});

$('#pass').keypress(function(e) {
		if(e.which === 13) {
			loginto();
		}
});//enter


var $shutdown = document.getElementById("shutdownSound");
$('.power').click(function(){
	$shutdown.play();
	$('.desctop').hide(); 
	$('.login').show();
	$('#pass').val('').focus();
});



/*var i = 0;
function persent() {
	$('.persent').text(i);	
	if(i === 100) {
		clearInterval(interval);
	}
	i = i + 10;
}//persent
var interval = setInterval(persent,1000);*/



function prompPlayer() {
	var video = document.getElementById("video");
	
	$('.picturesSmall').click(function(){
		$('.promo').toggle();	
		video.play();
	});
	
	
	$('.playV').click(function(){
		video.play();	
	});
	$('.pauseV').click(function(){
		video.pause();	
	});
	
	$('.closeV').click(function(){
		video.pause();	
		$('.promo').hide();
	});
	
	$('.promoCon').click(function(){
		$('.startMenu').hide();	
		$('.start').removeClass('startBg');
	});
}//prompPlayer
prompPlayer();
	



});