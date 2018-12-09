$(document).ready(function(e) {

function bg() {
var one = 'PML ANNUAL REPORTA4 PERFECT BOUND <br> Laser cut by Colour Copy Centre.',
	two = 'TASCOSS REPORTA4 PERFECT BOUND, MATT LAMINATED',
	three = 'STATE OF VOLUNTEERING REPORT 2014A3 POSTER ON REVIVE 210GSM<br>Printed by Print Mail Logistics.',
	four = 'HOUSE MUSEUMS BROCHURE<br>Printed by Print Mail Logistics.',
	five = 'TASMANIAN THEATRE AWARDS PROGRAM<br>Printed by Print Mail Logistics.',
	six = 'TASMANIAN LEADERS PROGRAM DESKTOP BOARD, 2 HITS OPAQUE THEN CMYK<br>Printed by Mail Logistics.',
	seven = 'JUMP TOURS BROCHUREA4',
	eight = 'MARITIME MUSEUM OF TASMANIA BROCHURES',
	nine = 'GET BILL SMART POSTERA4<br>Printed by Print Mail Logistics.',
	ten = 'VOLUNTEERING TASMANIA ANNUAL REPORTA5 PERFECT BOUND BOOKLET<br>Printed by Print Mail Logistics.';
	
	var titles = ['',one,two,three,four,five,six,seven,eight,nine,ten];

	var i = 1;
	
	$('.folio').append("<img class='bgImg' src='images/bg1.jpg'>");
	$('.desc').html(titles[1]);
	
	function right(){
		if(i > 9) {i = 0;}	
		i++;
		$('.folio').find('.bgImg').attr('src','images/bg'+i+'.jpg');	
		$('.desc').html(titles[i]);
	}//right
	
	function left(){
		if(i < 2) {i = 11;}
		i--;
		$('.folio').find('.bgImg').attr('src','images/bg'+i+'.jpg');
		$('.desc').html(titles[i]);
	}//right
	
	
	$('.right_arrow').click(function(){
		right();	
	});
	$('.left_arrow').click(function(){
		left();	
	});
}//bg
bg();



	
});