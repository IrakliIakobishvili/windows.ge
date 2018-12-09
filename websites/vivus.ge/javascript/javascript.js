$(document).ready(function() {

////////////////////// navigation //////////////////////////
var topNavi = $("nav").offset().top;
$(window).scroll(function(){
	var top = $(this).scrollTop();
	if(top >= topNavi) {
		$("nav").addClass("fixed");
		$(".howToNav").hide();
		$(".whiteBg").css({"height":"192px"});	
	}else {
		$("nav").removeClass("fixed");
		$(".howToNav").show();
		$(".whiteBg").css({"height":"233px"});
	}
});	


	
/////////////////////// banner //////////////////////////////
var i = 1;
var z = 0;
var size = $(".banner img").size();
$(".banner img").eq(z).show().delay(7000).hide("slide",{direction:"left"},2000);
function slide() {
	$(".banner img").eq(i).show("slide",{direction:"right"},2000).delay(5000).hide("slide",{direction:"left"},2000);
	i++;
	if(i == size) {
		i = 0;
	}
}
var gale = setInterval(slide,7000);	


/////////////////////////// icons ////////////////////////////	
var iconSize = $(".icons div").size();
$(".one").addClass("current");
function icon(){
	switch(i) {
		case 1:
		$(".icons div").removeClass("current");
		$(".icons div").eq(1).addClass("current");
		break;	
		case 2:
		$(".icons div").removeClass("current");
		$(".icons div").eq(2).addClass("current");
		break;
		case 3:
		$(".icons div").removeClass("current");
		$(".icons div").eq(3).addClass("current");;
		break;
		case 4:
		$(".icons div").removeClass("current");
		$(".icons div").eq(4).addClass("current");;
		break;
		case 5:
		$(".icons div").removeClass("current");
		$(".icons div").eq(5).addClass("current");;
		break;
		case 0:
		$(".icons div").removeClass("current");
		$(".icons div").eq(0).addClass("current");;
		break;
		default:
		$("#one").addClass("currentt");
	}	
}
setInterval(icon,6990);		


/*----------------------- slider time ------------------------------*/
var g = 250;
$( ".slider" ).slider({
      value:g,
      min: 0,
      max: 650,
      step: 50,
      slide: function( event, ui ) {
        $( ".val" ).val(ui.value);
      }
    });
    $( ".val" ).val($( ".slider" ).slider( "value" ) );
	
$(".val").keyup(function(){
	var j = $(this).val();	
	$( ".slider" ).slider("value",j);
});


$(".butmon").click(function(){
	g += 50;
	$( ".slider" ).slider( "value", g );
	$( ".val" ).val(g);
	if($( ".val" ).val() > 650) {
		$( ".val" ).val("650");
	}
});
	
$(".butmon1").click(function(){
	g -= 50;
	$( ".slider" ).slider( "value", g );
	$( ".val" ).val(g);
	if($( ".val" ).val() < 0) {
		$( ".val" ).val("0");
	}
});	

var me = $(".measure").find("div");
me.eq(0).addClass("a").prepend("<div class='right'>100</div>");
me.eq(1).addClass("b").prepend("<div class='right'>200</div>");
me.eq(2).addClass("c").prepend("<div class='right'>300</div>");
me.eq(3).addClass("d").prepend("<div class='right'>400</div>");
me.eq(4).addClass("e").prepend("<div class='right'>500</div>");
me.eq(5).addClass("f").prepend("<div class='right'>600</div>");


$(".money").wrap("<div class='all'></div>");
var price = $( ".val" ).val();
var xxx = $( ".slider" ).slider( "value");
	
/*----------------------- date -----------------------------------*/
var date = new Date();
var days = date.getDate();
var months = (date.getMonth() + 2);
var year = date.getFullYear();
fullTime = days + "." + months + "." + year;
	
$(".date").text(fullTime);	
	
	
/*----------------------total price (loan) -----------------------*/

function loan() {
$(".wishLoan").text(g);
$(".charge").text(g / 5);
var wish = parseInt($(".wishLoan").text());
var charg = parseInt($(".charge").text());
var bbb = wish + charg;
$(".totalLoan").text(bbb);

var charge7 = wish / 13;
var charge14 = wish / 8.5;
var charge30 = wish / 5.2;
var gel = "ლარი";

$(".change7f").text(Math.round(charge7) + " " + gel);
$(".change14f").text(Math.round(charge14) + " " + gel);
$(".change30f").text(Math.round(charge30) + " " + gel);
}

var loanss = setInterval(loan,500);


/*---------------------------left menu-----------------------------*/
var menuImg = $(".leftMenu img").size();
var menuImgIndex = $(".leftMenu img").index();

$(".leftMenu img").on("click",function(){
	$(".leftMenu").addClass("menu");
	var menuIndex = $(this).index()
	$(".leftMenu img").removeClass("menuBg");
	$(this).addClass("menuBg");
	var leftMenu = $(".leftMenu").width("270px");
	$(".phone, .chat, .email").show();
	//if(leftMenu == "270") {
	switch(menuIndex) {
	case 0:
		$(".phone").find("p").eq(0).text("ტელეფონი").addClass("greenC");
		$(".phone").find("p").eq(1).text("(032) 2 47 37 37").addClass("whiteC");
		$(".email").find("p").eq(0).text("")
		$(".chat").find("p").eq(0).html("")
		$(".email").find("p").eq(1).html("").removeClass("whiteC");
		$(".chat").find("p").eq(1).text("").removeClass("whiteC");
	break;
	case 1:	
		$(".email").find("p").eq(0).text("ელ. ფოსტა").addClass("greenC");
		$(".email").find("p").eq(1).html("<a href='mailto:info@vivus.ge' style='color:white; font-family:verdana; font-size:15px; text-decoration:none;' onMouseOver=\"this.style.textDecoration='underline'\"  onMouseOut=\"this.style.textDecoration=\'none\'\">info@vivus.ge</a>").addClass("whiteC");
		$(".phone").find("p").eq(0).text("")
		$(".phone").find("p").eq(1).text("").removeClass("whiteC");
		$(".chat").find("p").eq(0).html("")
		$(".chat").find("p").eq(1).text("").removeClass("whiteC");
	break;
	case 2:
		$(".chat").find("p").eq(0).html("ონლაინ <br> კონსულტაცია").addClass("greenC");
		$(".chat").find("p").eq(1).text("საუბრის დაწყება").addClass("whiteC");
		$(".email").find("p").eq(0).text("")
		$(".email").find("p").eq(1).html("").removeClass("whiteC");
		$(".phone").find("p").eq(0).text("")
		$(".phone").find("p").eq(1).text("").removeClass("whiteC");
	}
	
	//}////////if statement end/////////////
});

$(".leftMenu img").on("dblclick",function(){
	$(".leftMenu").width("50px");	
	$(".phone, .chat, .email").hide();
	$(".leftMenu img").removeClass("menuBg");
});

$(document).on("dblclick",function(){
	$(".leftMenu").width("50px");	
	$(".phone, .chat, .email").hide();
	$(".leftMenu img").removeClass("menuBg");
});
	



/*----------------------------------page 2 howto------------------------------------------------*/	
$(".accordion > div").hide();
$(".accordion > div").first().show();
$(".accordion h3 > span").on("click",function(){
	$(this).parent().next().slideToggle();	
});

$(".hovered").hover(function(){
	$(this).addClass("hoverGreen");
	$(this).parent().addClass("hoverGreenParent");	
},function(){
	$(this).removeClass("hoverGreen");
	$(this).parent().removeClass("hoverGreenParent");
});




/*---------------------------------mini slider----------------------------------------*/
//$(".sliderSmall").slider("value",50);

var g = 250;
$( ".sliderSmall").slider({
      value:g,
      min: 0,
      max: 250,
      step: 50,
      slide: function( event, ui ) {
        $( ".valSmall" ).val(ui.value);
      }
    });
    $( ".valSmall" ).val($( ".slider" ).slider( "value" ) );


var ggg = 30;
$( ".sldSml").slider({
      value:ggg,
      min: 0,
      max: 30,
      step: 1,
      slide: function( event, ui ) {
        $(".sldSmlVal").val(ui.value);
      }
    });
    $(".sldSmlVal").val($(".sldSml").slider( "value") );

/*-------------------*/
var date9 = new Date();
/*var days9 = date9.getDate();
var months0 = (date9.getMonth() + 2);
var year9 = date9.getFullYear();
fullTime9 = days9 + "." + months9 + "." + year9;*/
/*----------------------*/

$(".sldSmlVal").keyup(function(){
	 dadi = parseInt($(this).val());
	 if(dadi > 31 || dadi < '0' || isNaN(dadi)) {
		// alert("eee");
		 clearInterval(tm);
		dadi = date9.getDate();
	 }else {
		  setInterval(tm,500);
	 }
	
});
var dadi = parseInt($(".sldSmlVal").val());
/*-----------------------------------howto white box calc---------------------------------------------*/
/*----------------------- date -----------------------------------*/
var tmDay;
function tm() {
var date = new Date();
var days2 = dadi;
var months = (date.getMonth() + 2);
var year = date.getFullYear();
fullTime = days2 + "." + months + "." + year;
	
$(".date2").text(fullTime);	
}

	
	
/*----------------------total price (loan) -----------------------*/
function loan2() {
var wish = parseInt($(".wishLoan2").text());
var charg = parseInt($(".charge2").text());
var bbb = wish + charg;
$(".totalLoan2").text(bbb);

var charge7 = wish / 13;
var charge14 = wish / 8.5;
var charge30 = wish / 5.2;
var gel = "ლარი";

$(".change7").text(Math.round(charge7) + " " + gel);
$(".change14").text(Math.round(charge14) + " " + gel);
$(".change30").text(Math.round(charge30) + " " + gel);
}

var loans = setInterval(loan2,500);	
	
	
$(".valSmall").keyup(function(){
	var amount = $(this).val();
	$(".wishLoan2").text(amount);	
	
	$(".charge2").html(amount / 5);
	clearInterval(loanss);
});	
	
	

/*-----------------agreement----------------------*/
/*$(".print").click(function(e){
	e.preventDefault();
	//$(".textarea").print();
	window.print();	
});	*/


/*$(".print").click(function(e){
	e.preventDefault();
	var restore = $("document").html();
	var current = $(".printed").html();
	
	$("document").html(current);
    window.print();	
});	*/
	


/*------------------------------borrow smartly-------------------------------*/
$(".borrow > li").eq(0).find(".subList  li").addClass("greenUL").parent().prev().addClass("greenH5");
$(".borrow > li").eq(1).find(".subList  li").addClass("carrotUL").parent().prev().addClass("carrotH5");	
$(".borrow > li").eq(2).find(".subList  li").addClass("greenUL").parent().prev().addClass("greenH5");
$(".borrow > li").eq(3).find(".subList  li").addClass("greenUL").parent().prev().addClass("greenH5");
$(".borrow > li").eq(4).find(".subList  li").addClass("carrotUL").parent().prev().addClass("carrotH5");



/*----------------------------------faq---------------------------------------*/
$(".faq").find("h3").wrapInner("<span class='wrapSpan'></span>");
$(".faq h3 > span, .faq > div").css({"padding-left":"20px"});

$(".faq").find("h3").next("div").hide();
$(".faq").find("h3").click(function(){
	$(this).find(".wrapSpan").toggleClass("greenH3");
	$(".faq").find("h3").not(this).next().slideUp();
	$(this).next().slideToggle();	
});



/*----------------------------contact Pingbacks-----------------------------*/
$(".Pingbacks li").find("a").prepend("<div class='sprite'></div>");




/*------------------------------------for all nav-----------------------------------------------*/




});


