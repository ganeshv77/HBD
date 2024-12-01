$(document).ready(function() {
    $('.loading').fadeOut('slow');
    $('.container').fadeIn('slow');
});
$(document).ready(function(){
	var vw;
	$(window).resize(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
		$('#b11').animate({top:100, left: vw-150},400);
		$('#b22').animate({top:100, left: vw-100},400);
		$('#b33').animate({top:100, left: vw-50},400);
		$('#b44').animate({top:240, left: vw-150},500);
		$('#b55').animate({top:240, left: vw-100},500);
		$('#b66').animate({top:240, left: vw-50},500);
		$('#b77').animate({top:240, left: vw+50},500);
		$('#b88').animate({top:240, left: vw+100},500);
		$('#b99').animate({top:240, left: vw+150},500);
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass('bulb-glow-yellow bulb-glow-red bulb-glow-blue bulb-glow-green bulb-glow-pink bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(50).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass('bulb-glow-yellow-after bulb-glow-red-after bulb-glow-blue-after bulb-glow-green-after bulb-glow-pink-after bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopAnimation(elementId) {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$(elementId).animate({left:randleft,bottom:randtop},10000,function(){
			loopAnimation(elementId);
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopAnimation('#b1');
		loopAnimation('#b2');
		loopAnimation('#b3');
		loopAnimation('#b4');
		loopAnimation('#b5');
		loopAnimation('#b6');
		loopAnimation('#b7');
		loopAnimation('#b8');
		loopAnimation('#b9');
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});	
	$('#wish_message').click(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#8,#9').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b11').animate({top:100, left: vw-100},500);
		$('#b22').animate({top:100, left: vw-100},500);
		$('#b33').animate({top:100, left: vw-100},500);
		$('#b44').animate({top:100, left: vw-100},500);
		$('#b55').animate({top:100, left: vw-50},500);
		$('#b66').animate({top:100, left: vw+50},500);
		$('#b77').animate({top:100, left: vw+50},500);
		$('#b88').animate({top:100, left: vw+100},500);
		$('#b99').animate({top:100, left: vw+100},500);
		$('#b1010').animate({top:100, left: vw+100},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
			}
			else{
				msgLoop(i);
			}			
		});
		}
		msgLoop(0);
	});
});
